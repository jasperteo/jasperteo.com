import { Match, Switch, createEffect, createSignal, onCleanup } from "solid-js";
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

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
  const setMediaTheme = () => setTheme(prefersLight.matches ? "light" : "dark");

  prefersLight.addEventListener("change", setMediaTheme);
  onCleanup(() => prefersLight.removeEventListener("change", setMediaTheme));

  createEffect(() => {
    if (theme() !== "light" && theme() !== "dark") {
      setMediaTheme();
    }

    const themeColor =
      theme() === "light" ? "hsl(0, 0%, 98%)" : "hsl(240, 6%, 10%)";
    document.documentElement.classList.remove(...themeValues);
    document.documentElement.classList.add(theme());
    document.getElementById("theme-color")?.setAttribute("content", themeColor);
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
      onMouseDown={[setTheme, theme() === "dark" ? "light" : "dark"]}
    >
      <Switch fallback={<Icon icon="line-md:light-dark-loop" />}>
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
