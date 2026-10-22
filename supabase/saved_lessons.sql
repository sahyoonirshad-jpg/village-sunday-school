-- Saved lessons: one row per lesson a teacher saves. Run once in Supabase → SQL Editor.
create table if not exists public.saved_lessons (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lesson jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists saved_lessons_user_created on public.saved_lessons (user_id, created_at desc);

-- Row level security: with it on and no policies, every query returns nothing.
-- These policies let each signed-in teacher reach only their own rows.
alter table public.saved_lessons enable row level security;

create policy "Teachers can read their own lessons"
  on public.saved_lessons for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Teachers can add their own lessons"
  on public.saved_lessons for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Teachers can change their own lessons"
  on public.saved_lessons for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Teachers can delete their own lessons"
  on public.saved_lessons for delete to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.saved_lessons to authenticated;
