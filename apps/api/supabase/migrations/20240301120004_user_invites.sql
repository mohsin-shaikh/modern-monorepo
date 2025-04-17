-- Create user_invites table
CREATE TABLE IF NOT EXISTS "public"."user_invites" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "team_id" "uuid",
    "email" "text",
    "role" "public"."teamRoles",
    "code" "text" DEFAULT "public"."nanoid"(24),
    "invited_by" "uuid"
);

ALTER TABLE "public"."user_invites" OWNER TO "postgres";

-- Add primary key constraint
ALTER TABLE ONLY "public"."user_invites"
    ADD CONSTRAINT "user_invites_pkey" PRIMARY KEY ("id");

-- Add unique constraints
ALTER TABLE ONLY "public"."user_invites"
    ADD CONSTRAINT "unique_team_invite" UNIQUE ("email", "team_id");

ALTER TABLE ONLY "public"."user_invites"
    ADD CONSTRAINT "user_invites_code_key" UNIQUE ("code");

-- Add foreign key constraints
ALTER TABLE ONLY "public"."user_invites"
    ADD CONSTRAINT "public_user_invites_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."user_invites"
    ADD CONSTRAINT "user_invites_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id") ON DELETE CASCADE;

-- Enable RLS
ALTER TABLE "public"."user_invites" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable select for users based on email" ON "public"."user_invites" FOR SELECT USING ((("auth"."jwt"() ->> 'email'::"text") = "email"));

CREATE POLICY "User Invites can be created by a member of the team" ON "public"."user_invites" FOR INSERT WITH CHECK (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "User Invites can be deleted by a member of the team" ON "public"."user_invites" FOR DELETE USING (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "User Invites can be deleted by invited email" ON "public"."user_invites" FOR DELETE USING ((("auth"."jwt"() ->> 'email'::"text") = "email"));

CREATE POLICY "User Invites can be selected by a member of the team" ON "public"."user_invites" FOR SELECT USING (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "User Invites can be updated by a member of the team" ON "public"."user_invites" FOR UPDATE USING (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

-- Grant permissions
GRANT ALL ON TABLE "public"."user_invites" TO "anon";
GRANT ALL ON TABLE "public"."user_invites" TO "authenticated";
GRANT ALL ON TABLE "public"."user_invites" TO "service_role"; 