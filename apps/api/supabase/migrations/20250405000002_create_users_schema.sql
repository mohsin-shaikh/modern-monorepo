-- Create users schema and related tables

-- Create users table with enhanced profile information
create table public.users (
    id uuid primary key,
    email text unique not null,
    full_name text,
    avatar_url text,
    team_id uuid,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now(),
    constraint fk_auth_user foreign key (id) references auth.users(id) on delete cascade
);

-- Enable RLS
alter table public.users enable row level security;

-- Create updated_at trigger
create trigger users_updated_at
    before update on public.users
    for each row
    execute function update_updated_at();

-- Create RLS policies for users table
create policy "Users can read their own profile"
    on public.users
    for select
    using (auth.uid() = id);

create policy "Users can update their own profile"
    on public.users
    for update
    using (auth.uid() = id)
    with check (auth.uid() = id);

-- Create indexes
create index idx_users_email on users(email);
create index idx_users_team_id on users(team_id); 