import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStartVite } from "@tanstack/start/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStartVite({
      deployment: "vercel",
    }),
    react(),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
  },
});
