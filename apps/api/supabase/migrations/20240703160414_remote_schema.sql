CREATE INDEX user_invites_team_id_idx ON public.user_invites USING btree (team_id);

CREATE INDEX users_on_team_user_id_idx ON public.users_on_team USING btree (user_id);

CREATE INDEX users_team_id_idx ON public.users USING btree (team_id);

set check_function_bodies = off;
