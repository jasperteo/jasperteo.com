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
			<div className="flex flex-col">
				<p className="px-2 font-medium">Find me on</p>
				<div className="flex flex-wrap items-center-safe gap-x-1">
					{SOCIALS_ARRAY.map(({ icon, label, href }) => (
						<Fragment key={label}>
							<Separator
								orientation="vertical"
								className="first:hidden data-[orientation=vertical]:h-6"
							/>
							<Button
								variant="link"
								size="default"
								className={cn(
									"text-muted-foreground hover:text-card-foreground relative font-bold transition-colors hover:no-underline has-[>svg]:px-2",
									"after:bg-primary-hover after:absolute after:bottom-2 after:left-2 after:h-[1.5px] after:w-0 after:transition-[width] after:duration-300 hover:after:w-[calc(100%-1rem)]"
								)}
								aria-label={label}
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

			<div className="flex flex-col">
				<p className="px-2 font-medium">Or hit me up at</p>
				<div className="flex">
					<Button
						variant="link"
						size="default"
						className={cn(
							"text-muted-foreground group/email hover:text-card-foreground relative font-semibold transition-colors hover:no-underline has-[>svg]:px-2",
							"after:border-b-primary-hover after:absolute after:bottom-2 after:left-2 after:w-0 after:border-b-[1px] after:border-dashed after:bg-transparent after:transition-[width] after:duration-300 hover:after:w-[calc(100%-1rem)]"
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
			</div>
		</section>
	);
}

export { Socials };
