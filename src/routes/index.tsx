import { createFileRoute } from "@tanstack/react-router";
import { LayoutGroup, motion } from "motion/react";

import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";
import { Works } from "@/components/works";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main className="flex flex-col gap-y-8">
			<LayoutGroup>
				<Hero />

				<Description />

				<motion.div layout className="flex flex-col gap-y-8">
					<Socials />
					<Experience />
					<Separator className="-mx-1 my-1" />
					<Works />
				</motion.div>
			</LayoutGroup>
		</main>
	);
}
