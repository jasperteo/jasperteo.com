import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

/**
 * Merges multiple class names using Tailwind CSS and clsx.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn };
