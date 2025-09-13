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
import globals from "globals";
import tseslint from "typescript-eslint";

const gitignorePath = path.join(import.meta.dirname, ".gitignore");

const eslintConfig = defineConfig(
	[
		eslint.configs.recommended,
		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,
		eslintPluginUnicorn.configs.recommended,
		reactRefresh.configs.vite,
		reactHooks.configs["recommended-latest"],
		eslintReact.configs["recommended-type-checked"],
		pluginRouter.configs["flat/recommended"],
		oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
		globalIgnores(["**/routeTree.gen.ts", "**/worker-configuration.d.ts"]),
		includeIgnoreFile(gitignorePath),
	],
	{
		plugins: { "simple-import-sort": simpleImportSort },
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"unicorn/better-regex": "warn",
			"unicorn/prevent-abbreviations": [
				"error",
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
			"@eslint-react/no-children-prop": "error",
			"@eslint-react/no-useless-fragment": "warn",
			"@eslint-react/prefer-destructuring-assignment": "warn",
			"@eslint-react/prefer-react-namespace-import": "error",
			"@eslint-react/prefer-shorthand-boolean": "warn",
			"@eslint-react/hooks-extra/no-unnecessary-use-callback": "warn",
			"@eslint-react/hooks-extra/no-unnecessary-use-memo": "warn",
			"@eslint-react/naming-convention/component-name": ["error", "PascalCase"],
			"@eslint-react/naming-convention/filename": ["error", "kebab-case"],
			"@eslint-react/naming-convention/use-state": "error",
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: { ...globals.browser, ...globals.node },
		},
	}
);

export default eslintConfig;
