import { Icon } from "@iconify-icon/react";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Renders a toggle button for switching between light and dark mode.
 */
const DarkModeToggle = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useTheme({ defaultTheme: "system" });

  return (
    <Button
      className={cn("text-lg", className)}
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
