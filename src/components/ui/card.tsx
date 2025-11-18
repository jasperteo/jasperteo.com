import type { ComponentProps } from "react";

import { cn } from "@/utils/utils";

function Card({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card"
			className={cn(
				"bg-card text-card-foreground hover:bg-card-hover squircle-3xl relative flex flex-col gap-6 rounded-3xl border bg-clip-padding py-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-3xl)-1px)] before:shadow-sm dark:bg-clip-border dark:shadow-sm dark:shadow-black/24 dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				className
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn(
				"text-card-foreground text-lg leading-none font-semibold",
				className
			)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className
			)}
			{...props}
		/>
	);
}

function CardPanel({ className, ...props }: ComponentProps<"div">) {
	return (
		<div data-slot="card-panel" className={cn("px-6", className)} {...props} />
	);
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardPanel,
	CardTitle,
};
