-- Create teamRoles enum type
CREATE TYPE "public"."teamRoles" AS ENUM (
    'owner',
    'admin',
    'member'
); 