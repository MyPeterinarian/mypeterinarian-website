import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/database.types'

// Server-side Supabase client - uses service role key for RLS bypass
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabaseServer = createClient<Database>(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false, // Don't persist session on server
    autoRefreshToken: false, // Don't auto-refresh tokens
    detectSessionInUrl: false // Don't detect sessions in URL
  }
})
