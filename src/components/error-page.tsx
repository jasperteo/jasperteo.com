import type { ErrorComponentProps } from "@tanstack/react-router";
import { ErrorComponent, Link } from "@tanstack/react-router";

import { House } from "@/components/icons/house";
import { Refresh } from "@/components/icons/refresh";
import { Button } from "@/components/ui/button";

function ErrorPage({ error, reset }: ErrorComponentProps) {
	return (
		<div className="flex flex-col items-center-safe justify-center-safe gap-y-8 py-24">
			<h1 className="text-primary-accent-foreground text-6xl font-bold tracking-widest tabular-nums">
				500
			</h1>

			<h2 className="text-primary-accent-foreground max-w-full text-5xl font-bold">
				Oops!
			</h2>

			<div className="w-full">
				<ErrorComponent error={error} />
			</div>

			<Button
				variant="outline"
				size="lg"
				className="text-base"
				type="button"
				onClick={() => {
					reset();
				}}
			>
				<Refresh
					className="animate-spin-delay size-5"
					fill="var(--primary)"
					secondaryfill="var(--secondary)"
					width="1.25rem"
					height="1.25rem"
				/>
				Try again
			</Button>

			<Button
				variant="outline"
				size="lg"
				className="text-base"
				render={<Link to="/" />}
			>
				<House className="size-5 invert" width="1.25rem" height="1.25rem" />
				Go back home
			</Button>
		</div>
	);
}

export { ErrorPage };
