import type { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

type PlaygroundLayoutProps = {
	title?: string;
	description?: string;
	children: ReactNode;
};

function PlaygroundLayout({ title, description, children }: PlaygroundLayoutProps) {
	return (
		<main className="flex flex-col gap-y-8">
			<div className="flex w-fit flex-col gap-y-2">
				<h1 className="text-2xl font-semibold">{title}</h1>
				<h2 className="text-lg font-medium text-muted-foreground">{description}</h2>
			</div>

			<Separator />

			<div className="flex flex-col gap-y-4 font-geist text-pretty">{children}</div>
		</main>
	);
}

export { PlaygroundLayout };
