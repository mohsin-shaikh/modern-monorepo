-- Create users table
CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" "uuid" NOT NULL,
    "full_name" "text",
    "avatar_url" "text",
    "email" "text",
    "team_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "locale" "text" DEFAULT 'en'::"text",
    "week_starts_on_monday" boolean DEFAULT false
);

ALTER TABLE "public"."users" OWNER TO "postgres";

-- Add primary key constraint
ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

-- Add foreign key constraints
ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;

-- Enable RLS
ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can insert their own profile." ON "public"."users" FOR INSERT WITH CHECK (("auth"."uid"() = "id"));

CREATE POLICY "Users can select their own profile." ON "public"."users" FOR SELECT USING (("auth"."uid"() = "id"));

CREATE POLICY "Users can update own profile." ON "public"."users" FOR UPDATE USING (("auth"."uid"() = "id"));

-- Grant permissions
GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role"; 