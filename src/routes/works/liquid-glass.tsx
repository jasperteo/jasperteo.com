import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works/liquid-glass")({
	head: () => ({
		meta: [
			{ title: "Liquid Glass" },
			{
				name: "description",
				content: "Recreate the liquid glass effect using CSS",
			},
		],
	}),

	component: LiquidGlassPage,
});

function LiquidGlassPage() {
	return (
		<main className="flex flex-col gap-y-8">
			<div className="flex w-fit flex-col gap-y-2">
				<h1 className="text-xl font-semibold">Liquid Glass</h1>
				<h2 className="text-muted-foreground font-medium">
					Recreate the liquid glass effect using CSS
				</h2>
			</div>

			<p className="font-mono tracking-wider">COMING SOON</p>
		</main>
	);
}
