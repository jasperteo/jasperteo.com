import { createContext, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

  const root = document.documentElement;

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  } else {
    root.classList.remove("light", "dark", "system");
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }

  const value: ThemeContextType = [theme, setTheme];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
