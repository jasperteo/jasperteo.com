import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactJSXConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ["eslint.config.js", "dist"] },
  { files: ["**/*.js"], ...tseslint.configs.disableTypeChecked },
  eslint.configs.recommended,
  pluginReactConfig,
  pluginReactJSXConfig,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginAstro.configs.recommended,
];
