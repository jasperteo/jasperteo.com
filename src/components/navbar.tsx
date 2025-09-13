import type { ReactNode } from "react";
import { lazy, Suspense } from "react";

import { Bluesky } from "@/components/icons/bluesky";
import { EnvelopeOpenHeart } from "@/components/icons/envelope-open-heart";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { XTwitter } from "@/components/icons/x-twitter";
import { ThemeToggleFallback } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";

const ThemeToggle = lazy(async () => {
	const { ThemeToggle } = await import("@/components/theme-toggle");
	return { default: ThemeToggle };
});

type Social = { icon: ReactNode; label: string; href: string };
const SOCIALS_ARRAY: Social[] = [
	{
		icon: <XTwitter className="size-full" />,
		label: "Twitter",
		href: "https://x.com/jasper_teo",
	},
	{
		icon: <Github className="size-full" />,
		label: "GitHub",
		href: "https://github.com/jasperteo",
	},
	{
		icon: <Linkedin className="size-full" />,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/jaspertzj/",
	},
	{
		icon: <Bluesky className="size-full" />,
		label: "Bluesky",
		href: "https://bsky.app/profile/jasperteo.bsky.social",
	},
];

const EMAIL = "hey@jasperteo.com";

function Navbar() {
	return (
		<nav className="fixed inset-x-0 bottom-8 isolate hidden sm:flex">
			<Dock iconSize={60} iconMagnification={72}>
				{SOCIALS_ARRAY.map(({ icon, label, href }) => (
					<DockIcon key={label}>
						<Button
							variant="outline"
							size="icon"
							type="button"
							className="dark:bg-background hover:dark:bg-muted size-full p-1"
							render={
								<a href={href} target="_blank" rel="noopener noreferrer" />
							}
						>
							{icon}
						</Button>
					</DockIcon>
				))}

				<DockIcon>
					<Button
						variant="outline"
						size="icon"
						type="button"
						className="dark:bg-background hover:dark:bg-muted size-full p-1 hover:[--secondary-fill:var(--destructive)]"
						render={<a href={`mailto:${EMAIL}`} />}
					>
						<EnvelopeOpenHeart
							className="size-full"
							secondaryfill="var(--secondary-fill)"
						/>
					</Button>
				</DockIcon>

				<Separator orientation="vertical" />
				<DockIcon>
					<Suspense fallback={<ThemeToggleFallback />}>
						<ThemeToggle className="size-full" />
					</Suspense>
				</DockIcon>
			</Dock>
		</nav>
	);
}

export { Navbar };
