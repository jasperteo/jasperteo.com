import antfu from "@antfu/eslint-config";

export default antfu(
	{
		typescript: { tsconfigPath: "tsconfig.json" },
		astro: true,
		solid: true,
		unocss: true,
		lessOpinionated: true,
		stylistic: false,
		ignores: ["eslint.config.js", "dist"],
	},
	{
		rules: { "ts/consistent-type-definitions": "off" },
	}
);
