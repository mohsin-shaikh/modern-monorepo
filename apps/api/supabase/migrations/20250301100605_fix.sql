-- =============================================================================
-- Functions
-- =============================================================================
-- handle_new_user v1
-- CREATE OR REPLACE FUNCTION "public"."handle_new_user"() 
-- RETURNS "trigger" 
-- LANGUAGE "plpgsql" 
-- SECURITY DEFINER
-- SET "search_path" TO 'public' 
-- AS $$
-- DECLARE 
--     new_team_id uuid;
-- BEGIN
--     -- insert into public.users
--     INSERT INTO public.users (id, full_name, avatar_url, email)
--     VALUES
--     (
--         new.id,
--         new.raw_user_meta_data ->> 'full_name',
--         new.raw_user_meta_data ->> 'avatar_url',
--         new.email
--     );

--     -- insert into public.teams and return the new_team_id
--     INSERT INTO public.teams (name, email, inbox_email)
--     VALUES
--     (
--         new.raw_user_meta_data ->> 'full_name',
--         new.email,
--         new.email
--     ) 
--     RETURNING id INTO new_team_id;

--     -- capture the team_id here
--     -- insert into public.users_on_team using the captured team_id
--     INSERT INTO public.users_on_team (user_id, team_id, role)
--     VALUES
--     (
--         new.id,
--         new_team_id,
--         'owner'
--     );

--     -- update the team_id in public.users
--     UPDATE public.users
--     SET team_id = new_team_id
--     WHERE id = new.id;

--     RETURN new;
-- END;
-- $$;


-- =============================================================================
-- Trigger
-- =============================================================================

-- Drop user_registered trigger
-- DROP TRIGGER IF EXISTS user_registered ON auth.users;


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
create type team_plan as enum ('trial', 'pro', 'enterprise');

-- Add plan column to teams table with default value
alter table public.teams 
    add column plan team_plan not null default 'trial';
