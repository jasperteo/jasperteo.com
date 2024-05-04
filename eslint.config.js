// import eslint from "@eslint/js";
// import eslintPluginAstro from "eslint-plugin-astro";
// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import pluginReactJSXConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import antfu from "@antfu/eslint-config";

// export default [
//   eslint.configs.recommended,
//   ...eslintPluginAstro.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   pluginReactConfig,
//   pluginReactJSXConfig,
//   {
//     languageOptions: {
//       parserOptions: {
//         project: true,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
//   { files: ["**/*.js"], ...tseslint.configs.disableTypeChecked },
//   { ignores: ["eslint.config.js", "dist"] },
// ];

export default antfu(
  {
    typescript: { tsconfigPath: "tsconfig.json" },
    astro: true,
    react: true,
    unocss: true,
    lessOpinionated: true,
    stylistic: false,
    ignores: ["eslint.config.js", "dist"],
  },
  {
    rules: {
      "ts/no-use-before-define": "off",
      "ts/consistent-type-definitions": "off",
    },
  }
);
