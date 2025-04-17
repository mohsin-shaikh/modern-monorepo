-- Add team-based RLS policy to users table
CREATE POLICY "Users can select users if they are in the same team" ON "public"."users" FOR SELECT TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."users_on_team"
  WHERE (("users_on_team"."user_id" = ( SELECT "auth"."uid"() AS "uid")) AND ("users_on_team"."team_id" = "users"."team_id"))))); 