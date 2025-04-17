-- Add foreign key constraint to users table
ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE SET NULL; 