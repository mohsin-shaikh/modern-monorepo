-- Create utility functions used across the database

-- Function to automatically update the updated_at timestamp
create or replace function public.update_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql security definer;

-- Function to automatically create auth user triggers
create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.users (id, email, avatar_url)
    values (new.id, new.email, new.raw_user_meta_data->>'avatar_url');
    return new;
end;
$$ language plpgsql security definer;

-- Create the trigger on auth.users
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user(); 