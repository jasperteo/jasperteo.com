import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";
import { Content, Root, Trigger } from "@kobalte/core/collapsible";
import type { CollapsibleContentProps as ContentProps } from "@kobalte/core/collapsible";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "@/utils/utils";

type CollapsibleContentProps<T extends ValidComponent = "div"> =
	ContentProps<T> & { class?: string };

const CollapsibleContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, CollapsibleContentProps<T>>
) => {
	const [local, rest] = splitProps(props as CollapsibleContentProps, ["class"]);

	return (
		<Content
			class={cn(
				"data-[closed]:animate-collapsible-up data-[expanded]:animate-collapsible-down",
				local.class
			)}
			{...rest}
		/>
	);
};

export {
	Root as Collapsible,
	CollapsibleContent,
	Trigger as CollapsibleTrigger,
};
