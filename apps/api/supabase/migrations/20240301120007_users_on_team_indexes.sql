-- Create additional indexes for users_on_team table
CREATE INDEX IF NOT EXISTS "users_on_team_user_id_idx" ON "public"."users_on_team" USING "btree" ("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "users_on_team_user_id_team_id_idx" ON "public"."users_on_team" USING "btree" ("user_id", "team_id"); 