import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { badgeVariants } from "@/components/ui/badge-variant";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge };
