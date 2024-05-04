import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import pluginReactJSXConfig from "eslint-plugin-react/configs/jsx-runtime.js";

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
  // pluginReactConfig,
  // pluginReactJSXConfig,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginAstro.configs.recommended,
];
