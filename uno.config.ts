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
  // theme: {
  //   colors: {
  //     border: "hsl(var(--border))",
  //     input: "hsl(var(--input))",
  //     ring: "hsl(var(--ring))",
  //     background: "hsl(var(--background))",
  //     foreground: "hsl(var(--foreground))",
  //     primary: {
  //       DEFAULT: "hsl(var(--primary))",
  //       foreground: "hsl(var(--primary-foreground))",
  //     },
  //     secondary: {
  //       DEFAULT: "hsl(var(--secondary))",
  //       foreground: "hsl(var(--secondary-foreground))",
  //     },
  //     destructive: {
  //       DEFAULT: "hsl(var(--destructive))",
  //       foreground: "hsl(var(--destructive-foreground))",
  //     },
  //     muted: {
  //       DEFAULT: "hsl(var(--muted))",
  //       foreground: "hsl(var(--muted-foreground))",
  //     },
  //     accent: {
  //       DEFAULT: "hsl(var(--accent))",
  //       foreground: "hsl(var(--accent-foreground))",
  //     },
  //     popover: {
  //       DEFAULT: "hsl(var(--popover))",
  //       foreground: "hsl(var(--popover-foreground))",
  //     },
  //     card: {
  //       DEFAULT: "hsl(var(--card))",
  //       foreground: "hsl(var(--card-foreground))",
  //     },
  //   },
  //   borderRadius: {
  //     lg: "var(--radius)",
  //     md: "calc(var(--radius) - 2px)",
  //     sm: "calc(var(--radius) - 4px)",
  //   },
  // },
});
