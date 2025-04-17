export interface Team {
  id: string
  name: string
  role: "owner" | "admin" | "member"
  avatar_url?: string
}

export interface SearchParams {
  query?: string
  page?: string
  per_page?: string
} 