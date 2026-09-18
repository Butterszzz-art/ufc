# Deploying UFC Stream

This document summarizes easy ways to run the app publicly: Render, Vercel, or Docker (self-host).

Required environment variables (set these in the host):
- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_ANON_KEY` — your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — optional for server-side upserts
- `SPORTSDATA_MMA_API_KEY` — SportsData.io MMA key used by `/api/mma/fighters`
- `CITO_API_KEY` — Cito UFC key used for fighter/player images
- `ADMIN_EMAILS` — comma-separated admin emails (default `adminsaab@ufc.com`)
- `PORT` — optional (default 4173)

Local quick test

1. Copy the example env:

```bash
cp env.supabase.example .env
# edit .env and add real values
npm ci
npm start
```

Open http://localhost:4173 to verify the site and `/api/health` for server health.

Deploy to Render (recommended simple option)

1. Push this repo to GitHub.
2. Create a new Web Service in Render using the `render.yaml` blueprint already included.
3. Set the environment variables `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SPORTSDATA_MMA_API_KEY`, `CITO_API_KEY`, and `ADMIN_EMAILS` (and `MONGODB_URI` if used).
4. Render will run `npm start` per `render.yaml`.

Deploy to Vercel

1. Import the repo in Vercel.
2. Set Environment Variables in the Vercel dashboard matching the list above.
3. Vercel will use `vercel.json` — the server is exported as a Node server and static files are served. Ensure `VERCEL=1` is set by Vercel automatically.

Docker (self-host)

1. Build and run locally:

```bash
docker build -t ufc-stream:latest .
docker run -e SUPABASE_URL=... -e SUPABASE_ANON_KEY=... -p 4173:4173 ufc-stream:latest
```

Notes
- The server writes a dynamic `/config.js` endpoint from environment variables, so don't commit secrets into code.
- If you plan to serve large video files, use a CDN or video host — this app only references stream URLs.
