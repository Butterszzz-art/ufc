# UFC Stream

Premium mobile-first UFC streaming app prototype with a dark sports UI, user event discovery, embedded stream playback, and an administrator dashboard for publishing live events.

## Shared MongoDB backend
This app now stores events in MongoDB through a Node/Express API. When you deploy one copy of the app with one MongoDB database, every visitor sees the same published events.

1. Create a MongoDB Atlas database and copy its connection string.
2. Copy `.env.example` to `.env`, then set all four values. `ADMIN_EMAIL` and `ADMIN_PASSWORD` create the first administrator only when that email does not already exist.
3. Install and start:

```bash
npm install
npm start
```

Open `http://127.0.0.1:4173`. For hosting, set the same environment variables in your host (Render, Railway, Fly.io, etc.) and allow that host's IP/network access in MongoDB Atlas.

## Deploy publicly with Render

1. Push this folder to a GitHub repository.
2. In [Render](https://render.com), select **New +** → **Blueprint**, then select that repository. Render will use `render.yaml` in this project.
3. Enter `MONGODB_URI`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` when Render asks for environment variables. Render generates `JWT_SECRET` automatically.
4. In MongoDB Atlas, add the deployed service's outbound IP/network access rule (or configure the appropriate secure network access for your Render plan).
5. Deploy. Render will give you a public `https://...onrender.com` URL.

## Administrator login

- Email and password come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` in your environment.

Events live in MongoDB; login is verified on the server and the browser stores only a short-lived login token. In Admin, setting an event to `Live` immediately makes it public to all visitors using the deployed app.

## Implemented

- Mobile-first dark UI using `#0A0A0A`, UFC red `#E10600`, white typography, animated live badges, responsive event cards, and full-screen-ready player controls.
- Home, Live Stream, Upcoming Events, Profile, and Admin screens.
- Server-verified administrator login, logout, event create/edit/delete, thumbnail URL support, stream URL support, event status management, and live publishing behavior.
- MongoDB-backed public event API, so every visitor sees the same events; HLS/MP4-ready stream URL field, MP4 playback, quality selector UI, share action, and local favorites/reminders.
- Data models matching Admin, Events, and Users collections.

Only use authorized streams and storage objects in production. This backend stores event metadata and stream URLs; it does not host or relay video files. Use a proper video host/CDN for live video.
