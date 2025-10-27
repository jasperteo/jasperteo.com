import { useInView } from "motion/react";
import type { ComponentProps } from "react";
import { useRef } from "react";
import { annotate } from "rough-notation";

import { cn } from "@/utils/utils";

type AnnotationAction =
	| "highlight"
	| "underline"
	| "box"
	| "circle"
	| "strike-through"
	| "crossed-off"
	| "bracket";

type HighlighterProps = ComponentProps<"div"> & {
	action?: AnnotationAction;
	color?: string;
	strokeWidth?: number;
	animationDuration?: number;
	iterations?: number;
	padding?: number;
	multiline?: boolean;
	isView?: boolean;
	shouldHighlight?: boolean;
};

function Highlighter({
	action = "highlight",
	color = "#ffd1dc",
	strokeWidth = 1.5,
	animationDuration = 600,
	iterations = 2,
	padding = 2,
	multiline = true,
	isView = false,
	shouldHighlight = true,
	className,
	...props
}: HighlighterProps) {
	const viewRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(viewRef, { amount: "all", once: true });

	// If isView is false, always show. If isView is true, wait for inView
	const shouldShow = !isView || isInView;

	return (
		<div
			ref={(element) => {
				viewRef.current = element;

				if (!shouldHighlight || !element || !shouldShow) {
					return;
				}

				const annotation = annotate(element, {
					type: action,
					color,
					strokeWidth,
					animationDuration,
					iterations,
					padding,
					multiline,
				});

				annotation.show();

				return () => {
					annotation.remove();
				};
			}}
			className={cn("relative inline-block bg-transparent", className)}
			{...props}
		/>
	);
}

export { Highlighter };
