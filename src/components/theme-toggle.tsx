import { motion, MotionConfig } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { DarkMode } from "@/components/icons/dark-mode";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";

const LIGHT_BG = "oklch(0.9809 0.0086 97.34)";
const DARK_BG = "oklch(0.2165 0.0061 92.49)";

type ThemeToggleProps = { className?: string };

function ThemeToggle({ className }: ThemeToggleProps) {
	const { theme, setTheme } = useTheme();

	if (theme === "system") {
		const prefersDark = globalThis.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setTheme(prefersDark ? "dark" : "light");
	}

	useEffect(() => {
		const metaThemeColor = document.querySelector<HTMLMetaElement>(
			'meta[name="theme-color"]'
		);

		if (!metaThemeColor) {
			return;
		}

		switch (theme) {
			case "light": {
				metaThemeColor.content = LIGHT_BG;
				break;
			}
			case "dark": {
				metaThemeColor.content = DARK_BG;
				break;
			}
			default: {
				return;
			}
		}
	}, [theme]);

	return (
		<MotionConfig transition={{ type: "spring", duration: 0.7, bounce: 0 }}>
			<Button
				variant="default"
				size="icon"
				type="button"
				className={cn(
					"bg-foreground hover:bg-foreground min-h-9 min-w-9 duration-[0]",
					className
				)}
				onClick={() => {
					setTheme((previous) => (previous === "dark" ? "light" : "dark"));
				}}
				aria-label="Toggle theme"
				render={
					<motion.button
						animate={{ backgroundColor: theme === "dark" ? LIGHT_BG : DARK_BG }}
					/>
				}
			>
				{!!theme && <DarkMode theme={theme} />}
			</Button>
		</MotionConfig>
	);
}

function ThemeToggleFallback() {
	return (
		<Button
			variant="default"
			size="icon"
			className="bg-foreground hover:bg-foreground min-h-9 min-w-9 duration-[0]"
			render={<div />}
		/>
	);
}

export { ThemeToggle, ThemeToggleFallback };
