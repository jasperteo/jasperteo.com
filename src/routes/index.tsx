import { createFileRoute } from "@tanstack/react-router";
import { LayoutGroup, motion } from "motion/react";

import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Socials } from "@/components/socials";
import { Works } from "@/components/works";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="flex flex-col gap-y-12">
			<LayoutGroup>
				<main className="flex flex-col gap-y-8">
					<div className="flex flex-col gap-8 sm:flex-row">
						<div className="w-fit">
							<Hero />
						</div>

						<div className="w-fit">
							<Experience />
						</div>
					</div>

					<Description />

					<motion.div layout className="flex flex-col gap-y-8">
						<Socials />
						<Works />
					</motion.div>
				</main>
			</LayoutGroup>
		</div>
	);
}
