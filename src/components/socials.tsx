import type { ReactNode } from "react";
import { Fragment } from "react";

import { Bluesky } from "@/components/icons/bluesky";
import { EnvelopeOpenHeart } from "@/components/icons/envelope-open-heart";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { XTwitter } from "@/components/icons/x-twitter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/utils";

type Social = { icon: ReactNode; label: string; href: string };
const SOCIALS_ARRAY: Social[] = [
	{
		icon: <XTwitter />,
		label: "Twitter",
		href: "https://x.com/jasper_teo",
	},
	{
		icon: <Github />,
		label: "GitHub",
		href: "https://github.com/jasperteo",
	},
	{
		icon: <Linkedin />,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/jaspertzj/",
	},
	{
		icon: <Bluesky />,
		label: "Bluesky",
		href: "https://bsky.app/profile/jasperteo.bsky.social",
	},
];

const EMAIL = "hey@jasperteo.com";

function Socials() {
	return (
		<section className="-mx-2 flex flex-col gap-y-4">
			<div className="flex w-fit flex-col gap-y-0.5">
				<p className="px-2 font-medium">Find me on</p>
				<div className="flex flex-wrap items-center-safe gap-x-0.5">
					{SOCIALS_ARRAY.map(({ icon, label, href }) => (
						<Fragment key={label}>
							<Separator orientation="vertical" className="h-6 first:hidden" />
							<Button
								variant="link"
								size="sm"
								className={cn(
									"text-muted-foreground hover:text-card-foreground px-2 font-semibold hover:no-underline",
									"after:bg-primary-hover after:absolute after:bottom-[2.5px] after:left-2 after:h-px after:w-0 after:transition-[width] after:duration-300 hover:after:w-[calc(100%-1rem)]"
								)}
								render={
									<a href={href} target="_blank" rel="noopener noreferrer" />
								}
							>
								{icon}
								{label}
							</Button>
						</Fragment>
					))}
				</div>
			</div>

			<div className="flex w-fit flex-col gap-y-0.5">
				<p className="px-2 font-medium">Or hit me up at</p>
				<Button
					variant="link"
					size="sm"
					className={cn(
						"text-muted-foreground group/email hover:text-card-foreground px-2 font-semibold hover:no-underline",
						"after:border-b-primary-hover after:absolute after:bottom-[2.5px] after:left-2 after:w-0 after:border-b after:border-dashed after:bg-transparent after:transition-[width] after:duration-300 hover:after:w-[calc(100%-1rem)]"
					)}
					render={<a href={`mailto:${EMAIL}`} />}
				>
					<EnvelopeOpenHeart
						className="group-hover/email:[--secondary-fill:var(--primary)]"
						secondaryfill="var(--secondary-fill)"
					/>
					{EMAIL}
				</Button>
			</div>
		</section>
	);
}

export { Socials };
