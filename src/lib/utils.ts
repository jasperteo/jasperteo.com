import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";

/**
 * Merges multiple class names using Tailwind CSS and clsx.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const storageKey = "theme";
const themeValues = ["dark", "light", "system"] as const;
type Theme = (typeof themeValues)[number];
const defaultTheme: Theme = "dark";

export { cn, storageKey, themeValues, defaultTheme };
export type { Theme };
