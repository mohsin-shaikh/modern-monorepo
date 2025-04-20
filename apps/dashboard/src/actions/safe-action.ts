// import { setupAnalytics } from "@pkg/analytics/server";
import { logger } from "@/utils/logger";
import { getUser } from "@pkg/supabase/cached-queries";
import { createClient } from "@pkg/supabase/server";
import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from "next-safe-action";
// import { headers } from "next/headers";
import { z } from "zod";

const handleServerError = (e: Error) => {
  console.error("Action error:", e.message);

  if (e instanceof Error) {
    return e.message;
  }

  return DEFAULT_SERVER_ERROR_MESSAGE;
};

export const actionClient = createSafeActionClient({
  handleServerError,
});

export const actionClientWithMeta = createSafeActionClient({
  handleServerError,
  defineMetadataSchema() {
    return z.object({
      name: z.string(),
      track: z
        .object({
          event: z.string(),
          channel: z.string(),
        })
        .optional(),
    });
  },
});

export const authActionClient = actionClientWithMeta
  .use(async ({ next, clientInput, metadata }) => {
    const result = await next({ ctx: {} });

    if (process.env.NODE_ENV === "development") {
      logger("Input ->", clientInput);
      logger("Result ->", result.data);
      logger("Metadata ->", metadata);

      return result;
    }

    return result;
  })
  .use(async ({ next, metadata }) => {
    const user = await getUser();
    const supabase = await createClient();

    if (!user?.data) {
      throw new Error("Unauthorized");
    }

    // if (metadata) {
    //   const analytics = await setupAnalytics({
    //     userId: user.id,
    //   });

    //   if (metadata.track) {
    //     analytics.track(metadata.track);
    //   }
    // }

    return next({
      ctx: {
        supabase,
        user: user.data,
      },
    });
  });
