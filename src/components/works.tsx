import { Link, linkOptions } from "@tanstack/react-router";
import type { ReactNode } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
import LiquidGlass from "@/images/liquid-glass.webp";

const WORKS_ARRAY: CardShellProps[] = [
	{
		imageSrc: LiquidGlass,
		imageAlt: "Liquid Glass",
		title: "Liquid Glass",
		description: (
			<>
				<p>Recreate the effect with CSS</p>
				<p className="font-mono tracking-wider">COMING SOON</p>
			</>
		),
		link: linkOptions({ to: "/works/liquid-glass" }).to,
		disabled: true,
	},
];

function Works() {
	return (
		<div className="flex flex-col items-center-safe gap-y-6">
			<h2 className="text-2xl font-bold">Works</h2>
			<article className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2">
				{WORKS_ARRAY.map(
					({ imageSrc, imageAlt, title, description, link, disabled }) => (
						<CardShell
							key={title}
							imageSrc={imageSrc}
							imageAlt={imageAlt}
							title={title}
							description={description}
							link={link}
							disabled={disabled}
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
	link: string;
	disabled: boolean;
};

function CardShell({
	imageSrc,
	imageAlt,
	title,
	description,
	link,
	disabled,
}: CardShellProps) {
	return (
		<Link to={link} disabled={disabled}>
			<Card className="size-full py-4 transition-colors">
				<CardContent className="px-4">
					<div className="size-full overflow-clip rounded-lg border">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="aspect-4/3 size-full"
						/>
					</div>
				</CardContent>
				<CardFooter className="flex-col items-start gap-y-2">
					<CardTitle className="font-bold">{title}</CardTitle>
					<CardDescription className="flex flex-col gap-y-1">
						{description}
					</CardDescription>
				</CardFooter>
			</Card>
		</Link>
	);
}

export { Works };
