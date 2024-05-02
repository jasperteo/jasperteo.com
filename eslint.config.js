import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["eslint.config.js", "dist"],
  },
  pluginJs.configs.recommended,
  // pluginReactConfig,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
