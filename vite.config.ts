import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["9f269a1e5f88.ngrok-free.app"],
  },
  plugins: [react(), tsconfigPaths()],
});
