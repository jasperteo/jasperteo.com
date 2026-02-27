import { motion } from "motion/react";
import { Activity, useLayoutEffect, useState } from "react";

import { FileDownload } from "@/components/icons/file-download";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

type TabValues = "about" | "recruiter";
const ABOUT: TabValues = "about";
const RECRUITER: TabValues = "recruiter";

function Description() {
	const [tab, setTab] = useState<TabValues>(ABOUT);
	const [hasInteracted, setHasInteracted] = useState(false);

	return (
		<Tabs
			defaultValue={ABOUT}
			value={tab}
			onValueChange={(value: TabValues) => {
				setHasInteracted(true);
				setTab(value);
			}}
		>
			<TabsList variant="default" activateOnFocus>
				<TabsTab value={ABOUT} className="h-8 text-sm">
					About
				</TabsTab>
				<TabsTab value={RECRUITER} className="h-8 text-sm">
					For Recruiters
				</TabsTab>
			</TabsList>

			<motion.div layout="size" className="overflow-clip">
				<Activity mode={tab === ABOUT ? "visible" : "hidden"}>
					<TabsPanel value={ABOUT} className="px-1 py-3" keepMounted>
						<AboutTab hasInteracted={hasInteracted} />
					</TabsPanel>
				</Activity>

				<Activity mode={tab === RECRUITER ? "visible" : "hidden"}>
					<TabsPanel value={RECRUITER} className="px-1 py-3" keepMounted>
						<RecruiterTab />
					</TabsPanel>
				</Activity>
			</motion.div>
		</Tabs>
	);
}

function AboutTab({ hasInteracted }: { hasInteracted: boolean }) {
	return (
		<motion.div
			layout
			initial={hasInteracted && { opacity: 0.25, filter: "blur(4px)" }}
			animate={{ opacity: 1, filter: "blur(0px)" }}
			className="font-geist flex flex-col gap-y-3 text-sm sm:text-base"
			key={String(hasInteracted)}
		>
			<p>
				A design-minded engineer focused on building intuitive and user-friendly
				web experiences across the stack to improve how people interact with
				digital products and make them enjoyable to use.
			</p>
			<p>
				When I am not coding, I enjoy brewing tea and coffee, reading about
				technology, geopolitics and history, as well as spectating esports.
			</p>
			<p>
				Currently living in{" "}
				<strong className="text-primary-highlight font-[450]">
					🇸🇬 Singapore
				</strong>{" "}
				and love exploring the city for new cafes and restaurants.
			</p>
		</motion.div>
	);
}

function RecruiterTab() {
	const [shouldHighlight, setShouldHighlight] = useState(false);

	useLayoutEffect(() => {
		return () => {
			setShouldHighlight(false);
		};
	}, []);

	return (
		<motion.div
			layout
			initial={{ opacity: 0.25, filter: "blur(4px)" }}
			animate={{ opacity: 1, filter: "blur(0px)" }}
			onAnimationComplete={() => {
				setShouldHighlight(true);
			}}
			className="font-geist flex flex-col gap-y-3 text-sm sm:text-base"
		>
			<p>
				I am currently open to new employment opportunities and collaborations.
			</p>
			<p>
				As a design-minded engineer, I gravitate towards product-oriented
				engineering roles. My expertise includes{" "}
				<strong className="text-primary-highlight font-[450]">
					TypeScript, Node.js, React, Next.js, PostgreSQL,
				</strong>{" "}
				and many other technologies. I am also familiar with newer technologies
				within the JavaScript ecosystem such as Bun, Astro, and Solid.js.
			</p>
			<p>
				Feel free to reach out to me via email or slide me a DM on social media
				if you have any questions or opportunities.
			</p>
			<Highlighter
				isView
				action="box"
				strokeWidth={2}
				color="var(--primary)"
				shouldHighlight={shouldHighlight}
				className="text-card-foreground flex w-fit items-center-safe gap-x-2 font-sans font-semibold"
			>
				<span>My Resume</span>
				<span>{"->"}</span>
				<CVButton />
			</Highlighter>
		</motion.div>
	);
}

const CV = "https://storage.jasperteo.com/jasperCV.pdf";

function CVButton() {
	return (
		<Button
			variant="link"
			size="xl"
			className="text-muted-foreground group/cv hover:text-card-foreground h-10 px-2 text-base font-semibold max-sm:[&_svg:not([class*='size-'])]:size-4.5 [:hover,[data-pressed]]:no-underline"
			nativeButton={false}
			render={<a href={CV} target="_blank" rel="noopener noreferrer" />}
		>
			<FileDownload
				className="group-hover/cv:[--secondary-fill:var(--primary)] group-data-pressed/cv:[--secondary-fill:var(--primary)]"
				secondaryfill="var(--secondary-fill, currentColor)"
			/>
			CV
			<span className="border-b-primary-hover absolute bottom-2 left-2 w-0 border-b border-dashed bg-transparent transition-[width] duration-300 group-hover/cv:w-[calc(100%-1rem)] group-data-pressed/cv:w-[calc(100%-1rem)]" />
		</Button>
	);
}

export { Description };
