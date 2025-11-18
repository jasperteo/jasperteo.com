import { createFileRoute } from "@tanstack/react-router";
import { LayoutGroup, motion, MotionConfig } from "motion/react";

import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Playground } from "@/components/playground";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: Home,
});

const MotionSocials = motion.create(Socials);
const MotionExperience = motion.create(Experience);
const MotionPlayground = motion.create(Playground);
const MotionSeparator = motion.create(Separator);

function Home() {
	return (
		<LayoutGroup>
			<MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
				<div className="grid size-full max-w-2xl min-w-xs gap-y-12 justify-self-center-safe px-6 py-12">
					<header>
						<Hero />
					</header>
					<main className="flex flex-col gap-y-8">
						<Description />
						<MotionSocials layout="position" />
						<MotionExperience layout="position" />
						<MotionSeparator layout="position" className="-mx-1 my-1" />
						<MotionPlayground layout="position" />
					</main>
				</div>
			</MotionConfig>
		</LayoutGroup>
	);
}
