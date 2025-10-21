import type { ReactNode } from "react";

type PlaygroundPageProps = {
	title: string;
	description: string;
	children: ReactNode;
};

function PlaygroundPage({ title, description, children }: PlaygroundPageProps) {
	return (
		<main className="flex flex-col gap-y-8">
			<div className="flex w-fit flex-col gap-y-2">
				<h1 className="text-xl font-semibold">{title}</h1>
				<h2 className="text-muted-foreground font-medium">{description}</h2>
			</div>

			{children}
		</main>
	);
}

export { PlaygroundPage };
