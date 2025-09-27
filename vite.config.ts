import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [
		devtools(),
		tanstackStart({
			prerender: { enabled: true, crawlLinks: true },
			sitemap: { enabled: true, host: "https://jasperteo.com" },
		}),
		viteReact(),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		fontless(),
		tailwindcss(),
	],
	resolve: { alias: { "@": "/src" } },
	/* @todo (@jasperteo): remove this when Cloudflare can build properly without this flag */
	define: {
		"globalThis.Cloudflare.compatibilityFlags":
			"{enable_nodejs_process_v2: true}",
	},
});

export default viteConfig;
