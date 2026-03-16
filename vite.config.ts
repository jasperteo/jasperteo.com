import { cloudflare } from "@cloudflare/vite-plugin";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [
		devtools(),
		tanstackStart({
			prerender: {
				enabled: true,
				failOnError: false,
			},
		}),
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		fontless(),
		tailwindcss(),
	],
	resolve: { tsconfigPaths: true },
});

export default viteConfig;
