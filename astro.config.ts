import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), UnoCSS({ injectReset: true })],
  output: "server",
  adapter: cloudflare({ platformProxy: { enabled: true } }),
  site: "https://jasperteo.com/",
  prefetch: { prefetchAll: true },
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" },
    plugins: [TanStackRouterVite()],
  },
});
