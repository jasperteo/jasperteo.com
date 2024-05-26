import { useState } from "react";
import Cookies from "js-cookie";
import { Icon } from "@iconify-icon/react";

import { Button } from "@/components/ui/button";
import { defaultTheme, storageKey, themeValues } from "@/lib/utils";
import type { Theme } from "@/lib/utils";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const rootClass = document.documentElement.classList;
const metaTheme = document.querySelector(`meta[name="theme-color"]`);

type DarkModeToggleProps = { storedTheme?: Theme };

const DarkModeToggle = ({ storedTheme }: DarkModeToggleProps) => {
  const [theme, setTheme] = useState<Theme>(storedTheme ?? defaultTheme);

  if (theme !== "dark" && theme !== "light") {
    setTheme(prefersDark ? "dark" : "light");
  }

  rootClass.remove(...themeValues);
  rootClass.add(theme);
  metaTheme?.setAttribute("content", theme === "dark" ? "#18181b" : "#fafafa");
  Cookies.set(storageKey, theme, {
    expires: 365,
    sameSite: "strict",
    secure: true,
  });

  return (
    <Button
      className="text-lg"
      aria-label="Toggle dark mode"
      variant="outline"
      size="icon"
      onMouseDown={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
      ) : (
        <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
      )}
    </Button>
  );
};

export { DarkModeToggle };
