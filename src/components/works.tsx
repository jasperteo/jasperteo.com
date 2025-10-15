import type { LinkOptions } from "@tanstack/react-router";
import { Link, linkOptions } from "@tanstack/react-router";
import type { ReactNode } from "react";

import {
	Card,
	CardDescription,
	CardFooter,
	CardPanel,
	CardTitle,
} from "@/components/ui/card";
import LiquidGlass from "@/images/liquid-glass.webp";

const WORKS_ARRAY: CardShellProps[] = [
	{
		imageSrc: LiquidGlass,
		imageAlt: "Liquid Glass",
		title: "Liquid Glass",
		description: (
			<p className="flex flex-col gap-y-1">
				<span>Recreate the effect with CSS</span>
				<span className="font-mono tracking-wider">COMING SOON</span>
			</p>
		),
		linkProps: linkOptions({ to: "/works/liquid-glass", disabled: true }),
	},
];

function Works() {
	return (
		<div className="flex flex-col items-center-safe gap-y-8 px-4 sm:px-0">
			<h2 className="text-2xl font-bold">Works</h2>
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{WORKS_ARRAY.map(
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
			</article>
		</div>
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
			<Card className="hover:border-input size-full rounded-3xl px-0 py-4 transition duration-200 hover:shadow-xl active:scale-[0.99]">
				<CardPanel className="px-4 py-0">
					<div className="border-muted size-full overflow-clip rounded-[1.125rem] border">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="aspect-4/3 size-full"
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

export { Works };
