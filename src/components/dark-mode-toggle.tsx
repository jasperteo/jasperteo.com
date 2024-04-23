import { Icon } from "@iconify-icon/react";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

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

export { DarkModeToggle };
