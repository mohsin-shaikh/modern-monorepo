-- Migration to fix team owner constraint
-- Purpose: Replace the problematic check constraint with a unique partial index
-- This ensures only one owner per team without using subqueries in check constraints
-- which are not supported in PostgreSQL

-- Drop the existing check constraint
alter table team_members
drop constraint if exists check_owner_exists;

-- Create a unique partial index to ensure single owner per team
-- This is a more efficient way to enforce the constraint and is fully supported by PostgreSQL
create unique index if not exists idx_single_team_owner
on team_members (team_id)
where role = 'owner';

-- Add comment explaining the constraint
comment on index idx_single_team_owner is 'Ensures there can only be one owner per team'; 