import { useState } from "react";

import { FileDownload } from "@/components/icons/file-download";
import { Singapore } from "@/components/icons/singapore";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import {
	Tabs,
	TabsContent,
	TabsContentList,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/utils/utils";

type TabValues = "about" | "recruiter";
const ABOUT: TabValues = "about";
const RECRUITER: TabValues = "recruiter";

function Description() {
	const [tab, setTab] = useState<TabValues>("about");

	return (
		<Tabs value={tab} onValueChange={setTab}>
			<TabsList className="gap-x-1">
				<TabsTrigger value={ABOUT}>About</TabsTrigger>
				<TabsTrigger value={RECRUITER}>For Recruiters</TabsTrigger>
			</TabsList>
			<TabsContentList value={tab} className="overflow-x-visible">
				<TabsContent value={ABOUT}>
					<div className="flex flex-col gap-y-4 px-1 py-3 text-pretty">
						<p>
							A full-stack software engineer focused on building intuitive and
							user-friendly web experiences to improve how people interact with
							digital products and make them enjoyable to use.
						</p>
						<p>
							Occasionally, I find myself exploring new open source projects and
							contribute features that I would love to be implemented.
						</p>
						<p>
							When I am not coding, I enjoy brewing tea and coffee, reading
							about technology, geopolitics and history, as well as spectating
							esports.
						</p>
						<p>
							I currently live in{" "}
							<span className="text-primary-highlight inline-flex shrink-0 place-items-baseline gap-x-1 px-1 font-medium">
								<Singapore height="1rem" width="1rem" /> Singapore
							</span>{" "}
							and love trying out new cafes and restaurants in the city.
						</p>
					</div>
				</TabsContent>
				<TabsContent value={RECRUITER}>
					<div className="flex flex-col gap-y-4 px-1 py-4 text-pretty">
						<p>
							I am currently open to new employment opportunities and
							collaborations.
						</p>
						<p>
							As a design-minded engineer, I gravitate towards product-oriented
							engineering roles. My expertise includes{" "}
							<span className="text-primary-highlight font-medium">
								TypeScript, Node.js, React, Next.js, PostgreSQL,
							</span>{" "}
							and many other technologies. I am also familiar with newer
							technologies within the JavaScript ecosystem such as Bun, Astro,
							and Solid.js.
						</p>
						<p>
							Feel free to reach out to me via email or slide me a DM on social
							media if you have any questions or opportunities.
						</p>
						<Highlighter
							isView
							action="box"
							color="var(--secondary)"
							className="text-card-foreground flex w-fit items-center-safe gap-x-2 font-semibold"
							animationDuration={700}
							delay={300}
						>
							<span>My Resume</span>
							<span>{"->"}</span>
							<CVButton />
						</Highlighter>
					</div>
				</TabsContent>
			</TabsContentList>
		</Tabs>
	);
}

const CV = "https://storage.jasperteo.com/jasperCV.pdf";

function CVButton() {
	return (
		<Button
			variant="link"
			size="lg"
			className={cn(
				"text-muted-foreground group/cv hover:text-card-foreground relative text-base font-semibold hover:no-underline has-[>svg]:px-2",
				"after:border-b-primary-hover after:absolute after:bottom-2 after:left-2 after:w-0 after:border-b-[1px] after:border-dashed after:bg-transparent after:transition-[width] after:duration-300 hover:after:w-[calc(100%-1rem)]"
			)}
			aria-label="CV"
			render={<a href={CV} target="_blank" rel="noopener noreferrer" />}
		>
			<FileDownload
				className="size-5 group-hover/cv:[--secondary-fill:var(--primary)]"
				secondaryfill="var(--secondary-fill, currentColor)"
			/>
			CV
		</Button>
	);
}

export { Description };
