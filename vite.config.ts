import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "child_process";

try {
  execSync("node scripts/copy-cesium.js", { stdio: "inherit" });
} catch (e) {
  console.error("Failed to run copy-cesium.js:", e);
}

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "main" },
    nitro: true,
  },
  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    },
  },
});