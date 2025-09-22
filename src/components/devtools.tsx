import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

/**
 * @todo (@jasperteo): remove this when Cloudflare can build properly without this flag
 */
const isProduction = import.meta.env.PROD;

type DevtoolsProps = { enabled?: boolean };

function Devtools({ enabled = false }: DevtoolsProps) {
	if (!enabled || isProduction) {
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
