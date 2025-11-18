import {
	createFileRoute,
	linkOptions,
	notFound,
	Outlet,
	rootRouteId,
} from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { ChevronLeft } from "@/components/icons/chevron-left";
import { Button } from "@/components/ui/button";

const allowedRoutes = new Set<string>(
	linkOptions([
		/* Playground Routes */
		// { to: "/playground/liquid-glass" },
	]).map(({ to }) => to)
);

export const Route = createFileRoute("/playground")({
	loader: ({ location: { pathname } }) => {
		if (!allowedRoutes.has(pathname)) {
			notFound({ routeId: rootRouteId, throw: true });
		}
	},

	component: Layout,
});

function Layout() {
	return (
		<div className="grid size-full max-w-2xl min-w-xs gap-y-20 justify-self-center-safe px-6 py-12">
			<header className="flex w-full justify-between">
				<Button
					variant="outline"
					size="icon"
					className="text-muted-foreground rounded-full active:scale-125"
					aria-label="Go Back"
					render={<Link to="/" />}
				>
					<ChevronLeft />
				</Button>
			</header>

			<Outlet />
		</div>
	);
}
