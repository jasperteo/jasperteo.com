import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	/** Temporary fix for Cloudflare compatibility when prerendering */
	define: {
		"globalThis.Cloudflare.compatibilityFlags": { nodejs_compat: true },
	},
	plugins: [
		devtools(),
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: true,
				filter: ({ path }) =>
					path !== "/playground" && path !== "/playground/liquid-glass",
			},
		}),
		viteReact({ babel: { plugins: ["babel-plugin-react-compiler"] } }),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		fontless(),
		tailwindcss(),
	],
	resolve: { alias: { "@": "/src" } },
});

export default viteConfig;
