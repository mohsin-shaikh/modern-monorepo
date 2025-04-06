export interface User {
  id: string
  display_name: string
  email: string
  avatar_url?: string
}

export interface Theme {
  value: "light" | "dark" | "system"
  label: string
} 