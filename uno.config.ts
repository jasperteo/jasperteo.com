import { defineConfig, presetUno } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno({ dark: "class" }),
    presetShadcn({ color: "orange", radius: 0.75 }),
    presetAnimations(),
  ],
  theme: {
    fontFamily: {
      sans: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif",
      mono: "Sono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      welcome: "Playpen Sans, ZCOOL KuaiLe, sans-serif",
    },
  },
});
