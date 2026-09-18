let supabaseClient = null;
let authReady = false;

function isSupabaseConfigured() {
  return Boolean(window.__SUPABASE_URL__ && window.__SUPABASE_ANON_KEY__);
}

function getSupabase() {
  if (!isSupabaseConfigured()) return null;
  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(
      window.__SUPABASE_URL__,
      window.__SUPABASE_ANON_KEY__,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );
  }
  return supabaseClient;
}

async function initSupabaseAuth(onChange) {
  const client = getSupabase();
  if (!client) return null;

  const { data: { session } } = await client.auth.getSession();
  authReady = true;
  client.auth.onAuthStateChange((_event, session) => {
    onChange(session?.user ?? null);
  });
  return session?.user ?? null;
}

window.getSupabase = getSupabase;
window.initSupabaseAuth = initSupabaseAuth;
window.isSupabaseConfigured = isSupabaseConfigured;
