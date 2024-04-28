import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  css: { transformer: "lightningcss" },
  build: { cssMinify: "lightningcss" },
  plugins: [
    UnoCSS(),
    react(),
    TanStackRouterVite(),
    VitePWA({ registerType: "autoUpdate", selfDestroying: true }),
  ],
});
