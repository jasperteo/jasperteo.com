import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import type { HTMLMotionProps } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { Fragment } from "react";

import { cn } from "@/utils/utils";

function Tabs({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn("flex flex-col", className)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	children,
	...props
}: ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"bg-muted text-muted-foreground relative inset-0 z-0 inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
				className
			)}
			{...props}
		>
			{children}
			<TabsPrimitive.Indicator className="bg-background dark:bg-popover dark:border-input absolute top-1/2 left-0 -z-10 h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm border border-transparent shadow-sm transition-[width,translate] duration-300 ease-out" />
		</TabsPrimitive.List>
	);
}

function TabsTrigger({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Tab>) {
	return (
		<TabsPrimitive.Tab
			data-slot="tabs-trigger"
			className={cn(
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground dark:data-[selected]:text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

type TabsContentProps = ComponentProps<typeof TabsPrimitive.Panel> &
	HTMLMotionProps<"div">;

function TabsContent({ className, value, ...props }: TabsContentProps) {
	return (
		<AnimatePresence mode="wait">
			<TabsPrimitive.Panel
				data-slot="tabs-content"
				value={value as string}
				className={cn("flex-1 outline-none", className)}
				render={
					<motion.div
						layout
						layoutDependency={value as string}
						initial={{ opacity: 0, filter: "blur(4px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						exit={{ opacity: 0, filter: "blur(4px)" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					/>
				}
				{...props}
			/>
		</AnimatePresence>
	);
}

type TabsContentListProps = Omit<HTMLMotionProps<"div">, "children"> & {
	value: string;
	children: ReactNode;
};

function TabsContentList({
	className,
	children,
	value,
	...props
}: TabsContentListProps) {
	return (
		<motion.div
			data-slot="tabs-content-list"
			layout="size"
			transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
			className={cn("overflow-clip", className)}
			{...props}
		>
			<Fragment key={value}>{children}</Fragment>
		</motion.div>
	);
}

export { Tabs, TabsContent, TabsContentList, TabsList, TabsTrigger };
