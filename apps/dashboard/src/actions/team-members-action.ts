"use server";

import { getTeamMembersQuery, getPendingInvitationsQuery, getUserQuery } from "@pkg/supabase/queries";
import { inviteTeamMember, cancelTeamInvitation } from "@pkg/supabase/mutations";
import { authActionClient } from "./safe-action";
import { revalidatePath as revalidatePathFunc } from "next/cache";
import { cancelTeamInvitationSchema, getPendingInvitationsSchema, getTeamMembersSchema, inviteTeamMemberSchema } from "./schema";


export const getTeamMembersAction = authActionClient
  .schema(getTeamMembersSchema)
  .metadata({
    name: "get-team-members",
  })
  .action(
    async ({
      parsedInput: { search },
      ctx: { user, supabase },
    }) => {
      const { data: userData } = await getUserQuery(supabase, user.id);
      const { data: members } = await getTeamMembersQuery(supabase, userData?.team_id!, search);
      return members;
    }
  );

export const getPendingInvitationsAction = authActionClient
  .schema(getPendingInvitationsSchema)
  .metadata({
    name: "get-pending-invitations",
  })
  .action(
    async ({
      parsedInput: { search },
      ctx: { user, supabase },
    }) => {
      const { data: userData } = await getUserQuery(supabase, user.id);
      const { data: invitations } = await getPendingInvitationsQuery(supabase, userData?.team_id!, search);
      return invitations;
    }
  );



export const inviteTeamMemberAction = authActionClient
  .schema(inviteTeamMemberSchema)
  .metadata({
    name: "invite-team-member",
  })
  .action(
    async ({
      parsedInput: { invitee_email, role, revalidatePath },
      ctx: { user, supabase },
    }) => {
      const { data: userData } = await getUserQuery(supabase, user.id);
      const { data: invitation } = await inviteTeamMember(supabase, userData?.team_id!, {
        invitee_email,
        role,
      });

      if (revalidatePath) {
        revalidatePathFunc(revalidatePath);
      }

      return invitation;
    }
  );

export const cancelTeamInvitationAction = authActionClient
  .schema(cancelTeamInvitationSchema)
  .metadata({
    name: "cancel-team-invitation",
  })
  .action(
    async ({
      parsedInput: { invitationId, revalidatePath },
      ctx: { user, supabase },
    }) => {
      await cancelTeamInvitation(supabase, invitationId);

      if (revalidatePath) {
        revalidatePathFunc(revalidatePath);
      }

      return { success: true };
    },
  ); 
