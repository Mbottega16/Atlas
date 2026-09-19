import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Proxies /api to the FastAPI backend during local dev (`npm run dev`).
// The public build (VITE_STATIC=1) never calls /api — it reads /atlas.json.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
