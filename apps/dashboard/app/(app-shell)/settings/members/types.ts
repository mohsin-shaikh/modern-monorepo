export interface TeamMember {
  role: 'owner' | 'admin' | 'member';
  user: {
    id: string;
    email: string;
    full_name: string | null;
    avatar_url: string | null;
  };
}

export interface TeamInvitation {
  id: string;
  team_id: string;
  inviter_id: string;
  invitee_email: string;
  role: 'admin' | 'member';
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  expires_at: string;
  created_at: string;
  updated_at: string;
}

export interface SearchParams {
  query?: string
  page?: string
  per_page?: string
} 