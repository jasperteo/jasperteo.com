import { createFileRoute } from "@tanstack/react-router";
import { LayoutGroup, motion } from "motion/react";
import { lazy, Suspense } from "react";

import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Socials } from "@/components/socials";
import { ThemeToggleFallback } from "@/components/theme-toggle-fallback";
import { Works } from "@/components/works";

export const Route = createFileRoute("/")({
	component: Home,
});

const ThemeToggle = lazy(async () => {
	const { ThemeToggle } = await import("@/components/theme-toggle");
	return { default: ThemeToggle };
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
			<footer className="flex w-full justify-center-safe sm:hidden">
				<Suspense fallback={<ThemeToggleFallback />}>
					<ThemeToggle />
				</Suspense>
			</footer>
		</div>
	);
}
