import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import UnoCSS from "unocss/astro";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), UnoCSS({ injectReset: true })],
  output: "server",
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: "passthrough",
  }),
  image: { service: passthroughImageService() },
  site: "https://jasperteo.com/",
  prefetch: { prefetchAll: true },
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss", minify: false },
    plugins: [TanStackRouterVite()],
  },
});
