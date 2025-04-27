alter table "public"."users" add column "time_format" numeric default '24'::numeric;

set check_function_bodies = off;
