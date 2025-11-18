import { Separator } from "@base-ui-components/react";
import type { ReactNode } from "react";

type PlaygroundLayoutProps = {
	title?: string;
	description?: string;
	children: ReactNode;
};

function PlaygroundLayout({
	title,
	description,
	children,
}: PlaygroundLayoutProps) {
	return (
		<main className="flex flex-col gap-y-8">
			<div className="flex w-fit flex-col gap-y-2">
				<h1 className="text-2xl font-semibold">{title}</h1>
				<h2 className="text-muted-foreground text-lg font-medium">
					{description}
				</h2>
			</div>

			<Separator />

			<div className="font-geist flex flex-col gap-y-4 text-pretty">
				{children}
			</div>
		</main>
	);
}

export { PlaygroundLayout };
