-- Create private schema
CREATE SCHEMA IF NOT EXISTS "private";

-- Create get_teams_for_authenticated_user function
CREATE OR REPLACE FUNCTION "private"."get_teams_for_authenticated_user"() RETURNS SETOF "uuid"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
  -- Return empty set if table doesn't exist yet
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users_on_team') THEN
    RETURN;
  END IF;
  
  RETURN QUERY SELECT team_id FROM users_on_team WHERE user_id = auth.uid();
END;
$$;

-- Create get_invites_for_authenticated_user function
CREATE OR REPLACE FUNCTION "private"."get_invites_for_authenticated_user"() RETURNS SETOF "uuid"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
  -- Return empty set if table doesn't exist yet
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'user_invites') THEN
    RETURN;
  END IF;
  
  RETURN QUERY SELECT team_id FROM user_invites WHERE email = auth.jwt() ->> 'email';
END;
$$;

-- Grant permissions
GRANT ALL ON FUNCTION "private"."get_teams_for_authenticated_user"() TO "anon";
GRANT ALL ON FUNCTION "private"."get_teams_for_authenticated_user"() TO "authenticated";
GRANT ALL ON FUNCTION "private"."get_teams_for_authenticated_user"() TO "service_role";

GRANT ALL ON FUNCTION "private"."get_invites_for_authenticated_user"() TO "anon";
GRANT ALL ON FUNCTION "private"."get_invites_for_authenticated_user"() TO "authenticated";
GRANT ALL ON FUNCTION "private"."get_invites_for_authenticated_user"() TO "service_role"; 