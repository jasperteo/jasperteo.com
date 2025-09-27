import { useState } from "react";

import { FileDownload } from "@/components/icons/file-download";
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
	const [tab, setTab] = useState<TabValues>(ABOUT);

	return (
		<Tabs value={tab} onValueChange={setTab}>
			<TabsList className="gap-x-1">
				<TabsTrigger value={ABOUT}>About</TabsTrigger>
				<TabsTrigger value={RECRUITER}>For Recruiters</TabsTrigger>
			</TabsList>
			<TabsContentList className="overflow-x-visible px-1 py-3">
				<TabsContent value={ABOUT}>
					<div className="flex flex-col gap-y-3 text-pretty">
						<p>
							A design-minded engineer focused on building intuitive and
							user-friendly web experiences across the stack to improve how
							people interact with digital products and make them enjoyable to
							use.
						</p>
						<p>
							When I am not coding, I enjoy brewing tea and coffee, reading
							about technology, geopolitics and history, as well as spectating
							esports.
						</p>
						<p>
							Currently living in{" "}
							<span className="text-primary-highlight font-medium">
								🇸🇬 Singapore
							</span>{" "}
							and love exploring the city for new cafes and restaurants.
						</p>
					</div>
				</TabsContent>
				<TabsContent value={RECRUITER}>
					<div className="flex flex-col gap-y-3 text-pretty">
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
							color="var(--primary)"
							className="text-card-foreground flex w-fit items-center-safe gap-x-2 font-semibold"
							delay={325}
							strokeWidth={2}
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
