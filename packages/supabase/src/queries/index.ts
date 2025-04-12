import { logger } from "@pkg/logger";
import { createClient } from "@pkg/supabase/server";
import { Client } from "../types";

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

export async function getUserQuery(supabase: Client, userId: string) {
  return await supabase
    .from("users")
    .select(
      `
      *,
      team:team_id(*)
    `,
    )
    .eq("id", userId)
    .single()
    .throwOnError();
}

export async function getCurrentUserTeamQuery(supabase: Client) {
  const {
    data: { user },
  } = await getUser();

  console.log(user);

  if (!user) {
    return;
  }

  const userData = await getUserQuery(supabase, user?.id);

  console.log(userData);

  return userData;
}
