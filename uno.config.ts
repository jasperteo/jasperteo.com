import { defineConfig, presetUno, presetWebFonts } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno({ dark: "class" }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "IBM Plex Sans:400,500,600,700,800,900",
        mono: "IBM Plex Mono:400,500,600,700,800,900",
        welcome: [
          {
            name: "Playpen Sans",
            weights: [`400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            name: "Ma Shan Zheng",
            weights: [`400`],
          },
        ],
      },
    }),
    presetAnimations(),
    presetShadcn(),
  ],
});
