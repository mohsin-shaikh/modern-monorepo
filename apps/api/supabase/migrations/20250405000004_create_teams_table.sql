-- create teams table
create table teams (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- create team_members table for many-to-many relationship between users and teams
create table team_members (
    team_id uuid not null references teams(id) on delete cascade,
    user_id uuid not null references users(id) on delete cascade,
    role text not null check (role in ('owner', 'admin', 'member')),
    created_at timestamptz not null default now(),
    primary key (team_id, user_id)
);

-- create indexes for faster queries
create index idx_teams_name on teams(name);
create index idx_team_members_user_id on team_members(user_id);
create index idx_team_members_team_id on team_members(team_id);

-- enable row level security
alter table teams enable row level security;
alter table team_members enable row level security;

-- create policies for teams table
create policy "Teams are viewable by team members"
on teams
for select
to authenticated
using (
    exists (
        select 1 from team_members
        where team_members.team_id = teams.id
        and team_members.user_id = auth.uid()
    )
);

create policy "Teams can be created by authenticated users"
on teams
for insert
to authenticated
with check (true);

create policy "Teams can be updated by team owners and admins"
on teams
for update
to authenticated
using (
    exists (
        select 1 from team_members
        where team_members.team_id = teams.id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
)
with check (
    exists (
        select 1 from team_members
        where team_members.team_id = teams.id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
);

create policy "Teams can be deleted by team owners"
on teams
for delete
to authenticated
using (
    exists (
        select 1 from team_members
        where team_members.team_id = teams.id
        and team_members.user_id = auth.uid()
        and team_members.role = 'owner'
    )
);

-- create policies for team_members table
create policy "Team members are viewable by team members"
on team_members
for select
to authenticated
using (
    exists (
        select 1 from team_members tm
        where tm.team_id = team_members.team_id
        and tm.user_id = auth.uid()
    )
);

create policy "Team members can be added by team owners and admins"
on team_members
for insert
to authenticated
with check (
    exists (
        select 1 from team_members
        where team_members.team_id = team_id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
    or
    -- allow users to join teams (this can be restricted if you want invite-only teams)
    user_id = auth.uid()
);

create policy "Team members can be updated by team owners and admins"
on team_members
for update
to authenticated
using (
    exists (
        select 1 from team_members
        where team_members.team_id = team_id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
)
with check (
    exists (
        select 1 from team_members
        where team_members.team_id = team_id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
);

create policy "Team members can be removed by team owners and admins, or users can leave teams"
on team_members
for delete
to authenticated
using (
    exists (
        select 1 from team_members
        where team_members.team_id = team_members.team_id
        and team_members.user_id = auth.uid()
        and team_members.role in ('owner', 'admin')
    )
    or
    -- allow users to leave teams
    team_members.user_id = auth.uid()
);

-- create function to update updated_at timestamp
create or replace function update_updated_at_timestamp()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

-- create triggers for updated_at
create trigger update_teams_updated_at
    before update on teams
    for each row
    execute function update_updated_at_timestamp(); 