-- Create create_team function
CREATE OR REPLACE FUNCTION "public"."create_team"("name" character varying) RETURNS "uuid"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    new_team_id uuid;
BEGIN
    insert into teams (name) values (name) returning id into new_team_id;
    insert into users_on_team (user_id, team_id, role) values (auth.uid(), new_team_id, 'owner');
    return new_team_id;
END;
$$;

-- Create get_current_user_team_id function
CREATE OR REPLACE FUNCTION "public"."get_current_user_team_id"() RETURNS "uuid"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
DECLARE
    team_id uuid;
BEGIN
    SELECT ut.team_id INTO team_id
    FROM users_on_team ut
    WHERE ut.user_id = auth.uid()
    LIMIT 1;
    RETURN team_id;
END;
$$;

-- Grant permissions
GRANT ALL ON FUNCTION "public"."create_team"("name" character varying) TO "anon";
GRANT ALL ON FUNCTION "public"."create_team"("name" character varying) TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_team"("name" character varying) TO "service_role";

GRANT ALL ON FUNCTION "public"."get_current_user_team_id"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_current_user_team_id"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_current_user_team_id"() TO "service_role"; 