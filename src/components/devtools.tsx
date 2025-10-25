import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

type DevtoolsProps = { enabled?: boolean };

function Devtools({ enabled = false }: DevtoolsProps) {
	return (
		enabled && (
			<TanStackDevtools
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		)
	);
}

export { Devtools };
