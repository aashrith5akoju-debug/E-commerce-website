import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    '[Supabase] Warning: VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY is not defined in your environment.'
  );
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

/**
 * Diagnostic helper to verify Supabase connectivity
 * @returns {Promise<{ ok: boolean, status: string, details?: any }>}
 */
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      return { ok: false, status: 'Auth session check returned error', details: error.message };
    }
    return { ok: true, status: 'Connected to Supabase', details: data };
  } catch (err) {
    return { ok: false, status: 'Connection failed', details: err?.message || String(err) };
  }
}

