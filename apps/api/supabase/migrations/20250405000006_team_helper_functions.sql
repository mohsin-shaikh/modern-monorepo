-- Function to create a new team
create or replace function create_team(
    team_name text,
    team_description text default null,
    team_visibility text default 'private',
    team_avatar_url text default null,
    team_max_members integer default 50
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
    v_team_id uuid;
begin
    -- Create team
    insert into teams (name, description, visibility, avatar_url, max_members)
    values (team_name, team_description, team_visibility, team_avatar_url, team_max_members)
    returning id into v_team_id;

    -- Add creator as owner
    insert into team_members (team_id, user_id, role)
    values (v_team_id, auth.uid(), 'owner');

    return v_team_id;
end;
$$;

-- Function to invite multiple members to a team
create or replace function bulk_invite_team_members(
    p_team_id uuid,
    p_emails text[],
    p_role text default 'member'
)
returns setof team_invitations
language plpgsql
security definer
set search_path = public
as $$
declare
    v_email text;
    v_invitation team_invitations;
begin
    -- Check if user has permission to invite
    if not exists (
        select 1
        from team_members
        where team_id = p_team_id
        and user_id = auth.uid()
        and role in ('owner', 'admin')
    ) then
        raise exception 'Only team owners and admins can invite members';
    end if;

    -- Check team member limit
    if (
        select count(*) from team_members where team_id = p_team_id
    ) + array_length(p_emails, 1) > (
        select max_members from teams where id = p_team_id
    ) then
        raise exception 'Adding these members would exceed team member limit';
    end if;

    -- Create invitations
    foreach v_email in array p_emails
    loop
        -- Skip if user is already a member
        if not exists (
            select 1
            from team_members tm
            join users u on u.id = tm.user_id
            where tm.team_id = p_team_id and u.email = v_email
        ) then
            insert into team_invitations (
                team_id,
                inviter_id,
                invitee_email,
                role
            )
            values (
                p_team_id,
                auth.uid(),
                v_email,
                p_role
            )
            returning * into v_invitation;

            return next v_invitation;
        end if;
    end loop;
end;
$$;

-- Function to get team members with their details
create or replace function get_team_members(p_team_id uuid)
returns table (
    user_id uuid,
    email text,
    full_name text,
    avatar_url text,
    role text,
    joined_at timestamptz
)
language sql
security definer
set search_path = public
as $$
    select
        u.id as user_id,
        u.email,
        u.full_name,
        u.avatar_url,
        tm.role,
        tm.created_at as joined_at
    from team_members tm
    join users u on u.id = tm.user_id
    where tm.team_id = p_team_id
    order by
        case tm.role
            when 'owner' then 1
            when 'admin' then 2
            else 3
        end,
        tm.created_at;
$$;

-- Function to get user's teams
create or replace function get_user_teams(p_user_id uuid default null)
returns table (
    team_id uuid,
    team_name text,
    team_description text,
    team_visibility text,
    team_avatar_url text,
    member_role text,
    member_count bigint
)
language sql
security definer
set search_path = public
as $$
    select
        t.id as team_id,
        t.name as team_name,
        t.description as team_description,
        t.visibility as team_visibility,
        t.avatar_url as team_avatar_url,
        tm.role as member_role,
        (
            select count(*)
            from team_members
            where team_id = t.id
        ) as member_count
    from teams t
    join team_members tm on tm.team_id = t.id
    where tm.user_id = coalesce(p_user_id, auth.uid())
    order by t.created_at desc;
$$;

-- Function to transfer team ownership
create or replace function transfer_team_ownership(
    p_team_id uuid,
    p_new_owner_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
    v_current_owner_id uuid;
begin
    -- Get current owner
    select user_id into v_current_owner_id
    from team_members
    where team_id = p_team_id and role = 'owner';

    -- Check if caller is the owner
    if v_current_owner_id != auth.uid() then
        raise exception 'Only the team owner can transfer ownership';
    end if;

    -- Check if new owner is a team member
    if not exists (
        select 1 from team_members
        where team_id = p_team_id and user_id = p_new_owner_id
    ) then
        raise exception 'New owner must be a team member';
    end if;

    -- Perform ownership transfer
    update team_members
    set role = 'admin'
    where team_id = p_team_id and user_id = v_current_owner_id;

    update team_members
    set role = 'owner'
    where team_id = p_team_id and user_id = p_new_owner_id;
end;
$$;