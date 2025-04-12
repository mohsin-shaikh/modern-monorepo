import { z } from "zod";

export const updateTeamSchema = z.object({
    name: z.string().min(2).max(32).optional(),
    logo_url: z.string().url().optional(),
    revalidatePath: z.string().optional(),
});
