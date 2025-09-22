import { Link } from "@tanstack/react-router";

import { House } from "@/components/icons/house";
import { Button } from "@/components/ui/button";

function NotFound() {
	return (
		<>
			<title>404 Not Found</title>
			<meta
				name="description"
				content="The page you are looking for does not exist"
			/>

			<div className="flex flex-col items-center-safe justify-center-safe gap-y-8 py-24">
				<h1 className="text-primary-accent-foreground text-6xl font-bold tracking-widest tabular-nums">
					404
				</h1>

				<h2 className="text-primary-accent-foreground text-5xl font-bold">
					Nott -- ffound
				</h2>

				<p>The page you are looking for does not exist</p>

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
		</>
	);
}

export { NotFound };
