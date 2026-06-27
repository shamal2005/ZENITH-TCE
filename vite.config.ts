import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "child_process";

try {
  execSync("node scripts/copy-cesium.js", { stdio: "inherit" });
} catch (e) {
  console.error("Failed to run copy-cesium.js:", e);
}

const getNitroPreset = () => {
  if (process.env.VERCEL === "1") {
    return "vercel";
  }
  return "node-server";
};

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "main" },
  },
  nitro: {
    preset: getNitroPreset(),
  },
  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    },
  },
});