import type { ErrorComponentProps } from "@tanstack/react-router";
import { ErrorComponent, Link } from "@tanstack/react-router";

import { House } from "@/components/icons/house";
import { Refresh } from "@/components/icons/refresh";
import { Button } from "@/components/ui/button";

function ErrorPage({ error, reset }: ErrorComponentProps) {
	return (
		<div className="flex size-full max-w-2xl min-w-xs flex-col items-center-safe gap-y-8 justify-self-center-safe px-6 py-24">
			<h1 className="text-primary-accent-foreground text-6xl font-bold tracking-widest tabular-nums">
				500
			</h1>

			<h2 className="text-primary-accent-foreground max-w-full text-5xl font-bold">
				Oops!
			</h2>

			<div className="w-full">
				<ErrorComponent error={error} />
			</div>

			<div className="flex gap-x-4">
				<Button
					variant="outline"
					size="lg"
					className="active:scale-[0.97]"
					type="button"
					onClick={() => {
						reset();
					}}
				>
					<Refresh
						className="animate-spin-delay"
						fill="var(--primary)"
						secondaryfill="var(--secondary)"
					/>
					Try again
				</Button>
				<Button
					variant="outline"
					size="lg"
					className="active:scale-[0.97]"
					render={<Link to="/" />}
				>
					<House className="invert" />
					Go back home
				</Button>
			</div>
		</div>
	);
}

export { ErrorPage };
