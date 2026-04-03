import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import type { SVGProps } from "react";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			rounded: [{ squircle: [(value: string) => value !== ""] }],
		},
	},
});

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
};

const NAME = "Jasper Teo ‧ 張";
const DESCRIPTION = "Software Engineer crafting intuitive and delightful interfaces";
const URL = "https://jasperteo.com";
const OG_IMAGE = `${URL}/opengraph-image.png`;
const TWITTER_HANDLE = "@jasper_teo";
const WIDTH = "1200";
const HEIGHT = "630";

export { cn, DESCRIPTION, HEIGHT, NAME, OG_IMAGE, TWITTER_HANDLE, URL, WIDTH };
export type { IconProps };
