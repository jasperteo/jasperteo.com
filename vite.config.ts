import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [
		devtools(),
		tanstackStart({
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
		}),
		react(),
		cloudflare(),
		fontless(),
		tailwindcss(),
	],
	resolve: { alias: { "@": "/src" } },
});

export default viteConfig;
