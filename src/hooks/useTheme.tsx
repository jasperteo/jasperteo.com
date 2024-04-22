import { useState } from "react";

const themeValues = ["dark", "light", "system"] as const;

type Theme = (typeof themeValues)[number];

type UseThemeProps = { defaultTheme: Theme; storageKey?: string };

const useTheme = ({ defaultTheme, storageKey = "theme" }: UseThemeProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  const root = document.documentElement;

  if (theme !== "dark" && theme !== "light") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  } else {
    root.classList.remove(...themeValues);
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }

  return [theme, setTheme] as const;
};

export { useTheme };
