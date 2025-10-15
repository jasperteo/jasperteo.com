import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [
		tanstackStart(),
		viteReact(),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		fontless(),
		tailwindcss(),
	],
	resolve: { alias: { "@": "/src" } },
});

export default viteConfig;
