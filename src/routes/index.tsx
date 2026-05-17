import { createFileRoute } from "@tanstack/react-router";

import { Description } from "@/components/description";
import { Hero } from "@/components/hero";
import {
	MotionExperience,
	MotionProvider,
	MotionSeparator,
	MotionSocials,
} from "@/components/motion";
import { DESCRIPTION, NAME } from "@/utils/utils";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			/* Primary Meta Tags */
			{ title: NAME },
			{ name: "description", content: DESCRIPTION },
			/* SEO Meta Tags */
			{ name: "robots", content: "index, follow" },
			/* Open Graph Meta Tags */
			{ property: "og:title", content: NAME },
			{ property: "og:description", content: DESCRIPTION },
			/* Twitter Meta Tags */
			{ name: "twitter:title", content: NAME },
			{ name: "twitter:description", content: DESCRIPTION },
		],
	}),
	component: Page,
});

function Page() {
	return (
		<div className="isolate grid size-full max-w-2xl min-w-xs gap-y-12 justify-self-center-safe px-6 py-12">
			<header>
				<Hero />
			</header>
			<main className="flex flex-col gap-y-8">
				<MotionProvider>
					<Description />
					<MotionSocials layout="y" />
					<MotionExperience layout="y" />
					<MotionSeparator aria-hidden="true" layout="y" className="-mx-1 my-1" />
				</MotionProvider>
			</main>
		</div>
	);
}
