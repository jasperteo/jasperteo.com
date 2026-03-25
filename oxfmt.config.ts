import { defineConfig } from "oxfmt";

const oxfmtConfig = defineConfig({
	trailingComma: "es5",
	useTabs: true,

	/* sortImports: attempts to mirror the grouping style of eslint-plugin-simple-import-sort */
	sortImports: {
		order: "asc",
		ignoreCase: true,
		newlinesBetween: true,
		internalPattern: ["~/", "@/", "~/*", "@/*"],
		groups: [
			["side_effect", "side_effect_style"],
			["builtin", "type-builtin"],
			["external", "type-external"],
			["internal", "type-internal", "subpath", "type-subpath"],
			["parent", "type-parent", "sibling", "type-sibling", "index", "type-index"],
			"style",
			"unknown",
		],
	},

	sortTailwindcss: {
		functions: ["cn", "cva"],
		stylesheet: "./src/styles/globals.css",
	},

	ignorePatterns: [
		/* Generated Files */
		"**/routeTree.gen.ts",
	],
});

export default oxfmtConfig;
