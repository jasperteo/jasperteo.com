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
					variant="secondary"
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
