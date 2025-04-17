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
    .from("user_invites")
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
    .from("user_invites")
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

// ------------------------------------------------------------
// User Mutations
// ------------------------------------------------------------
type DeleteUserParams = {
  id: string;
};

export async function deleteUser(supabase: Client, params: DeleteUserParams) {
  const { id } = params;

  const { data: membersData } = await supabase
    .from("users_on_team")
    .select("team_id, team:team_id(id, name, members:users_on_team(id))")
    .eq("user_id", id);

  // Delete teams with only one member
  const teamIds = membersData
    ?.filter(({ team }) => team?.members.length === 1)
    .map(({ team_id }) => team_id);

  await Promise.all([
    supabase.auth.admin.deleteUser(id),
    supabase.from("users").delete().eq("id", id),
    supabase
      .from("teams")
      .delete()
      .in("id", teamIds ?? []),
  ]);

  return {
    id,
  };
}

// ------------------------------------------------------------
// Team Mutations
// ------------------------------------------------------------
type CreateTeamParams = {
  name: string;
  baseCurrency: string;
};

export async function createTeam(supabase: Client, params: CreateTeamParams) {
  // TODO: Update needed
  const { data: teamId } = await supabase.rpc("create_team_v2", {
    name: params.name,
    currency: params.baseCurrency,
  });

  return {
    data: {
      id: teamId,
    },
  };
}

export async function updateTeam(supabase: Client, data: any) {
  const { data: userData } = await getCurrentUserTeamQuery(supabase);
  
  return supabase
    .from("teams")
    .update(data)
    .eq("id", userData?.team_id)
    .select("*")
    .maybeSingle();
}

type DeleteTeamParams = {
  teamId: string;
};

export async function deleteTeam(supabase: Client, params: DeleteTeamParams) {
  const { teamId } = params;

  const { data } = await supabase
    .from("teams")
    .delete()
    .eq("id", teamId)
    .select("id")
    .single();

  if (!data) {
    return;
  }

  await supabase.from("teams").delete().eq("id", data.id);

  return data;
}

type CreateTeamInvitesParams = {
  teamId: string;
  invites: {
    email: string;
    role: "owner" | "member";
    invited_by: string;
  }[];
};

export async function createTeamInvites(
  supabase: Client,
  params: CreateTeamInvitesParams,
) {
  const { teamId, invites } = params;

  return supabase
    .from("user_invites")
    .upsert(
      invites.map((invite) => ({
        ...invite,
        team_id: teamId,
      })),
      {
        onConflict: "invitee_email, team_id",
        ignoreDuplicates: false,
      },
    )
    .select("email, code, user:invited_by(*), team:team_id(*)"); // TODO: Update needed
}

type AcceptTeamInviteParams = {
  userId: string;
  teamId: string;
};

export async function acceptTeamInvite(
  supabase: Client,
  params: AcceptTeamInviteParams,
) {
  const { userId, teamId } = params;

  const { data: inviteData } = await supabase
    .from("user_invites")
    .select("*")
    .eq("team_id", teamId)
    .eq("invitee_email", userId)
    .single();

  if (!inviteData) {
    return;
  }

  await Promise.all([
    supabase.from("team_members").insert({
      user_id: userId,
      role: inviteData.role,
      team_id: teamId,
    }),
    supabase.from("user_invites").delete().eq("id", inviteData.id),
  ]);
}

type DeclineTeamInviteParams = {
  email: string;
  teamId: string;
};

export async function declineTeamInvite(
  supabase: Client,
  params: DeclineTeamInviteParams,
) {
  const { email, teamId } = params;

  return supabase
    .from("user_invites")
    .delete()
    .eq("invitee_email", email)
    .eq("team_id", teamId);
}

type DeleteTeamInviteParams = {
  teamId: string;
  inviteId: string;
};

export async function deleteTeamInvite(
  supabase: Client,
  params: DeleteTeamInviteParams,
) {
  const { teamId, inviteId } = params;

  return supabase
    .from("user_invites")
    .delete()
    .eq("id", inviteId)
    .eq("team_id", teamId)
    .select()
    .single();
}

type DeleteTeamMemberParams = {
  userId: string;
  teamId: string;
};

export async function deleteTeamMember(
  supabase: Client,
  params: DeleteTeamMemberParams,
) {
  return supabase
    .from("team_members")
    .delete()
    .eq("user_id", params.userId)
    .eq("team_id", params.teamId)
    .select()
    .single();
}

type LeaveTeamParams = {
  userId: string;
  teamId: string;
};

export async function leaveTeam(supabase: Client, params: LeaveTeamParams) {
  const [, response] = await Promise.all([
    supabase
      .from("users")
      .update({
        team_id: null,
      })
      .eq("id", params.userId)
      .eq("team_id", params.teamId),

    supabase
      .from("team_members")
      .delete()
      .eq("team_id", params.teamId)
      .eq("user_id", params.userId)
      .select()
      .single(),
  ]);

  return response;
}

type UpdateTeamMemberParams = {
  userId: string;
  teamId: string;
  role: "owner" | "member";
};

export async function updateTeamMember(
  supabase: Client,
  params: UpdateTeamMemberParams,
) {
  const { userId, teamId, role } = params;

  return supabase
    .from("team_members")
    .update({ role })
    .eq("user_id", userId)
    .eq("team_id", teamId)
    .select()
    .single();
}
