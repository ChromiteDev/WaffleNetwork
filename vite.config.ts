// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: [
        "wafflenetwork.chromitedev.xyz",
      ],
    },
  },
});
