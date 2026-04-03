import { createFileRoute } from "@tanstack/react-router";
import { LayoutGroup, motion, MotionConfig } from "motion/react";

import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";
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

const MotionSocials = motion.create(Socials);
const MotionExperience = motion.create(Experience);
const MotionSeparator = motion.create(Separator);

function Page() {
	return (
		<LayoutGroup>
			<MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
				<div className="isolate grid size-full max-w-2xl min-w-xs gap-y-12 justify-self-center-safe px-6 py-12">
					<header>
						<Hero />
					</header>
					<main className="flex flex-col gap-y-8">
						<Description />
						<MotionSocials layout="position" />
						<MotionExperience layout="position" />
						<MotionSeparator layout="position" className="-mx-1 my-1" />
					</main>
				</div>
			</MotionConfig>
		</LayoutGroup>
	);
}
