"use server";

import { authActionClient } from "./safe-action";
import { getTeams } from "@pkg/supabase/queries";
import { switchTeamMutation } from "@pkg/supabase/mutations";
import { switchTeamSchema, getUserTeamsSchema } from "./schema";


export const getUserTeamsAction = authActionClient
  .schema(getUserTeamsSchema)
  .metadata({
    name: "get-user-teams",
  })
  .action(async ({ ctx: { user, supabase } }) => {
    // const teams = await getTeams();
    // console.log({teams});
    const { data: teams } = await getTeams();
    return teams;
  });

export const switchTeamAction = authActionClient
  .schema(switchTeamSchema)
  .metadata({
    name: "switch-team",
  })
  .action(
    async ({
      parsedInput: { teamId },
      ctx: { user, supabase },
    }) => {
      await switchTeamMutation(supabase, user.id, teamId);
      return { success: true };
    }
  ); 