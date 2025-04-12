-- Migration to add team_id foreign key to users table
-- This needs to be done after teams table is created to avoid circular dependencies

-- Add foreign key constraint for team_id
alter table public.users
    add constraint fk_current_team
    foreign key (team_id)
    references public.teams(id)
    on delete set null;

-- Update RLS policies to allow team access
create policy "Users can read team members' profiles"
    on public.users
    for select
    using (
        exists (
            select 1 from team_members
            where team_members.team_id = users.team_id
            and team_members.user_id = auth.uid()
        )
    ); 