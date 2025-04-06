export interface TeamMember {
  id: string
  full_name: string
  email: string
  role: "owner" | "admin" | "member"
  avatar_url?: string
}

export interface PendingInvite {
  id: string
  full_name: string
  email: string
  role: "admin" | "member"
  expires_at: string
}

export interface SearchParams {
  query?: string
  page?: string
  per_page?: string
} 