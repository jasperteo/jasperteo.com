import { createRouter, ErrorComponent } from "@tanstack/react-router";

import { NotFound } from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: false,
		defaultNotFoundComponent: NotFound,
		notFoundMode: "root",
		defaultErrorComponent: ({ error }) => {
			console.error("DefaultCatchBoundary Error:", error);
			return <ErrorComponent error={error} />;
		},
	});

	return router;
}
