import {
	createRouter as createTanStackRouter,
	ErrorComponent,
} from "@tanstack/react-router";

import { NotFound } from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function createRouter() {
	const router = createTanStackRouter({
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

declare module "@tanstack/react-router" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
