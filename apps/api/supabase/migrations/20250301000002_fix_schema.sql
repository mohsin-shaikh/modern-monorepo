create or replace view "private"."current_user_teams" as  SELECT ( SELECT auth.uid() AS uid) AS user_id,
    t.team_id
   FROM users_on_team t
  WHERE (t.user_id = ( SELECT auth.uid() AS uid));

create policy "Select for current user teams"
on "public"."users_on_team"
as permissive
for select
to authenticated
using ((EXISTS ( SELECT 1
   FROM private.current_user_teams cut
  WHERE ((cut.user_id = ( SELECT auth.uid() AS uid)) AND (cut.team_id = users_on_team.team_id)))));


CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION handle_new_user();

CREATE TRIGGER user_registered AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION webhook('webhook/registered');

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_current_user_team_id()
 RETURNS uuid
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN (SELECT team_id FROM users WHERE id = (SELECT auth.uid()));
END;
$function$
;

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
