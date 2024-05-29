import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";

/**
 * Merges multiple class names using Tailwind CSS and clsx.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn };
