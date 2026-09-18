-- Run once in Supabase SQL editor if admin login still shows Fan.
update public.profiles
set role = 'admin'
where lower(email) = 'adminsaab@ufc.com';
