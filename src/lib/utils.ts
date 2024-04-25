import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 * Merges multiple class names using Tailwind CSS and clsx.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const linkPDF =
  "https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/resumePDF/jasperCV.pdf";

export { cn, linkPDF };
