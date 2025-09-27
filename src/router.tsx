import { createRouter } from "@tanstack/react-router";

import { ErrorPage } from "@/components/error-page";
import { NotFound } from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: false,
		defaultNotFoundComponent: NotFound,
		notFoundMode: "root",
		defaultErrorComponent: ErrorPage,
	});

	return router;
}
