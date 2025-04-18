import { z } from 'zod';

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


// ------------------------------------------------------------
// Team Schemas
// ------------------------------------------------------------
export const updateTeamSchema = z.object({
    name: z.string().min(2).max(32).optional(),
    email: z.string().email().optional(),
    inbox_email: z.string().email().optional().nullable(),
    inbox_forwarding: z.boolean().optional().nullable(),
    logo_url: z.string().url().optional(),
    base_currency: z.string().optional(),
    document_classification: z.boolean().optional(),
    revalidatePath: z.string().optional(),
});

export type UpdateTeamFormValues = z.infer<typeof updateTeamSchema>;

export const changeTeamSchema = z.object({
    teamId: z.string(),
    redirectTo: z.string(),
});

