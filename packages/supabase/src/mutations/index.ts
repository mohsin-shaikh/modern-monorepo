import { logger } from "@pkg/logger";
import { createClient } from "@pkg/supabase/server";
import type { Database, Tables, TablesUpdate, Client } from "../types";
import { getCurrentUserTeamQuery } from "../queries";

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
