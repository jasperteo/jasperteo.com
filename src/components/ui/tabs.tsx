import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

import { cn } from "@/utils/utils";

type TabsVariant = "default" | "underline";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn(
				"flex flex-col gap-2 data-[orientation=vertical]:flex-row",
				className
			)}
			{...props}
		/>
	);
}

type TabsListProps = TabsPrimitive.List.Props & { variant?: TabsVariant };

function TabsList({
	variant = "default",
	className,
	children,
	...props
}: TabsListProps) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"text-muted-foreground relative z-0 flex w-fit items-center justify-center gap-x-0.5",
				"data-[orientation=vertical]:flex-col",
				variant === "default"
					? "bg-muted text-muted-foreground/64 rounded-full p-1"
					: "*:data-[slot=tabs-tab]:hover:bg-accent data-[orientation=horizontal]:py-1 data-[orientation=vertical]:px-1",
				className
			)}
			{...props}
		>
			<TabsPrimitive.Indicator
				renderBeforeHydration
				data-slot="tab-indicator"
				className={cn(
					"absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-300 ease-out",
					variant === "underline"
						? "bg-primary z-10 data-[orientation=horizontal]:-bottom-1 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:-start-1 data-[orientation=vertical]:w-0.5"
						: "bg-background dark:bg-accent -z-1 rounded-full shadow-sm"
				)}
			/>
			{children}
		</TabsPrimitive.List>
	);
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
	return (
		<TabsPrimitive.Tab
			data-slot="tabs-tab"
			className={cn(
				"focus-visible:ring-ring flex flex-1 shrink-0 items-center justify-center rounded-full border border-transparent text-sm font-medium whitespace-nowrap transition-[color,background-color,box-shadow] outline-none focus-visible:ring-2 data-disabled:pointer-events-none data-disabled:opacity-64 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				"hover:text-muted-foreground data-active:text-foreground",
				"gap-1.5 px-2 py-1",
				"data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
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
			className={cn("flex-1 outline-none", className)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsPanel, TabsTab };
