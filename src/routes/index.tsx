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
				<main className="flex flex-col gap-y-8">
					<Hero />
					<Description />
					<MotionSocials layout="position" />
					<MotionExperience layout="position" />
					<MotionSeparator layout="position" className="-mx-1 my-1" />
					<MotionPlayground layout="position" />
				</main>
			</MotionConfig>
		</LayoutGroup>
	);
}
