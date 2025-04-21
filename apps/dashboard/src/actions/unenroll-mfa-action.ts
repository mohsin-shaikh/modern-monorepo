"use server";

import { revalidatePath } from "next/cache";
import { authActionClient } from "./safe-action";
import { unenrollMfaSchema } from "./schema";

export const unenrollMfaAction = authActionClient
  .schema(unenrollMfaSchema)
  .metadata({
    name: "unenroll-mfa",
  })
  .action(async ({ parsedInput: { factorId }, ctx: { supabase } }) => {
    const { data, error } = await supabase.auth.mfa.unenroll({
      factorId,
      issuer: "app.zuupee.com",
    });

    if (error) {
      throw Error(error.message);
    }

    revalidatePath("/account/security");

    return data;
  });
