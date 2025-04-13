import { logger } from "@pkg/logger";
import { createClient } from "@pkg/supabase/server";
import type { Database, Tables, TablesUpdate, Client } from "../types";
import { getCurrentUserTeamQuery, getUser } from "../queries";
import { PostgrestSingleResponse } from "@supabase/postgrest-js";

export async function updateUser(userId: string, data: TablesUpdate<"users">) {
  const supabase = createClient();

  try {
    const result = await supabase.from("users").update(data).eq("id", userId);

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}

export async function updateTeam(supabase: Client, data: any) {
  const { data: userData } = await getCurrentUserTeamQuery(supabase);

  console.log(userData);
  
  return supabase
    .from("teams")
    .update(data)
    .eq("id", userData?.team_id)
    .select("*")
    .maybeSingle();
}

interface InviteTeamMemberData {
  invitee_email: string;
  role: 'admin' | 'member';
}

export async function inviteTeamMember(
  supabase: Client,
  teamId: string,
  data: InviteTeamMemberData
): Promise<PostgrestSingleResponse<any>> {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  return supabase
    .from("team_invitations")
    .insert({
      team_id: teamId,
      inviter_id: user.id,
      invitee_email: data.invitee_email,
      role: data.role,
      status: "pending",
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    })
    .select()
    .single()
    .throwOnError();
}

export async function cancelTeamInvitation(
  supabase: Client,
  invitationId: string
): Promise<PostgrestSingleResponse<any>> {
  return supabase
    .from("team_invitations")
    .delete()
    .eq("id", invitationId)
    .throwOnError();
}

export async function switchTeamMutation(
  supabase: Client,
  userId: string,
  teamId: string
): Promise<PostgrestSingleResponse<Tables<"users">>> {
  try {
    // First check if user is a member of the team
    const { data: membership } = await supabase
      .from("team_members")
      .select("*")
      .eq("user_id", userId)
      .eq("team_id", teamId)
      .single();

    if (!membership) {
      throw new Error("User is not a member of this team");
    }

    // Update user's current team
    return supabase
      .from("users")
      .update({ team_id: teamId })
      .eq("id", userId)
      .select()
      .single()
      .throwOnError();
  } catch (error) {
    logger.error("Error switching team:", error);
    throw error;
  }
}
