import { createRouter } from "@tanstack/react-router";

import { Error } from "@/components/error";
import { NotFound } from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: false,
		defaultNotFoundComponent: NotFound,
		notFoundMode: "root",
		defaultErrorComponent: Error,
	});

	return router;
}
