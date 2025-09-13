import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import type { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
};

export { cn };
export type { IconProps };
