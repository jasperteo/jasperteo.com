import {
  Match,
  Switch,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import Cookies from "js-cookie";
import { Icon } from "@iconify-icon/solid";

import { Button } from "@/components/ui/button";

const themeValues = ["light", "dark", "system"] as const;
type Theme = (typeof themeValues)[number];
const defaultTheme: Theme = "dark";

const storageKey = "theme";
const color = { light: "hsl(60 8% 97%)", dark: "hsl(60 2% 10%)" };

type DarkModeToggleProps = { storedTheme?: Theme };

const DarkModeToggle = (props: DarkModeToggleProps) => {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
  const setMediaTheme = () => setTheme(prefersLight.matches ? "light" : "dark");
  const themeColor = () => (theme() === "light" ? color.light : color.dark);

  const storedTheme = () => props.storedTheme;
  const [theme, setTheme] = createSignal<Theme>(storedTheme() ?? defaultTheme);

  createEffect(() => {
    if (theme() !== "light" && theme() !== "dark") {
      setMediaTheme();
    }
    document.documentElement.classList.remove(...themeValues);
    document.documentElement.classList.add(theme());
    document.getElementById("tc")?.setAttribute("content", themeColor());
    Cookies.set(storageKey, theme(), {
      expires: 365,
      sameSite: "strict",
      secure: true,
    });
  });

  onMount(() => prefersLight.addEventListener("change", setMediaTheme));
  onCleanup(() => prefersLight.removeEventListener("change", setMediaTheme));

  return (
    <Button
      aria-label="Dark Mode Toggle"
      variant="outline"
      size="icon"
      class="text-lg"
      onClick={[setTheme, theme() === "dark" ? "light" : "dark"]}
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

export { DarkModeToggle, color, defaultTheme, storageKey };
export type { Theme };
