-- Create teams table
CREATE TABLE IF NOT EXISTS "public"."teams" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "logo_url" "text",
    "inbox_id" "text",
    "email" "text",
    "inbox_email" "text",
    "inbox_forwarding" boolean DEFAULT true
);

ALTER TABLE "public"."teams" OWNER TO "postgres";

-- Add primary key constraint
ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_pkey" PRIMARY KEY ("id");

-- Add unique constraint
ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_inbox_id_key" UNIQUE ("inbox_id");

-- Enable RLS
ALTER TABLE "public"."teams" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable insert for authenticated users only" ON "public"."teams" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Invited users can select team if they are invited." ON "public"."teams" FOR SELECT USING (("id" IN ( SELECT "private"."get_invites_for_authenticated_user"() AS "get_invites_for_authenticated_user")));

CREATE POLICY "Teams can be deleted by a member of the team" ON "public"."teams" FOR DELETE USING (("id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "Teams can be selected by a member of the team" ON "public"."teams" FOR SELECT USING (("id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

CREATE POLICY "Teams can be updated by a member of the team" ON "public"."teams" FOR UPDATE USING (("id" IN ( SELECT "private"."get_teams_for_authenticated_user"() AS "get_teams_for_authenticated_user")));

-- Grant permissions
GRANT ALL ON TABLE "public"."teams" TO "anon";
GRANT ALL ON TABLE "public"."teams" TO "authenticated";
GRANT ALL ON TABLE "public"."teams" TO "service_role"; 