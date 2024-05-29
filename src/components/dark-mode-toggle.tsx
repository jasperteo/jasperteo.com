import { Match, Switch, createEffect, createSignal } from "solid-js";
import Cookies from "js-cookie";
import { Icon } from "@iconify-icon/solid";

import { Button } from "@/components/ui/button";

const storageKey = "theme";
const themeValues = ["dark", "light", "system"] as const;
type Theme = (typeof themeValues)[number];
const defaultTheme: Theme = "dark";

type DarkModeToggleProps = { storedTheme?: Theme };

const DarkModeToggle = (props: DarkModeToggleProps) => {
  const storedTheme = () => props.storedTheme;
  const [theme, setTheme] = createSignal<Theme>(storedTheme() ?? defaultTheme);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const rootClass = document.documentElement.classList;

  createEffect(() => {
    const metaTheme = document.querySelector(`meta[name="theme-color"]`);

    if (theme() !== "dark" && theme() !== "light") {
      setTheme(prefersDark ? "dark" : "light");
    }

    rootClass.remove(...themeValues);
    rootClass.add(theme());
    metaTheme?.setAttribute(
      "content",
      theme() === "dark" ? "hsl(240, 6%, 10%)" : "hsl(0, 0%, 98%)"
    );
    Cookies.set(storageKey, theme(), {
      expires: 365,
      sameSite: "strict",
      secure: true,
    });
  });

  return (
    <Button
      class="text-lg"
      aria-label="Toggle dark mode"
      variant="outline"
      size="icon"
      onMouseDown={() => setTheme(theme() === "dark" ? "light" : "dark")}
    >
      <Switch>
        <Match when={theme() === "dark"}>
          <Icon icon="line-md:sunny-outline-to-moon-loop-transition" />
        </Match>
        <Match when={theme() === "light"}>
          <Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
        </Match>
      </Switch>
    </Button>
  );
};

export { DarkModeToggle, storageKey, themeValues, defaultTheme };
export type { Theme };
