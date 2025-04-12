-- Create teams schema and related tables/functions

-- Create teams table
create table public.teams (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    max_members int not null default 10 check (max_members > 0),
    avatar_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Create team_members table
create table public.team_members (
    team_id uuid not null references teams(id) on delete cascade,
    user_id uuid not null references users(id) on delete cascade,
    role text not null check (role in ('owner', 'admin', 'member')),
    created_at timestamptz not null default now(),
    primary key (team_id, user_id)
);

-- Create team_invitations table
create table public.team_invitations (
    id uuid primary key default gen_random_uuid(),
    team_id uuid not null references teams(id) on delete cascade,
    inviter_id uuid not null references users(id) on delete cascade,
    invitee_email text not null,
    role text not null check (role in ('admin', 'member')),
    status text not null check (status in ('pending', 'accepted', 'rejected', 'expired')) default 'pending',
    expires_at timestamptz not null default (now() + interval '7 days'),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Create indexes
create index idx_teams_name on teams(name);
create index idx_team_members_user_id on team_members(user_id);
create index idx_team_members_team_id on team_members(team_id);
create index idx_team_invitations_team_id on team_invitations(team_id);
create index idx_team_invitations_inviter_id on team_invitations(inviter_id);
create index idx_team_invitations_invitee_email on team_invitations(invitee_email);
create index idx_team_invitations_status on team_invitations(status);
create index idx_team_invitations_expires_at on team_invitations(expires_at);

-- Enable RLS
alter table public.teams enable row level security;
alter table public.team_members enable row level security;
alter table public.team_invitations enable row level security;

-- Create helper functions
create or replace function public.get_user_team_roles(p_user_id uuid)
returns table (team_id uuid, role text)
language sql
security definer
set search_path = public
as $$
    select team_id, role
    from team_members
    where user_id = p_user_id;
$$;

create or replace function public.check_user_team_role(p_user_id uuid, p_team_id uuid, p_roles text[])
returns boolean
language sql
security definer
set search_path = public
as $$
    select exists (
        select 1
        from team_members
        where user_id = p_user_id
        and team_id = p_team_id
        and role = any(p_roles)
    );
$$;

-- Create updated_at triggers
create trigger teams_updated_at
    before update on teams
    for each row
    execute function update_updated_at();

create trigger team_invitations_updated_at
    before update on team_invitations
    for each row
    execute function update_updated_at();

-- Create RLS policies for teams

-- Select policies
create policy "Teams are viewable by team members"
    on teams
    for select
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = id
            and team_members.user_id = auth.uid()
        )
    );

-- Insert policies
create policy "Teams can be created by authenticated users"
    on teams
    for insert
    to authenticated
    with check (true);

-- Update policies
create policy "Teams can be updated by team owners and admins"
    on teams
    for update
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = id
            and team_members.user_id = auth.uid()
            and team_members.role in ('owner', 'admin')
        )
    );

-- Delete policies
create policy "Teams can be deleted by team owners"
    on teams
    for delete
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = id
            and team_members.user_id = auth.uid()
            and team_members.role = 'owner'
        )
    );

-- Create RLS policies for team_members

-- Base policy for team member access
create policy "Team members base access"
    on team_members
    for select
    to authenticated
    using (
        -- Users can see their own memberships
        user_id = auth.uid()
        or
        -- Users can see memberships of teams they are a member of
        team_id in (
            select tm.team_id 
            from team_members tm 
            where tm.user_id = auth.uid()
        )
    );

-- Insert policy
create policy "Team members can be added by team owners and admins"
    on team_members
    for insert
    to authenticated
    with check (
        -- Only team owners and admins can add members
        exists (
            select 1 from team_members tm
            where tm.team_id = team_id
            and tm.user_id = auth.uid()
            and tm.role in ('owner', 'admin')
        )
    );

-- Update policy
create policy "Team members can be updated by team owners and admins"
    on team_members
    for update
    to authenticated
    using (
        exists (
            select 1 from team_members tm
            where tm.team_id = team_id
            and tm.user_id = auth.uid()
            and tm.role in ('owner', 'admin')
        )
    );

-- Delete policy
create policy "Team members can be removed by owners, admins, or themselves"
    on team_members
    for delete
    to authenticated
    using (
        -- Team owners and admins can remove members
        exists (
            select 1 from team_members tm
            where tm.team_id = team_id
            and tm.user_id = auth.uid()
            and tm.role in ('owner', 'admin')
        )
        or
        -- Users can remove themselves
        user_id = auth.uid()
    );

-- Create RLS policies for team_invitations

-- Select policies
create policy "Team invitations are viewable by team members and invitee"
    on team_invitations
    for select
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = team_invitations.team_id
            and team_members.user_id = auth.uid()
        )
        or
        auth.email() = invitee_email
    );

-- Insert policies
create policy "Team invitations can be created by team owners and admins"
    on team_invitations
    for insert
    to authenticated
    with check (
        exists (
            select 1 from team_members
            where team_members.team_id = team_id
            and team_members.user_id = auth.uid()
            and team_members.role in ('owner', 'admin')
        )
    );

-- Update policies
create policy "Team invitations can be updated by team owners, admins, or invitee"
    on team_invitations
    for update
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = team_invitations.team_id
            and team_members.user_id = auth.uid()
            and team_members.role in ('owner', 'admin')
        )
        or
        auth.email() = invitee_email
    );

-- Delete policies
create policy "Team invitations can be deleted by team owners and admins"
    on team_invitations
    for delete
    to authenticated
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = team_invitations.team_id
            and team_members.user_id = auth.uid()
            and team_members.role in ('owner', 'admin')
        )
    );

-- Add constraint to ensure at least one owner per team
create or replace function public.ensure_team_owner()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    if old.role = 'owner' and not exists (
        select 1 from team_members
        where team_id = old.team_id
        and role = 'owner'
        and user_id != old.user_id
    ) then
        raise exception 'Cannot remove or update the last owner of a team';
    end if;
    return new;
end;
$$;

create trigger ensure_team_owner_trigger
    before update or delete on team_members
    for each row
    when (old.role = 'owner')
    execute function ensure_team_owner(); 