import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

// https://vite.dev/config/
const viteConfig = defineConfig({
	plugins: [
		devtools(),
		react(),
		fontless(),
		tailwindcss(),
		tanstackStart({
			customViteReactPlugin: true,
			prerender: {
				/* Enable prerendering */
				enabled: true,
				/* Whether to extract links from the HTML and prerender them also */
				crawlLinks: true,
				/* Number of times to retry a failed prerender job */
				retryCount: 2,
				/* Delay between retries in milliseconds */
				retryDelay: 1000,
			},
			sitemap: { host: "https://jasperteo.com" },
			target: "cloudflare-module",
			spa: { enabled: false },
		}),
	],
	resolve: { alias: { "@": "/src" } },
});

export default viteConfig;
