-- =============================================================================
-- Grant
-- =============================================================================
GRANT SELECT ON "private"."current_user_teams" TO "anon";
GRANT SELECT ON "private"."current_user_teams" TO "authenticated";
GRANT SELECT ON "private"."current_user_teams" TO "service_role";

GRANT USAGE ON SCHEMA private TO "anon", "authenticated", "service_role";

-- =============================================================================
-- Description: Add plan column to teams table
-- =============================================================================

-- Create enum type for plan
create type team_plan as enum ('trial', 'pro', 'starter');

-- Add plan column to teams table with default value
alter table public.teams 
    add column plan team_plan not null default 'trial';

-- =============================================================================
-- Description: Add canceled_at column to teams table
-- Purpose: Track when a team's subscription is canceled
-- =============================================================================

alter table public.teams
    add column canceled_at timestamptz;

comment on column public.teams.canceled_at is 'Timestamp when the team subscription was canceled. Null means active subscription.'; 
