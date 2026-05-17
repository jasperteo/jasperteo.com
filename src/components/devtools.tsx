import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

function Devtools({ enabled = false }: { enabled?: boolean }) {
	return (
		enabled && (
			<TanStackDevtools
				plugins={[{ name: "TanStack Router", render: <TanStackRouterDevtoolsPanel /> }]}
			/>
		)
	);
}

export { Devtools };
