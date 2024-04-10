import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: [
        "IBM Plex Sans Var",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  presets: [
    presetUno({ dark: "class" }),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        playpen: "Playpen Sans",
        mono: "IBM Plex Mono",
      },
    }),
    presetAnimations(),
    presetShadcn(),
  ],
});
