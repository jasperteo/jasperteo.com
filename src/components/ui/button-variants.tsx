import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow shadow-zinc-400 hover:bg-primary/90 dark:shadow-zinc-500",
        destructive:
          "bg-destructive text-destructive-foreground shadow shadow-zinc-400 hover:bg-destructive/90 dark:shadow-zinc-500",
        outline:
          "border border-input bg-background shadow shadow-zinc-400 hover:bg-accent hover:text-accent-foreground dark:shadow-zinc-500",
        secondary:
          "bg-secondary text-secondary-foreground shadow shadow-zinc-400 hover:bg-secondary/80 dark:shadow-zinc-500",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
