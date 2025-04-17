-- Create users_on_team table
CREATE TABLE IF NOT EXISTS "public"."users_on_team" (
    "user_id" "uuid" NOT NULL,
    "team_id" "uuid" NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "role" "public"."teamRoles",
    "created_at" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."users_on_team" OWNER TO "postgres";

-- Add primary key constraint
ALTER TABLE ONLY "public"."users_on_team"
    ADD CONSTRAINT "members_pkey" PRIMARY KEY ("user_id", "team_id", "id");

-- Add foreign key constraints
ALTER TABLE ONLY "public"."users_on_team"
    ADD CONSTRAINT "users_on_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."users_on_team"
    ADD CONSTRAINT "users_on_team_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;

-- Create index
CREATE INDEX "users_on_team_team_id_idx" ON "public"."users_on_team" USING "btree" ("team_id");

-- Enable RLS
ALTER TABLE "public"."users_on_team" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable insert for authenticated users only" ON "public"."users_on_team" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."users_on_team" FOR SELECT USING (true);

CREATE POLICY "Enable updates for users on team" ON "public"."users_on_team" FOR UPDATE TO "authenticated" USING (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user"))) WITH CHECK (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "Users on team can be deleted by a member of the team" ON "public"."users_on_team" FOR DELETE USING (("team_id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

-- Grant permissions
GRANT ALL ON TABLE "public"."users_on_team" TO "anon";
GRANT ALL ON TABLE "public"."users_on_team" TO "authenticated";
GRANT ALL ON TABLE "public"."users_on_team" TO "service_role"; 