import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType>(["system", () => {}]);

type ThemeProviderProps = {
  defaultTheme: Theme;
  storageKey: string;
  children: React.ReactNode;
};

function ThemeProvider({
  defaultTheme,
  storageKey,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    } else {
      localStorage.setItem(storageKey, theme);
    }
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [storageKey, theme]);

  const value: ThemeContextType = [theme, setTheme];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
