/**
 * Database TypeScript Types
 *
 * TODO: Generate these types from your existing Supabase schema using:
 * npx supabase gen types typescript --project-id your-project-ref --schema public > src/types/database.ts
 *
 * For now, this is a placeholder that allows the code to compile.
 * Replace this with your actual Supabase schema types.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string | null
          message: string
          locale: string
          created_at: string
          status: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject?: string | null
          message: string
          locale?: string
          created_at?: string
          status?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string | null
          message?: string
          locale?: string
          created_at?: string
          status?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          locale: string
          subscribed_at: string
          status: string
          unsubscribed_at: string | null
        }
        Insert: {
          id?: string
          email: string
          locale?: string
          subscribed_at?: string
          status?: string
          unsubscribed_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          locale?: string
          subscribed_at?: string
          status?: string
          unsubscribed_at?: string | null
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
