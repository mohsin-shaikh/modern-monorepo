import {
  z
} from "../../../../../chunk-KRWODOEH.mjs";
import {
  schemaTask
} from "../../../../../chunk-UPJ3ZHXN.mjs";
import "../../../../../chunk-Y7YJTUV6.mjs";
import {
  logger
} from "../../../../../chunk-LE5FTHDS.mjs";
import {
  init_esm
} from "../../../../../chunk-LL4QQ7FC.mjs";

// jobs/tasks/team/delete.ts
init_esm();
var deleteTeam = schemaTask({
  id: "delete-team",
  schema: z.object({
    teamId: z.string().uuid(),
    connections: z.array(
      z.object({
        provider: z.string().nullable(),
        reference_id: z.string().nullable(),
        access_token: z.string().nullable()
      })
    )
  }),
  maxDuration: 300,
  queue: {
    concurrencyLimit: 10
  },
  run: async ({ teamId, connections }) => {
    logger.info("Deleting team connections", {
      connections: connections.length
    });
  }
});
export {
  deleteTeam
};
//# sourceMappingURL=delete.mjs.map
