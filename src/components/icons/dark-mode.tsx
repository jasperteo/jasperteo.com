import type { SVGMotionProps } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/utils/utils";

type IconProps = SVGMotionProps<SVGSVGElement> & {
	title?: string;
	theme: string;
};

function DarkMode({
	theme,
	title = "Dark Mode Icon",
	className,

	...props
}: IconProps) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			fill="none"
			initial={false}
			animate={{ rotate: theme === "dark" ? 180 : 0 }}
			className={cn("size-full translate-x-0 translate-y-0", className)}
			{...props}
		>
			<title>{title}</title>
			<motion.path
				d="M50 18C58.4869 18 66.6262 21.3714 72.6274 27.3726C78.6286 33.3737 82 41.513 82 50C82 58.4869 78.6286 66.6262 72.6275 72.6274C66.6263 78.6286 58.487 82 50.0001 82L50 50L50 18Z"
				initial={false}
				animate={{ fill: "var(--card)" }}
			/>
			<motion.circle
				cx="50"
				cy="50"
				r="30"
				initial={false}
				animate={{ stroke: "var(--card)" }}
				strokeWidth="4"
			/>
			<motion.circle
				cx="50"
				cy="50"
				r="12"
				initial={false}
				animate={{ fill: "var(--card)" }}
			/>
			<motion.path
				d="M50 62C53.1826 62 56.2348 60.7357 58.4853 58.4853C60.7357 56.2348 62 53.1826 62 50C62 46.8174 60.7357 43.7652 58.4853 41.5147C56.2348 39.2643 53.1826 38 50 38L50 50L50 62Z"
				initial={false}
				animate={{ fill: "var(--foreground)" }}
			/>
		</motion.svg>
	);
}

export { DarkMode };
