import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetAnimations from "unocss-preset-animations";

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetAnimations(),
    presetUno({ dark: "class" }),
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
  theme: {
    colors: {
      border: "color(display-p3 var(--border))",
      input: "color(display-p3 var(--input))",
      ring: {
        DEFAULT: "color(display-p3 var(--ring))",
        alt: "color(display-p3 var(--ring-alt))",
      },
      background: "color(display-p3 var(--background))",
      foreground: "color(display-p3 var(--foreground))",
      shadow: "color(display-p3 var(--shadow))",
      primary: {
        DEFAULT: "color(display-p3 var(--primary))",
        hover: "color(display-p3 var(--primary-hover))",
        foreground: "color(display-p3 var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "color(display-p3 var(--secondary))",
        hover: "color(display-p3 var(--secondary-hover))",
        foreground: "color(display-p3 var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "color(display-p3 var(--destructive))",
        hover: "color(display-p3 var(--destructive-hover))",
        foreground: "color(display-p3 var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "color(display-p3 var(--muted))",
        foreground: "color(display-p3 var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "color(display-p3 var(--accent))",
        foreground: "color(display-p3 var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "color(display-p3 var(--popover))",
        foreground: "color(display-p3 var(--popover-foreground))",
      },
      card: {
        DEFAULT: "color(display-p3 var(--card))",
        foreground: "color(display-p3 var(--card-foreground))",
      },
      amber: {
        10: "color(display-p3 var(--amber-10))",
      },
      orange: {
        11: "color(display-p3 var(--orange-11))",
        12: "color(display-p3 var(--orange-12))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    animation: {
      keyframes: {
        "accordion-down":
          "{ from { height: 0 } to { height: var(--kb-accordion-content-height) } }",
        "accordion-up":
          "{ from { height: var(--kb-accordion-content-height) } to { height: 0 } }",
        "collapsible-down":
          "{ from { height: 0 } to { height: var(--kb-collapsible-content-height) } }",
        "collapsible-up":
          "{ from { height: var(--kb-collapsible-content-height) } to { height: 0 } }",
      },
      timingFns: {
        "accordion-down": "ease-out",
        "accordion-up": "ease-out",
        "collapsible-down": "ease-out",
        "collapsible-up": "ease-out",
      },
      durations: {
        "accordion-down": "0.2s",
        "accordion-up": "0.2s",
        "collapsible-down": "0.2s",
        "collapsible-up": "0.2s",
      },
    },
  },
});
