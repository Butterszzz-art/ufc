-- UFC Stream Supabase schema
-- Run this in the Supabase SQL editor for your project.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text default '',
  avatar_url text default '',
  role text not null default 'viewer' check (role in ('viewer', 'admin')),
  created_at timestamptz not null default now()
);

-- Avatars bucket
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

drop policy if exists "Public read avatars" on storage.objects;
create policy "Public read avatars"
  on storage.objects for select
  using ( bucket_id = 'avatars' );

drop policy if exists "Users upload avatars" on storage.objects;
create policy "Users upload avatars"
  on storage.objects for insert
  with check ( bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1] );

drop policy if exists "Users update avatars" on storage.objects;
create policy "Users update avatars"
  on storage.objects for update
  using ( bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1] );

drop policy if exists "Users delete avatars" on storage.objects;
create policy "Users delete avatars"
  on storage.objects for delete
  using ( bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1] );

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  thumbnail text not null default '',
  stream_url text not null default '',
  venue text not null,
  event_date timestamptz not null,
  status text not null default 'Upcoming' check (status in ('Upcoming', 'Live', 'Ended')),
  viewer_count integer not null default 0 check (viewer_count >= 0),
  theme text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'role', 'viewer')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists events_set_updated_at on public.events;
create trigger events_set_updated_at
  before update on public.events
  for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.events enable row level security;

drop policy if exists "Profiles are readable by owner" on public.profiles;
create policy "Profiles are readable by owner"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Profiles are insertable by owner" on public.profiles;
create policy "Profiles are insertable by owner"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Profiles are updatable by owner" on public.profiles;
create policy "Profiles are updatable by owner"
  on public.profiles for update
  using (auth.uid() = id);

drop policy if exists "Events are public" on public.events;
create policy "Events are public"
  on public.events for select
  using (true);

drop policy if exists "Admins insert events" on public.events;
create policy "Admins insert events"
  on public.events for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

drop policy if exists "Admins update events" on public.events;
create policy "Admins update events"
  on public.events for update
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

drop policy if exists "Admins delete events" on public.events;
create policy "Admins delete events"
  on public.events for delete
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

insert into storage.buckets (id, name, public)
values ('fight-videos', 'fight-videos', true)
on conflict (id) do nothing;

drop policy if exists "Public read fight videos" on storage.objects;
create policy "Public read fight videos"
  on storage.objects for select
  using (bucket_id = 'fight-videos');

drop policy if exists "Admins upload fight videos" on storage.objects;
create policy "Admins upload fight videos"
  on storage.objects for insert
  with check (
    bucket_id = 'fight-videos'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

drop policy if exists "Admins update fight videos" on storage.objects;
create policy "Admins update fight videos"
  on storage.objects for update
  using (
    bucket_id = 'fight-videos'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

drop policy if exists "Admins delete fight videos" on storage.objects;
create policy "Admins delete fight videos"
  on storage.objects for delete
  using (
    bucket_id = 'fight-videos'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Promote your account after signup:
-- update public.profiles set role = 'admin' where email = 'you@example.com';

-- RPC to get admin dashboard stats
create or replace function public.get_admin_stats()
returns jsonb
language plpgsql
security definer
as $$
declare
  active_users_count integer;
  live_events_count integer;
  total_revenue numeric;
  total_ppv_sales integer;
begin
  -- Check if the user is an admin
  if not exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  ) then
    raise exception 'Unauthorized';
  end if;

  -- Calculate active users (count of profiles)
  select count(*) into active_users_count from public.profiles;

  -- Calculate live events
  select count(*) into live_events_count from public.events where status = 'Live';

  -- Mock calculations for revenue and PPV sales based on active users
  -- In a real app, this would query a payments or subscriptions table
  total_ppv_sales := active_users_count * 12; 
  total_revenue := total_ppv_sales * 59.99;

  return json_build_object(
    'active_users', active_users_count,
    'live_events', live_events_count,
    'total_revenue', total_revenue,
    'total_ppv_sales', total_ppv_sales
  );
end;
$$;

-- RPC to get all users for admin directory
create or replace function public.get_all_users()
returns table(id uuid, email text, display_name text, role text, created_at timestamptz)
language plpgsql
security definer
as $$
begin
  -- Check if the user is an admin
  if not exists (
    select 1 from public.profiles
    where public.profiles.id = auth.uid() and public.profiles.role = 'admin'
  ) then
    raise exception 'Unauthorized';
  end if;

  return query select p.id, p.email, p.display_name, p.role, p.created_at from public.profiles p order by p.created_at desc;
end;
$$;

alter table public.events add column if not exists fight_card text not null default '';

insert into storage.buckets (id, name, public)
values ('event-thumbnails', 'event-thumbnails', true)
on conflict (id) do nothing;

drop policy if exists "Public read event-thumbnails" on storage.objects;
create policy "Public read event-thumbnails"
  on storage.objects for select
  using (bucket_id = 'event-thumbnails');

drop policy if exists "Admins manage event-thumbnails" on storage.objects;
create policy "Admins manage event-thumbnails"
  on storage.objects for all
  using (
    bucket_id = 'event-thumbnails'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );
