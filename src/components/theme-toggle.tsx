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
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) {
			return;
		}

		const metaThemeColor = document.querySelector<HTMLMetaElement>(
			'meta[name="theme-color"]'
		);

		if (!metaThemeColor) {
			return;
		}

		switch (resolvedTheme) {
			case "light": {
				metaThemeColor.content = LIGHT_BG;
				break;
			}
			case "dark": {
				metaThemeColor.content = DARK_BG;
				break;
			}
			default: {
				break;
			}
		}
	}, [resolvedTheme]);

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
					setTheme(resolvedTheme === "dark" ? "light" : "dark");
				}}
				aria-label="Toggle theme"
				render={
					<motion.button
						animate={{
							backgroundColor: resolvedTheme === "dark" ? LIGHT_BG : DARK_BG,
						}}
					/>
				}
			>
				{!!resolvedTheme && <DarkMode theme={resolvedTheme} />}
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
