import { Match, Switch, createEffect, createSignal, onCleanup } from "solid-js";
import { picklist } from "@valibot/valibot";
import type { InferInput } from "@valibot/valibot";
import Cookies from "js-cookie";
import { Icon } from "@iconify-icon/solid";

import { Button } from "@/components/ui/button";

const themeValues = ["light", "dark", "system"] as const;
const themeEnum = picklist(themeValues);
type Theme = InferInput<typeof themeEnum>;
const defaultTheme: Theme = "dark";

const storageKey = "theme";
const color = {
	light: "color(display-p3 0.977 0.977 0.973)",
	dark: "color(display-p3 0.098 0.098 0.094)",
};

type ThemeToggleProps = { storedTheme?: Theme };

const ThemeToggle = (props: ThemeToggleProps) => {
	const storedTheme = () => props.storedTheme;
	const [theme, setTheme] = createSignal<Theme>(storedTheme() ?? defaultTheme);

	const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
	const setSysTheme = () => setTheme(prefersLight.matches ? "light" : "dark");
	const themeColor = () => (theme() === "light" ? color.light : color.dark);

	createEffect(() => {
		if (theme() !== "light" && theme() !== "dark") {
			setSysTheme();
		}
		document.documentElement.classList.remove(...themeValues);
		document.documentElement.classList.add(theme());
		document.getElementById("tc")?.setAttribute("content", themeColor());
		Cookies.set(storageKey, theme(), {
			expires: 365,
			sameSite: "none",
			secure: true,
		});
	});

	prefersLight.addEventListener("change", setSysTheme);
	onCleanup(() => prefersLight.removeEventListener("change", setSysTheme));

	return (
		<Button
			class="text-lg"
			variant="outline"
			size="icon"
			aria-label="Dark Mode Toggle"
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

export { ThemeToggle, color, defaultTheme, storageKey, themeEnum };
export type { Theme };
