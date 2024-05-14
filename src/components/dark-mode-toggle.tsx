import { useState } from "react";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";

/**
 * Renders a toggle button for switching between light and dark mode.
 */
const DarkModeToggle = () => {
  const [theme, setTheme] = useTheme({ defaultTheme: "system" });

  return (
    <Button
      className="text-lg"
      aria-label="Toggle dark mode"
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
      ) : (
        <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
      )}
    </Button>
  );
};

const themeValues = ["dark", "light", "system"] as const;

type Theme = (typeof themeValues)[number];
type UseThemeProps = { defaultTheme: Theme; storageKey?: string };

/**
 * Custom hook for managing the theme of the application.
 *
 * @param {object} options - The options for the hook.
 * @param {Theme} options.defaultTheme - The default theme to use.
 * @param {string} options.storageKey - The key to use for storing the theme in local storage.
 * @returns A tuple containing the current theme and a function to update the theme.
 */
const useTheme = ({ defaultTheme, storageKey = "theme" }: UseThemeProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  if (theme !== "dark" && theme !== "light") {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  } else {
    document.documentElement.classList.remove(...themeValues);
    document.documentElement.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }

  return [theme, setTheme] as const;
};

export { DarkModeToggle };
