import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

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
      }}>
      {darkMode ? (
        <div className="i-line-md:sunny-outline-to-moon-loop-transition absolute h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <div className="i-line-md:moon-to-sunny-outline-loop-transition h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
