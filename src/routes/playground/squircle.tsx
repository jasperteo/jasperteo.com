import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { useState } from "react";

import { PlaygroundLayout } from "@/components/playground-layout";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/playground/squircle")({
	head: () => ({
		meta: [
			/* Primary Meta Tags */
			{ title: TITLE },
			{ name: "description", content: DESCRIPTION },
			/* Open Graph Meta Tags */
			{ property: "og:title", content: TITLE },
			{ property: "og:description", content: DESCRIPTION },
			/* Twitter Meta Tags */
			{ name: "twitter:title", content: TITLE },
			{ name: "twitter:description", content: DESCRIPTION },
		],
	}),
	component: Page,
});

const TITLE = "Squircle";
const DESCRIPTION = "New corner shapes with superellipses";

const boxVariants = cva(
	"bg-secondary border-primary size-[20rem] border transition-all duration-1000 [--squircle-factor:calc(log(5)/log(2))]",
	{
		variants: {
			variant: {
				rounded: "rounded-[calc(20rem/pow(2,var(--squircle-factor)))]",
				squircle: "squircle-[calc(20rem/2)]",
			},
		},
		defaultVariants: {
			variant: "rounded",
		},
	}
);

function Page() {
	const [checked, setChecked] = useState(false);

	const variant = checked ? "squircle" : "rounded";

	return (
		<PlaygroundLayout title={TITLE} description={DESCRIPTION}>
			<Switch checked={checked} onCheckedChange={setChecked} />
			<ClientOnly>
				<p className="font-mono">
					Your browser{" "}
					{CSS.supports("corner-shape: initial")
						? "supports"
						: "does not support"}{" "}
					the corner-shape CSS property.
				</p>
				<div className={boxVariants({ variant })} />
			</ClientOnly>
		</PlaygroundLayout>
	);
}
