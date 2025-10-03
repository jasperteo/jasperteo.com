import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

type DevtoolsProps = { enabled?: boolean };

function Devtools({ enabled = false }: DevtoolsProps) {
	if (!enabled) {
		// oxlint-disable-next-line no-null
		return null;
	}

	return <TanStackRouterDevtools />;
}

export { Devtools };
