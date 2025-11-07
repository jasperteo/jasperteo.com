import type { LinkOptions } from "@tanstack/react-router";
import { Link, linkOptions } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import {
	Card,
	CardDescription,
	CardFooter,
	CardPanel,
	CardTitle,
} from "@/components/ui/card";
import LiquidGlass from "@/images/liquid-glass.webp";

const PLAYGROUND_ARRAY: CardShellProps[] = [
	{
		imageSrc: LiquidGlass,
		imageAlt: "Liquid Glass",
		title: "Liquid Glass",
		description: (
			<p className="flex flex-col gap-y-1">
				<span>Recreate the effect with CSS</span>
				<span className="font-mono">COMING SOON</span>
			</p>
		),
		linkProps: linkOptions({ to: "/playground/liquid-glass", disabled: true }),
	},
];

function Playground({ ref }: Pick<ComponentProps<"section">, "ref">) {
	return (
		<section
			ref={ref}
			className="flex flex-col items-center-safe gap-y-8 px-4 sm:px-0"
		>
			<h2 className="text-2xl font-bold">Playground</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{PLAYGROUND_ARRAY.map(
					({ imageSrc, imageAlt, title, description, linkProps }) => (
						<CardShell
							key={title}
							imageSrc={imageSrc}
							imageAlt={imageAlt}
							title={title}
							description={description}
							linkProps={linkProps}
						/>
					)
				)}
			</div>
		</section>
	);
}

type CardShellProps = {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: ReactNode;
	linkProps: LinkOptions;
};

function CardShell({
	imageSrc,
	imageAlt,
	title,
	description,
	linkProps,
}: CardShellProps) {
	return (
		<Link {...linkProps}>
			<Card className="hover:border-input px-0 py-4 transition active:scale-[0.99]">
				<CardPanel className="px-4 py-0">
					<div className="border-muted overflow-clip rounded-[1.125rem] border">
						<img
							src={imageSrc}
							alt={imageAlt}
							draggable={false}
							className="aspect-4/3 object-cover"
						/>
					</div>
				</CardPanel>
				<CardFooter className="flex-col items-start gap-y-2">
					<CardTitle className="font-bold">{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardFooter>
			</Card>
		</Link>
	);
}

export { Playground };
