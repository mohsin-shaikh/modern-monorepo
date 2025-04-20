import type { inferRouterOutputs } from "@trpc/server";
import { createTRPCRouter } from "../init";
import { teamRouter } from "./team";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  team: teamRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
