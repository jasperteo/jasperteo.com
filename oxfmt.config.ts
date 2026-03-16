import { defineConfig } from "oxfmt";

const oxfmtConfig = defineConfig({
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	useTabs: true,
	bracketSpacing: true,
	printWidth: 100,

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
		// Ignore all markdown files
		"*.md",
		"README",
		"LICENSE",
		// Ignore generated files
		"**/routeTree.gen.ts",
	],
});

export default oxfmtConfig;
