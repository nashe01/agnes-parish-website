export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      about_guilds: {
        Row: {
          created_at: string
          details: string | null
          display_order: number
          id: string
          image_url: string | null
          is_active: boolean
          location: string | null
          meeting_time: string | null
          name: string
          secretary_phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string | null
          meeting_time?: string | null
          name: string
          secretary_phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          details?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string | null
          meeting_time?: string | null
          name?: string
          secretary_phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      about_sections: {
        Row: {
          created_at: string
          details: string | null
          display_order: number
          id: string
          image_url: string | null
          is_active: boolean
          location: string | null
          meeting_time: string | null
          name: string
          secretary_phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string | null
          meeting_time?: string | null
          name: string
          secretary_phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          details?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string | null
          meeting_time?: string | null
          name?: string
          secretary_phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          created_at: string
          date_text: string
          description: string
          display_order: number
          id: string
          is_active: boolean
          is_featured: boolean
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date_text: string
          description: string
          display_order?: number
          id?: string
          is_active?: boolean
          is_featured?: boolean
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date_text?: string
          description?: string
          display_order?: number
          id?: string
          is_active?: boolean
          is_featured?: boolean
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      gallery_photos: {
        Row: {
          caption: string
          created_at: string
          display_order: number
          id: string
          is_active: boolean
          updated_at: string
          url: string
        }
        Insert: {
          caption: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          updated_at?: string
          url: string
        }
        Update: {
          caption?: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      hero_content: {
        Row: {
          archdiocese: string
          created_at: string
          hero_image_url: string | null
          id: string
          parish_name: string
          updated_at: string
          welcome_text: string
        }
        Insert: {
          archdiocese?: string
          created_at?: string
          hero_image_url?: string | null
          id?: string
          parish_name?: string
          updated_at?: string
          welcome_text: string
        }
        Update: {
          archdiocese?: string
          created_at?: string
          hero_image_url?: string | null
          id?: string
          parish_name?: string
          updated_at?: string
          welcome_text?: string
        }
        Relationships: []
      }
      mass_schedules: {
        Row: {
          created_at: string
          day_type: string
          display_order: number
          id: string
          is_active: boolean
          special_note: string | null
          times: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          day_type: string
          display_order?: number
          id?: string
          is_active?: boolean
          special_note?: string | null
          times: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          day_type?: string
          display_order?: number
          id?: string
          is_active?: boolean
          special_note?: string | null
          times?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      ministries: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          how_to_join: string
          id: string
          image_url: string | null
          is_active: boolean
          location: string
          meeting_time: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          how_to_join: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          location: string
          meeting_time: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          how_to_join?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string
          meeting_time?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          category: string
          created_at: string
          date: string
          display_order: number
          excerpt: string
          id: string
          image_url: string | null
          is_active: boolean
          size: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          date: string
          display_order?: number
          excerpt: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          size?: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          date?: string
          display_order?: number
          excerpt?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          size?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      sacraments: {
        Row: {
          created_at: string
          description: string
          display_order: number
          id: string
          is_active: boolean
          name: string
          requirement: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order?: number
          id?: string
          is_active?: boolean
          name: string
          requirement: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          id?: string
          is_active?: boolean
          name?: string
          requirement?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
