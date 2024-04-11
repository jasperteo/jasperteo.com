import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  theme: {},
  presets: [
    presetUno({ dark: "class" }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "IBM Plex Sans",
        mono: "IBM Plex Mono",
        playpen: "Playpen Sans",
      },
    }),
    presetIcons(),
    presetAnimations(),
    presetShadcn(),
  ],
});
