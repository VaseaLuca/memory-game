import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "pages/": "/src/pages/",
      "shared/": "/src/shared/",
      "app/": "/src/app/",
      "features/": "/src/features/",
      "store/": "/src/store/",
      "assets/": "/src/assets",
    },
  },
});
