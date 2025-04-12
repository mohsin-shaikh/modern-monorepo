import { logger } from "@pkg/logger";
import { createClient } from "@pkg/supabase/server";
import { Client } from "../types";
import { PostgrestSingleResponse, PostgrestResponse } from "@supabase/postgrest-js";
import { Database } from "../types";

export async function getUser() {
  const supabase = await createClient();

  try {
    const result = await supabase.auth.getUser();

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}

export async function getPosts() {
  const supabase = await createClient();

  try {
    const result = await supabase.from("posts").select("*");

    return result;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

export async function getUserQuery(
  supabase: Client,
  userId: string
): Promise<PostgrestSingleResponse<any>> {
  return await supabase
    .from("users")
    .select(
      `
      *,
      team:teams!team_id(*)
    `
    )
    .eq("id", userId)
    .single()
    .throwOnError();
}

export async function getCurrentUserTeamQuery(
  supabase: Client
): Promise<PostgrestSingleResponse<any> | undefined> {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return;
  }

  return getUserQuery(supabase, user?.id);
}

export async function getTeamMembersQuery(
  supabase: Client,
  teamId: string,
  search?: string
): Promise<PostgrestResponse<any>> {
  let query = supabase
    .from("team_members")
    .select(
      `
      role,
      user:users!team_members_user_id_fkey(
        id,
        email,
        full_name,
        avatar_url
      )
    `
    )
    .eq("team_id", teamId);

  if (search) {
    query = query.or(
      `user.email.ilike.%${search}%,user.full_name.ilike.%${search}%`
    );
  }

  return query.throwOnError();
}

export async function getPendingInvitationsQuery(
  supabase: Client,
  teamId: string,
  search?: string
): Promise<PostgrestResponse<any>> {
  let query = supabase
    .from("team_invitations")
    .select("*")
    .eq("team_id", teamId)
    .eq("status", "pending");

  if (search) {
    query = query.ilike("invitee_email", `%${search}%`);
  }

  return query.throwOnError();
}
