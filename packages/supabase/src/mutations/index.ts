import { logger } from "@pkg/logger";
import { createClient } from "@pkg/supabase/server";
import type { Database, Tables, TablesUpdate, Client } from "../types";
import { getCurrentUserTeamQuery, getUserInviteQuery } from "../queries";


// ------------------------------------------------------------
// User Mutations
// ------------------------------------------------------------
type UpdateUserParams = {
  id: string;
  full_name?: string | null;
  team_id?: string | null;
};

export async function updateUser(supabase: Client, data: UpdateUserParams) {
  const { id, ...input } = data;

  return supabase.from("users").update(input).eq("id", id).select().single();
}

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
  // const { data: teamId } = await supabase.rpc("create_team_v2", {
  const { data: teamId } = await supabase.rpc("create_team", {
    name: params.name,
    // currency: params.baseCurrency,
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

  console.log({teamId, invites});

  const { data: response, error } = await supabase
    .from("user_invites")
    .upsert(
      invites.map((invite) => ({
        ...invite,
        team_id: teamId,
      })),
      {
        onConflict: "email, team_id",
        ignoreDuplicates: false,
      },
    )
    .select("email, code, user:invited_by(*), team:team_id(*)");

  console.log(error, response);

  return response;
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
    supabase.from("users_on_team").insert({
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
    .from("users_on_team")
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
      .from("users_on_team")
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
    .from("users_on_team")
    .update({ role })
    .eq("user_id", userId)
    .eq("team_id", teamId)
    .select()
    .single();
}

export async function joinTeamByInviteCode(supabase: Client, code: string) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user.email) {
    return;
  }

  const { data: inviteData } = await getUserInviteQuery(supabase, {
    code,
    email: session.user.email,
  });

  if (inviteData) {
    // Add user team
    await supabase.from("users_on_team").insert({
      user_id: session.user.id,
      team_id: inviteData?.team_id,
      role: inviteData.role,
    });

    // Set current team
    const { data } = await supabase
      .from("users")
      .update({
        team_id: inviteData?.team_id,
      })
      .eq("id", session.user.id)
      .select()
      .single();

    // remove invite
    await supabase.from("user_invites").delete().eq("code", code);

    return data;
  }

  return null;
}
