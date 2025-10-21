import { createFileRoute } from "@tanstack/react-router";

import { PlaygroundPage } from "@/components/playground-page";

const TITLE = "Liquid Glass";
const DESCRIPTION = "Recreate the liquid glass effect using CSS";

export const Route = createFileRoute("/playground/liquid-glass")({
	head: () => ({
		meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }],
	}),

	component: Page,
});

function Page() {
	return (
		<PlaygroundPage title={TITLE} description={DESCRIPTION}>
			<p className="font-mono">COMING SOON</p>
		</PlaygroundPage>
	);
}
