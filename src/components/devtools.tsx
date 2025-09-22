import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

type DevtoolsProps = { enabled?: boolean };

function Devtools({ enabled = false }: DevtoolsProps) {
	if (!enabled) {
		// oxlint-disable-next-line no-null
		return null;
	}

	return (
		<TanStackDevtools
			plugins={[
				{
					name: "TanStack Router",
					render: <TanStackRouterDevtoolsPanel />,
				},
			]}
		/>
	);
}

export { Devtools };
