import { splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const badgeVariants = cva(
	"inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:(outline-none ring-2 ring-offset-2 ring-ring)",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow shadow-shadow hover:bg-primary-hover",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground shadow shadow-shadow hover:bg-secondary-hover",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow shadow-shadow hover:bg-destructive-hover",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

type BadgeProps = ComponentProps<"div"> & VariantProps<typeof badgeVariants>;

const Badge = (props: BadgeProps) => {
	const [local, rest] = splitProps(props, ["class", "variant"]);

	return (
		<div
			class={cn(badgeVariants({ variant: local.variant }), local.class)}
			{...rest}
		/>
	);
};

export { Badge, badgeVariants };
