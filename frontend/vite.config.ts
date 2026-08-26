import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Proxies /api to the FastAPI backend during local dev (`npm run dev`).
// In production, Phase 6 serves both from one Render Web Service, so no
// proxy/CORS setup is needed there.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
