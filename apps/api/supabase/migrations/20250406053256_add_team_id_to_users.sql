-- Migration: Add team_id to users table
-- Purpose: Add team_id column to users table and set up appropriate RLS policies
-- Author: AI Assistant
-- Date: 2025-04-06

-- Add team_id column to users table
alter table users
add column team_id uuid references teams(id) on delete set null;

-- Create index for faster queries
create index idx_users_team_id on users(team_id);

-- Add comment explaining the column
comment on column users.team_id is 'The default team for the user. Can be null if user has no default team.';

-- Update RLS policies to allow team owners and admins to update team_id
-- Policy 1: Allow users to update their own team_id if they are a member of the target team
create policy "Users can update their own team_id"
on users
for update using (
    auth.uid() = id
)
with check (
    team_id is null or
    exists (
        select 1 from team_members
        where team_id = users.team_id
        and user_id = auth.uid()
    )
);

-- Create function to update user's team_id
create or replace function update_user_team_id(
    p_user_id uuid,
    p_team_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
    -- Check if the user making the request has permission
    if not exists (
        select 1 from team_members
        where team_id = p_team_id
        and user_id = auth.uid()
        and role in ('owner', 'admin')
    ) then
        raise exception 'Only team owners and admins can update user''s team_id';
    end if;

    -- Check if the target user is a member of the team
    if not exists (
        select 1 from team_members
        where team_id = p_team_id
        and user_id = p_user_id
    ) then
        raise exception 'User must be a member of the team to set it as their default team';
    end if;

    -- Update the user's team_id
    update users
    set team_id = p_team_id
    where id = p_user_id;
end;
$$; 