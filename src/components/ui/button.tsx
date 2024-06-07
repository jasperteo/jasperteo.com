import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import { Root } from "@kobalte/core/button";
import type { ButtonRootProps } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition focus-visible:(outline-none ring-1 ring-ring) disabled:(pointer-events-none opacity-50)",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow shadow-shadow hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground shadow shadow-shadow hover:bg-destructive-hover",
        outline:
          "border border-input bg-background shadow shadow-shadow hover:(bg-accent text-accent-foreground)",
        secondary:
          "bg-secondary text-secondary-foreground shadow shadow-shadow hover:bg-secondary-hover",
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

type ButtonProps<T extends ValidComponent = "button"> = ButtonRootProps<T> &
  VariantProps<typeof buttonVariants> & { class?: string };

const Button = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>
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
