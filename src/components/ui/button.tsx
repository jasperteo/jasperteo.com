import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import { Root } from "@kobalte/core/button";
import type { ButtonRootProps } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus-visible:(outline-none ring-1.5 ring-ring) disabled:(pointer-events-none opacity-50) bg-inherit",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow shadow-zinc-400 hover:bg-primary/90 dark:shadow-zinc-500",
        destructive:
          "bg-destructive text-destructive-foreground shadow shadow-zinc-400 hover:bg-destructive/90 dark:shadow-zinc-500",
        outline:
          "border border-input bg-background shadow shadow-zinc-400 hover:(bg-accent text-accent-foreground) dark:shadow-zinc-500",
        secondary:
          "bg-secondary text-secondary-foreground shadow shadow-zinc-400 hover:bg-secondary/80 dark:shadow-zinc-500",
        ghost: "hover:(bg-accent text-accent-foreground)",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonRootProps &
  VariantProps<typeof buttonVariants> & {
    class?: string;
  };

const Button = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) => {
  const [local, rest] = splitProps(props as ButtonProps, [
    "class",
    "variant",
    "size",
  ]);

  return (
    <Root
      class={cn(
        buttonVariants({ size: local.size, variant: local.variant }),
        local.class
      )}
      {...rest}
    />
  );
};

export { Button, buttonVariants };
