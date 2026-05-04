import { cloudflare } from "@cloudflare/vite-plugin";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { fontless } from "fontless";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [
		devtools(),
		tanstackStart({
			rsc: { enabled: true },
			prerender: { enabled: true, failOnError: false },
		}),
		rsc(),
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
		cloudflare({ viteEnvironment: { name: "ssr", childEnvironments: ["rsc"] } }),
		fontless(),
		tailwindcss(),
	],
	resolve: { tsconfigPaths: true },
});

export default viteConfig;
