import {
	createFileRoute,
	Link,
	notFound,
	Outlet,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { ThemeToggleFallback } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/works")({
	loader: ({ location }) => {
		if (matchingRoutes.has(location.pathname)) {
			notFound({ throw: true });
		}
	},

	component: WorksLayout,
});

const matchingRoutes = new Set([
	"/works",
	"/works/",
	"/works/liquid-glass",
	"/works/liquid-glass/",
]);

const ThemeToggle = lazy(async () => {
	const { ThemeToggle } = await import("@/components/theme-toggle");
	return { default: ThemeToggle };
});

function WorksLayout() {
	return (
		<div className="flex flex-col gap-y-20">
			<header className="flex w-full justify-between">
				<Button
					variant="outline"
					size="icon"
					className="text-primary-highlight rounded-xl text-base font-black"
					aria-label="Go back to home"
					render={<Link to="/" />}
				>
					{"<-"}
				</Button>

				<Suspense fallback={<ThemeToggleFallback />}>
					<ThemeToggle className="sm:hidden" />
				</Suspense>
			</header>
			<Outlet />
		</div>
	);
}
