import { splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition focus-visible:(outline-none ring-1.5 ring-ring)",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow shadow-shadow hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground shadow shadow-shadow hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow shadow-shadow hover:bg-destructive/80",
        outline: "border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = (
  props: ComponentProps<"div"> & VariantProps<typeof badgeVariants>
) => {
  const [local, rest] = splitProps(props, ["class", "variant"]);

  return (
    <div
      class={cn(badgeVariants({ variant: local.variant }), local.class)}
      {...rest}
    />
  );
};

export { Badge, badgeVariants };
