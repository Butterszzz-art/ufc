const PREFERENCES_KEY = "fightstream-pro-preferences-v1";
const FRONT_PAGE_IMAGE = "assets/FrontPage.png";
const LOGO_IMAGE = "assets/ufc-logo.png";

const icons = {
  home: '<svg class="icon" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  play: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7Z"/></svg>',
  calendar: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>',
  user: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  bell: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  share: '<svg class="icon" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  max: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
  plus: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  logout: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></polygon></svg>',
  heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFilled: '<svg class="icon" viewBox="0 0 24 24" fill="var(--red)"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'
};

const posterThemes = [
  "radial-gradient(circle at 75% 20%, rgba(255,255,255,.22), transparent 18rem), linear-gradient(135deg, #e10600, #181818 48%, #050505)",
  "radial-gradient(circle at 68% 30%, rgba(225,6,0,.45), transparent 14rem), linear-gradient(145deg, #242424, #050505 58%, #490300)",
  "radial-gradient(circle at 78% 14%, rgba(248,193,74,.24), transparent 12rem), linear-gradient(135deg, #0b0b0b, #2a2a2a 48%, #a10501)",
  "radial-gradient(circle at 70% 25%, rgba(255,255,255,.18), transparent 15rem), linear-gradient(135deg, #4b0502, #111 46%, #050505)"
];

const REMOVED_DEMO_TITLES = new Set([
  "UFC 318: Apex Collision",
  "Fight Night: Velocity",
  "UFC 319: Title Line"
]);

const fanWallpapers = [
  { id: "demetrious-johnson", name: "Demetrious Johnson", nickname: "Mighty Mouse", title: "Championship Glory", style: "Freestyle Wrestling, Muay Thai, BJJ", record: "34-4-1", src: "assets/fan-demetrious-johnson.png", position: "center 30%" },
  { id: "daniel-cormier", name: "Daniel Cormier", nickname: "DC", title: "Double Champion", style: "Freestyle Wrestling, Kickboxing", record: "22-3-0 (1 NC)", src: "assets/fan-daniel-cormier.png", position: "center 25%" },
  { id: "robert-whittaker", name: "Robert Whittaker", nickname: "The Reaper", title: "Middleweight Legend", style: "Karate, Defensive Wrestling", record: "26-7-0", src: "assets/fan-robert-whittaker.png", position: "center 20%" },
  { id: "khamzat-victory", name: "Khamzat Chimaev", nickname: "Borz", title: "UFC 294 Victory", style: "Freestyle Wrestling, BJJ, Sambo", record: "13-0-0", src: "assets/fan-khamzat-chimaev-victory.png", position: "center 20%" },
  { id: "khabib-vs-conor", name: "UFC 229", nickname: "The Biggest Fight", title: "Khabib vs McGregor", style: "Sambo vs Boxing", record: "Khabib 29-0 · Conor 22-6", src: "assets/fan-khabib-vs-conor.png", position: "center 35%" },
  { id: "khamzat-crouch", name: "Khamzat Chimaev", nickname: "Borz", title: "Octagon Focus", style: "Freestyle Wrestling, BJJ, Sambo", record: "13-0-0", src: "assets/fan-khamzat-chimaev-crouch.png", position: "center 15%" },
  { id: "khabib-eagle", name: "Khabib Nurmagomedov", nickname: "The Eagle", title: "Undefeated Champion", style: "Combat Sambo, Wrestling, Grappling", record: "29-0-0", src: "assets/fan-khabib-nurmagomedov.png", position: "center 25%" },
  { id: "jon-jones", name: "Jon Jones", nickname: "Bones", title: "Heavyweight King", style: "Wrestling, Muay Thai, BJJ", record: "27-1-0 (1 NC)", src: "assets/fan-jon-jones.png", position: "center 20%" },
  { id: "tom-aspinall", name: "Tom Aspinall", nickname: "The Asp", title: "Heavyweight Champion", style: "BJJ, Boxing, Wrestling", record: "15-3-0", src: "assets/fan-tom-aspinall.png", position: "center 70%" },
  { id: "islam-makhachev", name: "Islam Makhachev", nickname: "The Champion", title: "Lightweight Champion", style: "Sambo, Wrestling, Judo", record: "26-1-0", src: "assets/fan-islam-makhachev.png", position: "center 25%" }
];

const state = loadState();
let route = "home";
let activeEventId;
let authUser = null;
let userProfile = null;
let authMode = "login";
let eventsLoadInFlight = false;
let sharedEventsWarningShown = false;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PREFERENCES_KEY) || "{}");
    return {
      events: [],
      favorites: saved.favorites || [],
      reminders: saved.reminders || [],
      fanLikes: saved.fanLikes || [],
      analytics: { watchDuration: 0, engagement: 0 }
    };
  } catch {
    return { events: [], favorites: [], reminders: [], fanLikes: [], analytics: { watchDuration: 0, engagement: 0 } };
  }
}

function saveState() {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify({
    favorites: state.favorites,
    reminders: state.reminders,
    fanLikes: state.fanLikes
  }));
}

function getSupabaseClient() {
  return window.getSupabase ? window.getSupabase() : null;
}

function isSupabaseReady() {
  return window.isSupabaseConfigured ? window.isSupabaseConfigured() : false;
}

function isAdmin() {
  return userProfile?.role === "admin";
}

function mapEvent(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    thumbnail: row.thumbnail,
    streamUrl: row.stream_url,
    venue: row.venue,
    eventDate: row.event_date,
    status: row.status,
    viewerCount: row.viewer_count,
    theme: row.theme
  };
}

async function loadProfile() {
  const client = getSupabaseClient();
  if (!client || !authUser) {
    userProfile = null;
    return;
  }
  const { data, error } = await client
    .from("profiles")
    .select("id, email, display_name, role")
    .eq("id", authUser.id)
    .maybeSingle();
  if (error) {
    console.error(error);
    userProfile = null;
    return;
  }
  userProfile = data;
}

async function loadEvents() {
  if (eventsLoadInFlight) return;
  eventsLoadInFlight = true;

  const client = getSupabaseClient();
  if (!client) {
    if (!sharedEventsWarningShown) {
      sharedEventsWarningShown = true;
      toast("Service unavailable.");
    }
    eventsLoadInFlight = false;
    render();
    return;
  }

  try {
    const { data, error } = await client
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });
    if (error) throw error;
    state.events = (data || [])
      .map(mapEvent)
      .filter((event) => !REMOVED_DEMO_TITLES.has(event.title));
      
    const urlParams = new URLSearchParams(window.location.search);
    const sharedEventId = urlParams.get('event');
    if (sharedEventId && state.events.some(e => e.id === sharedEventId)) {
      activeEventId = sharedEventId;
      if (route === "home") {
        route = "stream";
      }
    } else {
      activeEventId = state.events.find((event) => event.status === "Live")?.id || state.events[0]?.id;
    }
    sharedEventsWarningShown = false;
  } catch (error) {
    if (!sharedEventsWarningShown) {
      sharedEventsWarningShown = true;
      toast(`Could not load shared events: ${error.message}`);
    }
  } finally {
    eventsLoadInFlight = false;
    render();
  }
}

function setRoute(nextRoute, eventId) {
  route = nextRoute;
  if (eventId) activeEventId = eventId;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(dateValue));
}

function countdown(dateValue) {
  const diff = new Date(dateValue).getTime() - Date.now();
  if (diff <= 0) return "Now";
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function posterStyle(event, index = 0) {
  const poster = event.thumbnail ? `url(${event.thumbnail}) center/cover` : event.theme || posterThemes[index % posterThemes.length];
  return `style="--poster:${poster}"`;
}

function eventPoster(event, index = 0) {
  return `
    <div class="poster" ${posterStyle(event, index)}>
      <div class="poster-visual"></div>
      <div class="fighter-shape"></div>
    </div>
  `;
}

function eventBadge(event) {
  if (event.status === "Live") return '<span class="badge live"><span class="pulse"></span>Live</span>';
  return `<span class="badge">${event.status}</span>`;
}

function supabaseSetupBanner() {
  if (isSupabaseReady()) return "";
  return `<div class="supabase-banner">Service unavailable. Please try again later.</div>`;
}

function topbar() {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="mark"><img src="${LOGO_IMAGE}" alt="UFC Stream logo" /></div>
      </div>
      <div class="row">
        <button class="icon-button" title="Search events" onclick="setRoute('events')">${icons.search}</button>
        <button class="icon-button" title="Notifications" onclick="toast('Push notifications are enabled for live events and reminders.')">${icons.bell}</button>
      </div>
    </header>
  `;
}

function bottomNav() {
  const items = [
    ["home", "Home", icons.home],
    ["stream", "Stream", icons.play],
    ["events", "Events", icons.calendar],
    ["fans", "Fan Zone", icons.star],
    ["profile", "Profile", icons.user],
    ["admin", "Admin", icons.shield]
  ];
  return `
    <nav class="bottom-nav" aria-label="Main navigation">
      ${items.map(([id, label, icon]) => `
        <button class="nav-item ${route === id ? "active" : ""}" onclick="setRoute('${id}')" aria-current="${route === id ? "page" : "false"}">
          ${icon}
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function renderHome() {
  const live = state.events.find((event) => event.status === "Live") || state.events[0];
  const upcoming = state.events.filter((event) => event.status !== "Ended" && event.id !== live?.id);
  if (!live) {
    return `
      <main class="grid home-grid">
        ${supabaseSetupBanner()}
        <section class="hero front-page">
          <div class="hero-visual"></div>
          <div class="hero-content">
            <div>
              <p class="eyebrow">UFC Stream</p>
              <h2>No Live Event</h2>
            </div>
            <p>Events appear here after an admin publishes them in Supabase.</p>
            <button class="primary" onclick="setRoute('admin')">${icons.shield}Admin Panel</button>
          </div>
        </section>
        <aside class="panel panel-pad">
          <div class="row">
            <h2 class="section-title">Upcoming UFC Events</h2>
            <span class="badge">0</span>
          </div>
          <div class="empty">No events added yet.</div>
        </aside>
      </main>
    `;
  }

  return `
    <main class="grid home-grid">
      <section class="hero front-page" style="--poster:url(${FRONT_PAGE_IMAGE}) center/cover">
        <div class="hero-visual"></div>
        <div class="fighter-shape"></div>
        <div class="hero-content">
          <div class="status-row">${eventBadge(live)}<span class="badge">${live.viewerCount.toLocaleString()} viewers</span></div>
          <div>
            <p class="eyebrow">Featured event</p>
            <h2>${live.title}</h2>
          </div>
          <p>${live.description}</p>
          <div class="status-row">
            <button class="primary" onclick="setRoute('stream','${live.id}')">${icons.play}Watch Now</button>
            <button class="secondary" onclick="toggleReminder('${live.id}')">${icons.bell}Reminder</button>
          </div>
        </div>
      </section>
      <aside class="panel panel-pad">
        <div class="row">
          <h2 class="section-title">Upcoming UFC Events</h2>
          <span class="badge">${upcoming.length}</span>
        </div>
        <div class="event-list">
          ${upcoming.map((event, index) => eventListCard(event, index)).join("") || '<div class="empty">No upcoming events.</div>'}
        </div>
      </aside>
    </main>
  `;
}

function eventListCard(event, index) {
  return `
    <article class="event-card" onclick="setRoute('${event.status === "Live" ? "stream" : "events"}','${event.id}')">
      ${eventPoster(event, index)}
      <div>
        <div class="row">${eventBadge(event)}</div>
        <h3>${event.title}</h3>
        <p>${formatDate(event.eventDate)} · ${event.venue}</p>
        <span class="countdown">${event.status === "Live" ? "Streaming now" : countdown(event.eventDate)}</span>
      </div>
    </article>
  `;
}

function isDirectVideoUrl(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url, location.origin);
    return parsed.pathname.startsWith("/uploads/") || /\.(m3u8|mp4|webm|mov|m4v)$/i.test(parsed.pathname);
  } catch {
    return false;
  }
}

function renderStream() {
  if (!authUser) {
    return `
      <main class="panel panel-pad">
        <p class="eyebrow">Live stream</p>
        <h2 class="section-title">Sign in to watch</h2>
        <p class="muted">Fight streams are available to signed-in users.</p>
        <button class="primary" onclick="setRoute('profile')">${icons.user}Go to Login</button>
      </main>
    `;
  }

  const event = state.events.find((item) => item.id === activeEventId) || state.events.find((item) => item.status === "Live") || state.events[0];
  if (!event) return '<div class="empty">No stream selected.</div>';
  const src = event.streamUrl || "";
  const isVideo = isDirectVideoUrl(src);
  const encodedStreamUrl = encodeURIComponent(src).replace(/'/g, "%27");

  return `
    <main class="stream-layout">
      <section class="player-frame">
        <div class="video-stage" ${posterStyle(event)}>
          ${isVideo
            ? `<video id="videoPlayer" src="${src}" controls playsinline preload="metadata" onerror="handlePlayerError()"></video>`
            : `<div class="link-player"><p class="eyebrow">External link</p><h2>${event.title}</h2><p>This event uses an external webpage. Open it to watch the authorized broadcast.</p><button class="primary" onclick="openStreamLink('${encodedStreamUrl}')">${icons.play}Open Link</button></div>`}
          <div class="video-overlay">
            ${eventBadge(event)}
            <span class="badge">${event.viewerCount.toLocaleString()} watching</span>
          </div>
        </div>
        <div class="player-controls">
          <select class="secondary" aria-label="Stream quality" onchange="toast('Quality set to ' + this.value)">
            <option>Auto HD</option>
            <option>1080p</option>
            <option>720p</option>
            <option>480p</option>
          </select>
          ${isVideo ? `<button class="secondary" onclick="document.getElementById('videoPlayer').requestFullscreen?.()">${icons.max}Full Screen</button>` : ""}
          <button class="secondary" onclick="shareEvent('${event.id}')">${icons.share}Share</button>
          <button class="secondary" onclick="toggleFavorite('${event.id}')">Favorite</button>
        </div>
      </section>
      <aside class="panel panel-pad">
        <p class="eyebrow">Live stream</p>
        <h2 class="section-title">${event.title}</h2>
        <p class="muted">${event.venue} · ${formatDate(event.eventDate)}</p>
        <h3>Fight Card</h3>
        <div class="fight-card">
          ${["Rivera", "Kwan", "Santos", "Cole", "Adesina", "Volkov"].reduce((rows, fighter, index, arr) => {
            if (index % 2 === 0) rows.push(`<div class="fight-row"><span>${fighter}</span><span>VS</span><span>${arr[index + 1]}</span></div>`);
            return rows;
          }, []).join("")}
        </div>
      </aside>
    </main>
  `;
}

function renderEvents() {
  return `
    <main class="events-page">
      <div class="row header-row">
        <div>
          <p class="eyebrow">Schedule</p>
          <h2 class="section-title">UFC Events</h2>
        </div>
      </div>
      <div class="event-list">
        ${state.events.map((event, index) => eventListCard(event, index)).join("") || '<div class="empty">No events yet.</div>'}
      </div>
    </main>
  `;
}

function authForm() {
  const isLogin = authMode === "login";
  return `
    <div class="auth-panel">
      <div class="auth-tabs">
        <button type="button" class="secondary ${isLogin ? "active" : ""}" onclick="setAuthMode('login')">Sign In</button>
        <button type="button" class="secondary ${!isLogin ? "active" : ""}" onclick="setAuthMode('signup')">Create Account</button>
      </div>
      <form class="auth-form panel panel-pad" onsubmit="${isLogin ? "loginUser(event)" : "signUpUser(event)"}">
        ${!isLogin ? `
          <label>
            Display name
            <input name="displayName" type="text" placeholder="Your name" />
          </label>
        ` : ""}
        <label>
          Email
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" required minlength="6" placeholder="At least 6 characters" />
        </label>
        <button class="primary" type="submit">${isLogin ? "Sign In" : "Create Account"}</button>
      </form>
    </div>
  `;
}

function renderProfile() {
  if (!authUser) {
    return `
      <main class="panel panel-pad">
        <p class="eyebrow">Account</p>
        <h2 class="section-title">Login for fight streams</h2>
        <p class="muted">Sign in with Supabase to watch live events and save favorites.</p>
        ${supabaseSetupBanner()}
        ${authForm()}
      </main>
    `;
  }

  return `
    <main class="panel panel-pad">
      <p class="eyebrow">Account</p>
      <h2 class="section-title">Profile</h2>
      <div class="profile-card">
        <strong>${userProfile?.display_name || authUser.email}</strong>
        <span class="muted">${authUser.email}</span>
        <span class="badge">${userProfile?.role || "viewer"}</span>
      </div>
      <div class="row">
        <button class="secondary" onclick="setRoute('stream')">${icons.play}Watch Stream</button>
        <button class="secondary" onclick="logoutUser()">${icons.logout}Sign Out</button>
      </div>
      <div class="panel panel-pad">
        <h3>Saved activity</h3>
        <p class="muted">${state.favorites.length} favorites · ${state.reminders.length} reminders · ${state.fanLikes.length} liked wallpapers</p>
      </div>
    </main>
  `;
}

function eventForm(event) {
  const value = event || {
    title: "",
    description: "",
    thumbnail: "",
    streamUrl: "",
    venue: "",
    eventDate: "",
    status: "Upcoming",
    viewerCount: 0
  };
  return `
    <form class="form" onsubmit="saveEvent(event)">
      <input type="hidden" name="id" value="${value.id || ""}" />
      <label>Title<input name="title" required value="${value.title || ""}" /></label>
      <label>Description<textarea name="description" required rows="3">${value.description || ""}</textarea></label>
      <label>Venue<input name="venue" required value="${value.venue || ""}" /></label>
      <label>Event date<input name="eventDate" type="datetime-local" required value="${value.eventDate ? toLocalInput(value.eventDate) : ""}" /></label>
      <label>Status
        <select name="status">
          ${["Upcoming", "Live", "Ended"].map((status) => `<option ${value.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Viewer count<input name="viewerCount" type="number" min="0" value="${value.viewerCount || 0}" /></label>
      <label>Thumbnail URL<input name="thumbnail" value="${value.thumbnail || ""}" /></label>
      <label>Stream URL<input name="streamUrl" value="${value.streamUrl || ""}" placeholder="https://... or upload a video below" /></label>
      <label>Upload fight video<input name="videoFile" type="file" accept="video/*" /></label>
      <button class="primary" type="submit">Save Event</button>
    </form>
  `;
}

function renderAdmin() {
  if (!isSupabaseReady()) {
    return `
      <main class="panel panel-pad">
        <p class="eyebrow">Admin</p>
        <h2 class="section-title">Supabase required</h2>
        ${supabaseSetupBanner()}
      </main>
    `;
  }

  if (!authUser) {
    return `
      <main class="panel panel-pad">
        <p class="eyebrow">Admin</p>
        <h2 class="section-title">Admin sign in</h2>
        <p class="muted">Sign in with a Supabase account that has the admin role.</p>
        ${authForm()}
      </main>
    `;
  }

  if (!isAdmin()) {
    return `
      <main class="panel panel-pad">
        <p class="eyebrow">Admin</p>
        <h2 class="section-title">Admin access required</h2>
        <p class="muted">Your account is signed in as <strong>${userProfile?.role || "viewer"}</strong>. Promote it in Supabase with:</p>
        <pre class="supabase-banner">update public.profiles set role = 'admin' where email = '${authUser.email}';</pre>
        <button class="secondary" onclick="logoutUser()">${icons.logout}Sign Out</button>
      </main>
    `;
  }

  return `
    <main class="admin-layout">
      <section class="panel panel-pad">
        <div class="row header-row">
          <div>
            <p class="eyebrow">Admin</p>
            <h2 class="section-title">Publish fight streams</h2>
          </div>
          <button class="secondary" onclick="logoutUser()">${icons.logout}Sign Out</button>
        </div>
        ${eventForm()}
      </section>
      <section class="panel panel-pad">
        <h3>Published events</h3>
        <div class="admin-events">
          ${state.events.map((event) => adminEvent(event)).join("") || '<div class="empty">No events yet.</div>'}
        </div>
      </section>
    </main>
  `;
}

function toLocalInput(value) {
  const date = new Date(value);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

function adminEvent(event) {
  return `
    <article class="admin-event">
      <div class="row"><div><h3>${event.title}</h3><p>${event.status} · ${formatDate(event.eventDate)}</p></div>${eventBadge(event)}</div>
      <div class="card-actions">
        <button class="secondary" onclick="editEvent('${event.id}')">Edit</button>
        <button class="secondary" onclick="publishLive('${event.id}')">Set Live</button>
        <button class="danger" onclick="deleteEvent('${event.id}')">Delete</button>
      </div>
    </article>
  `;
}

function renderFans() {
  return `
    <main class="fans-page">
      <div class="row header-row">
        <div>
          <p class="eyebrow">Fan Zone</p>
          <h2 class="section-title">Wallpapers & Photos</h2>
        </div>
      </div>
      <section class="fans-grid">
        ${fanWallpapers.map((wp) => {
          const isLiked = state.fanLikes.includes(wp.id);
          return `
            <article class="fan-card">
              <div class="fan-card-visual" style="background-image: url(${wp.src}); background-position: ${wp.position || "center"}">
                <div class="fan-card-overlay">
                  <button class="icon-button fav-btn ${isLiked ? "liked" : ""}" onclick="toggleFanFavorite(event, '${wp.id}')" title="Like photo">
                    ${isLiked ? icons.heartFilled : icons.heart}
                  </button>
                  <button class="icon-button max-btn" onclick="openLightbox('${wp.src}', '${wp.name} - ${wp.title}')" title="View Full Screen">
                    ${icons.max}
                  </button>
                </div>
              </div>
              <div class="fan-card-content">
                <div class="wp-meta">
                  <h3>${wp.name}</h3>
                  <p class="fan-nickname">${wp.nickname}</p>
                  <p class="muted">${wp.title}</p>
                  <dl class="fan-stats">
                    <div class="fan-stat"><dt>Style</dt><dd>${wp.style}</dd></div>
                    <div class="fan-stat"><dt>Record</dt><dd>${wp.record}</dd></div>
                  </dl>
                </div>
                <div class="wp-actions">
                  <a href="${wp.src}" download="${wp.id}-wallpaper.png" class="secondary download-btn" title="Download HD">
                    ${icons.download}<span>Download</span>
                  </a>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </section>
      <div id="lightboxModal" class="lightbox" onclick="closeLightbox(event)">
        <span class="lightbox-close" onclick="closeLightbox(event)">${icons.close}</span>
        <img id="lightboxImg" class="lightbox-content" src="" alt="Full Screen Preview" />
        <div id="lightboxCaption" class="lightbox-caption"></div>
      </div>
    </main>
  `;
}

async function loginUser(event) {
  event.preventDefault();
  const client = getSupabaseClient();
  if (!client) return toast("Service unavailable.");
  const data = Object.fromEntries(new FormData(event.target));
  const { error } = await client.auth.signInWithPassword({
    email: String(data.email).trim(),
    password: String(data.password)
  });
  if (error) toast(error.message);
  else toast("Signed in successfully.");
}

async function signUpUser(event) {
  event.preventDefault();
  const client = getSupabaseClient();
  if (!client) return toast("Service unavailable.");
  const data = Object.fromEntries(new FormData(event.target));
  const msgEl = event.target.querySelector(".form-message");
  const { data: signUpData, error } = await client.auth.signUp({
    email: String(data.email).trim(),
    password: String(data.password),
    options: {
      data: {
        display_name: String(data.displayName || "").trim() || String(data.email).split("@")[0]
      }
    }
  });

  if (error) {
    const text = error.message || error.error_description || JSON.stringify(error);
    if (msgEl) {
      msgEl.style.color = "#e10600";
      msgEl.textContent = text === "{}" ? "Sign up failed." : text;
    }
  } else {
    if (signUpData?.session) {
      await applySessionUser(signUpData.user);
      if (msgEl) {
        msgEl.style.color = "#00ff00";
        msgEl.textContent = "Account created and signed in successfully!";
      }
    } else {
      if (msgEl) {
        msgEl.style.color = "#00ff00";
        msgEl.textContent = "Account created. Please sign in.";
      }
    }
  }
}

async function logoutUser() {
  const client = getSupabaseClient();
  if (!client) return;
  await client.auth.signOut();
  toast("Signed out.");
}

function setAuthMode(mode) {
  authMode = mode;
  render();
}

async function uploadFightVideo(file) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Service unavailable.");
  const extension = file.name.includes(".") ? file.name.slice(file.name.lastIndexOf(".")) : ".mp4";
  const path = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;
  const { error } = await client.storage.from("fight-videos").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type || "video/mp4"
  });
  if (error) throw error;
  const { data } = client.storage.from("fight-videos").getPublicUrl(path);
  return data.publicUrl;
}

async function saveEvent(submitEvent) {
  submitEvent.preventDefault();
  const client = getSupabaseClient();
  if (!client || !isAdmin()) return toast("Admin access is required.");
  const data = Object.fromEntries(new FormData(submitEvent.target));
  const previous = state.events.find((event) => event.id === data.id);
  try {
    let streamUrl = String(data.streamUrl || "").trim();
    const videoFile = submitEvent.target.elements.videoFile?.files?.[0];
    if (videoFile) {
      toast("Uploading fight video to Supabase...");
      streamUrl = await uploadFightVideo(videoFile);
    }
    const payload = {
      title: String(data.title).trim(),
      description: String(data.description).trim(),
      thumbnail: String(data.thumbnail || "").trim(),
      stream_url: streamUrl,
      venue: String(data.venue).trim(),
      event_date: new Date(data.eventDate).toISOString(),
      status: data.status,
      viewer_count: Number(data.viewerCount || 0),
      theme: previous?.theme || posterThemes[state.events.length % posterThemes.length]
    };
    if (payload.status === "Live" && !payload.stream_url) {
      throw new Error("Upload a video or provide a stream URL before going live.");
    }
    if (payload.status === "Live") {
      await client.from("events").update({ status: "Upcoming" }).eq("status", "Live");
    }
    const query = previous
      ? client.from("events").update(payload).eq("id", previous.id)
      : client.from("events").insert(payload);
    const { error } = await query;
    if (error) throw error;
    await loadEvents();
    toast(payload.status === "Live" ? "Event is live for everyone now." : "Event saved to Supabase.");
  } catch (error) {
    toast(error.message);
  }
}

function editEvent(id) {
  const event = state.events.find((item) => item.id === id);
  const holder = document.querySelector(".admin-layout .form, .panel .form");
  if (!event || !holder) return;
  holder.outerHTML = eventForm(event);
  toast("Event loaded for editing.");
}

async function publishLive(id) {
  const client = getSupabaseClient();
  if (!client || !isAdmin()) return toast("Admin access is required.");
  try {
    await client.from("events").update({ status: "Upcoming" }).eq("status", "Live");
    const { error } = await client.from("events").update({ status: "Live" }).eq("id", id);
    if (error) throw error;
    await loadEvents();
    toast("Event is live. Everyone can see it now.");
  } catch (error) {
    toast(error.message);
  }
}

async function deleteEvent(id) {
  const client = getSupabaseClient();
  if (!client || !isAdmin()) return toast("Admin access is required.");
  try {
    const { error } = await client.from("events").delete().eq("id", id);
    if (error) throw error;
    await loadEvents();
    toast("Event deleted from Supabase.");
  } catch (error) {
    toast(error.message);
  }
}

function toggleReminder(id) {
  const exists = state.reminders.includes(id);
  state.reminders = exists ? state.reminders.filter((item) => item !== id) : [...state.reminders, id];
  saveState();
  toast(exists ? "Reminder removed." : "Reminder set. Push notification queued.");
}

function toggleFavorite(id) {
  const exists = state.favorites.includes(id);
  state.favorites = exists ? state.favorites.filter((item) => item !== id) : [...state.favorites, id];
  saveState();
  toast(exists ? "Removed from favorites." : "Added to favorites.");
}

async function shareEvent(id) {
  const event = state.events.find((item) => item.id === id);
  if (!event) return;
  const url = `${location.origin}${location.pathname}?event=${event.id}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: event.name || 'UFC Event',
        url: url
      });
      return;
    } catch (err) {
      console.log('Share aborted or failed:', err);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => toast("Share link copied."))
      .catch(() => toast("Failed to copy link."));
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      toast("Share link copied.");
    } catch (err) {
      toast("Failed to copy link.");
    }
    document.body.removeChild(textArea);
  }
}

function openStreamLink(encodedUrl) {
  window.open(decodeURIComponent(encodedUrl), "_blank", "noopener,noreferrer");
}

function handlePlayerError() {
  toast("This video cannot play. Check that the Supabase video URL is public and valid.");
}

function toast(message) {
  document.querySelector(".toast")?.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2600);
}

function toggleFanFavorite(event, id) {
  event.stopPropagation();
  const exists = state.fanLikes.includes(id);
  state.fanLikes = exists ? state.fanLikes.filter((item) => item !== id) : [...state.fanLikes, id];
  saveState();
  toast(exists ? "Removed from wallpapers collection." : "Saved to wallpapers collection!");
  render();
}

function openLightbox(src, caption) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  if (!modal || !img || !cap) return;
  img.src = src;
  cap.textContent = caption;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
  if (event && event.target.id === "lightboxImg") return;
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function currentView() {
  if (route === "stream") return renderStream();
  if (route === "events") return renderEvents();
  if (route === "fans") return renderFans();
  if (route === "profile") return renderProfile();
  if (route === "admin") return renderAdmin();
  return renderHome();
}

function render() {
  document.getElementById("app").innerHTML = `
    <div class="app-shell ${route === "home" ? "home-shell" : ""}">
      ${topbar()}
      ${currentView()}
      ${bottomNav()}
    </div>
  `;
}

window.setRoute = setRoute;
window.loginUser = loginUser;
window.signUpUser = signUpUser;
window.logoutUser = logoutUser;
window.setAuthMode = setAuthMode;
window.saveEvent = saveEvent;
window.editEvent = editEvent;
window.publishLive = publishLive;
window.deleteEvent = deleteEvent;
window.toggleReminder = toggleReminder;
window.toggleFavorite = toggleFavorite;
window.shareEvent = shareEvent;
window.openStreamLink = openStreamLink;
window.handlePlayerError = handlePlayerError;
window.toggleFanFavorite = toggleFanFavorite;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

async function boot() {
  render();
  const user = await window.initSupabaseAuth(async (nextUser) => {
    authUser = nextUser;
    await loadProfile();
    render();
  });
  authUser = user;
  await loadProfile();
  await loadEvents();
}

boot();
