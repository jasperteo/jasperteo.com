import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://jasperteo.com",
	output: "server",
	adapter: cloudflare({
		platformProxy: { enabled: true },
		imageService: "passthrough",
	}),
	integrations: [
		solidJs(),
		UnoCSS({ injectReset: "@unocss/reset/tailwind-compat.css" }),
	],
	security: { checkOrigin: true },
	vite: {
		css: { transformer: "lightningcss" },
		build: { cssMinify: "lightningcss" },
		// Temporary workaround for Cloudflare Workers
		resolve: {
			conditions: ["worker", "webworker"],
			mainFields: ["module"],
		},
	},
	server: {
		headers: {
			"Accept-CH": "Sec-CH-Prefers-Color-Scheme",
			"Critical-CH": "Sec-CH-Prefers-Color-Scheme",
			Vary: "Sec-CH-Prefers-Color-Scheme",
		},
	},
});
