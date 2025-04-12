-- Create posts schema and related tables

-- Create posts table
create table public.posts (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    content text,
    user_id uuid not null references users(id) on delete cascade,
    team_id uuid references teams(id) on delete cascade,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.posts enable row level security;

-- Create updated_at trigger
create trigger posts_updated_at
    before update on posts
    for each row
    execute function update_updated_at();

-- Create indexes
create index idx_posts_user_id on posts(user_id);
create index idx_posts_team_id on posts(team_id);
create index idx_posts_created_at on posts(created_at desc);

-- Create RLS policies for posts

-- Select policies
create policy "Posts are viewable by team members"
    on posts
    for select
    to authenticated
    using (
        team_id is null
        or exists (
            select 1 from team_members
            where team_members.team_id = posts.team_id
            and team_members.user_id = auth.uid()
        )
    );

-- Insert policies
create policy "Users can create posts in their teams"
    on posts
    for insert
    to authenticated
    with check (
        team_id is null
        or exists (
            select 1 from team_members
            where team_members.team_id = posts.team_id
            and team_members.user_id = auth.uid()
        )
    );

-- Update policies
create policy "Users can update their own posts"
    on posts
    for update
    to authenticated
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

-- Delete policies
create policy "Users can delete their own posts"
    on posts
    for delete
    to authenticated
    using (auth.uid() = user_id); 