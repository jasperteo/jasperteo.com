import { createRouter } from "@tanstack/react-router";

import { ErrorPage } from "@/components/error-page";
import { NotFound } from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		notFoundMode: "root",

		defaultPreload: "viewport",

		defaultErrorComponent: ErrorPage,
		defaultNotFoundComponent: NotFound,
	});

	return router;
}
