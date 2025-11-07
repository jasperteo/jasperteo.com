import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import pluginRouter from "@tanstack/eslint-plugin-router";
import { defineConfig, globalIgnores } from "eslint/config";
import oxlint from "eslint-plugin-oxlint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

const gitignorePath = path.join(import.meta.dirname, ".gitignore");

const eslintConfig = defineConfig(
	[
		eslint.configs.recommended,
		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,
		eslintPluginUnicorn.configs.recommended,
		reactRefresh.configs.vite,
		reactHooks.configs.flat.recommended,
		eslintReact.configs["recommended-type-checked"],
		pluginRouter.configs["flat/recommended"],
		{
			plugins: { "simple-import-sort": simpleImportSort },
			rules: {
				"simple-import-sort/imports": "warn",
				"simple-import-sort/exports": "warn",
			},
		},
		oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
		globalIgnores(["**/routeTree.gen.ts"]),
		includeIgnoreFile(gitignorePath),
	],
	{
		rules: {
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"unicorn/better-regex": "warn",
			"unicorn/prevent-abbreviations": [
				"warn",
				{
					allowList: {
						Env: true,
						env: true,
						Dev: true,
						dev: true,
						Props: true,
						props: true,
						ref: true,
						Ref: true,
						utils: true,
					},
				},
			],
			"unicorn/text-encoding-identifier-case": ["error", { withDash: true }],
			"@eslint-react/jsx-shorthand-boolean": "warn",
			"@eslint-react/jsx-shorthand-fragment": "warn",
			"@eslint-react/no-children-prop": "warn",
			"@eslint-react/no-unnecessary-use-callback": "warn",
			"@eslint-react/no-unnecessary-use-memo": "warn",
			"@eslint-react/no-unnecessary-key": "warn",
			"@eslint-react/no-useless-fragment": "warn",
			"@eslint-react/prefer-destructuring-assignment": "warn",
			"@eslint-react/prefer-namespace-import": "error",
			"@eslint-react/naming-convention/component-name": ["error", "PascalCase"],
			"@eslint-react/naming-convention/use-state": "warn",
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}
);

export default eslintConfig;
