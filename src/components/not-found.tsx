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

			<div className="flex size-full max-w-2xl min-w-xs flex-col items-center-safe gap-y-8 justify-self-center-safe px-6 py-24">
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
					className="active:scale-[0.97]"
					nativeButton={false}
					render={<Link to="/" />}
				>
					<House className="invert" />
					Go back home
				</Button>
			</div>
		</>
	);
}

export { NotFound };
