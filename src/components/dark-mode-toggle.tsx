"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import { defaultTheme, storageKey, themeValues } from "@/lib/utils";
import type { Theme } from "@/lib/utils";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (Cookies.get(storageKey) as Theme) ?? defaultTheme
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
    Cookies.set(storageKey, theme, { expires: 365 });
  }

  return (
    <Button
      className="text-lg"
      aria-label="Toggle dark mode"
      variant="outline"
      size="icon"
      onMouseDown={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
      ) : (
        <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
      )}
    </Button>
  );
};

export { DarkModeToggle };
