-- Add team visibility and metadata columns
alter table teams
add column visibility text not null default 'private' check (visibility in ('private', 'public')),
add column avatar_url text,
add column max_members integer not null default 50;

-- Create team invitations table
create table team_invitations (
    id uuid primary key default gen_random_uuid(),
    team_id uuid not null references teams(id) on delete cascade,
    inviter_id uuid not null references users(id) on delete cascade,
    invitee_email text not null,
    role text not null check (role in ('admin', 'member')),
    status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected')),
    created_at timestamptz not null default now(),
    expires_at timestamptz not null default (now() + interval '7 days')
);

-- Create team activity logs table
create table team_activity_logs (
    id uuid primary key default gen_random_uuid(),
    team_id uuid not null references teams(id) on delete cascade,
    actor_id uuid not null references users(id) on delete cascade,
    action text not null,
    target_type text not null,
    target_id uuid not null,
    metadata jsonb,
    created_at timestamptz not null default now()
);

-- Enable RLS
alter table team_invitations enable row level security;
alter table team_activity_logs enable row level security;

-- Create indexes
create index idx_team_invitations_team_id on team_invitations(team_id);
create index idx_team_invitations_invitee_email on team_invitations(invitee_email);
create index idx_team_activity_logs_team_id on team_activity_logs(team_id);
create index idx_team_activity_logs_actor_id on team_activity_logs(actor_id);

-- Update team_members table to add constraints
-- Using a unique partial index to ensure only one owner per team
-- This is more efficient than a check constraint and is fully supported by PostgreSQL
create unique index idx_single_team_owner
on team_members (team_id)
where role = 'owner';

-- Create function to validate team member operations
create or replace function check_team_member_operation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
    actor_role text;
    target_role text;
begin
    -- Get the role of the user performing the action
    select role into actor_role
    from team_members
    where team_id = new.team_id and user_id = auth.uid();
    
    -- For updates, get the current role of the target user
    if tg_op = 'UPDATE' then
        select role into target_role
        from team_members
        where team_id = new.team_id and user_id = new.user_id;
    end if;

    -- Validate operations based on roles
    if tg_op = 'DELETE' then
        -- Owner cannot leave team
        if old.role = 'owner' and old.user_id = auth.uid() then
            raise exception 'Team owner cannot leave the team';
        end if;
        
        -- Admin cannot remove owner
        if old.role = 'owner' and actor_role = 'admin' then
            raise exception 'Admins cannot remove team owners';
        end if;
        
        -- Only owner/admin can remove others
        if actor_role not in ('owner', 'admin') and old.user_id != auth.uid() then
            raise exception 'Only owners and admins can remove team members';
        end if;
    elsif tg_op = 'UPDATE' then
        -- Only owner can change roles to/from owner
        if (new.role = 'owner' or target_role = 'owner') and actor_role != 'owner' then
            raise exception 'Only owners can modify owner role';
        end if;
        
        -- Only owner/admin can change other roles
        if actor_role not in ('owner', 'admin') then
            raise exception 'Only owners and admins can modify roles';
        end if;
    end if;
    
    return new;
end;
$$;

-- Create triggers for team member operations
create trigger check_team_member_operation_trigger
    before update or delete on team_members
    for each row
    execute function check_team_member_operation();

-- Create function to log team activity
create or replace function log_team_activity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into team_activity_logs (
        team_id,
        actor_id,
        action,
        target_type,
        target_id,
        metadata
    ) values (
        case
            when tg_op = 'DELETE' then old.team_id
            else new.team_id
        end,
        auth.uid(),
        tg_op,
        tg_table_name,
        case
            when tg_op = 'DELETE' then old.user_id
            else new.user_id
        end,
        case
            when tg_op = 'UPDATE' then
                jsonb_build_object(
                    'old_role', old.role,
                    'new_role', new.role
                )
            else '{}'::jsonb
        end
    );
    return coalesce(new, old);
end;
$$;

-- Create trigger for logging team activity
create trigger log_team_activity_trigger
    after insert or update or delete on team_members
    for each row
    execute function log_team_activity();

-- Create policies for team_invitations
create policy "Team invitations are viewable by team members and invitee"
on team_invitations
for select
to authenticated
using (
    auth.uid() in (
        select user_id from team_members where team_id = team_invitations.team_id
    ) or
    auth.jwt() ->> 'email' = invitee_email
);

create policy "Team invitations can be created by team admins and owners"
on team_invitations
for insert
to authenticated
with check (
    auth.uid() in (
        select user_id
        from team_members
        where team_id = team_invitations.team_id
        and role in ('owner', 'admin')
    )
);

create policy "Team invitations can be updated by team admins, owners, and invitee"
on team_invitations
for update
to authenticated
using (
    auth.uid() in (
        select user_id
        from team_members
        where team_id = team_invitations.team_id
        and role in ('owner', 'admin')
    ) or
    auth.jwt() ->> 'email' = invitee_email
)
with check (
    auth.uid() in (
        select user_id
        from team_members
        where team_id = team_invitations.team_id
        and role in ('owner', 'admin')
    ) or
    auth.jwt() ->> 'email' = invitee_email
);

-- Create policies for team_activity_logs
create policy "Team activity logs are viewable by team members"
on team_activity_logs
for select
to authenticated
using (
    auth.uid() in (
        select user_id from team_members where team_id = team_activity_logs.team_id
    )
);

-- Function to handle team invitation acceptance
create or replace function accept_team_invitation(invitation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
    v_team_id uuid;
    v_role text;
    v_member_count int;
    v_max_members int;
begin
    -- Get invitation details
    select team_id, role into v_team_id, v_role
    from team_invitations
    where id = invitation_id
    and invitee_email = auth.jwt() ->> 'email'
    and status = 'pending'
    and expires_at > now();

    if not found then
        raise exception 'Invalid or expired invitation';
    end if;

    -- Check team member limit
    select count(*), max_members into v_member_count, v_max_members
    from team_members tm
    join teams t on t.id = tm.team_id
    where tm.team_id = v_team_id
    group by t.max_members;

    if v_member_count >= v_max_members then
        raise exception 'Team has reached maximum member limit';
    end if;

    -- Add member to team
    insert into team_members (team_id, user_id, role)
    values (v_team_id, auth.uid(), v_role);

    -- Update invitation status
    update team_invitations
    set status = 'accepted'
    where id = invitation_id;
end;
$$;