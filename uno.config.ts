import { defineConfig, presetUno, presetWebFonts } from "unocss";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno({ dark: "class" }),
    presetShadcn({ color: "orange", radius: 0.75 }),
    presetWebFonts({
      provider: "none",
      fonts: {
        sans: "IBM Plex Sans",
        mono: "Azeret Mono",
        title: ["Chillax", "system-ui", "sans-serif"],
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        @font-face {
          font-family: "IBM Plex Sans";
          src: url("/fonts/IBMPlexSansVar.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Azeret Mono";
          src: url("/fonts/AzeretMonoVariable.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Chillax";
          src: url("/fonts/ChillaxVariable.woff2") format("woff2");
          font-weight: 200 700;
          font-style: normal;
        }
      `,
    },
  ],
});
