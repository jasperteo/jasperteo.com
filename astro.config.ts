import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import UnoCSS from "unocss/astro";
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), UnoCSS({ injectReset: true })],
  site: "https://jasperteo.com/",
  output: "static",
  // adapter: cloudflare({
  //   platformProxy: { enabled: true },
  //   imageService: "passthrough",
  // }),
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" },
  },
  experimental: { clientPrerender: true },
});
