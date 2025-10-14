export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ai_agent_form_deliveries: {
        Row: {
          booking_id: string
          completed_at: string | null
          created_at: string | null
          customer_id: string
          form_type: string
          id: string
          reminder_count: number | null
          sent_at: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          booking_id: string
          completed_at?: string | null
          created_at?: string | null
          customer_id: string
          form_type: string
          id?: string
          reminder_count?: number | null
          sent_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          booking_id?: string
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string
          form_type?: string
          id?: string
          reminder_count?: number | null
          sent_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_agent_form_mappings: {
        Row: {
          conditions: Json | null
          created_at: string | null
          form_type: string
          id: string
          is_active: boolean | null
          offset_hours: number | null
          service_type: string
          timing: string
          updated_at: string | null
        }
        Insert: {
          conditions?: Json | null
          created_at?: string | null
          form_type: string
          id?: string
          is_active?: boolean | null
          offset_hours?: number | null
          service_type: string
          timing: string
          updated_at?: string | null
        }
        Update: {
          conditions?: Json | null
          created_at?: string | null
          form_type?: string
          id?: string
          is_active?: boolean | null
          offset_hours?: number | null
          service_type?: string
          timing?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_agent_settings: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      api_configurations: {
        Row: {
          additional_config: Json | null
          api_key: string | null
          business_id: string | null
          created_at: string | null
          id: string
          place_id: string | null
          platform: string
          updated_at: string | null
        }
        Insert: {
          additional_config?: Json | null
          api_key?: string | null
          business_id?: string | null
          created_at?: string | null
          id?: string
          place_id?: string | null
          platform: string
          updated_at?: string | null
        }
        Update: {
          additional_config?: Json | null
          api_key?: string | null
          business_id?: string | null
          created_at?: string | null
          id?: string
          place_id?: string | null
          platform?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          calendar_event_id: string | null
          created_at: string | null
          customer_id: string | null
          end_time: string
          id: string
          notes: string | null
          pet_id: string | null
          service_id: string | null
          staff_id: string | null
          start_time: string
          status: string | null
          time_slot: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          calendar_event_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          end_time: string
          id?: string
          notes?: string | null
          pet_id?: string | null
          service_id?: string | null
          staff_id?: string | null
          start_time: string
          status?: string | null
          time_slot?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          calendar_event_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          end_time?: string
          id?: string
          notes?: string | null
          pet_id?: string | null
          service_id?: string | null
          staff_id?: string | null
          start_time?: string
          status?: string | null
          time_slot?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      auth_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          ip_address: string | null
          metadata: Json | null
          provider: string | null
          success: boolean
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          provider?: string | null
          success: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          provider?: string | null
          success?: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      booking_addons: {
        Row: {
          addon_id: string
          booking_id: string
          created_at: string | null
          id: string
          price: number
          quantity: number | null
          total_duration_minutes: number
        }
        Insert: {
          addon_id: string
          booking_id: string
          created_at?: string | null
          id?: string
          price?: number
          quantity?: number | null
          total_duration_minutes: number
        }
        Update: {
          addon_id?: string
          booking_id?: string
          created_at?: string | null
          id?: string
          price?: number
          quantity?: number | null
          total_duration_minutes?: number
        }
        Relationships: [
          {
            foreignKeyName: "booking_addons_addon_id_fkey"
            columns: ["addon_id"]
            isOneToOne: false
            referencedRelation: "service_addons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_addons_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_cancellations: {
        Row: {
          appointment_id: string
          cancellation_date: string
          created_at: string
          fee: number | null
          id: string
          owner_id: string
          reason: string | null
        }
        Insert: {
          appointment_id: string
          cancellation_date?: string
          created_at?: string
          fee?: number | null
          id?: string
          owner_id: string
          reason?: string | null
        }
        Update: {
          appointment_id?: string
          cancellation_date?: string
          created_at?: string
          fee?: number | null
          id?: string
          owner_id?: string
          reason?: string | null
        }
        Relationships: []
      }
      booking_waitlists: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          notification_sent_at: string | null
          owner_id: string
          pet_id: string
          preferred_date: string
          preferred_time_range: Json
          service_id: string
          staff_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          notification_sent_at?: string | null
          owner_id: string
          pet_id: string
          preferred_date: string
          preferred_time_range?: Json
          service_id: string
          staff_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          notification_sent_at?: string | null
          owner_id?: string
          pet_id?: string
          preferred_date?: string
          preferred_time_range?: Json
          service_id?: string
          staff_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          address: string | null
          balance_due: number | null
          checkfront_booking_id: string | null
          checkfront_code: string | null
          checkfront_customer_id: string | null
          checkfront_data: Json | null
          checkfront_invoice_id: string | null
          checkfront_status: string | null
          created_at: string | null
          customer_id: string | null
          duration_minutes: number
          external_id: string | null
          id: string
          location_type: string | null
          paid_amount: number | null
          pet_id: string | null
          recurring_booking_id: string | null
          scheduled_date: string
          scheduled_time: string
          service_id: string | null
          source: string | null
          special_instructions: string | null
          staff_id: string | null
          status: string | null
          tax_amount: number | null
          total_duration_minutes: number | null
          total_price: number | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          balance_due?: number | null
          checkfront_booking_id?: string | null
          checkfront_code?: string | null
          checkfront_customer_id?: string | null
          checkfront_data?: Json | null
          checkfront_invoice_id?: string | null
          checkfront_status?: string | null
          created_at?: string | null
          customer_id?: string | null
          duration_minutes: number
          external_id?: string | null
          id?: string
          location_type?: string | null
          paid_amount?: number | null
          pet_id?: string | null
          recurring_booking_id?: string | null
          scheduled_date: string
          scheduled_time: string
          service_id?: string | null
          source?: string | null
          special_instructions?: string | null
          staff_id?: string | null
          status?: string | null
          tax_amount?: number | null
          total_duration_minutes?: number | null
          total_price?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          balance_due?: number | null
          checkfront_booking_id?: string | null
          checkfront_code?: string | null
          checkfront_customer_id?: string | null
          checkfront_data?: Json | null
          checkfront_invoice_id?: string | null
          checkfront_status?: string | null
          created_at?: string | null
          customer_id?: string | null
          duration_minutes?: number
          external_id?: string | null
          id?: string
          location_type?: string | null
          paid_amount?: number | null
          pet_id?: string | null
          recurring_booking_id?: string | null
          scheduled_date?: string
          scheduled_time?: string
          service_id?: string | null
          source?: string | null
          special_instructions?: string | null
          staff_id?: string | null
          status?: string | null
          tax_amount?: number | null
          total_duration_minutes?: number | null
          total_price?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_duration_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_profit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      bundle_items: {
        Row: {
          bundle_id: string
          created_at: string | null
          id: string
          quantity: number | null
          service_id: string
        }
        Insert: {
          bundle_id: string
          created_at?: string | null
          id?: string
          quantity?: number | null
          service_id: string
        }
        Update: {
          bundle_id?: string
          created_at?: string | null
          id?: string
          quantity?: number | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundle_items_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "service_bundles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bundle_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      business_hours: {
        Row: {
          close_time: string
          created_at: string | null
          day_of_week: number
          id: string
          is_open: boolean | null
          open_time: string
          service_category_id: string | null
          updated_at: string | null
        }
        Insert: {
          close_time: string
          created_at?: string | null
          day_of_week: number
          id?: string
          is_open?: boolean | null
          open_time: string
          service_category_id?: string | null
          updated_at?: string | null
        }
        Update: {
          close_time?: string
          created_at?: string | null
          day_of_week?: number
          id?: string
          is_open?: boolean | null
          open_time?: string
          service_category_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_hours_service_category_id_fkey"
            columns: ["service_category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_data_extraction: {
        Row: {
          appointment_id: string | null
          calculated_duration_minutes: number | null
          calendar_event_id: string
          created_at: string | null
          customer_extraction_method: string | null
          end_time: string | null
          extracted_customer_email: string | null
          extracted_customer_name: string | null
          extracted_pet_name: string | null
          extracted_pet_type: string | null
          extracted_service_name: string | null
          extracted_staff_email: string | null
          extracted_staff_name: string | null
          extracted_staff_role: string | null
          extraction_confidence: number | null
          extraction_errors: string | null
          extraction_timestamp: string | null
          id: string
          needs_manual_review: boolean | null
          pet_extraction_method: string | null
          raw_attendees: Json | null
          raw_description: string | null
          raw_title: string | null
          service_extraction_method: string | null
          staff_extraction_method: string | null
          start_time: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_id?: string | null
          calculated_duration_minutes?: number | null
          calendar_event_id: string
          created_at?: string | null
          customer_extraction_method?: string | null
          end_time?: string | null
          extracted_customer_email?: string | null
          extracted_customer_name?: string | null
          extracted_pet_name?: string | null
          extracted_pet_type?: string | null
          extracted_service_name?: string | null
          extracted_staff_email?: string | null
          extracted_staff_name?: string | null
          extracted_staff_role?: string | null
          extraction_confidence?: number | null
          extraction_errors?: string | null
          extraction_timestamp?: string | null
          id?: string
          needs_manual_review?: boolean | null
          pet_extraction_method?: string | null
          raw_attendees?: Json | null
          raw_description?: string | null
          raw_title?: string | null
          service_extraction_method?: string | null
          staff_extraction_method?: string | null
          start_time?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string | null
          calculated_duration_minutes?: number | null
          calendar_event_id?: string
          created_at?: string | null
          customer_extraction_method?: string | null
          end_time?: string | null
          extracted_customer_email?: string | null
          extracted_customer_name?: string | null
          extracted_pet_name?: string | null
          extracted_pet_type?: string | null
          extracted_service_name?: string | null
          extracted_staff_email?: string | null
          extracted_staff_name?: string | null
          extracted_staff_role?: string | null
          extraction_confidence?: number | null
          extraction_errors?: string | null
          extraction_timestamp?: string | null
          id?: string
          needs_manual_review?: boolean | null
          pet_extraction_method?: string | null
          raw_attendees?: Json | null
          raw_description?: string | null
          raw_title?: string | null
          service_extraction_method?: string | null
          staff_extraction_method?: string | null
          start_time?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_data_extraction_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_data_extraction_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_data_extraction_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "bookings_with_duration_info"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_conversations: {
        Row: {
          booking_forwarded: boolean | null
          created_at: string
          id: string
          is_booking_request: boolean | null
          last_message_at: string
          locale: string
          metadata: Json | null
          session_id: string
          started_at: string
          updated_at: string
        }
        Insert: {
          booking_forwarded?: boolean | null
          created_at?: string
          id?: string
          is_booking_request?: boolean | null
          last_message_at?: string
          locale?: string
          metadata?: Json | null
          session_id: string
          started_at?: string
          updated_at?: string
        }
        Update: {
          booking_forwarded?: boolean | null
          created_at?: string
          id?: string
          is_booking_request?: boolean | null
          last_message_at?: string
          locale?: string
          metadata?: Json | null
          session_id?: string
          started_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          is_emergency: boolean | null
          metadata: Json | null
          role: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          is_emergency?: boolean | null
          metadata?: Json | null
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_emergency?: boolean | null
          metadata?: Json | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      checkfront_booking_details: {
        Row: {
          booking_date: string | null
          booking_id: string
          booking_status: string | null
          booking_subtotal: number | null
          booking_tax_total: number | null
          booking_total: number | null
          checkfront_customer_id: string | null
          created_at: string | null
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          id: string
          invoice_id: string | null
          raw_booking_data: Json
          raw_slip_data: Json | null
          synced_at: string | null
          updated_at: string | null
        }
        Insert: {
          booking_date?: string | null
          booking_id: string
          booking_status?: string | null
          booking_subtotal?: number | null
          booking_tax_total?: number | null
          booking_total?: number | null
          checkfront_customer_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: string
          invoice_id?: string | null
          raw_booking_data: Json
          raw_slip_data?: Json | null
          synced_at?: string | null
          updated_at?: string | null
        }
        Update: {
          booking_date?: string | null
          booking_id?: string
          booking_status?: string | null
          booking_subtotal?: number | null
          booking_tax_total?: number | null
          booking_total?: number | null
          checkfront_customer_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          id?: string
          invoice_id?: string | null
          raw_booking_data?: Json
          raw_slip_data?: Json | null
          synced_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checkfront_booking_details_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoice_analytics_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkfront_booking_details_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkfront_booking_details_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices_needing_line_items_sync"
            referencedColumns: ["id"]
          },
        ]
      }
      checkfront_booking_items: {
        Row: {
          booking_details_id: string | null
          checkfront_category_id: string | null
          checkfront_item_id: string | null
          checkfront_rate_id: string | null
          created_at: string | null
          id: string
          invoice_item_id: string | null
          item_description: string | null
          item_name: string
          item_type: string | null
          quantity: number | null
          raw_item_data: Json | null
          slip_key: string | null
          total_price: number | null
          unit_price: number | null
          updated_at: string | null
        }
        Insert: {
          booking_details_id?: string | null
          checkfront_category_id?: string | null
          checkfront_item_id?: string | null
          checkfront_rate_id?: string | null
          created_at?: string | null
          id?: string
          invoice_item_id?: string | null
          item_description?: string | null
          item_name: string
          item_type?: string | null
          quantity?: number | null
          raw_item_data?: Json | null
          slip_key?: string | null
          total_price?: number | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Update: {
          booking_details_id?: string | null
          checkfront_category_id?: string | null
          checkfront_item_id?: string | null
          checkfront_rate_id?: string | null
          created_at?: string | null
          id?: string
          invoice_item_id?: string | null
          item_description?: string | null
          item_name?: string
          item_type?: string | null
          quantity?: number | null
          raw_item_data?: Json | null
          slip_key?: string | null
          total_price?: number | null
          unit_price?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checkfront_booking_items_booking_details_id_fkey"
            columns: ["booking_details_id"]
            isOneToOne: false
            referencedRelation: "checkfront_booking_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkfront_booking_items_invoice_item_id_fkey"
            columns: ["invoice_item_id"]
            isOneToOne: false
            referencedRelation: "invoice_items"
            referencedColumns: ["id"]
          },
        ]
      }
      checkfront_invoices: {
        Row: {
          balance_due: number | null
          booking_id: string | null
          checkfront_data: Json | null
          checkfront_invoice_id: string | null
          created_at: string | null
          currency: string | null
          customer_id: string | null
          due_date: string | null
          id: string
          invoice_date: string | null
          invoice_number: string | null
          line_items: Json | null
          paid_amount: number | null
          payment_methods: Json | null
          status: string | null
          subtotal: number | null
          tax_amount: number | null
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          balance_due?: number | null
          booking_id?: string | null
          checkfront_data?: Json | null
          checkfront_invoice_id?: string | null
          created_at?: string | null
          currency?: string | null
          customer_id?: string | null
          due_date?: string | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          line_items?: Json | null
          paid_amount?: number | null
          payment_methods?: Json | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          balance_due?: number | null
          booking_id?: string | null
          checkfront_data?: Json | null
          checkfront_invoice_id?: string | null
          created_at?: string | null
          currency?: string | null
          customer_id?: string | null
          due_date?: string | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          line_items?: Json | null
          paid_amount?: number | null
          payment_methods?: Json | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checkfront_invoices_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkfront_invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      checkfront_sync_logs: {
        Row: {
          created_at: string | null
          error_details: string | null
          id: string
          metadata: Json | null
          records_failed: number | null
          records_processed: number | null
          records_successful: number | null
          status: string
          sync_type: string
        }
        Insert: {
          created_at?: string | null
          error_details?: string | null
          id?: string
          metadata?: Json | null
          records_failed?: number | null
          records_processed?: number | null
          records_successful?: number | null
          status: string
          sync_type: string
        }
        Update: {
          created_at?: string | null
          error_details?: string | null
          id?: string
          metadata?: Json | null
          records_failed?: number | null
          records_processed?: number | null
          records_successful?: number | null
          status?: string
          sync_type?: string
        }
        Relationships: []
      }
      client_intake_answers: {
        Row: {
          additional_services: Json | null
          aggression_history: string | null
          alarm_info: string | null
          avoid_locations: string | null
          bathroom_schedule: string | null
          bathroom_signals: string | null
          behavior_concerns: string | null
          boarding_location_preference: string | null
          can_be_off_leash: boolean | null
          can_give_treats: boolean | null
          care_agreement_accepted: boolean
          chief_complaint: string | null
          coat_type: string | null
          confirmation_email_sent: boolean | null
          confirmation_email_sent_at: string | null
          consultation_type: string | null
          created_at: string | null
          current_medical_conditions: string | null
          current_medications_detailed: string | null
          customer_address: string | null
          customer_city: string | null
          customer_country: string | null
          customer_email: string | null
          customer_first_name: string | null
          customer_id: string
          customer_last_name: string | null
          customer_phone: string | null
          customer_zip_code: string | null
          dental_care_needed: boolean | null
          diagnostic_preferences: string | null
          dislikes_triggers: string | null
          drop_off_time: string | null
          ear_cleaning_needed: boolean | null
          emergency_care_authorization: string | null
          emergency_clinic_preference: string | null
          emergency_contact_2_name: string | null
          emergency_contact_2_phone: string | null
          emergency_contact_2_relationship: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_spending_limit: number | null
          emergency_vet_permission: boolean | null
          enrollment_type: string | null
          escape_artist: boolean | null
          favorite_things: string | null
          fears_triggers: string | null
          feeding_amount: string | null
          feeding_frequency: string | null
          follow_up_email_sent: boolean | null
          follow_up_email_sent_at: string | null
          food_brand: string | null
          food_type: string | null
          form_type: string
          good_with_other_pets: boolean | null
          grooming_behavior_notes: string | null
          grooming_frequency: string | null
          grooming_services: string[] | null
          group_size_preference: string | null
          has_recall: boolean | null
          has_stayed_overnight_before: boolean | null
          health_issues: string | null
          home_access_instructions: string | null
          house_rules: string | null
          how_heard_about_us: string | null
          id: string
          insurance_company: string | null
          insurance_information: string | null
          interested_activities: string[] | null
          is_insured: boolean | null
          key_location: string | null
          last_deworming_date: string | null
          leash_behavior: string | null
          matting_level: string | null
          medical_history: string | null
          medications: Json | null
          nail_trimming_frequency: string | null
          nap_time_preference: string | null
          nighttime_routine: string | null
          notes: string | null
          park_preferences: string | null
          pet_commands: string | null
          pet_data: Json | null
          photo_permission: boolean | null
          pick_up_time: string | null
          plants_toxic_info: string | null
          preferred_appointment_times: string[] | null
          preferred_contact_method: string | null
          preferred_days: string[] | null
          preferred_walk_times: string[] | null
          previous_daycare_details: string | null
          previous_daycare_experience: string | null
          previous_grooming_experience: string | null
          previous_overnight_experience: string | null
          previous_service_provider: string | null
          previous_treatments: string | null
          pulls_on_leash: boolean | null
          reacts_to_children: string | null
          reacts_to_other_dogs: string | null
          reacts_to_people: string | null
          route_preferences: string | null
          sensitive_areas: string | null
          separate_play_area_preference: string | null
          separation_anxiety: boolean | null
          separation_anxiety_level: string | null
          service_end_date: string | null
          service_location_preference: string | null
          service_preferences: Json | null
          service_start_date: string | null
          service_type: string | null
          sleeping_arrangements: string | null
          special_care_requirements: string | null
          special_instructions_detailed: string | null
          symptom_duration: string | null
          terms_accepted: boolean
          treatment_preferences: string | null
          updated_at: string | null
          vaccination_book_available: boolean | null
          vaccination_dates: Json | null
          vaccination_history: string | null
          vaccinations: Json | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          veterinary_option: string | null
          visit_frequency: string | null
          visit_times: string[] | null
          walk_duration: string | null
          walk_type: string | null
          wants_extra_playtime: boolean | null
          wants_grooming: boolean | null
          weather_preferences: string | null
        }
        Insert: {
          additional_services?: Json | null
          aggression_history?: string | null
          alarm_info?: string | null
          avoid_locations?: string | null
          bathroom_schedule?: string | null
          bathroom_signals?: string | null
          behavior_concerns?: string | null
          boarding_location_preference?: string | null
          can_be_off_leash?: boolean | null
          can_give_treats?: boolean | null
          care_agreement_accepted?: boolean
          chief_complaint?: string | null
          coat_type?: string | null
          confirmation_email_sent?: boolean | null
          confirmation_email_sent_at?: string | null
          consultation_type?: string | null
          created_at?: string | null
          current_medical_conditions?: string | null
          current_medications_detailed?: string | null
          customer_address?: string | null
          customer_city?: string | null
          customer_country?: string | null
          customer_email?: string | null
          customer_first_name?: string | null
          customer_id: string
          customer_last_name?: string | null
          customer_phone?: string | null
          customer_zip_code?: string | null
          dental_care_needed?: boolean | null
          diagnostic_preferences?: string | null
          dislikes_triggers?: string | null
          drop_off_time?: string | null
          ear_cleaning_needed?: boolean | null
          emergency_care_authorization?: string | null
          emergency_clinic_preference?: string | null
          emergency_contact_2_name?: string | null
          emergency_contact_2_phone?: string | null
          emergency_contact_2_relationship?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_spending_limit?: number | null
          emergency_vet_permission?: boolean | null
          enrollment_type?: string | null
          escape_artist?: boolean | null
          favorite_things?: string | null
          fears_triggers?: string | null
          feeding_amount?: string | null
          feeding_frequency?: string | null
          follow_up_email_sent?: boolean | null
          follow_up_email_sent_at?: string | null
          food_brand?: string | null
          food_type?: string | null
          form_type?: string
          good_with_other_pets?: boolean | null
          grooming_behavior_notes?: string | null
          grooming_frequency?: string | null
          grooming_services?: string[] | null
          group_size_preference?: string | null
          has_recall?: boolean | null
          has_stayed_overnight_before?: boolean | null
          health_issues?: string | null
          home_access_instructions?: string | null
          house_rules?: string | null
          how_heard_about_us?: string | null
          id?: string
          insurance_company?: string | null
          insurance_information?: string | null
          interested_activities?: string[] | null
          is_insured?: boolean | null
          key_location?: string | null
          last_deworming_date?: string | null
          leash_behavior?: string | null
          matting_level?: string | null
          medical_history?: string | null
          medications?: Json | null
          nail_trimming_frequency?: string | null
          nap_time_preference?: string | null
          nighttime_routine?: string | null
          notes?: string | null
          park_preferences?: string | null
          pet_commands?: string | null
          pet_data?: Json | null
          photo_permission?: boolean | null
          pick_up_time?: string | null
          plants_toxic_info?: string | null
          preferred_appointment_times?: string[] | null
          preferred_contact_method?: string | null
          preferred_days?: string[] | null
          preferred_walk_times?: string[] | null
          previous_daycare_details?: string | null
          previous_daycare_experience?: string | null
          previous_grooming_experience?: string | null
          previous_overnight_experience?: string | null
          previous_service_provider?: string | null
          previous_treatments?: string | null
          pulls_on_leash?: boolean | null
          reacts_to_children?: string | null
          reacts_to_other_dogs?: string | null
          reacts_to_people?: string | null
          route_preferences?: string | null
          sensitive_areas?: string | null
          separate_play_area_preference?: string | null
          separation_anxiety?: boolean | null
          separation_anxiety_level?: string | null
          service_end_date?: string | null
          service_location_preference?: string | null
          service_preferences?: Json | null
          service_start_date?: string | null
          service_type?: string | null
          sleeping_arrangements?: string | null
          special_care_requirements?: string | null
          special_instructions_detailed?: string | null
          symptom_duration?: string | null
          terms_accepted?: boolean
          treatment_preferences?: string | null
          updated_at?: string | null
          vaccination_book_available?: boolean | null
          vaccination_dates?: Json | null
          vaccination_history?: string | null
          vaccinations?: Json | null
          veterinarian_name?: string | null
          veterinarian_phone?: string | null
          veterinary_option?: string | null
          visit_frequency?: string | null
          visit_times?: string[] | null
          walk_duration?: string | null
          walk_type?: string | null
          wants_extra_playtime?: boolean | null
          wants_grooming?: boolean | null
          weather_preferences?: string | null
        }
        Update: {
          additional_services?: Json | null
          aggression_history?: string | null
          alarm_info?: string | null
          avoid_locations?: string | null
          bathroom_schedule?: string | null
          bathroom_signals?: string | null
          behavior_concerns?: string | null
          boarding_location_preference?: string | null
          can_be_off_leash?: boolean | null
          can_give_treats?: boolean | null
          care_agreement_accepted?: boolean
          chief_complaint?: string | null
          coat_type?: string | null
          confirmation_email_sent?: boolean | null
          confirmation_email_sent_at?: string | null
          consultation_type?: string | null
          created_at?: string | null
          current_medical_conditions?: string | null
          current_medications_detailed?: string | null
          customer_address?: string | null
          customer_city?: string | null
          customer_country?: string | null
          customer_email?: string | null
          customer_first_name?: string | null
          customer_id?: string
          customer_last_name?: string | null
          customer_phone?: string | null
          customer_zip_code?: string | null
          dental_care_needed?: boolean | null
          diagnostic_preferences?: string | null
          dislikes_triggers?: string | null
          drop_off_time?: string | null
          ear_cleaning_needed?: boolean | null
          emergency_care_authorization?: string | null
          emergency_clinic_preference?: string | null
          emergency_contact_2_name?: string | null
          emergency_contact_2_phone?: string | null
          emergency_contact_2_relationship?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_spending_limit?: number | null
          emergency_vet_permission?: boolean | null
          enrollment_type?: string | null
          escape_artist?: boolean | null
          favorite_things?: string | null
          fears_triggers?: string | null
          feeding_amount?: string | null
          feeding_frequency?: string | null
          follow_up_email_sent?: boolean | null
          follow_up_email_sent_at?: string | null
          food_brand?: string | null
          food_type?: string | null
          form_type?: string
          good_with_other_pets?: boolean | null
          grooming_behavior_notes?: string | null
          grooming_frequency?: string | null
          grooming_services?: string[] | null
          group_size_preference?: string | null
          has_recall?: boolean | null
          has_stayed_overnight_before?: boolean | null
          health_issues?: string | null
          home_access_instructions?: string | null
          house_rules?: string | null
          how_heard_about_us?: string | null
          id?: string
          insurance_company?: string | null
          insurance_information?: string | null
          interested_activities?: string[] | null
          is_insured?: boolean | null
          key_location?: string | null
          last_deworming_date?: string | null
          leash_behavior?: string | null
          matting_level?: string | null
          medical_history?: string | null
          medications?: Json | null
          nail_trimming_frequency?: string | null
          nap_time_preference?: string | null
          nighttime_routine?: string | null
          notes?: string | null
          park_preferences?: string | null
          pet_commands?: string | null
          pet_data?: Json | null
          photo_permission?: boolean | null
          pick_up_time?: string | null
          plants_toxic_info?: string | null
          preferred_appointment_times?: string[] | null
          preferred_contact_method?: string | null
          preferred_days?: string[] | null
          preferred_walk_times?: string[] | null
          previous_daycare_details?: string | null
          previous_daycare_experience?: string | null
          previous_grooming_experience?: string | null
          previous_overnight_experience?: string | null
          previous_service_provider?: string | null
          previous_treatments?: string | null
          pulls_on_leash?: boolean | null
          reacts_to_children?: string | null
          reacts_to_other_dogs?: string | null
          reacts_to_people?: string | null
          route_preferences?: string | null
          sensitive_areas?: string | null
          separate_play_area_preference?: string | null
          separation_anxiety?: boolean | null
          separation_anxiety_level?: string | null
          service_end_date?: string | null
          service_location_preference?: string | null
          service_preferences?: Json | null
          service_start_date?: string | null
          service_type?: string | null
          sleeping_arrangements?: string | null
          special_care_requirements?: string | null
          special_instructions_detailed?: string | null
          symptom_duration?: string | null
          terms_accepted?: boolean
          treatment_preferences?: string | null
          updated_at?: string | null
          vaccination_book_available?: boolean | null
          vaccination_dates?: Json | null
          vaccination_history?: string | null
          vaccinations?: Json | null
          veterinarian_name?: string | null
          veterinarian_phone?: string | null
          veterinary_option?: string | null
          visit_frequency?: string | null
          visit_times?: string[] | null
          walk_duration?: string | null
          walk_type?: string | null
          wants_extra_playtime?: boolean | null
          wants_grooming?: boolean | null
          weather_preferences?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_intake_answers_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "client_intake_answers_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      communication_campaigns: {
        Row: {
          clicked_count: number | null
          created_at: string | null
          created_by: string | null
          delivered_count: number | null
          description: string | null
          id: string
          name: string
          opened_count: number | null
          scheduled_for: string | null
          sent_at: string | null
          sent_count: number | null
          status: string | null
          target_filters: Json | null
          template_id: string | null
          total_recipients: number | null
          type: string
          updated_at: string | null
        }
        Insert: {
          clicked_count?: number | null
          created_at?: string | null
          created_by?: string | null
          delivered_count?: number | null
          description?: string | null
          id?: string
          name: string
          opened_count?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          sent_count?: number | null
          status?: string | null
          target_filters?: Json | null
          template_id?: string | null
          total_recipients?: number | null
          type: string
          updated_at?: string | null
        }
        Update: {
          clicked_count?: number | null
          created_at?: string | null
          created_by?: string | null
          delivered_count?: number | null
          description?: string | null
          id?: string
          name?: string
          opened_count?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          sent_count?: number | null
          status?: string | null
          target_filters?: Json | null
          template_id?: string | null
          total_recipients?: number | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "communication_campaigns_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "communication_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      communication_templates: {
        Row: {
          category: string
          content: string
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          name: string
          subject: string | null
          type: string
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          subject?: string | null
          type: string
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          subject?: string | null
          type?: string
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: []
      }
      company_settings: {
        Row: {
          address: string
          city: string
          company_name: string
          country: string
          created_at: string
          currency: string
          date_format: string | null
          email: string | null
          id: string
          logo_url: string | null
          phone_number: string | null
          postal_code: string
          tax_rate: number | null
          time_format: string | null
          timezone: string | null
          updated_at: string
          vat_number: string | null
          website: string | null
        }
        Insert: {
          address: string
          city: string
          company_name: string
          country: string
          created_at?: string
          currency?: string
          date_format?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          phone_number?: string | null
          postal_code: string
          tax_rate?: number | null
          time_format?: string | null
          timezone?: string | null
          updated_at?: string
          vat_number?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          city?: string
          company_name?: string
          country?: string
          created_at?: string
          currency?: string
          date_format?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          phone_number?: string | null
          postal_code?: string
          tax_rate?: number | null
          time_format?: string | null
          timezone?: string | null
          updated_at?: string
          vat_number?: string | null
          website?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          locale: string | null
          message: string
          name: string
          phone: string | null
          status: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          locale?: string | null
          message: string
          name: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          locale?: string | null
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      csv_bulk_import: {
        Row: {
          "* Introductory Biography": string | null
          "*Address": string | null
          "*Address 2": string | null
          "*Address Confirmation with Zip Code": string | null
          "*Age": string | null
          "*Amount ": string | null
          "*Any other information we need to know": string | null
          "*Behaviour concerns ": string | null
          "*Birthday of 2nd Pet": string | null
          "*Birthday of 3rd Pet": string | null
          "*Birthday of 4th Pet": string | null
          "*Birthday of Second Pet": string | null
          "*Birthday of Third Pet": string | null
          "*Brand of food": string | null
          "*Breed of 3rd Pet": string | null
          "*Breed of 4th Pet": string | null
          "*Breed of Second Pet": string | null
          "*Breed, color, description": string | null
          "*Bringing your dog to the event?": string | null
          "*Can we give treats to your pet?": string | null
          "*City": string | null
          "*Color": string | null
          "*Contact 2": string | null
          "*Country": string | null
          "*Current medical conditions": string | null
          "*Date of last Deworming, Tick & Flea treatment?": string | null
          "*Date of signature ": string | null
          "*Date of signature.": string | null
          "*Date of the last bordetella vaccine ": string | null
          "*Date of the last distemper/parvo vaccine ": string | null
          "*Date of the last heartworm test and results": string | null
          "*Do you have more than one pet -?": string | null
          "*Do you have more than one pet?": string | null
          "*Do you have more than one pet.?": string | null
          "*Do you have more than one pet..?": string | null
          "*Do you want a specific breed cut?": string | null
          "*Does your dog share toys with other dogs?": string | null
          "*Does your dog suffer from separation anxiety? ": string | null
          "*Dog owners": string | null
          "*Dog's Weight": string | null
          "*Email 2": string | null
          "*Emergency Clinic": string | null
          "*Emergency contact details ": string | null
          "*Emergency Contact's Full Name": string | null
          "*Emergency Contact's Phone Number": string | null
          "*First Pet Breed": string | null
          "*First Pet Size": string | null
          "*First Pet's Birthday": string | null
          "*First Pet's Health Status": string | null
          "*First Pet's Name": string | null
          "*Frequency ": string | null
          "*Friend/relative": string | null
          "*Full name": string | null
          "*Gender": string | null
          "*Gender,": string | null
          "*Has the puppy been vaccinated?": string | null
          "*Has your dog ever bitten another dog and broken the skin?":
            | string
            | null
          "*Has your dog ever exhibited any kind of aggression towards peo":
            | string
            | null
          "*Has your dog ever growled or bitten someone who takes their fo":
            | string
            | null
          "*Has your dog ever snapped or threatened to bite another dog or":
            | string
            | null
          "*Health Status of 3rd Pet": string | null
          "*Health Status of Fourth Pet": string | null
          "*Health Status of Second Pet": string | null
          "*How did we do?": string | null
          "*How does your dog walk on a leash?": string | null
          "*How Frequently Would you like the Service": string | null
          "*How Many Dogs Do You Have?": string | null
          "*How short should the groomer cuts your pet hair?": string | null
          "*I am interested in:": string | null
          "*If you were not Satisfied, please explain why and how we could":
            | string
            | null
          "*Instructions #1": string | null
          "*Instructions #2": string | null
          "*Instructions#1": string | null
          "*Insurance Company": string | null
          "*Insured": string | null
          "*Insured .": string | null
          "*Is this your pet first time to be groomed?": string | null
          "*Is your pet good around others?": string | null
          "*Languages Spoken": string | null
          "*Last Annual Vaccine Given": string | null
          "*Last rabies vaccine give": string | null
          "*Last Rabies Vaccine Given": string | null
          "*Micro Chip No.": string | null
          "*Micro Chipped": string | null
          "*Microchip no.": string | null
          "*Most Recent Service End Date": string | null
          "*Most Recent Service Start Date": string | null
          "*Name of 4th Pet": string | null
          "*Name of medications #1": string | null
          "*Name of medications #2": string | null
          "*Name of medications#2": string | null
          "*Name of Second Pet": string | null
          "*Name of Third Pet": string | null
          "*Name of Veterinarian": string | null
          "*Next Appointment": string | null
          "*Notes or additional information": string | null
          "*Pet health status": string | null
          "*Pet information ": string | null
          "*Pet owner(s) ": string | null
          "*Phone number": string | null
          "*Please provide the following veterinary services": string | null
          "*Please select your preferences": string | null
          "*Rabies certificate ": string | null
          "*Referral Code": string | null
          "*Referral Reward Starus": string | null
          "*Referrals Made": string | null
          "*Referred By Code": string | null
          "*Relationship to MyPet'rinarian": string | null
          "*Second Email": string | null
          "*Second Pet Size": string | null
          "*Second Pet's Last Annual Vaccine Given": string | null
          "*Second Pet's Last Rabies Vaccine Given": string | null
          "*Service Booked": string | null
          "*Sex of First Pet?": string | null
          "*Sex of other Pet/s (Youngest - Oldest)": string | null
          "*Signature of owner": string | null
          "*Spayed/Castrated ": string | null
          "*T-Shirt Size": string | null
          "*Terms and conditions": string | null
          "*Terms and conditions. ": string | null
          "*Third Pet's Last Annual Vaccine Given": string | null
          "*Third Pet's Last Rabies Vaccine Given": string | null
          "*Type of 3rd Pet": string | null
          "*Type of 4th Pet": string | null
          "*Type of First Pet": string | null
          "*Type of food": string | null
          "*Type of Pet": string | null
          "*Type of Second Pet": string | null
          "*Type of Third Pet": string | null
          "*Vaccination Book": string | null
          "*Vaccination due date": string | null
          "*Vaccines up to date ": string | null
          "*Veterinarian name": string | null
          "*Veterinarian phone number": string | null
          "*Veterinary Option": string | null
          "*Veterinary options": string | null
          "*Weight": string | null
          "*What experience does your dog have with other dogs in a group ":
            | string
            | null
          "*When Would You Like to Start?": string | null
          "*Will your pet need to be given any medication?": string | null
          "*Would you like these extra services?": string | null
          "*Zip": string | null
          "Account (previously Organization)": string | null
          "Account ID": string | null
          "Date Created": string | null
          depends_reason: string | null
          dog_dislikes: string | null
          dog_favorites: string | null
          Email: string | null
          "First Name": string | null
          ID: string | null
          "IP Address": string | null
          "Job Title": string | null
          key_handling: string | null
          "Last Name": string | null
          Organization: string | null
          owner_request: string | null
          "Phone Number": string | null
          Tags: string | null
          "User Agent": string | null
          vaccine_question: string | null
          vet_authorization: string | null
        }
        Insert: {
          "* Introductory Biography"?: string | null
          "*Address"?: string | null
          "*Address 2"?: string | null
          "*Address Confirmation with Zip Code"?: string | null
          "*Age"?: string | null
          "*Amount "?: string | null
          "*Any other information we need to know"?: string | null
          "*Behaviour concerns "?: string | null
          "*Birthday of 2nd Pet"?: string | null
          "*Birthday of 3rd Pet"?: string | null
          "*Birthday of 4th Pet"?: string | null
          "*Birthday of Second Pet"?: string | null
          "*Birthday of Third Pet"?: string | null
          "*Brand of food"?: string | null
          "*Breed of 3rd Pet"?: string | null
          "*Breed of 4th Pet"?: string | null
          "*Breed of Second Pet"?: string | null
          "*Breed, color, description"?: string | null
          "*Bringing your dog to the event?"?: string | null
          "*Can we give treats to your pet?"?: string | null
          "*City"?: string | null
          "*Color"?: string | null
          "*Contact 2"?: string | null
          "*Country"?: string | null
          "*Current medical conditions"?: string | null
          "*Date of last Deworming, Tick & Flea treatment?"?: string | null
          "*Date of signature "?: string | null
          "*Date of signature."?: string | null
          "*Date of the last bordetella vaccine "?: string | null
          "*Date of the last distemper/parvo vaccine "?: string | null
          "*Date of the last heartworm test and results"?: string | null
          "*Do you have more than one pet -?"?: string | null
          "*Do you have more than one pet?"?: string | null
          "*Do you have more than one pet.?"?: string | null
          "*Do you have more than one pet..?"?: string | null
          "*Do you want a specific breed cut?"?: string | null
          "*Does your dog share toys with other dogs?"?: string | null
          "*Does your dog suffer from separation anxiety? "?: string | null
          "*Dog owners"?: string | null
          "*Dog's Weight"?: string | null
          "*Email 2"?: string | null
          "*Emergency Clinic"?: string | null
          "*Emergency contact details "?: string | null
          "*Emergency Contact's Full Name"?: string | null
          "*Emergency Contact's Phone Number"?: string | null
          "*First Pet Breed"?: string | null
          "*First Pet Size"?: string | null
          "*First Pet's Birthday"?: string | null
          "*First Pet's Health Status"?: string | null
          "*First Pet's Name"?: string | null
          "*Frequency "?: string | null
          "*Friend/relative"?: string | null
          "*Full name"?: string | null
          "*Gender"?: string | null
          "*Gender,"?: string | null
          "*Has the puppy been vaccinated?"?: string | null
          "*Has your dog ever bitten another dog and broken the skin?"?:
            | string
            | null
          "*Has your dog ever exhibited any kind of aggression towards peo"?:
            | string
            | null
          "*Has your dog ever growled or bitten someone who takes their fo"?:
            | string
            | null
          "*Has your dog ever snapped or threatened to bite another dog or"?:
            | string
            | null
          "*Health Status of 3rd Pet"?: string | null
          "*Health Status of Fourth Pet"?: string | null
          "*Health Status of Second Pet"?: string | null
          "*How did we do?"?: string | null
          "*How does your dog walk on a leash?"?: string | null
          "*How Frequently Would you like the Service"?: string | null
          "*How Many Dogs Do You Have?"?: string | null
          "*How short should the groomer cuts your pet hair?"?: string | null
          "*I am interested in:"?: string | null
          "*If you were not Satisfied, please explain why and how we could"?:
            | string
            | null
          "*Instructions #1"?: string | null
          "*Instructions #2"?: string | null
          "*Instructions#1"?: string | null
          "*Insurance Company"?: string | null
          "*Insured"?: string | null
          "*Insured ."?: string | null
          "*Is this your pet first time to be groomed?"?: string | null
          "*Is your pet good around others?"?: string | null
          "*Languages Spoken"?: string | null
          "*Last Annual Vaccine Given"?: string | null
          "*Last rabies vaccine give"?: string | null
          "*Last Rabies Vaccine Given"?: string | null
          "*Micro Chip No."?: string | null
          "*Micro Chipped"?: string | null
          "*Microchip no."?: string | null
          "*Most Recent Service End Date"?: string | null
          "*Most Recent Service Start Date"?: string | null
          "*Name of 4th Pet"?: string | null
          "*Name of medications #1"?: string | null
          "*Name of medications #2"?: string | null
          "*Name of medications#2"?: string | null
          "*Name of Second Pet"?: string | null
          "*Name of Third Pet"?: string | null
          "*Name of Veterinarian"?: string | null
          "*Next Appointment"?: string | null
          "*Notes or additional information"?: string | null
          "*Pet health status"?: string | null
          "*Pet information "?: string | null
          "*Pet owner(s) "?: string | null
          "*Phone number"?: string | null
          "*Please provide the following veterinary services"?: string | null
          "*Please select your preferences"?: string | null
          "*Rabies certificate "?: string | null
          "*Referral Code"?: string | null
          "*Referral Reward Starus"?: string | null
          "*Referrals Made"?: string | null
          "*Referred By Code"?: string | null
          "*Relationship to MyPet'rinarian"?: string | null
          "*Second Email"?: string | null
          "*Second Pet Size"?: string | null
          "*Second Pet's Last Annual Vaccine Given"?: string | null
          "*Second Pet's Last Rabies Vaccine Given"?: string | null
          "*Service Booked"?: string | null
          "*Sex of First Pet?"?: string | null
          "*Sex of other Pet/s (Youngest - Oldest)"?: string | null
          "*Signature of owner"?: string | null
          "*Spayed/Castrated "?: string | null
          "*T-Shirt Size"?: string | null
          "*Terms and conditions"?: string | null
          "*Terms and conditions. "?: string | null
          "*Third Pet's Last Annual Vaccine Given"?: string | null
          "*Third Pet's Last Rabies Vaccine Given"?: string | null
          "*Type of 3rd Pet"?: string | null
          "*Type of 4th Pet"?: string | null
          "*Type of First Pet"?: string | null
          "*Type of food"?: string | null
          "*Type of Pet"?: string | null
          "*Type of Second Pet"?: string | null
          "*Type of Third Pet"?: string | null
          "*Vaccination Book"?: string | null
          "*Vaccination due date"?: string | null
          "*Vaccines up to date "?: string | null
          "*Veterinarian name"?: string | null
          "*Veterinarian phone number"?: string | null
          "*Veterinary Option"?: string | null
          "*Veterinary options"?: string | null
          "*Weight"?: string | null
          "*What experience does your dog have with other dogs in a group "?:
            | string
            | null
          "*When Would You Like to Start?"?: string | null
          "*Will your pet need to be given any medication?"?: string | null
          "*Would you like these extra services?"?: string | null
          "*Zip"?: string | null
          "Account (previously Organization)"?: string | null
          "Account ID"?: string | null
          "Date Created"?: string | null
          depends_reason?: string | null
          dog_dislikes?: string | null
          dog_favorites?: string | null
          Email?: string | null
          "First Name"?: string | null
          ID?: string | null
          "IP Address"?: string | null
          "Job Title"?: string | null
          key_handling?: string | null
          "Last Name"?: string | null
          Organization?: string | null
          owner_request?: string | null
          "Phone Number"?: string | null
          Tags?: string | null
          "User Agent"?: string | null
          vaccine_question?: string | null
          vet_authorization?: string | null
        }
        Update: {
          "* Introductory Biography"?: string | null
          "*Address"?: string | null
          "*Address 2"?: string | null
          "*Address Confirmation with Zip Code"?: string | null
          "*Age"?: string | null
          "*Amount "?: string | null
          "*Any other information we need to know"?: string | null
          "*Behaviour concerns "?: string | null
          "*Birthday of 2nd Pet"?: string | null
          "*Birthday of 3rd Pet"?: string | null
          "*Birthday of 4th Pet"?: string | null
          "*Birthday of Second Pet"?: string | null
          "*Birthday of Third Pet"?: string | null
          "*Brand of food"?: string | null
          "*Breed of 3rd Pet"?: string | null
          "*Breed of 4th Pet"?: string | null
          "*Breed of Second Pet"?: string | null
          "*Breed, color, description"?: string | null
          "*Bringing your dog to the event?"?: string | null
          "*Can we give treats to your pet?"?: string | null
          "*City"?: string | null
          "*Color"?: string | null
          "*Contact 2"?: string | null
          "*Country"?: string | null
          "*Current medical conditions"?: string | null
          "*Date of last Deworming, Tick & Flea treatment?"?: string | null
          "*Date of signature "?: string | null
          "*Date of signature."?: string | null
          "*Date of the last bordetella vaccine "?: string | null
          "*Date of the last distemper/parvo vaccine "?: string | null
          "*Date of the last heartworm test and results"?: string | null
          "*Do you have more than one pet -?"?: string | null
          "*Do you have more than one pet?"?: string | null
          "*Do you have more than one pet.?"?: string | null
          "*Do you have more than one pet..?"?: string | null
          "*Do you want a specific breed cut?"?: string | null
          "*Does your dog share toys with other dogs?"?: string | null
          "*Does your dog suffer from separation anxiety? "?: string | null
          "*Dog owners"?: string | null
          "*Dog's Weight"?: string | null
          "*Email 2"?: string | null
          "*Emergency Clinic"?: string | null
          "*Emergency contact details "?: string | null
          "*Emergency Contact's Full Name"?: string | null
          "*Emergency Contact's Phone Number"?: string | null
          "*First Pet Breed"?: string | null
          "*First Pet Size"?: string | null
          "*First Pet's Birthday"?: string | null
          "*First Pet's Health Status"?: string | null
          "*First Pet's Name"?: string | null
          "*Frequency "?: string | null
          "*Friend/relative"?: string | null
          "*Full name"?: string | null
          "*Gender"?: string | null
          "*Gender,"?: string | null
          "*Has the puppy been vaccinated?"?: string | null
          "*Has your dog ever bitten another dog and broken the skin?"?:
            | string
            | null
          "*Has your dog ever exhibited any kind of aggression towards peo"?:
            | string
            | null
          "*Has your dog ever growled or bitten someone who takes their fo"?:
            | string
            | null
          "*Has your dog ever snapped or threatened to bite another dog or"?:
            | string
            | null
          "*Health Status of 3rd Pet"?: string | null
          "*Health Status of Fourth Pet"?: string | null
          "*Health Status of Second Pet"?: string | null
          "*How did we do?"?: string | null
          "*How does your dog walk on a leash?"?: string | null
          "*How Frequently Would you like the Service"?: string | null
          "*How Many Dogs Do You Have?"?: string | null
          "*How short should the groomer cuts your pet hair?"?: string | null
          "*I am interested in:"?: string | null
          "*If you were not Satisfied, please explain why and how we could"?:
            | string
            | null
          "*Instructions #1"?: string | null
          "*Instructions #2"?: string | null
          "*Instructions#1"?: string | null
          "*Insurance Company"?: string | null
          "*Insured"?: string | null
          "*Insured ."?: string | null
          "*Is this your pet first time to be groomed?"?: string | null
          "*Is your pet good around others?"?: string | null
          "*Languages Spoken"?: string | null
          "*Last Annual Vaccine Given"?: string | null
          "*Last rabies vaccine give"?: string | null
          "*Last Rabies Vaccine Given"?: string | null
          "*Micro Chip No."?: string | null
          "*Micro Chipped"?: string | null
          "*Microchip no."?: string | null
          "*Most Recent Service End Date"?: string | null
          "*Most Recent Service Start Date"?: string | null
          "*Name of 4th Pet"?: string | null
          "*Name of medications #1"?: string | null
          "*Name of medications #2"?: string | null
          "*Name of medications#2"?: string | null
          "*Name of Second Pet"?: string | null
          "*Name of Third Pet"?: string | null
          "*Name of Veterinarian"?: string | null
          "*Next Appointment"?: string | null
          "*Notes or additional information"?: string | null
          "*Pet health status"?: string | null
          "*Pet information "?: string | null
          "*Pet owner(s) "?: string | null
          "*Phone number"?: string | null
          "*Please provide the following veterinary services"?: string | null
          "*Please select your preferences"?: string | null
          "*Rabies certificate "?: string | null
          "*Referral Code"?: string | null
          "*Referral Reward Starus"?: string | null
          "*Referrals Made"?: string | null
          "*Referred By Code"?: string | null
          "*Relationship to MyPet'rinarian"?: string | null
          "*Second Email"?: string | null
          "*Second Pet Size"?: string | null
          "*Second Pet's Last Annual Vaccine Given"?: string | null
          "*Second Pet's Last Rabies Vaccine Given"?: string | null
          "*Service Booked"?: string | null
          "*Sex of First Pet?"?: string | null
          "*Sex of other Pet/s (Youngest - Oldest)"?: string | null
          "*Signature of owner"?: string | null
          "*Spayed/Castrated "?: string | null
          "*T-Shirt Size"?: string | null
          "*Terms and conditions"?: string | null
          "*Terms and conditions. "?: string | null
          "*Third Pet's Last Annual Vaccine Given"?: string | null
          "*Third Pet's Last Rabies Vaccine Given"?: string | null
          "*Type of 3rd Pet"?: string | null
          "*Type of 4th Pet"?: string | null
          "*Type of First Pet"?: string | null
          "*Type of food"?: string | null
          "*Type of Pet"?: string | null
          "*Type of Second Pet"?: string | null
          "*Type of Third Pet"?: string | null
          "*Vaccination Book"?: string | null
          "*Vaccination due date"?: string | null
          "*Vaccines up to date "?: string | null
          "*Veterinarian name"?: string | null
          "*Veterinarian phone number"?: string | null
          "*Veterinary Option"?: string | null
          "*Veterinary options"?: string | null
          "*Weight"?: string | null
          "*What experience does your dog have with other dogs in a group "?:
            | string
            | null
          "*When Would You Like to Start?"?: string | null
          "*Will your pet need to be given any medication?"?: string | null
          "*Would you like these extra services?"?: string | null
          "*Zip"?: string | null
          "Account (previously Organization)"?: string | null
          "Account ID"?: string | null
          "Date Created"?: string | null
          depends_reason?: string | null
          dog_dislikes?: string | null
          dog_favorites?: string | null
          Email?: string | null
          "First Name"?: string | null
          ID?: string | null
          "IP Address"?: string | null
          "Job Title"?: string | null
          key_handling?: string | null
          "Last Name"?: string | null
          Organization?: string | null
          owner_request?: string | null
          "Phone Number"?: string | null
          Tags?: string | null
          "User Agent"?: string | null
          vaccine_question?: string | null
          vet_authorization?: string | null
        }
        Relationships: []
      }
      csv_import_simple: {
        Row: {
          address: string | null
          address_2: string | null
          behavior_concerns: string | null
          city: string | null
          country: string | null
          csv_id: string | null
          current_medical_conditions: string | null
          date_created: string | null
          email: string | null
          first_name: string | null
          first_pet_birthday: string | null
          first_pet_breed: string | null
          first_pet_color: string | null
          first_pet_health_status: string | null
          first_pet_microchip: string | null
          first_pet_name: string | null
          first_pet_sex: string | null
          first_pet_type: string | null
          last_name: string | null
          medications_1: string | null
          medications_2: string | null
          pet_notes: string | null
          phone_number: string | null
          second_pet_birthday: string | null
          second_pet_breed: string | null
          second_pet_health_status: string | null
          second_pet_name: string | null
          second_pet_type: string | null
          third_pet_birthday: string | null
          third_pet_breed: string | null
          third_pet_health_status: string | null
          third_pet_name: string | null
          third_pet_type: string | null
          zip: string | null
        }
        Insert: {
          address?: string | null
          address_2?: string | null
          behavior_concerns?: string | null
          city?: string | null
          country?: string | null
          csv_id?: string | null
          current_medical_conditions?: string | null
          date_created?: string | null
          email?: string | null
          first_name?: string | null
          first_pet_birthday?: string | null
          first_pet_breed?: string | null
          first_pet_color?: string | null
          first_pet_health_status?: string | null
          first_pet_microchip?: string | null
          first_pet_name?: string | null
          first_pet_sex?: string | null
          first_pet_type?: string | null
          last_name?: string | null
          medications_1?: string | null
          medications_2?: string | null
          pet_notes?: string | null
          phone_number?: string | null
          second_pet_birthday?: string | null
          second_pet_breed?: string | null
          second_pet_health_status?: string | null
          second_pet_name?: string | null
          second_pet_type?: string | null
          third_pet_birthday?: string | null
          third_pet_breed?: string | null
          third_pet_health_status?: string | null
          third_pet_name?: string | null
          third_pet_type?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          address_2?: string | null
          behavior_concerns?: string | null
          city?: string | null
          country?: string | null
          csv_id?: string | null
          current_medical_conditions?: string | null
          date_created?: string | null
          email?: string | null
          first_name?: string | null
          first_pet_birthday?: string | null
          first_pet_breed?: string | null
          first_pet_color?: string | null
          first_pet_health_status?: string | null
          first_pet_microchip?: string | null
          first_pet_name?: string | null
          first_pet_sex?: string | null
          first_pet_type?: string | null
          last_name?: string | null
          medications_1?: string | null
          medications_2?: string | null
          pet_notes?: string | null
          phone_number?: string | null
          second_pet_birthday?: string | null
          second_pet_breed?: string | null
          second_pet_health_status?: string | null
          second_pet_name?: string | null
          second_pet_type?: string | null
          third_pet_birthday?: string | null
          third_pet_breed?: string | null
          third_pet_health_status?: string | null
          third_pet_name?: string | null
          third_pet_type?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      csv_raw_import: {
        Row: {
          import_data: Json | null
        }
        Insert: {
          import_data?: Json | null
        }
        Update: {
          import_data?: Json | null
        }
        Relationships: []
      }
      customer_billing_settings: {
        Row: {
          auto_pay_enabled: boolean | null
          billing_address: Json | null
          created_at: string | null
          customer_id: string
          default_payment_method: string | null
          email_invoices: boolean | null
          id: string
          late_fee_amount: number | null
          late_fee_enabled: boolean | null
          late_fee_percentage: number | null
          payment_terms: number | null
          tax_exempt: boolean | null
          tax_exemption_id: string | null
          updated_at: string | null
        }
        Insert: {
          auto_pay_enabled?: boolean | null
          billing_address?: Json | null
          created_at?: string | null
          customer_id: string
          default_payment_method?: string | null
          email_invoices?: boolean | null
          id?: string
          late_fee_amount?: number | null
          late_fee_enabled?: boolean | null
          late_fee_percentage?: number | null
          payment_terms?: number | null
          tax_exempt?: boolean | null
          tax_exemption_id?: string | null
          updated_at?: string | null
        }
        Update: {
          auto_pay_enabled?: boolean | null
          billing_address?: Json | null
          created_at?: string | null
          customer_id?: string
          default_payment_method?: string | null
          email_invoices?: boolean | null
          id?: string
          late_fee_amount?: number | null
          late_fee_enabled?: boolean | null
          late_fee_percentage?: number | null
          payment_terms?: number | null
          tax_exempt?: boolean | null
          tax_exemption_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_billing_settings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: true
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_billing_settings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: true
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_loyalty: {
        Row: {
          created_at: string | null
          current_points: number | null
          current_tier_id: string | null
          customer_id: string | null
          id: string
          lifetime_points: number | null
          tier_start_date: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_points?: number | null
          current_tier_id?: string | null
          customer_id?: string | null
          id?: string
          lifetime_points?: number | null
          tier_start_date?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_points?: number | null
          current_tier_id?: string | null
          customer_id?: string | null
          id?: string
          lifetime_points?: number | null
          tier_start_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_loyalty_current_tier_id_fkey"
            columns: ["current_tier_id"]
            isOneToOne: false
            referencedRelation: "loyalty_programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_loyalty_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_loyalty_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_payment_methods: {
        Row: {
          account_type: string | null
          bank_name: string | null
          brand: string | null
          created_at: string | null
          customer_id: string
          expiry_date: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          last_four: string | null
          name: string
          routing_number: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          account_type?: string | null
          bank_name?: string | null
          brand?: string | null
          created_at?: string | null
          customer_id: string
          expiry_date?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          last_four?: string | null
          name: string
          routing_number?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          account_type?: string | null
          bank_name?: string | null
          brand?: string | null
          created_at?: string | null
          customer_id?: string
          expiry_date?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          last_four?: string | null
          name?: string
          routing_number?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_payment_methods_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_payment_methods_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_statistics: {
        Row: {
          average_booking_value: number | null
          cancelled_bookings: number | null
          customer_id: string | null
          favorite_pet_id: string | null
          favorite_service_id: string | null
          first_booking_date: string | null
          id: string
          last_booking_date: string | null
          last_calculated_at: string | null
          loyalty_tier: string | null
          metadata: Json | null
          no_show_bookings: number | null
          total_bookings: number | null
          total_spent: number | null
        }
        Insert: {
          average_booking_value?: number | null
          cancelled_bookings?: number | null
          customer_id?: string | null
          favorite_pet_id?: string | null
          favorite_service_id?: string | null
          first_booking_date?: string | null
          id?: string
          last_booking_date?: string | null
          last_calculated_at?: string | null
          loyalty_tier?: string | null
          metadata?: Json | null
          no_show_bookings?: number | null
          total_bookings?: number | null
          total_spent?: number | null
        }
        Update: {
          average_booking_value?: number | null
          cancelled_bookings?: number | null
          customer_id?: string | null
          favorite_pet_id?: string | null
          favorite_service_id?: string | null
          first_booking_date?: string | null
          id?: string
          last_booking_date?: string | null
          last_calculated_at?: string | null
          loyalty_tier?: string | null
          metadata?: Json | null
          no_show_bookings?: number | null
          total_bookings?: number | null
          total_spent?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_statistics_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_statistics_favorite_pet_id_fkey"
            columns: ["favorite_pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_statistics_favorite_pet_id_fkey"
            columns: ["favorite_pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_statistics_favorite_service_id_fkey"
            columns: ["favorite_service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_statistics_favorite_service_id_fkey"
            columns: ["favorite_service_id"]
            isOneToOne: false
            referencedRelation: "services_with_duration_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_statistics_favorite_service_id_fkey"
            columns: ["favorite_service_id"]
            isOneToOne: false
            referencedRelation: "services_with_profit"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_subscriptions: {
        Row: {
          activated_at: string | null
          amount_paid: number | null
          billing_interval: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          cancellation_date: string | null
          cancellation_effective_date: string | null
          cancellation_reason: string | null
          cancellation_requested_at: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_id: string | null
          downgrade_reason: string | null
          downgrade_request_date: string | null
          end_date: string | null
          id: string
          is_refundable: boolean | null
          last_payment_date: string | null
          next_renewal_date: string | null
          payment_status: string | null
          pet_id: string | null
          previous_subscription_id: string | null
          refund_date: string | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_plan_id: string | null
          terms_accepted_at: string | null
          terms_version: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        Insert: {
          activated_at?: string | null
          amount_paid?: number | null
          billing_interval?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_date?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          downgrade_reason?: string | null
          downgrade_request_date?: string | null
          end_date?: string | null
          id?: string
          is_refundable?: boolean | null
          last_payment_date?: string | null
          next_renewal_date?: string | null
          payment_status?: string | null
          pet_id?: string | null
          previous_subscription_id?: string | null
          refund_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Update: {
          activated_at?: string | null
          amount_paid?: number | null
          billing_interval?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_date?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          downgrade_reason?: string | null
          downgrade_request_date?: string | null
          end_date?: string | null
          id?: string
          is_refundable?: boolean | null
          last_payment_date?: string | null
          next_renewal_date?: string | null
          payment_status?: string | null
          pet_id?: string | null
          previous_subscription_id?: string | null
          refund_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_subscriptions_previous_subscription_id_fkey"
            columns: ["previous_subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_subscriptions_previous_subscription_id_fkey"
            columns: ["previous_subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_subscriptions_previous_subscription_id_fkey"
            columns: ["previous_subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_subscriptions_previous_subscription_id_fkey"
            columns: ["previous_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_subscriptions_previous_subscription_id_fkey"
            columns: ["previous_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_youtubes: {
        Row: {
          answer_text: string | null
          answer_value: Json | null
          asked_at: string | null
          booking_id: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          question_id: string | null
          question_text: string | null
          question_type: string | null
          source: string | null
          updated_at: string | null
        }
        Insert: {
          answer_text?: string | null
          answer_value?: Json | null
          asked_at?: string | null
          booking_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          source?: string | null
          updated_at?: string | null
        }
        Update: {
          answer_text?: string | null
          answer_value?: Json | null
          asked_at?: string | null
          booking_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          question_id?: string | null
          question_text?: string | null
          question_type?: string | null
          source?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_youtubes_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_youtubes_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          active: boolean
          address: string | null
          alternative_emails: string[] | null
          alternative_phones: string[] | null
          checkfront_customer_id: string | null
          city: string | null
          country: string | null
          created_at: string | null
          email: string
          first_name: string
          has_only_deceased_pets: boolean | null
          id: string
          is_relocated: boolean
          last_name: string
          last_verification_date: string | null
          merge_history: Json | null
          notes: string | null
          phone: string | null
          postal_code: string | null
          profile_verification_required: boolean | null
          relocated: boolean | null
          source: string | null
          stripe_customer_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          active?: boolean
          address?: string | null
          alternative_emails?: string[] | null
          alternative_phones?: string[] | null
          checkfront_customer_id?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email: string
          first_name: string
          has_only_deceased_pets?: boolean | null
          id: string
          is_relocated?: boolean
          last_name: string
          last_verification_date?: string | null
          merge_history?: Json | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          profile_verification_required?: boolean | null
          relocated?: boolean | null
          source?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          active?: boolean
          address?: string | null
          alternative_emails?: string[] | null
          alternative_phones?: string[] | null
          checkfront_customer_id?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email?: string
          first_name?: string
          has_only_deceased_pets?: boolean | null
          id?: string
          is_relocated?: boolean
          last_name?: string
          last_verification_date?: string | null
          merge_history?: Json | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          profile_verification_required?: boolean | null
          relocated?: boolean | null
          source?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      daycare_profiles: {
        Row: {
          buddy_pets: string[] | null
          created_at: string | null
          dislikes: string[] | null
          favorite_activities: string[] | null
          feeding_schedule: Json | null
          id: string
          medication_schedule: Json | null
          pet_id: string | null
          pickup_authorized_contacts: Json | null
          play_style: string | null
          socialization_level: string | null
          updated_at: string | null
        }
        Insert: {
          buddy_pets?: string[] | null
          created_at?: string | null
          dislikes?: string[] | null
          favorite_activities?: string[] | null
          feeding_schedule?: Json | null
          id?: string
          medication_schedule?: Json | null
          pet_id?: string | null
          pickup_authorized_contacts?: Json | null
          play_style?: string | null
          socialization_level?: string | null
          updated_at?: string | null
        }
        Update: {
          buddy_pets?: string[] | null
          created_at?: string | null
          dislikes?: string[] | null
          favorite_activities?: string[] | null
          feeding_schedule?: Json | null
          id?: string
          medication_schedule?: Json | null
          pet_id?: string | null
          pickup_authorized_contacts?: Json | null
          play_style?: string | null
          socialization_level?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "daycare_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daycare_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      daycare_visits: {
        Row: {
          activities_participated: string[] | null
          behavior_notes: string | null
          booking_id: string | null
          check_in_time: string | null
          check_out_time: string | null
          created_at: string | null
          id: string
          meals_eaten: number | null
          medications_given: Json | null
          pet_id: string | null
          photos: string[] | null
          staff_notes: string | null
        }
        Insert: {
          activities_participated?: string[] | null
          behavior_notes?: string | null
          booking_id?: string | null
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string | null
          id?: string
          meals_eaten?: number | null
          medications_given?: Json | null
          pet_id?: string | null
          photos?: string[] | null
          staff_notes?: string | null
        }
        Update: {
          activities_participated?: string[] | null
          behavior_notes?: string | null
          booking_id?: string | null
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string | null
          id?: string
          meals_eaten?: number | null
          medications_given?: Json | null
          pet_id?: string | null
          photos?: string[] | null
          staff_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "daycare_visits_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daycare_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daycare_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_code_categories: {
        Row: {
          category_id: string | null
          created_at: string | null
          discount_code_id: string | null
          id: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          discount_code_id?: string | null
          id?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          discount_code_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discount_code_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discount_code_categories_discount_code_id_fkey"
            columns: ["discount_code_id"]
            isOneToOne: false
            referencedRelation: "discount_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_codes: {
        Row: {
          applies_to: string | null
          code: string
          created_at: string | null
          created_by: string | null
          currency: string | null
          current_uses: number | null
          description: string | null
          discount_type: string
          discount_value: number
          id: string
          is_active: boolean | null
          max_uses_per_client: number | null
          max_uses_total: number | null
          min_order_amount: number | null
          name: string
          specific_client_id: string | null
          updated_at: string | null
          updated_by: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          applies_to?: string | null
          code: string
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          current_uses?: number | null
          description?: string | null
          discount_type: string
          discount_value: number
          id?: string
          is_active?: boolean | null
          max_uses_per_client?: number | null
          max_uses_total?: number | null
          min_order_amount?: number | null
          name: string
          specific_client_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          applies_to?: string | null
          code?: string
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          current_uses?: number | null
          description?: string | null
          discount_type?: string
          discount_value?: number
          id?: string
          is_active?: boolean | null
          max_uses_per_client?: number | null
          max_uses_total?: number | null
          min_order_amount?: number | null
          name?: string
          specific_client_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_codes_specific_client_id_fkey"
            columns: ["specific_client_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "discount_codes_specific_client_id_fkey"
            columns: ["specific_client_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_usage: {
        Row: {
          applied_by: string | null
          customer_id: string | null
          discount_amount: number
          discount_code_id: string | null
          id: string
          invoice_id: string | null
          order_total: number
          usage_date: string | null
        }
        Insert: {
          applied_by?: string | null
          customer_id?: string | null
          discount_amount: number
          discount_code_id?: string | null
          id?: string
          invoice_id?: string | null
          order_total: number
          usage_date?: string | null
        }
        Update: {
          applied_by?: string | null
          customer_id?: string | null
          discount_amount?: number
          discount_code_id?: string | null
          id?: string
          invoice_id?: string | null
          order_total?: number
          usage_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_usage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "discount_usage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discount_usage_discount_code_id_fkey"
            columns: ["discount_code_id"]
            isOneToOne: false
            referencedRelation: "discount_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      external_data_mapping: {
        Row: {
          created_at: string | null
          entity_type: string
          external_id: string
          id: string
          integration_type: string
          internal_id: string
          mapping_data: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          entity_type: string
          external_id: string
          id?: string
          integration_type: string
          internal_id: string
          mapping_data?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          entity_type?: string
          external_id?: string
          id?: string
          integration_type?: string
          internal_id?: string
          mapping_data?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fake_appointments: {
        Row: {
          created_at: string | null
          end_time: string
          id: string
          service_id: string
          staff_id: string
          start_time: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          end_time: string
          id?: string
          service_id: string
          staff_id: string
          start_time: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string
          id?: string
          service_id?: string
          staff_id?: string
          start_time?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_service"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      grooming_profiles: {
        Row: {
          coat_type: string | null
          created_at: string | null
          ear_cleaning_required: boolean | null
          id: string
          nail_trim_frequency: string | null
          pet_id: string | null
          preferred_groomer_id: string | null
          preferred_style: string | null
          sensitive_areas: string | null
          special_instructions: string | null
          teeth_cleaning_required: boolean | null
          updated_at: string | null
        }
        Insert: {
          coat_type?: string | null
          created_at?: string | null
          ear_cleaning_required?: boolean | null
          id?: string
          nail_trim_frequency?: string | null
          pet_id?: string | null
          preferred_groomer_id?: string | null
          preferred_style?: string | null
          sensitive_areas?: string | null
          special_instructions?: string | null
          teeth_cleaning_required?: boolean | null
          updated_at?: string | null
        }
        Update: {
          coat_type?: string | null
          created_at?: string | null
          ear_cleaning_required?: boolean | null
          id?: string
          nail_trim_frequency?: string | null
          pet_id?: string | null
          preferred_groomer_id?: string | null
          preferred_style?: string | null
          sensitive_areas?: string | null
          special_instructions?: string | null
          teeth_cleaning_required?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "grooming_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_profiles_preferred_groomer_id_fkey"
            columns: ["preferred_groomer_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_profiles_preferred_groomer_id_fkey"
            columns: ["preferred_groomer_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_profiles_preferred_groomer_id_fkey"
            columns: ["preferred_groomer_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      grooming_visits: {
        Row: {
          after_photos: string[] | null
          before_photos: string[] | null
          booking_id: string | null
          condition_notes: string | null
          created_at: string | null
          groomer_id: string | null
          id: string
          next_recommended_date: string | null
          pet_id: string | null
          services_performed: string[] | null
        }
        Insert: {
          after_photos?: string[] | null
          before_photos?: string[] | null
          booking_id?: string | null
          condition_notes?: string | null
          created_at?: string | null
          groomer_id?: string | null
          id?: string
          next_recommended_date?: string | null
          pet_id?: string | null
          services_performed?: string[] | null
        }
        Update: {
          after_photos?: string[] | null
          before_photos?: string[] | null
          booking_id?: string | null
          condition_notes?: string | null
          created_at?: string | null
          groomer_id?: string | null
          id?: string
          next_recommended_date?: string | null
          pet_id?: string | null
          services_performed?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "grooming_visits_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_visits_groomer_id_fkey"
            columns: ["groomer_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_visits_groomer_id_fkey"
            columns: ["groomer_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_visits_groomer_id_fkey"
            columns: ["groomer_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grooming_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hr: {
        Row: {
          address: string | null
          availability: Json | null
          birth_date: string | null
          certifications: string[] | null
          city: string | null
          country: string | null
          created_at: string | null
          department: string | null
          email: string
          first_name: string
          hire_date: string | null
          id: string
          last_name: string
          manager_id: string | null
          notes: string | null
          pay_rate: number | null
          phone: string | null
          position: string | null
          postal_code: string | null
          role: string
          salary_type: string | null
          schedule_type: string | null
          specialties: string[] | null
          state: string | null
          status: string | null
          updated_at: string | null
          work_hours: string[] | null
        }
        Insert: {
          address?: string | null
          availability?: Json | null
          birth_date?: string | null
          certifications?: string[] | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          department?: string | null
          email: string
          first_name: string
          hire_date?: string | null
          id?: string
          last_name: string
          manager_id?: string | null
          notes?: string | null
          pay_rate?: number | null
          phone?: string | null
          position?: string | null
          postal_code?: string | null
          role: string
          salary_type?: string | null
          schedule_type?: string | null
          specialties?: string[] | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          work_hours?: string[] | null
        }
        Update: {
          address?: string | null
          availability?: Json | null
          birth_date?: string | null
          certifications?: string[] | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          department?: string | null
          email?: string
          first_name?: string
          hire_date?: string | null
          id?: string
          last_name?: string
          manager_id?: string | null
          notes?: string | null
          pay_rate?: number | null
          phone?: string | null
          position?: string | null
          postal_code?: string | null
          role?: string
          salary_type?: string | null
          schedule_type?: string | null
          specialties?: string[] | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          work_hours?: string[] | null
        }
        Relationships: []
      }
      import_jobs: {
        Row: {
          created_at: string
          id: number
          source_type: string | null
          source_url: string | null
          status:
            | Database["public"]["Enums"]["CREATE TYPE import_source_enum AS ENUM"]
            | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          source_type?: string | null
          source_url?: string | null
          status?:
            | Database["public"]["Enums"]["CREATE TYPE import_source_enum AS ENUM"]
            | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          source_type?: string | null
          source_url?: string | null
          status?:
            | Database["public"]["Enums"]["CREATE TYPE import_source_enum AS ENUM"]
            | null
          user_id?: string | null
        }
        Relationships: []
      }
      import_preview_data: {
        Row: {
          created_at: string
          id: number
          import_job_id: string | null
          matched_client_id: string | null
          raw_data: Json | null
          resolved: boolean | null
          status:
            | Database["public"]["Enums"]["CREATE TYPE preview_status_enum AS ENUM"]
            | null
        }
        Insert: {
          created_at?: string
          id?: number
          import_job_id?: string | null
          matched_client_id?: string | null
          raw_data?: Json | null
          resolved?: boolean | null
          status?:
            | Database["public"]["Enums"]["CREATE TYPE preview_status_enum AS ENUM"]
            | null
        }
        Update: {
          created_at?: string
          id?: number
          import_job_id?: string | null
          matched_client_id?: string | null
          raw_data?: Json | null
          resolved?: boolean | null
          status?:
            | Database["public"]["Enums"]["CREATE TYPE preview_status_enum AS ENUM"]
            | null
        }
        Relationships: []
      }
      integration_sync_log: {
        Row: {
          completed_at: string | null
          created_by: string | null
          error_details: string | null
          id: string
          integration_type: string
          metadata: Json | null
          records_failed: number | null
          records_processed: number | null
          records_success: number | null
          started_at: string | null
          status: string
          sync_type: string
        }
        Insert: {
          completed_at?: string | null
          created_by?: string | null
          error_details?: string | null
          id?: string
          integration_type: string
          metadata?: Json | null
          records_failed?: number | null
          records_processed?: number | null
          records_success?: number | null
          started_at?: string | null
          status: string
          sync_type: string
        }
        Update: {
          completed_at?: string | null
          created_by?: string | null
          error_details?: string | null
          id?: string
          integration_type?: string
          metadata?: Json | null
          records_failed?: number | null
          records_processed?: number | null
          records_success?: number | null
          started_at?: string | null
          status?: string
          sync_type?: string
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          appointment_id: string | null
          checkfront_category_id: string | null
          checkfront_item_id: string | null
          created_at: string
          description: string | null
          id: string
          invoice_id: string
          name: string
          product_id: string | null
          quantity: number
          service_id: string | null
          total_price: number
          type: string
          unit_price: number
          updated_at: string
        }
        Insert: {
          appointment_id?: string | null
          checkfront_category_id?: string | null
          checkfront_item_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          invoice_id: string
          name: string
          product_id?: string | null
          quantity?: number
          service_id?: string | null
          total_price: number
          type: string
          unit_price: number
          updated_at?: string
        }
        Update: {
          appointment_id?: string | null
          checkfront_category_id?: string | null
          checkfront_item_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          invoice_id?: string
          name?: string
          product_id?: string | null
          quantity?: number
          service_id?: string | null
          total_price?: number
          type?: string
          unit_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_invoice_items_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_invoice_items_service_id"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_invoice_items_service_id"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_duration_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_invoice_items_service_id"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_profit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoice_analytics_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices_needing_line_items_sync"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          checkfront_booking_id: string | null
          checkfront_customer_id: string | null
          created_at: string
          customer_id: string | null
          discount_amount: number | null
          display_invoice_number: string | null
          due_date: string
          external_id: string | null
          id: string
          invoice_number: string
          issued_date: string
          notes: string | null
          paid_date: string | null
          payment_method: string | null
          service_end_date: string | null
          service_start_date: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id: string | null
          subtotal: number
          tax_amount: number
          total: number
          updated_at: string
        }
        Insert: {
          checkfront_booking_id?: string | null
          checkfront_customer_id?: string | null
          created_at?: string
          customer_id?: string | null
          discount_amount?: number | null
          display_invoice_number?: string | null
          due_date: string
          external_id?: string | null
          id?: string
          invoice_number: string
          issued_date?: string
          notes?: string | null
          paid_date?: string | null
          payment_method?: string | null
          service_end_date?: string | null
          service_start_date?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id?: string | null
          subtotal?: number
          tax_amount?: number
          total?: number
          updated_at?: string
        }
        Update: {
          checkfront_booking_id?: string | null
          checkfront_customer_id?: string | null
          created_at?: string
          customer_id?: string | null
          discount_amount?: number | null
          display_invoice_number?: string | null
          due_date?: string
          external_id?: string | null
          id?: string
          invoice_number?: string
          issued_date?: string
          notes?: string | null
          paid_date?: string | null
          payment_method?: string | null
          service_end_date?: string | null
          service_start_date?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id?: string | null
          subtotal?: number
          tax_amount?: number
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_programs: {
        Row: {
          benefits: Json | null
          created_at: string | null
          description: string | null
          discount_percentage: number | null
          id: string
          is_active: boolean | null
          name: string
          points_required: number
          tier_name: string
          updated_at: string | null
        }
        Insert: {
          benefits?: Json | null
          created_at?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          points_required: number
          tier_name: string
          updated_at?: string | null
        }
        Update: {
          benefits?: Json | null
          created_at?: string | null
          description?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          points_required?: number
          tier_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      medical_records: {
        Row: {
          booking_id: string | null
          chief_complaint: string | null
          created_at: string | null
          diagnosis: string | null
          examination_findings: string | null
          follow_up_date: string | null
          follow_up_required: boolean | null
          id: string
          pet_id: string | null
          prescriptions: Json | null
          treatment_plan: string | null
          updated_at: string | null
          veterinarian_id: string | null
          visit_date: string
        }
        Insert: {
          booking_id?: string | null
          chief_complaint?: string | null
          created_at?: string | null
          diagnosis?: string | null
          examination_findings?: string | null
          follow_up_date?: string | null
          follow_up_required?: boolean | null
          id?: string
          pet_id?: string | null
          prescriptions?: Json | null
          treatment_plan?: string | null
          updated_at?: string | null
          veterinarian_id?: string | null
          visit_date: string
        }
        Update: {
          booking_id?: string | null
          chief_complaint?: string | null
          created_at?: string | null
          diagnosis?: string | null
          examination_findings?: string | null
          follow_up_date?: string | null
          follow_up_required?: boolean | null
          id?: string
          pet_id?: string | null
          prescriptions?: Json | null
          treatment_plan?: string | null
          updated_at?: string | null
          veterinarian_id?: string | null
          visit_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_veterinarian_id_fkey"
            columns: ["veterinarian_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_veterinarian_id_fkey"
            columns: ["veterinarian_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_veterinarian_id_fkey"
            columns: ["veterinarian_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          locale: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          locale?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          locale?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          shipping_address: string | null
          shipping_amount: number | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          billing_address?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: string | null
          shipping_amount?: number | null
          status?: string | null
          subtotal: number
          tax_amount?: number | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          billing_address?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: string | null
          shipping_amount?: number | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_credentials: {
        Row: {
          created_at: string
          credential_type: string
          credential_value: string
          id: string
          is_active: boolean | null
          provider_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          credential_type: string
          credential_value: string
          id?: string
          is_active?: boolean | null
          provider_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          credential_type?: string
          credential_value?: string
          id?: string
          is_active?: boolean | null
          provider_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_credentials_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "payment_options"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_options: {
        Row: {
          created_at: string
          enabled: boolean | null
          icon: string | null
          id: string
          instructions: string | null
          is_integrated: boolean | null
          name: string
          processing_fee: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean | null
          icon?: string | null
          id: string
          instructions?: string | null
          is_integrated?: boolean | null
          name: string
          processing_fee?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          enabled?: boolean | null
          icon?: string | null
          id?: string
          instructions?: string | null
          is_integrated?: boolean | null
          name?: string
          processing_fee?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          customer_id: string
          id: string
          invoice_id: string
          method: string
          notes: string | null
          payment_method_id: string | null
          processed_at: string | null
          reference: string | null
          refund_amount: number | null
          refund_reason: string | null
          refunded_at: string | null
          status: string | null
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          customer_id: string
          id?: string
          invoice_id: string
          method: string
          notes?: string | null
          payment_method_id?: string | null
          processed_at?: string | null
          reference?: string | null
          refund_amount?: number | null
          refund_reason?: string | null
          refunded_at?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          customer_id?: string
          id?: string
          invoice_id?: string
          method?: string
          notes?: string | null
          payment_method_id?: string | null
          processed_at?: string | null
          reference?: string | null
          refund_amount?: number | null
          refund_reason?: string | null
          refunded_at?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoice_analytics_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices_needing_line_items_sync"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "customer_payment_methods"
            referencedColumns: ["id"]
          },
        ]
      }
      permission_audit_log: {
        Row: {
          action: string
          changed_by: string | null
          created_at: string | null
          entity_id: string | null
          entity_type: string
          id: string
          new_value: Json | null
          old_value: Json | null
          reason: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          changed_by?: string | null
          created_at?: string | null
          entity_id?: string | null
          entity_type: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          reason?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          changed_by?: string | null
          created_at?: string | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          reason?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      permissions: {
        Row: {
          action: string
          created_at: string
          description: string | null
          id: string
          resource: string
          updated_at: string
        }
        Insert: {
          action: string
          created_at?: string
          description?: string | null
          id?: string
          resource: string
          updated_at?: string
        }
        Update: {
          action?: string
          created_at?: string
          description?: string | null
          id?: string
          resource?: string
          updated_at?: string
        }
        Relationships: []
      }
      pet_allergies: {
        Row: {
          allergen: string
          created_at: string | null
          id: string
          notes: string | null
          pet_id: string
          reaction: string | null
          severity: string
          updated_at: string | null
        }
        Insert: {
          allergen: string
          created_at?: string | null
          id?: string
          notes?: string | null
          pet_id: string
          reaction?: string | null
          severity: string
          updated_at?: string | null
        }
        Update: {
          allergen?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          pet_id?: string
          reaction?: string | null
          severity?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_allergies_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_allergies_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_dietary_requirements: {
        Row: {
          created_at: string | null
          feeding_schedule: string | null
          food_type: string | null
          id: string
          pet_id: string
          requirement_name: string
          special_instructions: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          feeding_schedule?: string | null
          food_type?: string | null
          id?: string
          pet_id: string
          requirement_name: string
          special_instructions?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          feeding_schedule?: string | null
          food_type?: string | null
          id?: string
          pet_id?: string
          requirement_name?: string
          special_instructions?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_dietary_requirements_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_dietary_requirements_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_medications: {
        Row: {
          created_at: string | null
          dosage: string | null
          end_date: string | null
          frequency: string | null
          id: string
          instructions: string | null
          is_active: boolean | null
          name: string
          pet_id: string
          prescribing_vet: string | null
          start_date: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          dosage?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean | null
          name: string
          pet_id: string
          prescribing_vet?: string | null
          start_date: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          dosage?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean | null
          name?: string
          pet_id?: string
          prescribing_vet?: string | null
          start_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_medications_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_medications_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_services: {
        Row: {
          active: boolean | null
          base_price: number
          booking_method: string
          buffer_minutes: number | null
          category_id: string | null
          checkfront_id: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number
          id: string
          imported_from: string | null
          last_price_update: string | null
          location_type: string | null
          loyalty_eligible: boolean | null
          loyalty_threshold: number | null
          max_duration_days: number | null
          min_duration_days: number | null
          name: string
          original_price: number | null
          pet_types: string[] | null
          price_adjustment_factor: number | null
          profit_margin: number | null
          slot_duration_minutes: number | null
          updated_at: string | null
          variable_pricing: boolean | null
        }
        Insert: {
          active?: boolean | null
          base_price: number
          booking_method?: string
          buffer_minutes?: number | null
          category_id?: string | null
          checkfront_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes: number
          id?: string
          imported_from?: string | null
          last_price_update?: string | null
          location_type?: string | null
          loyalty_eligible?: boolean | null
          loyalty_threshold?: number | null
          max_duration_days?: number | null
          min_duration_days?: number | null
          name: string
          original_price?: number | null
          pet_types?: string[] | null
          price_adjustment_factor?: number | null
          profit_margin?: number | null
          slot_duration_minutes?: number | null
          updated_at?: string | null
          variable_pricing?: boolean | null
        }
        Update: {
          active?: boolean | null
          base_price?: number
          booking_method?: string
          buffer_minutes?: number | null
          category_id?: string | null
          checkfront_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number
          id?: string
          imported_from?: string | null
          last_price_update?: string | null
          location_type?: string | null
          loyalty_eligible?: boolean | null
          loyalty_threshold?: number | null
          max_duration_days?: number | null
          min_duration_days?: number | null
          name?: string
          original_price?: number | null
          pet_types?: string[] | null
          price_adjustment_factor?: number | null
          profit_margin?: number | null
          slot_duration_minutes?: number | null
          updated_at?: string | null
          variable_pricing?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_vaccinations: {
        Row: {
          batch_number: string | null
          created_at: string | null
          date_administered: string
          id: string
          manufacturer: string | null
          next_due_date: string | null
          notes: string | null
          pet_id: string
          reaction: string | null
          updated_at: string | null
          vaccine_name: string
          veterinarian: string | null
        }
        Insert: {
          batch_number?: string | null
          created_at?: string | null
          date_administered: string
          id?: string
          manufacturer?: string | null
          next_due_date?: string | null
          notes?: string | null
          pet_id: string
          reaction?: string | null
          updated_at?: string | null
          vaccine_name: string
          veterinarian?: string | null
        }
        Update: {
          batch_number?: string | null
          created_at?: string | null
          date_administered?: string
          id?: string
          manufacturer?: string | null
          next_due_date?: string | null
          notes?: string | null
          pet_id?: string
          reaction?: string | null
          updated_at?: string | null
          vaccine_name?: string
          veterinarian?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_vaccinations_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_vaccinations_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_weight_categories: {
        Row: {
          created_at: string | null
          id: string
          max_weight: number | null
          min_weight: number | null
          name: string
          weight_range: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          max_weight?: number | null
          min_weight?: number | null
          name: string
          weight_range: string
        }
        Update: {
          created_at?: string | null
          id?: string
          max_weight?: number | null
          min_weight?: number | null
          name?: string
          weight_range?: string
        }
        Relationships: []
      }
      pets: {
        Row: {
          age: number | null
          allergies: string[] | null
          birth_date: string | null
          birthdate: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          customer_id: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          gender: string | null
          id: string
          insurance_info: Json | null
          insurance_policy_number: string | null
          insurance_provider: string | null
          is_deceased: boolean | null
          is_microchipped: boolean | null
          is_neutered: boolean | null
          microchip_id: string | null
          microchip_number: string | null
          name: string
          notes: string | null
          profile_image: string | null
          sex: string | null
          size: string | null
          special_needs: string | null
          species: string
          updated_at: string | null
          vaccination_due_date: string | null
          vaccination_records: Json | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          weight: number | null
        }
        Insert: {
          age?: number | null
          allergies?: string[] | null
          birth_date?: string | null
          birthdate?: string | null
          breed?: string | null
          color?: string | null
          created_at?: string | null
          customer_id: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          gender?: string | null
          id?: string
          insurance_info?: Json | null
          insurance_policy_number?: string | null
          insurance_provider?: string | null
          is_deceased?: boolean | null
          is_microchipped?: boolean | null
          is_neutered?: boolean | null
          microchip_id?: string | null
          microchip_number?: string | null
          name: string
          notes?: string | null
          profile_image?: string | null
          sex?: string | null
          size?: string | null
          special_needs?: string | null
          species: string
          updated_at?: string | null
          vaccination_due_date?: string | null
          vaccination_records?: Json | null
          veterinarian_name?: string | null
          veterinarian_phone?: string | null
          weight?: number | null
        }
        Update: {
          age?: number | null
          allergies?: string[] | null
          birth_date?: string | null
          birthdate?: string | null
          breed?: string | null
          color?: string | null
          created_at?: string | null
          customer_id?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          gender?: string | null
          id?: string
          insurance_info?: Json | null
          insurance_policy_number?: string | null
          insurance_provider?: string | null
          is_deceased?: boolean | null
          is_microchipped?: boolean | null
          is_neutered?: boolean | null
          microchip_id?: string | null
          microchip_number?: string | null
          name?: string
          notes?: string | null
          profile_image?: string | null
          sex?: string | null
          size?: string | null
          special_needs?: string | null
          species?: string
          updated_at?: string | null
          vaccination_due_date?: string | null
          vaccination_records?: Json | null
          veterinarian_name?: string | null
          veterinarian_phone?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "pets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      price_adjustments: {
        Row: {
          adjustment_factor: number
          category_id: string | null
          created_at: string | null
          id: string
          reason: string | null
          services_affected: number | null
          table_name: string
          user_id: string | null
        }
        Insert: {
          adjustment_factor: number
          category_id?: string | null
          created_at?: string | null
          id?: string
          reason?: string | null
          services_affected?: number | null
          table_name: string
          user_id?: string | null
        }
        Update: {
          adjustment_factor?: number
          category_id?: string | null
          created_at?: string | null
          id?: string
          reason?: string | null
          services_affected?: number | null
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          active_ingredient: string | null
          administration_method: string | null
          batch_number: string | null
          brand: string | null
          category: string
          checkfront_id: string | null
          contraindications: string | null
          cost: number | null
          created_at: string | null
          description: string | null
          dimensions_cm: string | null
          dosage_form: string | null
          dosage_strength: string | null
          expiry_date: string | null
          for_species: Json | null
          id: string
          inventory_count: number | null
          is_active: boolean | null
          is_medication: boolean | null
          is_subscription_eligible: boolean | null
          low_stock_threshold: number | null
          manufacturer: string | null
          maximum_weight_kg: number | null
          medication_type: string | null
          minimum_age_months: number | null
          minimum_weight_kg: number | null
          name: string
          price: number
          requires_prescription: boolean | null
          side_effects: string | null
          sku: string | null
          storage_instructions: string | null
          subcategory: string | null
          supplier_id: string | null
          updated_at: string | null
          usage_instructions: string | null
          weight_kg: number | null
        }
        Insert: {
          active_ingredient?: string | null
          administration_method?: string | null
          batch_number?: string | null
          brand?: string | null
          category: string
          checkfront_id?: string | null
          contraindications?: string | null
          cost?: number | null
          created_at?: string | null
          description?: string | null
          dimensions_cm?: string | null
          dosage_form?: string | null
          dosage_strength?: string | null
          expiry_date?: string | null
          for_species?: Json | null
          id?: string
          inventory_count?: number | null
          is_active?: boolean | null
          is_medication?: boolean | null
          is_subscription_eligible?: boolean | null
          low_stock_threshold?: number | null
          manufacturer?: string | null
          maximum_weight_kg?: number | null
          medication_type?: string | null
          minimum_age_months?: number | null
          minimum_weight_kg?: number | null
          name: string
          price: number
          requires_prescription?: boolean | null
          side_effects?: string | null
          sku?: string | null
          storage_instructions?: string | null
          subcategory?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          usage_instructions?: string | null
          weight_kg?: number | null
        }
        Update: {
          active_ingredient?: string | null
          administration_method?: string | null
          batch_number?: string | null
          brand?: string | null
          category?: string
          checkfront_id?: string | null
          contraindications?: string | null
          cost?: number | null
          created_at?: string | null
          description?: string | null
          dimensions_cm?: string | null
          dosage_form?: string | null
          dosage_strength?: string | null
          expiry_date?: string | null
          for_species?: Json | null
          id?: string
          inventory_count?: number | null
          is_active?: boolean | null
          is_medication?: boolean | null
          is_subscription_eligible?: boolean | null
          low_stock_threshold?: number | null
          manufacturer?: string | null
          maximum_weight_kg?: number | null
          medication_type?: string | null
          minimum_age_months?: number | null
          minimum_weight_kg?: number | null
          name?: string
          price?: number
          requires_prescription?: boolean | null
          side_effects?: string | null
          sku?: string | null
          storage_instructions?: string | null
          subcategory?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          usage_instructions?: string | null
          weight_kg?: number | null
        }
        Relationships: []
      }
      profile_settings: {
        Row: {
          address: Json | null
          bio: string | null
          calendar_integration: Json | null
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          notifications: Json | null
          phone: string | null
          profile_image: string | null
          theme: string | null
          updated_at: string | null
        }
        Insert: {
          address?: Json | null
          bio?: string | null
          calendar_integration?: Json | null
          created_at?: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          notifications?: Json | null
          phone?: string | null
          profile_image?: string | null
          theme?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: Json | null
          bio?: string | null
          calendar_integration?: Json | null
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          notifications?: Json | null
          phone?: string | null
          profile_image?: string | null
          theme?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          checkfront_customer_id: string | null
          checkfront_data: Json | null
          created_at: string | null
          customer_since: string | null
          email: string | null
          external_id: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: string | null
          source: string | null
          total_bookings_count: number | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          checkfront_customer_id?: string | null
          checkfront_data?: Json | null
          created_at?: string | null
          customer_since?: string | null
          email?: string | null
          external_id?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          source?: string | null
          total_bookings_count?: number | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          checkfront_customer_id?: string | null
          checkfront_data?: Json | null
          created_at?: string | null
          customer_since?: string | null
          email?: string | null
          external_id?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          source?: string | null
          total_bookings_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      recurring_bookings: {
        Row: {
          created_at: string | null
          customer_id: string | null
          end_date: string | null
          frequency: string
          id: string
          is_active: boolean | null
          pet_id: string | null
          preferred_days: number[] | null
          preferred_time: string | null
          service_id: string | null
          staff_id: string | null
          start_date: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          end_date?: string | null
          frequency: string
          id?: string
          is_active?: boolean | null
          pet_id?: string | null
          preferred_days?: number[] | null
          preferred_time?: string | null
          service_id?: string | null
          staff_id?: string | null
          start_date: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          end_date?: string | null
          frequency?: string
          id?: string
          is_active?: boolean | null
          pet_id?: string | null
          preferred_days?: number[] | null
          preferred_time?: string | null
          service_id?: string | null
          staff_id?: string | null
          start_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recurring_bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "recurring_bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_duration_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services_with_profit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_bookings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_fraud_checks: {
        Row: {
          check_type: string | null
          created_at: string | null
          details: Json | null
          flagged: boolean | null
          id: string
          referral_id: string | null
          reviewed: boolean | null
          reviewed_at: string | null
          reviewed_by: string | null
          risk_score: number | null
        }
        Insert: {
          check_type?: string | null
          created_at?: string | null
          details?: Json | null
          flagged?: boolean | null
          id?: string
          referral_id?: string | null
          reviewed?: boolean | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          risk_score?: number | null
        }
        Update: {
          check_type?: string | null
          created_at?: string | null
          details?: Json | null
          flagged?: boolean | null
          id?: string
          referral_id?: string | null
          reviewed?: boolean | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          risk_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_fraud_checks_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_fraud_checks_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_fraud_checks_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_fraud_checks_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_rewards: {
        Row: {
          amount: number
          available_at: string | null
          created_at: string | null
          id: string
          redeemed_at: string | null
          redeemed_booking_id: string | null
          referral_id: string | null
          reward_type: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
          vesting_ends_at: string | null
          vesting_starts_at: string | null
        }
        Insert: {
          amount: number
          available_at?: string | null
          created_at?: string | null
          id?: string
          redeemed_at?: string | null
          redeemed_booking_id?: string | null
          referral_id?: string | null
          reward_type?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          vesting_ends_at?: string | null
          vesting_starts_at?: string | null
        }
        Update: {
          amount?: number
          available_at?: string | null
          created_at?: string | null
          id?: string
          redeemed_at?: string | null
          redeemed_booking_id?: string | null
          referral_id?: string | null
          reward_type?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          vesting_ends_at?: string | null
          vesting_starts_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_rewards_redeemed_booking_id_fkey"
            columns: ["redeemed_booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_rewards_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "referral_rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          clicked_at: string | null
          created_at: string | null
          device_fingerprint: string | null
          expires_at: string | null
          first_purchase_at: string | null
          friend_email: string | null
          friend_id: string | null
          friend_purchase_amount: number | null
          friend_reward_amount: number | null
          id: string
          ip_address: unknown | null
          referral_code: string
          referral_link: string
          referrer_id: string | null
          referrer_reward_amount: number | null
          share_channel: string | null
          signed_up_at: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          clicked_at?: string | null
          created_at?: string | null
          device_fingerprint?: string | null
          expires_at?: string | null
          first_purchase_at?: string | null
          friend_email?: string | null
          friend_id?: string | null
          friend_purchase_amount?: number | null
          friend_reward_amount?: number | null
          id?: string
          ip_address?: unknown | null
          referral_code: string
          referral_link: string
          referrer_id?: string | null
          referrer_reward_amount?: number | null
          share_channel?: string | null
          signed_up_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          clicked_at?: string | null
          created_at?: string | null
          device_fingerprint?: string | null
          expires_at?: string | null
          first_purchase_at?: string | null
          friend_email?: string | null
          friend_id?: string | null
          friend_purchase_amount?: number | null
          friend_reward_amount?: number | null
          id?: string
          ip_address?: unknown | null
          referral_code?: string
          referral_link?: string
          referrer_id?: string | null
          referrer_reward_amount?: number | null
          share_channel?: string | null
          signed_up_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "referrals_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      review_analytics: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          ip_address: string | null
          owner_id: string | null
          platform: string
          review_id: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: string | null
          owner_id?: string | null
          platform: string
          review_id?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: string | null
          owner_id?: string | null
          platform?: string
          review_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "review_analytics_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
        ]
      }
      review_platform_publishing: {
        Row: {
          created_at: string | null
          error_message: string | null
          external_id: string | null
          external_url: string | null
          id: string
          platform: string
          published_at: string | null
          review_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          external_id?: string | null
          external_url?: string | null
          id?: string
          platform: string
          published_at?: string | null
          review_id: string
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          external_id?: string | null
          external_url?: string | null
          id?: string
          platform?: string
          published_at?: string | null
          review_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "review_platform_publishing_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
        ]
      }
      review_reminders: {
        Row: {
          clicked_at: string | null
          completed_at: string | null
          created_at: string | null
          dismissed_at: string | null
          id: string
          owner_id: string
          scheduled_for: string
          sent_at: string | null
          service_id: string
          service_name: string
          status: string
          updated_at: string | null
        }
        Insert: {
          clicked_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          dismissed_at?: string | null
          id?: string
          owner_id: string
          scheduled_for: string
          sent_at?: string | null
          service_id: string
          service_name: string
          status: string
          updated_at?: string | null
        }
        Update: {
          clicked_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          dismissed_at?: string | null
          id?: string
          owner_id?: string
          scheduled_for?: string
          sent_at?: string | null
          service_id?: string
          service_name?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          approved_at: string | null
          author_email: string | null
          author_name: string
          content: string
          created_at: string | null
          id: string
          is_approved: boolean | null
          is_public: boolean | null
          owner_id: string | null
          rating: number
          service_id: string
          service_name: string
          submitted_at: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          author_email?: string | null
          author_name: string
          content: string
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          is_public?: boolean | null
          owner_id?: string | null
          rating: number
          service_id: string
          service_name: string
          submitted_at?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          author_email?: string | null
          author_name?: string
          content?: string
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          is_public?: boolean | null
          owner_id?: string | null
          rating?: number
          service_id?: string
          service_name?: string
          submitted_at?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          created_at: string
          id: string
          permission_id: string
          role_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          permission_id: string
          role_id: string
        }
        Update: {
          created_at?: string
          id?: string
          permission_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_system_role: boolean | null
          name: string
          permissions: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_system_role?: boolean | null
          name: string
          permissions?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_system_role?: boolean | null
          name?: string
          permissions?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      security_audit_log: {
        Row: {
          created_at: string | null
          event_details: Json | null
          event_type: string
          id: string
          ip_address: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_details?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_details?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      security_checklist: {
        Row: {
          category: string
          created_at: string | null
          id: number
          instructions: string | null
          item: string
          notes: string | null
          priority: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: number
          instructions?: string | null
          item: string
          notes?: string | null
          priority?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: number
          instructions?: string | null
          item?: string
          notes?: string | null
          priority?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      security_recommendations: {
        Row: {
          category: string
          created_at: string | null
          id: number
          notes: string | null
          priority: string | null
          recommendation: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: number
          notes?: string | null
          priority?: string | null
          recommendation: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: number
          notes?: string | null
          priority?: string | null
          recommendation?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      service_addons: {
        Row: {
          addon_type: string
          applies_to_services: string[] | null
          base_price: number | null
          created_at: string | null
          description: string | null
          duration_minutes: number
          duration_range_max: number | null
          duration_range_min: number | null
          id: string
          is_active: boolean | null
          is_cumulative: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          addon_type: string
          applies_to_services?: string[] | null
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string
          is_active?: boolean | null
          is_cumulative?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          addon_type?: string
          applies_to_services?: string[] | null
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string
          is_active?: boolean | null
          is_cumulative?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      service_bundles: {
        Row: {
          bundle_type: string | null
          created_at: string | null
          description: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          max_purchases_per_customer: number | null
          name: string
          profit_margin: number | null
          savings_amount: number | null
          savings_percentage: number | null
          total_price: number
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          bundle_type?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          max_purchases_per_customer?: number | null
          name: string
          profit_margin?: number | null
          savings_amount?: number | null
          savings_percentage?: number | null
          total_price: number
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          bundle_type?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          max_purchases_per_customer?: number | null
          name?: string
          profit_margin?: number | null
          savings_amount?: number | null
          savings_percentage?: number | null
          total_price?: number
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      service_categories: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          display_name: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_featured: boolean | null
          name: string
          profit_margin: number | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          name: string
          profit_margin?: number | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          name?: string
          profit_margin?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      service_inclusions: {
        Row: {
          annual_limit: number | null
          created_at: string | null
          id: string
          inclusion_type: string
          inclusion_value: string | null
          monthly_limit: number | null
          notes: string | null
          service_name: string
          subscription_plan_id: string | null
          updated_at: string | null
        }
        Insert: {
          annual_limit?: number | null
          created_at?: string | null
          id?: string
          inclusion_type: string
          inclusion_value?: string | null
          monthly_limit?: number | null
          notes?: string | null
          service_name: string
          subscription_plan_id?: string | null
          updated_at?: string | null
        }
        Update: {
          annual_limit?: number | null
          created_at?: string | null
          id?: string
          inclusion_type?: string
          inclusion_value?: string | null
          monthly_limit?: number | null
          notes?: string | null
          service_name?: string
          subscription_plan_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_inclusions_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "service_inclusions_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      service_price_conditions: {
        Row: {
          adjustment_type: Database["public"]["Enums"]["price_adjustment_type"]
          adjustment_value: number
          bundle_size: number | null
          condition_type: Database["public"]["Enums"]["price_condition_type"]
          created_at: string | null
          date_range_end: string | null
          date_range_start: string | null
          days_before: number | null
          end_time: string | null
          hours_before: number | null
          id: string
          is_active: boolean
          max_discount: number | null
          priority: number | null
          service_id: string | null
          start_time: string | null
          updated_at: string | null
          visit_count: number | null
        }
        Insert: {
          adjustment_type: Database["public"]["Enums"]["price_adjustment_type"]
          adjustment_value: number
          bundle_size?: number | null
          condition_type: Database["public"]["Enums"]["price_condition_type"]
          created_at?: string | null
          date_range_end?: string | null
          date_range_start?: string | null
          days_before?: number | null
          end_time?: string | null
          hours_before?: number | null
          id?: string
          is_active?: boolean
          max_discount?: number | null
          priority?: number | null
          service_id?: string | null
          start_time?: string | null
          updated_at?: string | null
          visit_count?: number | null
        }
        Update: {
          adjustment_type?: Database["public"]["Enums"]["price_adjustment_type"]
          adjustment_value?: number
          bundle_size?: number | null
          condition_type?: Database["public"]["Enums"]["price_condition_type"]
          created_at?: string | null
          date_range_end?: string | null
          date_range_start?: string | null
          days_before?: number | null
          end_time?: string | null
          hours_before?: number | null
          id?: string
          is_active?: boolean
          max_discount?: number | null
          priority?: number | null
          service_id?: string | null
          start_time?: string | null
          updated_at?: string | null
          visit_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_price_conditions_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_price_history: {
        Row: {
          adjusted_at: string | null
          adjusted_by: string | null
          adjustment_factor: number | null
          adjustment_reason: string | null
          id: string
          new_price: number | null
          old_price: number | null
          service_id: string
        }
        Insert: {
          adjusted_at?: string | null
          adjusted_by?: string | null
          adjustment_factor?: number | null
          adjustment_reason?: string | null
          id?: string
          new_price?: number | null
          old_price?: number | null
          service_id: string
        }
        Update: {
          adjusted_at?: string | null
          adjusted_by?: string | null
          adjustment_factor?: number | null
          adjustment_reason?: string | null
          id?: string
          new_price?: number | null
          old_price?: number | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_price_history_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_pricing: {
        Row: {
          created_at: string | null
          id: string
          pet_size: string
          price: number
          service_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          pet_size: string
          price: number
          service_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          pet_size?: string
          price?: number
          service_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_pricing_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_unavailability: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          end_date: string
          end_time: string | null
          id: string
          is_all_day: boolean
          is_recurring: boolean
          recurrence_end_date: string | null
          recurrence_pattern: string | null
          service_id: string | null
          start_date: string
          start_time: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date: string
          end_time?: string | null
          id?: string
          is_all_day?: boolean
          is_recurring?: boolean
          recurrence_end_date?: string | null
          recurrence_pattern?: string | null
          service_id?: string | null
          start_date: string
          start_time?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string
          end_time?: string | null
          id?: string
          is_all_day?: boolean
          is_recurring?: boolean
          recurrence_end_date?: string | null
          recurrence_pattern?: string | null
          service_id?: string | null
          start_date?: string
          start_time?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_unavailability_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_unavailability_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          base_price: number | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          duration_range_max: number | null
          duration_range_min: number | null
          id: string
          is_active: boolean | null
          location_type: string | null
          max_capacity: number | null
          name: string
          Notes: string | null
          requires_staff_certification: boolean | null
          type: string
          updated_at: string | null
        }
        Insert: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name: string
          Notes?: string | null
          requires_staff_certification?: boolean | null
          type: string
          updated_at?: string | null
        }
        Update: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name?: string
          Notes?: string | null
          requires_staff_certification?: boolean | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      smart_booking_config: {
        Row: {
          adjacency_requirement_level: number
          auto_adjustment_threshold: number
          created_at: string | null
          enable_fake_appointments: boolean
          fake_appointment_density: number
          id: string
          updated_at: string | null
        }
        Insert: {
          adjacency_requirement_level?: number
          auto_adjustment_threshold?: number
          created_at?: string | null
          enable_fake_appointments?: boolean
          fake_appointment_density?: number
          id?: string
          updated_at?: string | null
        }
        Update: {
          adjacency_requirement_level?: number
          auto_adjustment_threshold?: number
          created_at?: string | null
          enable_fake_appointments?: boolean
          fake_appointment_density?: number
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_credits: {
        Row: {
          auto_refill_amount: number | null
          auto_refill_enabled: boolean | null
          auto_refill_threshold: number | null
          balance: number | null
          created_at: string | null
          id: string
          last_refill_amount: number | null
          last_refill_date: string | null
          updated_at: string | null
        }
        Insert: {
          auto_refill_amount?: number | null
          auto_refill_enabled?: boolean | null
          auto_refill_threshold?: number | null
          balance?: number | null
          created_at?: string | null
          id?: string
          last_refill_amount?: number | null
          last_refill_date?: string | null
          updated_at?: string | null
        }
        Update: {
          auto_refill_amount?: number | null
          auto_refill_enabled?: boolean | null
          auto_refill_threshold?: number | null
          balance?: number | null
          created_at?: string | null
          id?: string
          last_refill_amount?: number | null
          last_refill_date?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      staff: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          calendar_integrations: Json | null
          certifications: string[] | null
          city: string | null
          country: string | null
          created_at: string | null
          display_title: string | null
          email: string
          employee_id: string | null
          employment_type: string | null
          first_name: string
          hire_date: string | null
          hourly_rate: number | null
          id: string
          is_active: boolean | null
          last_name: string
          leave_end_date: string | null
          leave_notes: string | null
          leave_start_date: string | null
          leave_type: string | null
          location: string | null
          on_leave: boolean | null
          phone: string | null
          postal_code: string | null
          profile_image: string | null
          role: string
          roles: string[] | null
          skills: string[] | null
          state: string | null
          terminated: boolean | null
          termination_date: string | null
          termination_notes: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          calendar_integrations?: Json | null
          certifications?: string[] | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          display_title?: string | null
          email: string
          employee_id?: string | null
          employment_type?: string | null
          first_name: string
          hire_date?: string | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          last_name: string
          leave_end_date?: string | null
          leave_notes?: string | null
          leave_start_date?: string | null
          leave_type?: string | null
          location?: string | null
          on_leave?: boolean | null
          phone?: string | null
          postal_code?: string | null
          profile_image?: string | null
          role: string
          roles?: string[] | null
          skills?: string[] | null
          state?: string | null
          terminated?: boolean | null
          termination_date?: string | null
          termination_notes?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          calendar_integrations?: Json | null
          certifications?: string[] | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          display_title?: string | null
          email?: string
          employee_id?: string | null
          employment_type?: string | null
          first_name?: string
          hire_date?: string | null
          hourly_rate?: number | null
          id?: string
          is_active?: boolean | null
          last_name?: string
          leave_end_date?: string | null
          leave_notes?: string | null
          leave_start_date?: string | null
          leave_type?: string | null
          location?: string | null
          on_leave?: boolean | null
          phone?: string | null
          postal_code?: string | null
          profile_image?: string | null
          role?: string
          roles?: string[] | null
          skills?: string[] | null
          state?: string | null
          terminated?: boolean | null
          termination_date?: string | null
          termination_notes?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      staff_assignments: {
        Row: {
          created_at: string | null
          department_id: string
          end_date: string | null
          id: string
          is_primary: boolean | null
          role_id: string
          staff_id: string
          start_date: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department_id: string
          end_date?: string | null
          id?: string
          is_primary?: boolean | null
          role_id: string
          staff_id: string
          start_date: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department_id?: string
          end_date?: string | null
          id?: string
          is_primary?: boolean | null
          role_id?: string
          staff_id?: string
          start_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      staff_availability: {
        Row: {
          break_end_time: string | null
          break_start_time: string | null
          created_at: string | null
          day_of_week: number | null
          effective_from: string | null
          effective_until: string | null
          end_time: string
          id: string
          is_available: boolean | null
          notes: string | null
          staff_id: string | null
          start_time: string
        }
        Insert: {
          break_end_time?: string | null
          break_start_time?: string | null
          created_at?: string | null
          day_of_week?: number | null
          effective_from?: string | null
          effective_until?: string | null
          end_time: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          staff_id?: string | null
          start_time: string
        }
        Update: {
          break_end_time?: string | null
          break_start_time?: string | null
          created_at?: string | null
          day_of_week?: number | null
          effective_from?: string | null
          effective_until?: string | null
          end_time?: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          staff_id?: string | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_break_settings: {
        Row: {
          created_at: string | null
          default_break_duration: number | null
          employment_type: string
          enabled: boolean | null
          id: string
          mandatory_breaks: boolean | null
          notes: string | null
          staff_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          default_break_duration?: number | null
          employment_type?: string
          enabled?: boolean | null
          id?: string
          mandatory_breaks?: boolean | null
          notes?: string | null
          staff_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          default_break_duration?: number | null
          employment_type?: string
          enabled?: boolean | null
          id?: string
          mandatory_breaks?: boolean | null
          notes?: string | null
          staff_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_break_settings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: true
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_break_settings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: true
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_break_settings_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: true
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_schedules: {
        Row: {
          break_end: string | null
          break_start: string | null
          created_at: string | null
          date: string
          end_time: string
          id: string
          notes: string | null
          staff_id: string
          start_time: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          break_end?: string | null
          break_start?: string | null
          created_at?: string | null
          date: string
          end_time: string
          id?: string
          notes?: string | null
          staff_id: string
          start_time: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          break_end?: string | null
          break_start?: string | null
          created_at?: string | null
          date?: string
          end_time?: string
          id?: string
          notes?: string | null
          staff_id?: string
          start_time?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_schedules_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "hr"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_specializations: {
        Row: {
          created_at: string | null
          id: string
          is_primary: boolean | null
          proficiency_level: string | null
          service_id: string
          staff_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          proficiency_level?: string | null
          service_id: string
          staff_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          proficiency_level?: string | null
          service_id?: string
          staff_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_specializations_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_time_off: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          end_date: string
          id: string
          notes: string | null
          reason: string | null
          request_type: string
          staff_id: string
          start_date: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          end_date: string
          id?: string
          notes?: string | null
          reason?: string | null
          request_type: string
          staff_id: string
          start_date: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          end_date?: string
          id?: string
          notes?: string | null
          reason?: string | null
          request_type?: string
          staff_id?: string
          start_date?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_time_off_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "hr"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_activity_log: {
        Row: {
          activity_date: string
          activity_type: string
          created_at: string
          customer_subscription_id: string
          details: Json | null
          id: string
          performed_by: string | null
        }
        Insert: {
          activity_date?: string
          activity_type: string
          created_at?: string
          customer_subscription_id: string
          details?: Json | null
          id?: string
          performed_by?: string | null
        }
        Update: {
          activity_date?: string
          activity_type?: string
          created_at?: string
          customer_subscription_id?: string
          details?: Json | null
          id?: string
          performed_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_activity_log_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_activity_log_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_activity_log_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_activity_log_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_activity_log_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_downgrade_requests: {
        Row: {
          additional_notes: string | null
          created_at: string
          current_plan_id: string
          customer_subscription_id: string
          effective_date: string | null
          id: string
          processed_date: string | null
          reason: string
          requested_by: string
          requested_plan_id: string
          reviewed_by: string | null
          status: string
          updated_at: string
        }
        Insert: {
          additional_notes?: string | null
          created_at?: string
          current_plan_id: string
          customer_subscription_id: string
          effective_date?: string | null
          id?: string
          processed_date?: string | null
          reason: string
          requested_by: string
          requested_plan_id: string
          reviewed_by?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          additional_notes?: string | null
          created_at?: string
          current_plan_id?: string
          customer_subscription_id?: string
          effective_date?: string | null
          id?: string
          processed_date?: string | null
          reason?: string
          requested_by?: string
          requested_plan_id?: string
          reviewed_by?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_downgrade_requests_current_plan_id_fkey"
            columns: ["current_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_current_plan_id_fkey"
            columns: ["current_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_requested_plan_id_fkey"
            columns: ["requested_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "subscription_downgrade_requests_requested_plan_id_fkey"
            columns: ["requested_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          active: boolean | null
          annual_discount_5_percent: number | null
          annual_total: number | null
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          max_appointments_per_month: number | null
          max_pets: number | null
          name: string
          plan_tier: string
          price_annual: number | null
          price_monthly: number | null
          priority_booking: boolean | null
          stripe_price_id_annual: string | null
          stripe_price_id_monthly: string | null
          stripe_price_id_yearly: string | null
          updated_at: string | null
          weight_category_id: string | null
        }
        Insert: {
          active?: boolean | null
          annual_discount_5_percent?: number | null
          annual_total?: number | null
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          max_appointments_per_month?: number | null
          max_pets?: number | null
          name: string
          plan_tier?: string
          price_annual?: number | null
          price_monthly?: number | null
          priority_booking?: boolean | null
          stripe_price_id_annual?: string | null
          stripe_price_id_monthly?: string | null
          stripe_price_id_yearly?: string | null
          updated_at?: string | null
          weight_category_id?: string | null
        }
        Update: {
          active?: boolean | null
          annual_discount_5_percent?: number | null
          annual_total?: number | null
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          max_appointments_per_month?: number | null
          max_pets?: number | null
          name?: string
          plan_tier?: string
          price_annual?: number | null
          price_monthly?: number | null
          priority_booking?: boolean | null
          stripe_price_id_annual?: string | null
          stripe_price_id_monthly?: string | null
          stripe_price_id_yearly?: string | null
          updated_at?: string | null
          weight_category_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_plans_weight_category_id_fkey"
            columns: ["weight_category_id"]
            isOneToOne: false
            referencedRelation: "pet_weight_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_pricing: {
        Row: {
          created_at: string | null
          currency: string | null
          features: string[]
          id: string
          is_active: boolean | null
          price_kr: number
          tier_name: string
          updated_at: string | null
          weight_category: string
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          features: string[]
          id?: string
          is_active?: boolean | null
          price_kr: number
          tier_name: string
          updated_at?: string | null
          weight_category: string
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          features?: string[]
          id?: string
          is_active?: boolean | null
          price_kr?: number
          tier_name?: string
          updated_at?: string | null
          weight_category?: string
        }
        Relationships: []
      }
      subscription_refunds: {
        Row: {
          amount: number
          created_at: string
          currency: string
          customer_subscription_id: string
          id: string
          processed_by: string | null
          reason: string
          status: string
          stripe_refund_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          customer_subscription_id: string
          id?: string
          processed_by?: string | null
          reason: string
          status?: string
          stripe_refund_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          customer_subscription_id?: string
          id?: string
          processed_by?: string | null
          reason?: string
          status?: string
          stripe_refund_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_refunds_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_refunds_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_refunds_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_refunds_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_refunds_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_service_inclusions: {
        Row: {
          annual_limit: number | null
          created_at: string | null
          id: string
          inclusion_type: string
          inclusion_value: string | null
          monthly_limit: number | null
          notes: string | null
          service_name: string
          subscription_plan_id: string | null
        }
        Insert: {
          annual_limit?: number | null
          created_at?: string | null
          id?: string
          inclusion_type: string
          inclusion_value?: string | null
          monthly_limit?: number | null
          notes?: string | null
          service_name: string
          subscription_plan_id?: string | null
        }
        Update: {
          annual_limit?: number | null
          created_at?: string | null
          id?: string
          inclusion_type?: string
          inclusion_value?: string | null
          monthly_limit?: number | null
          notes?: string | null
          service_name?: string
          subscription_plan_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_service_inclusions_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "subscription_service_inclusions_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_sync_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          processed: boolean | null
          subscription_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          processed?: boolean | null
          subscription_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          processed?: boolean | null
          subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_sync_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_sync_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_sync_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_sync_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_sync_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_usage: {
        Row: {
          appointments_used: number | null
          created_at: string | null
          customer_subscription_id: string | null
          id: string
          month_year: string | null
        }
        Insert: {
          appointments_used?: number | null
          created_at?: string | null
          customer_subscription_id?: string | null
          id?: string
          month_year?: string | null
        }
        Update: {
          appointments_used?: number | null
          created_at?: string | null
          customer_subscription_id?: string | null
          id?: string
          month_year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_usage_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "active_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_usage_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "cancelled_customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_usage_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "customer_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_usage_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_usage_customer_subscription_id_fkey"
            columns: ["customer_subscription_id"]
            isOneToOne: false
            referencedRelation: "subscription_dashboard_view"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string | null
          customer_id: string | null
          delivery_address: string | null
          frequency: string
          id: string
          next_delivery_date: string
          price_per_delivery: number
          product_id: string | null
          quantity: number
          special_instructions: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          delivery_address?: string | null
          frequency: string
          id?: string
          next_delivery_date: string
          price_per_delivery: number
          product_id?: string | null
          quantity?: number
          special_instructions?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          delivery_address?: string | null
          frequency?: string
          id?: string
          next_delivery_date?: string
          price_per_delivery?: number
          product_id?: string | null
          quantity?: number
          special_instructions?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      time_off_requests: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          end_date: string
          id: string
          notes: string | null
          reason: string
          rejection_reason: string | null
          staff_id: string
          start_date: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          end_date: string
          id?: string
          notes?: string | null
          reason: string
          rejection_reason?: string | null
          staff_id: string
          start_date: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          end_date?: string
          id?: string
          notes?: string | null
          reason?: string
          rejection_reason?: string | null
          staff_id?: string
          start_date?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_off_requests_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_off_requests_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_off_requests_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      timesheet_entries: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          date: string
          description: string | null
          end_time: string
          entry_type: Database["public"]["Enums"]["timesheet_entry_type"]
          id: string
          staff_id: string
          start_time: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          date: string
          description?: string | null
          end_time: string
          entry_type: Database["public"]["Enums"]["timesheet_entry_type"]
          id?: string
          staff_id: string
          start_time: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          date?: string
          description?: string | null
          end_time?: string
          entry_type?: Database["public"]["Enums"]["timesheet_entry_type"]
          id?: string
          staff_id?: string
          start_time?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          action: string
          expires_at: string | null
          granted: boolean
          granted_at: string | null
          granted_by: string | null
          id: string
          reason: string | null
          section: string
          user_id: string | null
        }
        Insert: {
          action: string
          expires_at?: string | null
          granted?: boolean
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          reason?: string | null
          section: string
          user_id?: string | null
        }
        Update: {
          action?: string
          expires_at?: string | null
          granted?: boolean
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          reason?: string | null
          section?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_referral_stats: {
        Row: {
          available_balance: number | null
          current_year_referrals: number | null
          next_tier_threshold: number | null
          referral_tier: string | null
          successful_referrals: number | null
          total_referrals_sent: number | null
          total_rewards_earned: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          available_balance?: number | null
          current_year_referrals?: number | null
          next_tier_threshold?: number | null
          referral_tier?: string | null
          successful_referrals?: number | null
          total_referrals_sent?: number | null
          total_rewards_earned?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          available_balance?: number | null
          current_year_referrals?: number | null
          next_tier_threshold?: number | null
          referral_tier?: string | null
          successful_referrals?: number | null
          total_referrals_sent?: number | null
          total_rewards_earned?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_referral_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "user_referral_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role_id?: string
          user_id?: string
        }
        Relationships: []
      }
      vaccinations: {
        Row: {
          administered_by: string | null
          administered_date: string
          batch_number: string | null
          created_at: string | null
          id: string
          manufacturer: string | null
          next_due_date: string | null
          notes: string | null
          pet_id: string | null
          vaccine_name: string
        }
        Insert: {
          administered_by?: string | null
          administered_date: string
          batch_number?: string | null
          created_at?: string | null
          id?: string
          manufacturer?: string | null
          next_due_date?: string | null
          notes?: string | null
          pet_id?: string | null
          vaccine_name: string
        }
        Update: {
          administered_by?: string | null
          administered_date?: string
          batch_number?: string | null
          created_at?: string | null
          id?: string
          manufacturer?: string | null
          next_due_date?: string | null
          notes?: string | null
          pet_id?: string | null
          vaccine_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "vaccinations_administered_by_fkey"
            columns: ["administered_by"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vaccinations_administered_by_fkey"
            columns: ["administered_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vaccinations_administered_by_fkey"
            columns: ["administered_by"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vaccinations_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vaccinations_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      walking_profiles: {
        Row: {
          created_at: string | null
          energy_level: string | null
          id: string
          interaction_with_other_dogs: string | null
          leash_behavior: string | null
          pet_id: string | null
          preferred_route: string | null
          preferred_walker_id: string | null
          special_instructions: string | null
          updated_at: string | null
          walk_duration_minutes: number | null
        }
        Insert: {
          created_at?: string | null
          energy_level?: string | null
          id?: string
          interaction_with_other_dogs?: string | null
          leash_behavior?: string | null
          pet_id?: string | null
          preferred_route?: string | null
          preferred_walker_id?: string | null
          special_instructions?: string | null
          updated_at?: string | null
          walk_duration_minutes?: number | null
        }
        Update: {
          created_at?: string | null
          energy_level?: string | null
          id?: string
          interaction_with_other_dogs?: string | null
          leash_behavior?: string | null
          pet_id?: string | null
          preferred_route?: string | null
          preferred_walker_id?: string | null
          special_instructions?: string | null
          updated_at?: string | null
          walk_duration_minutes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "walking_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_profiles_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_profiles_preferred_walker_id_fkey"
            columns: ["preferred_walker_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_profiles_preferred_walker_id_fkey"
            columns: ["preferred_walker_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_profiles_preferred_walker_id_fkey"
            columns: ["preferred_walker_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      walking_visits: {
        Row: {
          behavior_notes: string | null
          booking_id: string | null
          created_at: string | null
          distance_walked: number | null
          end_time: string | null
          gps_tracking_data: Json | null
          id: string
          pet_id: string | null
          photos: string[] | null
          route_taken: string | null
          start_time: string | null
          walker_id: string | null
          weather_conditions: string | null
        }
        Insert: {
          behavior_notes?: string | null
          booking_id?: string | null
          created_at?: string | null
          distance_walked?: number | null
          end_time?: string | null
          gps_tracking_data?: Json | null
          id?: string
          pet_id?: string | null
          photos?: string[] | null
          route_taken?: string | null
          start_time?: string | null
          walker_id?: string | null
          weather_conditions?: string | null
        }
        Update: {
          behavior_notes?: string | null
          booking_id?: string | null
          created_at?: string | null
          distance_walked?: number | null
          end_time?: string | null
          gps_tracking_data?: Json | null
          id?: string
          pet_id?: string | null
          photos?: string[] | null
          route_taken?: string | null
          start_time?: string | null
          walker_id?: string | null
          weather_conditions?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "walking_visits_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_visits_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_visits_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walking_visits_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      weight_categories: {
        Row: {
          created_at: string | null
          id: string
          max_weight: number | null
          min_weight: number | null
          name: string
          updated_at: string | null
          weight_range: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          max_weight?: number | null
          min_weight?: number | null
          name: string
          updated_at?: string | null
          weight_range: string
        }
        Update: {
          created_at?: string | null
          id?: string
          max_weight?: number | null
          min_weight?: number | null
          name?: string
          updated_at?: string | null
          weight_range?: string
        }
        Relationships: []
      }
    }
    Views: {
      active_customer_subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          cancellation_effective_date: string | null
          cancellation_reason: string | null
          cancellation_requested_at: string | null
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_id: string | null
          id: string | null
          last_payment_date: string | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_plan_id: string | null
          terms_accepted_at: string | null
          terms_version: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          id?: string | null
          last_payment_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Update: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          id?: string | null
          last_payment_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      active_staff: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          hire_date: string | null
          id: string | null
          is_active: boolean | null
          last_name: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          hire_date?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          hire_date?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      appointments_with_customers: {
        Row: {
          appointment_date: string | null
          appointment_time: string | null
          created_at: string | null
          customer_email: string | null
          customer_first_name: string | null
          customer_id: string | null
          customer_last_name: string | null
          customer_phone: string | null
          id: string | null
          notes: string | null
          service_id: string | null
          service_name: string | null
          staff_first_name: string | null
          staff_id: string | null
          staff_last_name: string | null
          status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings_with_duration_info: {
        Row: {
          appointment_date: string | null
          appointment_time: string | null
          customer_id: string | null
          duration_display: string | null
          duration_minutes: number | null
          id: string | null
          service_id: string | null
          service_name: string | null
          staff_id: string | null
          status: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "pet_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "active_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "terminated_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      cancelled_customer_subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          cancellation_effective_date: string | null
          cancellation_reason: string | null
          cancellation_requested_at: string | null
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_id: string | null
          id: string | null
          last_payment_date: string | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_plan_id: string | null
          terms_accepted_at: string | null
          terms_version: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          id?: string | null
          last_payment_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Update: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          cancellation_effective_date?: string | null
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          customer_id?: string | null
          id?: string | null
          last_payment_date?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan_id?: string | null
          terms_accepted_at?: string | null
          terms_version?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      checkfront_booking_summary: {
        Row: {
          booking_date: string | null
          booking_id: string | null
          created_at: string | null
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          status: string | null
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          booking_date?: string | null
          booking_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          booking_date?: string | null
          booking_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          status?: string | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      checkfront_integration_stats: {
        Row: {
          failed_syncs: number | null
          last_sync_at: string | null
          success_rate: number | null
          successful_syncs: number | null
          total_syncs: number | null
        }
        Relationships: []
      }
      checkfront_invoice_line_items: {
        Row: {
          booking_id: string | null
          created_at: string | null
          id: string | null
          item_description: string | null
          item_name: string | null
          quantity: number | null
          total_price: number | null
          unit_price: number | null
        }
        Relationships: []
      }
      invoice_analytics_view: {
        Row: {
          created_at: string | null
          customer_id: string | null
          customer_name: string | null
          id: string | null
          invoice_month: string | null
          invoice_number: string | null
          invoice_year: number | null
          status: Database["public"]["Enums"]["invoice_status"] | null
          total_amount: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices_needing_line_items_sync: {
        Row: {
          created_at: string | null
          customer_id: string | null
          id: string | null
          invoice_number: string | null
          total: number | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          id?: string | null
          invoice_number?: string | null
          total?: number | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          id?: string | null
          invoice_number?: string | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      pets_view: {
        Row: {
          allergies: string[] | null
          birth_date: string | null
          birthdate: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          customer_id: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          gender: string | null
          id: string | null
          insurance_policy_number: string | null
          insurance_provider: string | null
          is_deceased: boolean | null
          is_neutered: boolean | null
          microchip_number: string | null
          name: string | null
          notes: string | null
          owner_email: string | null
          owner_name: string | null
          owner_phone: string | null
          profile_image: string | null
          sex: string | null
          size: string | null
          species: string | null
          updated_at: string | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          weight: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "pets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      services_with_duration_display: {
        Row: {
          base_price: number | null
          created_at: string | null
          description: string | null
          duration_display: string | null
          duration_minutes: number | null
          duration_range_max: number | null
          duration_range_min: number | null
          id: string | null
          is_active: boolean | null
          location_type: string | null
          max_capacity: number | null
          name: string | null
          Notes: string | null
          requires_staff_certification: boolean | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_display?: never
          duration_minutes?: number | null
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string | null
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name?: string | null
          Notes?: string | null
          requires_staff_certification?: boolean | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_display?: never
          duration_minutes?: number | null
          duration_range_max?: number | null
          duration_range_min?: number | null
          id?: string | null
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name?: string | null
          Notes?: string | null
          requires_staff_certification?: boolean | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      services_with_profit: {
        Row: {
          base_price: number | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string | null
          is_active: boolean | null
          location_type: string | null
          max_capacity: number | null
          name: string | null
          Notes: string | null
          profit_margin: number | null
          profit_percentage: number | null
          requires_staff_certification: boolean | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string | null
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name?: string | null
          Notes?: string | null
          profit_margin?: number | null
          profit_percentage?: never
          requires_staff_certification?: boolean | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          base_price?: number | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string | null
          is_active?: boolean | null
          location_type?: string | null
          max_capacity?: number | null
          name?: string | null
          Notes?: string | null
          profit_margin?: number | null
          profit_percentage?: never
          requires_staff_certification?: boolean | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscription_dashboard_summary: {
        Row: {
          amount_paid: number | null
          billing_interval: string | null
          cancellation_date: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_id: string | null
          downgrade_request_date: string | null
          email: string | null
          features: Json | null
          first_name: string | null
          id: string | null
          is_refundable: boolean | null
          last_name: string | null
          max_appointments_per_month: number | null
          next_renewal_date: string | null
          pet_id: string | null
          pet_name: string | null
          plan_name: string | null
          status: string | null
          status_display: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_dashboard_view: {
        Row: {
          activated_at: string | null
          amount_paid: number | null
          billing_interval: string | null
          breed: string | null
          cancellation_date: string | null
          current_period_end: string | null
          current_period_start: string | null
          customer_id: string | null
          detailed_status_message: string | null
          downgrade_request_date: string | null
          email: string | null
          features: Json | null
          first_name: string | null
          id: string | null
          is_refundable: boolean | null
          last_name: string | null
          max_appointments_per_month: number | null
          next_renewal_date: string | null
          pet_id: string | null
          pet_name: string | null
          phone: string | null
          plan_id: string | null
          plan_name: string | null
          plan_name_display: string | null
          price_annual: number | null
          price_monthly: number | null
          species: string | null
          status: string | null
          status_display: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "appointments_with_customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_customer_subscriptions_pet_id"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets_view"
            referencedColumns: ["id"]
          },
        ]
      }
      terminated_staff: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          hire_date: string | null
          id: string | null
          is_active: boolean | null
          last_name: string | null
          phone: string | null
          role: string | null
          termination_date: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          hire_date?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          phone?: string | null
          role?: string | null
          termination_date?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          hire_date?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          phone?: string | null
          role?: string | null
          termination_date?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      adjust_pet_service_prices: {
        Args:
          | { adjustment_percent: number }
          | {
              p_adjustment_factor: number
              p_category_id?: string
              p_reason?: string
              p_user_id?: string
            }
        Returns: number
      }
      adjust_product_prices: {
        Args:
          | { adjustment_percent: number }
          | {
              p_adjustment_factor: number
              p_category?: string
              p_reason?: string
              p_user_id?: string
            }
        Returns: number
      }
      apply_discount_code: {
        Args:
          | { amount_param: number; code_param: string }
          | {
              p_applied_by?: string
              p_code: string
              p_customer_id: string
              p_discount_amount: number
              p_invoice_id: string
              p_subtotal: number
            }
        Returns: Json
      }
      assign_admin_permissions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      assign_appropriate_staff: {
        Args: { service_name: string }
        Returns: string
      }
      bytea_to_text: {
        Args: { data: string }
        Returns: string
      }
      calculate_booking_total_duration: {
        Args: { p_booking_id: string }
        Returns: number
      }
      can_delete_service: {
        Args: { service_id_param: string }
        Returns: boolean
      }
      check_auth_security_settings: {
        Args: Record<PropertyKey, never>
        Returns: {
          current_value: string
          recommended_value: string
          security_impact: string
          setting_name: string
        }[]
      }
      check_service_inclusion: {
        Args: { service_name_param: string; subscription_id_param: string }
        Returns: {
          annual_limit: number
          included: boolean
          inclusion_type: string
          inclusion_value: string
          monthly_limit: number
        }[]
      }
      check_sms_credits: {
        Args: Record<PropertyKey, never> | { required_credits: number }
        Returns: boolean
      }
      check_user_permission: {
        Args:
          | {
              action_param: string
              section_param: string
              user_id_param: string
            }
          | { permission_name: string }
        Returns: boolean
      }
      check_user_pet_status: {
        Args: Record<PropertyKey, never> | { pet_id_param: string }
        Returns: Json
      }
      create_customer_for_subscription: {
        Args: {
          p_email: string
          p_first_name?: string
          p_last_name?: string
          p_user_id: string
        }
        Returns: string
      }
      create_pet_with_profile_sync: {
        Args: { p_name: string; p_type: string } | { pet_data: Json }
        Returns: string
      }
      create_profile_for_user: {
        Args: { email_param: string; user_id_param: string }
        Returns: string
      }
      deduct_sms_credits: {
        Args: { credits_to_deduct: number }
        Returns: boolean
      }
      delete_service_with_dependencies: {
        Args: { service_id_param: string }
        Returns: boolean
      }
      delete_service_with_dependencies_v2: {
        Args: { service_id_param: string }
        Returns: Json
      }
      ensure_user_in_clients: {
        Args: Record<PropertyKey, never> | { p_user_id?: string }
        Returns: string
      }
      ensure_user_in_customers: {
        Args:
          | Record<PropertyKey, never>
          | { p_user_id?: string }
          | { user_email: string; user_id: string }
        Returns: string
      }
      expire_old_referrals: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      format_display_text: {
        Args: { input_text: string }
        Returns: string
      }
      generate_display_invoice_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_invoice_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_all_appointments: {
        Args: Record<PropertyKey, never>
        Returns: {
          customer_email: string
          customer_id: string
          customer_name: string
          id: string
          notes: string
          pet_id: string
          pet_name: string
          pet_type: string
          service_duration: number
          service_name: string
          service_price: number
          staff_first_name: string
          staff_id: string
          staff_last_name: string
          staff_role: string
          start_time: string
          status: string
          time_slot: string
        }[]
      }
      get_all_appointments_with_calendar_staff: {
        Args: Record<PropertyKey, never>
        Returns: {
          calendar_event_id: string
          customer_email: string
          customer_name: string
          id: string
          notes: string
          pet_name: string
          pet_type: string
          service_duration: number
          service_name: string
          service_price: number
          staff_first_name: string
          staff_last_name: string
          staff_role: string
          start_time: string
          status: string
          time_slot: string
        }[]
      }
      get_all_pets_admin: {
        Args: Record<PropertyKey, never>
        Returns: {
          allergies: string[]
          birth_date: string
          birthdate: string
          breed: string
          color: string
          created_at: string
          customer_email: string
          customer_first_name: string
          customer_id: string
          customer_last_name: string
          emergency_contact_name: string
          emergency_contact_phone: string
          emergency_contact_relationship: string
          gender: string
          id: string
          insurance_policy_number: string
          insurance_provider: string
          is_deceased: boolean
          is_neutered: boolean
          microchip_number: string
          name: string
          notes: string
          profile_image: string
          sex: string
          size: string
          species: string
          updated_at: string
          veterinarian_name: string
          veterinarian_phone: string
          weight: number
        }[]
      }
      get_all_pets_simple: {
        Args: Record<PropertyKey, never>
        Returns: {
          age: number | null
          allergies: string[] | null
          birth_date: string | null
          birthdate: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          customer_id: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          gender: string | null
          id: string
          insurance_info: Json | null
          insurance_policy_number: string | null
          insurance_provider: string | null
          is_deceased: boolean | null
          is_microchipped: boolean | null
          is_neutered: boolean | null
          microchip_id: string | null
          microchip_number: string | null
          name: string
          notes: string | null
          profile_image: string | null
          sex: string | null
          size: string | null
          special_needs: string | null
          species: string
          updated_at: string | null
          vaccination_due_date: string | null
          vaccination_records: Json | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          weight: number | null
        }[]
      }
      get_appropriate_staff_for_service: {
        Args: { location_type?: string; service_name: string }
        Returns: string
      }
      get_checkfront_line_items: {
        Args: { invoice_external_id: string }
        Returns: Json
      }
      get_client_appointments: {
        Args: { p_customer_id: string }
        Returns: {
          customer_email: string
          customer_id: string
          customer_name: string
          id: string
          notes: string
          pet_id: string
          pet_name: string
          pet_type: string
          service_duration: number
          service_name: string
          service_price: number
          staff_first_name: string
          staff_id: string
          staff_last_name: string
          staff_role: string
          start_time: string
          status: string
          time_slot: string
        }[]
      }
      get_current_month_usage: {
        Args: { subscription_id: string }
        Returns: number
      }
      get_customer_name: {
        Args: { customer_uuid: string }
        Returns: string
      }
      get_customers_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_customers_paginated: {
        Args: { record_limit?: number; record_offset?: number }
        Returns: {
          active: boolean
          address: string | null
          alternative_emails: string[] | null
          alternative_phones: string[] | null
          checkfront_customer_id: string | null
          city: string | null
          country: string | null
          created_at: string | null
          email: string
          first_name: string
          has_only_deceased_pets: boolean | null
          id: string
          is_relocated: boolean
          last_name: string
          last_verification_date: string | null
          merge_history: Json | null
          notes: string | null
          phone: string | null
          postal_code: string | null
          profile_verification_required: boolean | null
          relocated: boolean | null
          source: string | null
          stripe_customer_id: string | null
          updated_at: string | null
          user_id: string | null
        }[]
      }
      get_dashboard_stats: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_dashboard_stats_no_rls: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_enhanced_appointments: {
        Args: Record<PropertyKey, never>
        Returns: {
          customer_email: string
          customer_id: string
          customer_name: string
          data_source: string
          extraction_confidence: number
          id: string
          notes: string
          pet_id: string
          pet_name: string
          pet_type: string
          service_duration: number
          service_name: string
          service_price: number
          staff_first_name: string
          staff_id: string
          staff_last_name: string
          staff_role: string
          start_time: string
          status: string
          time_slot: string
        }[]
      }
      get_invoice_by_id: {
        Args: { invoice_uuid: string }
        Returns: {
          created_at: string
          customer_id: string
          customer_name: string
          discount_amount: number
          due_date: string
          id: string
          invoice_number: string
          issued_date: string
          notes: string
          paid_date: string
          payment_method: string
          status: string
          subtotal: number
          tax_amount: number
          total: number
          updated_at: string
        }[]
      }
      get_invoices_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_invoices_limited: {
        Args: { record_limit?: number }
        Returns: {
          created_at: string
          customer_id: string
          customer_name: string
          discount_amount: number
          due_date: string
          id: string
          invoice_number: string
          issued_date: string
          notes: string
          paid_date: string
          payment_method: string
          status: Database["public"]["Enums"]["invoice_status"]
          subtotal: number
          tax_amount: number
          total: number
          updated_at: string
        }[]
      }
      get_invoices_paginated: {
        Args: { record_limit?: number; record_offset?: number }
        Returns: {
          created_at: string
          customer_id: string
          customer_name: string
          discount_amount: number
          display_invoice_number: string
          due_date: string
          id: string
          invoice_number: string
          issued_date: string
          notes: string
          owner_id: string
          paid_date: string
          payment_method: string
          status: string
          subtotal: number
          tax_amount: number
          total: number
          updated_at: string
        }[]
      }
      get_invoices_with_analytics: {
        Args:
          | Record<PropertyKey, never>
          | {
              end_date?: string
              invoice_status?: string[]
              start_date?: string
            }
        Returns: {
          created_at: string
          customer_id: string
          customer_name: string
          id: string
          invoice_month: string
          invoice_number: string
          status: string
          total: number
        }[]
      }
      get_my_claim: {
        Args: { claim_name: string }
        Returns: Json
      }
      get_or_create_staff_record: {
        Args: { user_id_param: string }
        Returns: string
      }
      get_pet_subscription_for_staff: {
        Args: { pet_id_param: string }
        Returns: {
          created_at: string
          current_period_end: string
          current_period_start: string
          customer_id: string
          description: string
          id: string
          plan_name: string
          plan_tier: string
          price_monthly: number
          status: string
          stripe_subscription_id: string
          subscription_plan_id: string
          updated_at: string
        }[]
      }
      get_pets_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_pets_limited: {
        Args: { record_limit?: number }
        Returns: {
          age: number | null
          allergies: string[] | null
          birth_date: string | null
          birthdate: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          customer_id: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          gender: string | null
          id: string
          insurance_info: Json | null
          insurance_policy_number: string | null
          insurance_provider: string | null
          is_deceased: boolean | null
          is_microchipped: boolean | null
          is_neutered: boolean | null
          microchip_id: string | null
          microchip_number: string | null
          name: string
          notes: string | null
          profile_image: string | null
          sex: string | null
          size: string | null
          special_needs: string | null
          species: string
          updated_at: string | null
          vaccination_due_date: string | null
          vaccination_records: Json | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          weight: number | null
        }[]
      }
      get_pets_paginated: {
        Args: { record_limit?: number; record_offset?: number }
        Returns: {
          age: number | null
          allergies: string[] | null
          birth_date: string | null
          birthdate: string | null
          breed: string | null
          color: string | null
          created_at: string | null
          customer_id: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          gender: string | null
          id: string
          insurance_info: Json | null
          insurance_policy_number: string | null
          insurance_provider: string | null
          is_deceased: boolean | null
          is_microchipped: boolean | null
          is_neutered: boolean | null
          microchip_id: string | null
          microchip_number: string | null
          name: string
          notes: string | null
          profile_image: string | null
          sex: string | null
          size: string | null
          special_needs: string | null
          species: string
          updated_at: string | null
          vaccination_due_date: string | null
          vaccination_records: Json | null
          veterinarian_name: string | null
          veterinarian_phone: string | null
          weight: number | null
        }[]
      }
      get_plans_for_pet_weight: {
        Args: { pet_weight_kg: number }
        Returns: {
          plan_id: string
          plan_name: string
          plan_tier: string
          price_annual: number
          price_monthly: number
          weight_category: string
        }[]
      }
      get_security_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          completed_items: number
          completion_percentage: number
          pending_items: number
          total_items: number
        }[]
      }
      get_simple_dashboard_stats: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_table_columns: {
        Args: { table_name_param: string }
        Returns: {
          column_name: string
          data_type: string
        }[]
      }
      get_user_appointments: {
        Args: Record<PropertyKey, never> | { user_id_param?: string }
        Returns: {
          address: string
          created_at: string
          customer_id: string
          duration_minutes: number
          id: string
          location_type: string
          pet_id: string
          scheduled_date: string
          scheduled_time: string
          service_id: string
          special_instructions: string
          staff_id: string
          status: string
          total_price: number
          updated_at: string
        }[]
      }
      get_user_permissions: {
        Args: Record<PropertyKey, never> | { user_id_param: string }
        Returns: Json
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_waitlist_entries: {
        Args: Record<PropertyKey, never> | { user_id_param?: string }
        Returns: {
          created_at: string
          customer_id: string
          id: string
          service_id: string
        }[]
      }
      grant_user_permission: {
        Args:
          | {
              action_param: string
              expires_param?: string
              granted_param: boolean
              reason_param?: string
              section_param: string
              user_id_param: string
            }
          | { permission_name: string; user_id_param: string }
        Returns: boolean
      }
      has_client_permission: {
        Args: Record<PropertyKey, never> | { permission: string }
        Returns: boolean
      }
      has_permission: {
        Args: { _action: string; _resource: string }
        Returns: boolean
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_delete: {
        Args:
          | { content: string; content_type: string; uri: string }
          | { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_get: {
        Args: { data: Json; uri: string } | { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_post: {
        Args:
          | { content: string; content_type: string; uri: string }
          | { data: Json; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_put: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      import_checkfront_pets_batch: {
        Args: { pets_data: Json }
        Returns: number
      }
      increment_referral_stats: {
        Args: { p_amount: number; p_user_id: string }
        Returns: undefined
      }
      increment_subscription_usage: {
        Args: { month_year_param: string; subscription_id: string }
        Returns: undefined
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_staff_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_subscription_refundable: {
        Args: { subscription_start_date: string }
        Returns: boolean
      }
      link_checkfront_bookings_to_customers: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      link_extracted_pets_to_appointments: {
        Args: Record<PropertyKey, never>
        Returns: {
          appointments_updated: number
          customers_created: number
          pets_created: number
          pets_linked: number
        }[]
      }
      log_subscription_activity: {
        Args: {
          p_activity_type: string
          p_details?: Json
          p_performed_by?: string
          p_subscription_id: string
        }
        Returns: string
      }
      process_checkfront_customer: {
        Args:
          | { customer_data: Json }
          | { p_checkfront_id: string; p_customer_data: Json }
        Returns: string
      }
      recover_incomplete_checkout: {
        Args: { p_subscription_id: string; p_user_id: string }
        Returns: Json
      }
      save_calendar_extraction_data: {
        Args: {
          p_appointment_id: string
          p_calendar_event_id: string
          p_end_time: string
          p_raw_attendees: Json
          p_raw_description: string
          p_raw_title: string
          p_start_time: string
        }
        Returns: string
      }
      sync_staff_from_calendar_event: {
        Args: {
          appointment_id: string
          calendar_event_id: string
          staff_email?: string
          staff_name?: string
        }
        Returns: boolean
      }
      text_to_bytea: {
        Args: { data: string }
        Returns: string
      }
      toggle_staff_leave: {
        Args: {
          is_on_leave: boolean
          p_leave_end_date?: string
          p_leave_notes?: string
          p_leave_start_date?: string
          p_leave_type?: string
          staff_id: string
        }
        Returns: boolean
      }
      update_customer_statistics: {
        Args: { p_customer_id: string }
        Returns: undefined
      }
      update_customer_subscription_status: {
        Args:
          | {
              new_end_date?: string
              new_status: string
              subscription_id_param: string
            }
          | { new_status: string; subscription_id_param: string }
        Returns: Json
      }
      update_vested_rewards: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      upsert_customer_from_intake: {
        Args: {
          p_address: string
          p_city: string
          p_country?: string
          p_email: string
          p_first_name: string
          p_last_name: string
          p_phone: string
          p_user_id?: string
          p_zip_code: string
        }
        Returns: string
      }
      upsert_pet_from_intake: {
        Args: {
          p_birth_date: string
          p_breed: string
          p_color: string
          p_customer_id: string
          p_insurance_info?: Json
          p_is_microchipped: boolean
          p_is_neutered: boolean
          p_microchip_number: string
          p_name: string
          p_sex: string
          p_size: string
          p_species: string
          p_vaccination_due_date: string
          p_weight: number
        }
        Returns: string
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
      validate_break_times: {
        Args: { end_time: string; start_time: string }
        Returns: boolean
      }
      validate_discount_code: {
        Args:
          | { code_param: string }
          | {
              p_code: string
              p_customer_id: string
              p_items?: Json
              p_subtotal: number
            }
        Returns: Json
      }
    }
    Enums: {
      "CREATE TYPE import_source_enum AS ENUM":
        | "CSV"
        | "GoogleSheet"
        | "Paste Data"
      "CREATE TYPE preview_status_enum AS ENUM": "New" | "Matched" | "Conflict"
      invoice_status: "draft" | "pending" | "paid" | "overdue" | "cancelled"
      price_adjustment_type: "percentage" | "fixed_amount"
      price_condition_type:
        | "weekend"
        | "late_hours"
        | "last_minute"
        | "early_bird"
        | "new_client"
        | "repeat_customer"
        | "bundle_discount"
      time_off_status: "pending" | "approved" | "rejected"
      timesheet_entry_type:
        | "appointment"
        | "administrative"
        | "break"
        | "training"
        | "other"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      "CREATE TYPE import_source_enum AS ENUM": [
        "CSV",
        "GoogleSheet",
        "Paste Data",
      ],
      "CREATE TYPE preview_status_enum AS ENUM": ["New", "Matched", "Conflict"],
      invoice_status: ["draft", "pending", "paid", "overdue", "cancelled"],
      price_adjustment_type: ["percentage", "fixed_amount"],
      price_condition_type: [
        "weekend",
        "late_hours",
        "last_minute",
        "early_bird",
        "new_client",
        "repeat_customer",
        "bundle_discount",
      ],
      time_off_status: ["pending", "approved", "rejected"],
      timesheet_entry_type: [
        "appointment",
        "administrative",
        "break",
        "training",
        "other",
      ],
    },
  },
} as const
