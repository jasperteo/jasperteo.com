import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(darkMode ? "light" : "dark");
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? (
        <Icon
          icon="line-md:sunny-outline-to-moon-loop-transition"
          width="1.2em"
          height="1.2em"
        />
      ) : (
        <Icon
          icon="line-md:moon-to-sunny-outline-loop-transition"
          width="1.2em"
          height="1.2em"
        />
      )}
    </Button>
  );
}
