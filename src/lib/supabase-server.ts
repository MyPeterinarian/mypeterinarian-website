import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/database.types'

// Server-side Supabase client - no localStorage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabaseServer = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Don't persist session on server
    autoRefreshToken: false, // Don't auto-refresh tokens
    detectSessionInUrl: false // Don't detect sessions in URL
  }
})
