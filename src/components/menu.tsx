import { For, Show, createSignal } from "solid-js";
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
			class="mx-auto w-fit text-center"
		>
			<CollapsibleTrigger
				class="bg-transparent text-3xl"
				aria-label="Menu Trigger"
			>
				<Show
					when={isOpen()}
					fallback={<Icon icon="line-md:close-to-menu-transition" />}
				>
					<Icon icon="line-md:menu-to-close-transition" />
				</Show>
			</CollapsibleTrigger>

			<CollapsibleContent class="overflow-clip text-left">
				<For each={navList}>
					{({ href, icon, label }) => (
						<>
							<Button
								class="gap-x-2 text-base"
								variant="ghost"
								as={Link}
								href={href}
								role="menuitem"
							>
								<Icon class="text-xl" icon={icon} />
								{label}
							</Button>
							<br />
						</>
					)}
				</For>
			</CollapsibleContent>
		</Collapsible>
	);
};

export { Menu, navList };
