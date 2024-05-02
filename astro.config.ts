import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), UnoCSS({ injectReset: true })],
  output: "server",
  adapter: cloudflare(),
  site: "https://jasperteo.com/",
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" },
    plugins: [TanStackRouterVite()],
  },
});
