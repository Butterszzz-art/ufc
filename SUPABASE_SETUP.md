# Supabase setup for UFC Stream

This project now includes a Supabase-backed version for **login** and **fight stream events**.

## 1. Create a Supabase project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Open **Project Settings → API**
4. Copy:
   - Project URL → `SUPABASE_URL`
   - anon public key → `SUPABASE_ANON_KEY`

## 2. Configure `.env`

Add these to your existing `.env` file:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

See `env.supabase.example` for a template.

## 3. Run the database schema

1. Open **SQL Editor** in Supabase
2. Paste and run everything in `supabase/schema.sql`

This creates:
- `profiles` table for user roles
- `events` table for fight streams
- `fight-videos` storage bucket for uploaded videos
- Row Level Security policies

## 4. Install dependencies

```bash
cd ~/Documents/ufc
cp package.supabase.json package.json
npm install
```

## 5. Switch the app to Supabase files

Because macOS may block direct edits to existing files, use these new entry files:

```bash
cp index.supabase.html index.html
```

The Supabase app already loads:
- `server.supabase.js`
- `src/app.supabase.js`
- `src/supabase-client.js`

## 6. Start the app

```bash
npm start
```

Open [http://localhost:4173](http://localhost:4173)

## 7. Create your admin account

1. Open **Profile** or **Admin**
2. Create an account with email + password
3. In Supabase SQL Editor, promote your account:

```sql
update public.profiles
set role = 'admin'
where email = 'you@example.com';
```

## 8. Publish a fight stream

1. Sign in on the **Admin** tab
2. Fill in event details
3. Upload a fight video or paste a stream URL
4. Set status to **Live**
5. Signed-in users can watch on the **Stream** tab

## What changed

| Feature | Before | Now |
|---|---|---|
| Login | Local admin JWT + MongoDB | Supabase Auth |
| Events | MongoDB via Express API | Supabase Postgres |
| Video uploads | Local `/uploads` folder | Supabase Storage |
| Stream access | Open | Requires sign-in |

## Troubleshooting

- **Supabase is not configured**: add keys to `.env` and restart `npm start`
- **Admin access required**: run the SQL update to set your profile role to `admin`
- **Could not load shared events**: confirm `supabase/schema.sql` ran successfully
- **Video won't play**: confirm the `fight-videos` bucket exists and is public
