import type { ComponentProps, ReactNode } from "react";
import { Fragment } from "react";

import { Bluesky } from "@/components/icons/bluesky";
import { EnvelopeOpenHeart } from "@/components/icons/envelope-open-heart";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { XTwitter } from "@/components/icons/x-twitter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Social = { icon: ReactNode; label: string; href: string };
const SOCIALS_ARRAY: Social[] = [
	{
		icon: <XTwitter aria-hidden="true" />,
		label: "Twitter",
		href: "https://x.com/jasper_teo",
	},
	{
		icon: <Github aria-hidden="true" />,
		label: "GitHub",
		href: "https://github.com/jasperteo",
	},
	{
		icon: <Linkedin aria-hidden="true" />,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/jaspertzj/",
	},
	{
		icon: <Bluesky aria-hidden="true" />,
		label: "Bluesky",
		href: "https://bsky.app/profile/jasperteo.bsky.social",
	},
];

const EMAIL = "hey@jasperteo.com";

function Socials({ ref }: Pick<ComponentProps<"div">, "ref">) {
	return (
		<div ref={ref} className="-mx-2 flex flex-col gap-y-4">
			<div className="flex w-fit flex-col gap-y-0.5">
				<p className="px-2 font-medium">Find me on</p>
				<div className="flex flex-wrap items-center-safe gap-x-0.5">
					{SOCIALS_ARRAY.map(({ icon, label, href }) => (
						<Fragment key={label}>
							<Separator orientation="vertical" className="h-6 first:hidden" />
							<Button
								variant="link"
								size="sm"
								className="group/social h-7 px-2 text-sm font-semibold text-muted-foreground hover:text-card-foreground max-sm:gap-1 max-sm:rounded-md max-sm:px-[calc(--spacing(2)-1px)] [:hover,[data-pressed]]:no-underline"
								nativeButton={false}
								render={<a href={href} target="_blank" rel="noopener noreferrer" />}
							>
								{icon}
								{label}
								<span className="sr-only">, opens in new tab</span>
								<span className="absolute bottom-[2.5px] left-2 h-px w-0 bg-primary-hover transition-[width] duration-300 group-hover/social:w-[calc(100%-1rem)] group-data-pressed/social:w-[calc(100%-1rem)]" />
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
					className="group/email h-7 px-2 text-sm font-semibold text-muted-foreground hover:text-card-foreground max-sm:gap-1 max-sm:rounded-md max-sm:px-[calc(--spacing(2)-1px)] [:hover,[data-pressed]]:no-underline"
					nativeButton={false}
					render={<a href={`mailto:${EMAIL}`} />}
				>
					<EnvelopeOpenHeart
						className="group-hover/email:[--secondary-fill:var(--primary)] group-data-pressed/email:[--secondary-fill:var(--primary)]"
						secondaryfill="var(--secondary-fill)"
					/>
					{EMAIL}
					<span className="absolute bottom-[2.5px] left-2 w-0 border-b border-dashed border-b-primary-hover bg-transparent transition-[width] duration-300 group-hover/email:w-[calc(100%-1rem)] group-data-pressed/email:w-[calc(100%-1rem)]" />
				</Button>
			</div>
		</div>
	);
}

export { Socials };
