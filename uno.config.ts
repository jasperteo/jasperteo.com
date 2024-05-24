import { defineConfig, presetUno, presetWebFonts } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno({ dark: "class" }),
    presetShadcn({ color: "orange", radius: 0.75 }),
    presetAnimations(),
    presetWebFonts({
      provider: "none",
      fonts: {
        sans: "IBM Plex Sans Var",
        mono: "Azeret Mono Variable",
        title: "Chillax Variable, ui-sans-serif, system-ui",
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        @font-face {
          font-family: "IBM Plex Sans Var";
          src: url("/fonts/IBMPlexSansVar.woff2") format("woff2");
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: "Azeret Mono Variable";
          src: url("/fonts/AzeretMonoVariable.woff2") format("woff2");
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: "Chillax Variable";
          src: url("/fonts/ChillaxVariable.woff2") format("woff2");
          font-weight: 200 700;
          font-display: swap;
          font-style: normal;
        }
      `,
    },
  ],
});
