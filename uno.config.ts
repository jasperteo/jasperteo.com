import { defineConfig, presetUno, presetIcons } from "unocss";

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
  presets: [presetUno(), presetIcons()],
});
