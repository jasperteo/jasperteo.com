import {
	createFileRoute,
	Link,
	linkOptions,
	notFound,
	Outlet,
} from "@tanstack/react-router";

import { ChevronLeft } from "@/components/icons/chevron-left";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/playground")({
	loader: ({ location }) => {
		if (disallowedRoutes.has(location.pathname)) {
			notFound({ throw: true });
		}
	},

	component: PlaygroundLayout,
});

const disallowedRoutes = new Set<string>([
	linkOptions({ to: "/playground" }).to,
	linkOptions({ to: "/playground/liquid-glass" }).to,
]);

function PlaygroundLayout() {
	return (
		<div className="flex flex-col gap-y-20">
			<header className="flex w-full justify-between">
				<Button
					variant="outline"
					size="icon"
					className="text-muted-foreground rounded-full"
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
