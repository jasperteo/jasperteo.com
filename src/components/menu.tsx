import { For, Match, Switch, createSignal } from "solid-js";
import { Link } from "@kobalte/core/link";
import { Icon } from "@iconify-icon/solid";

import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navList = [
	{ href: "/", icon: "carbon:home", label: "home" },
	{ href: "/projects", icon: "carbon:devices-apps", label: "projects" },
	// 	{ href: "/blog", icon: "carbon:blog", label: "blog" },
];

const Menu = () => {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<Collapsible
			open={isOpen()}
			onOpenChange={setIsOpen}
			class="mx-auto w-28 text-center font-title sm:hidden"
		>
			<CollapsibleTrigger class="bg-transparent text-3xl">
				<Switch>
					<Match when={isOpen()}>
						<Icon icon="line-md:menu-to-close-transition" />
					</Match>
					<Match when={!isOpen()}>
						<Icon icon="line-md:close-to-menu-transition" />
					</Match>
				</Switch>
			</CollapsibleTrigger>
			<CollapsibleContent class="overflow-clip text-left">
				<For each={navList}>
					{({ href, icon, label }) => (
						<Button class="gap-x-2" variant="ghost" as={Link} href={href}>
							<Icon class="text-lg" icon={icon} />
							{label}
						</Button>
					)}
				</For>
			</CollapsibleContent>
		</Collapsible>
	);
};

export { Menu, navList };
