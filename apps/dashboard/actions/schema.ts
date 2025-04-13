import { z } from 'zod';

export const updateTeamSchema = z.object({
    name: z.string().min(2).max(32).optional(),
    logo_url: z.string().url().optional(),
    revalidatePath: z.string().optional(),
});

export const inviteTeamMemberSchema = z.object({
    invitee_email: z.string().email(),
    role: z.enum(['admin', 'member']),
    revalidatePath: z.string().optional(),
});

export const getPendingInvitationsSchema = z.object({
    search: z.string().optional(),
    revalidatePath: z.string().optional(),
});

export const getTeamMembersSchema = z.object({
    search: z.string().optional(),
    revalidatePath: z.string().optional(),
});

export const cancelTeamInvitationSchema = z.object({
    invitationId: z.string(),
    revalidatePath: z.string().optional(),
});

export const getUserTeamsSchema = z.object({});

export const switchTeamSchema = z.object({
  teamId: z.string(),
});
