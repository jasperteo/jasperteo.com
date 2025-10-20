import { createFileRoute } from "@tanstack/react-router";

import { WorksPage } from "@/components/works-page";

const TITLE = "Liquid Glass";
const DESCRIPTION = "Recreate the liquid glass effect using CSS";

export const Route = createFileRoute("/works/liquid-glass")({
	head: () => ({
		meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }],
	}),

	component: Page,
});

function Page() {
	return (
		<WorksPage title={TITLE} description={DESCRIPTION}>
			<p className="font-mono">COMING SOON</p>
		</WorksPage>
	);
}
