import {
  defineConfig
} from "../../chunk-UPJ3ZHXN.mjs";
import "../../chunk-Y7YJTUV6.mjs";
import "../../chunk-LE5FTHDS.mjs";
import {
  init_esm
} from "../../chunk-LL4QQ7FC.mjs";

// trigger.config.ts
init_esm();
var trigger_config_default = defineConfig({
  project: process.env.TRIGGER_PROJECT_ID,
  runtime: "node",
  logLevel: "log",
  maxDuration: 900,
  // 15 minutes
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 1e4,
      factor: 2,
      randomize: true
    }
  },
  build: {},
  dirs: ["./jobs/tasks"]
});
var resolveEnvVars = void 0;
export {
  trigger_config_default as default,
  resolveEnvVars
};
//# sourceMappingURL=trigger.config.mjs.map
