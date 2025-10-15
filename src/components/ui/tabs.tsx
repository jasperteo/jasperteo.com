import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/utils/utils";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn("flex flex-col", className)}
			{...props}
		/>
	);
}

function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"bg-muted text-muted-foreground relative inset-0 z-0 inline-flex h-9 w-fit items-center justify-center rounded-full p-1",
				className
			)}
			{...props}
		>
			{children}
			<TabsPrimitive.Indicator
				renderBeforeHydration
				className="bg-background/70 dark:bg-popover dark:border-input absolute top-1/2 left-0 -z-10 h-7 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-full border border-transparent shadow-sm transition-[width,translate] duration-300 ease-out"
			/>
		</TabsPrimitive.List>
	);
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
	return (
		<TabsPrimitive.Tab
			data-slot="tabs-tab"
			className={cn(
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground dark:data-[selected]:text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
	return (
		<TabsPrimitive.Panel
			data-slot="tabs-panel"
			className={cn(
				"animate-in fade-in blur-in-xs duration-300 ease-out",
				"flex-1 outline-none",
				className
			)}
			{...props}
		/>
	);
}

function TabsPanelList({ className, ...props }: HTMLMotionProps<"div">) {
	return (
		<motion.div
			data-slot="tabs-panel-list"
			layout="position"
			transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
			className={cn("overflow-clip", className)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsPanel, TabsPanelList, TabsTab };
