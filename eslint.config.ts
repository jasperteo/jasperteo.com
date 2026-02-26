import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import pluginRouter from "@tanstack/eslint-plugin-router";
import { defineConfig, globalIgnores } from "eslint/config";
import oxlint from "eslint-plugin-oxlint";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

const gitignorePath = path.join(import.meta.dirname, ".gitignore");

const eslintConfig = defineConfig([
	globalIgnores(["**/routeTree.gen.ts"]),
	includeIgnoreFile(gitignorePath),
	{
		plugins: { "simple-import-sort": simpleImportSort },
		extends: [
			eslint.configs.recommended,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			eslintPluginUnicorn.configs.recommended,
			reactRefresh.configs.vite({ extraHOCs: ["createFileRoute"] }),
			reactHooks.configs.flat.recommended,
			eslintReact.configs["strict-type-checked"],
			pluginRouter.configs["flat/recommended"],
		],
		rules: {
			"simple-import-sort/imports": "warn",
			"simple-import-sort/exports": "warn",
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"unicorn/better-regex": "warn",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/text-encoding-identifier-case": ["error", { withDash: true }],
			"@eslint-react/prefer-namespace-import": "error",
			"@eslint-react/naming-convention/component-name": ["error", "PascalCase"],
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	oxlint.buildFromOxlintConfigFile("./oxlint.config.ts"),
]);

export default eslintConfig;
