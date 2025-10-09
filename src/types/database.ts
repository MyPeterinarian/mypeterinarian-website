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
    Tables: Record<string, never>
    // Add your table definitions here
    // Example:
    // Tables: {
    //   users: {
    //     Row: {
    //       id: string
    //       email: string
    //       created_at: string
    //     }
    //     Insert: {
    //       id?: string
    //       email: string
    //       created_at?: string
    //     }
    //     Update: {
    //       id?: string
    //       email?: string
    //       created_at?: string
    //     }
    //   }
    // }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
