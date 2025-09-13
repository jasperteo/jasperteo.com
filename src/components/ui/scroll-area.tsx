/* eslint-disable @eslint-react/hooks-extra/no-direct-set-state-in-use-effect */
// oxlint-disable prefer-global-this

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";
import type { ComponentProps, CSSProperties } from "react";
import {
	createContext,
	use,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { cn } from "@/utils/utils";

type Mask = {
	top: boolean;
	bottom: boolean;
	left: boolean;
	right: boolean;
};

type ScrollAreaContextProps = {
	isTouch: boolean;
	type: "auto" | "always" | "scroll" | "hover";
};

const ScrollAreaContext = createContext<ScrollAreaContextProps>({
	isTouch: false,
	type: "hover",
});

type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root> & {
	type?: "auto" | "always" | "scroll" | "hover";
	viewportClassName?: string;
	/**
	 * `maskHeight` is the height of the mask in pixels.
	 * pass `0` to disable the mask
	 * @default 30
	 */
	maskHeight?: number;
	maskClassName?: string;
};

function ScrollArea({
	ref,
	className,
	children,
	type = "hover",
	maskHeight = 30,
	maskClassName,
	viewportClassName,
	...props
}: ScrollAreaProps) {
	const [showMask, setShowMask] = useState<Mask>({
		top: false,
		bottom: false,
		left: false,
		right: false,
	});

	const viewportRef = useRef<HTMLDivElement | null>(null);

	const isTouch = useTouchPrimary();

	const value = useMemo<ScrollAreaContextProps>(
		() => ({ isTouch, type }),
		[isTouch, type]
	);

	useEffect(() => {
		const element = viewportRef.current;

		if (!element) {
			return;
		}

		const controller = new AbortController();

		const checkScrollability = () => {
			const element = viewportRef.current;
			if (!element) return;

			const {
				scrollTop,
				scrollLeft,
				scrollWidth,
				clientWidth,
				scrollHeight,
				clientHeight,
			} = element;

			setShowMask((previous) => ({
				...previous,
				top: scrollTop > 0,
				bottom: scrollTop + clientHeight < scrollHeight - 1,
				left: scrollLeft > 0,
				right: scrollLeft + clientWidth < scrollWidth - 1,
			}));
		};

		checkScrollability();

		const resizeObserver = new ResizeObserver(checkScrollability);
		resizeObserver.observe(element);

		element.addEventListener("scroll", checkScrollability, {
			signal: controller.signal,
		});

		window.addEventListener("resize", checkScrollability, {
			signal: controller.signal,
		});

		return () => {
			controller.abort();
			resizeObserver.disconnect();
		};
	}, [isTouch]);

	return (
		<ScrollAreaContext value={value}>
			{isTouch ? (
				<div
					ref={ref}
					{...props}
					role="group"
					data-slot="scroll-area"
					aria-roledescription="scroll area"
					className={cn("relative overflow-hidden", className)}
				>
					<div
						ref={viewportRef}
						className={cn("size-full overflow-auto", viewportClassName)}
						tabIndex={0}
					>
						{children}
					</div>
					{maskHeight > 0 && (
						<ScrollMask
							showMask={showMask}
							className={maskClassName}
							maskHeight={maskHeight}
						/>
					)}
				</div>
			) : (
				<ScrollAreaPrimitive.Root
					ref={ref}
					data-slot="scroll-area"
					className={cn(
						"relative overflow-hidden",
						viewportClassName,
						className
					)}
					{...props}
				>
					<ScrollAreaPrimitive.Viewport
						ref={viewportRef}
						data-slot="scroll-area-viewport"
						className={cn(
							"focus-ring size-full rounded-[inherit]",
							viewportClassName
						)}
					>
						{children}
					</ScrollAreaPrimitive.Viewport>
					<ScrollBar />
					<ScrollAreaPrimitive.Corner />
					{maskHeight > 0 && (
						<ScrollMask
							showMask={showMask}
							className={maskClassName}
							maskHeight={maskHeight}
						/>
					)}
				</ScrollAreaPrimitive.Root>
			)}
		</ScrollAreaContext>
	);
}

function ScrollBar({
	ref,
	className,
	orientation = "vertical",
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
	const { isTouch, type } = use(ScrollAreaContext);

	if (isTouch) {
		// oxlint-disable-next-line no-null
		return null;
	}

	return (
		<ScrollAreaPrimitive.Scrollbar
			ref={ref}
			orientation={orientation}
			data-slot="scroll-area-scrollbar"
			className={cn(
				"hover:bg-muted dark:hover:bg-muted/50 flex touch-none p-px transition-[colors,opacity] duration-150 ease-out select-none",
				orientation === "vertical" &&
					"h-full w-2.5 border-l border-l-transparent",
				orientation === "horizontal" &&
					"h-2.5 flex-col border-t border-t-transparent px-1 pr-1.25",
				type === "hover" && "opacity-0 data-[hovering]:opacity-100",
				type === "scroll" && "opacity-0 data-[scrolling]:opacity-100",
				className
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb
				data-slot="scroll-area-thumb"
				className={cn(
					"bg-border relative flex-1 rounded-full transition-[scale]",
					orientation === "vertical" && "my-1 active:scale-y-95",
					orientation === "horizontal" && "active:scale-x-98"
				)}
			/>
		</ScrollAreaPrimitive.Scrollbar>
	);
}

type ScrollMaskProps = ComponentProps<"div"> & {
	showMask: Mask;
	maskHeight: number;
};

function ScrollMask({
	showMask,
	maskHeight,
	className,
	...props
}: ScrollMaskProps) {
	return (
		<>
			<div
				{...props}
				aria-hidden="true"
				style={
					{
						"--top-fade-height": showMask.top
							? `${String(maskHeight)}px`
							: "0px",
						"--bottom-fade-height": showMask.bottom
							? `${String(maskHeight)}px`
							: "0px",
					} as CSSProperties
				}
				className={cn(
					"pointer-events-none absolute inset-0 z-10",
					"before:absolute before:inset-x-0 before:top-0 before:transition-[height,opacity] before:duration-300 before:content-['']",
					"after:absolute after:inset-x-0 after:bottom-0 after:transition-[height,opacity] after:duration-300 after:content-['']",
					"before:h-(--top-fade-height) after:h-(--bottom-fade-height)",
					showMask.top ? "before:opacity-100" : "before:opacity-0",
					showMask.bottom ? "after:opacity-100" : "after:opacity-0",
					"before:from-background before:bg-gradient-to-b before:to-transparent",
					"after:from-background after:bg-gradient-to-t after:to-transparent",
					className
				)}
			/>
			<div
				{...props}
				aria-hidden="true"
				style={
					{
						"--left-fade-width": showMask.left
							? `${String(maskHeight)}px`
							: "0px",
						"--right-fade-width": showMask.right
							? `${String(maskHeight)}px`
							: "0px",
					} as CSSProperties
				}
				className={cn(
					"pointer-events-none absolute inset-0 z-10",
					"before:absolute before:inset-y-0 before:left-0 before:transition-[width,opacity] before:duration-300 before:content-['']",
					"after:absolute after:inset-y-0 after:right-0 after:transition-[width,opacity] after:duration-300 after:content-['']",
					"before:w-(--left-fade-width) after:w-(--right-fade-width)",
					showMask.left ? "before:opacity-100" : "before:opacity-0",
					showMask.right ? "after:opacity-100" : "after:opacity-0",
					"before:from-background before:bg-gradient-to-r before:to-transparent",
					"after:from-background after:bg-gradient-to-l after:to-transparent",
					className
				)}
			/>
		</>
	);
}

function useTouchPrimary() {
	const [isTouchPrimary, setIsTouchPrimary] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const mq = window.matchMedia("(pointer: coarse)");

		const update = () => {
			const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
			setIsTouchPrimary(hasTouch && mq.matches);
		};

		update();

		mq.addEventListener("change", update, { signal: controller.signal });

		window.addEventListener("pointerdown", update, {
			signal: controller.signal,
			passive: true,
		});

		return () => {
			controller.abort();
		};
	}, []);

	return isTouchPrimary;
}

export { ScrollArea, ScrollBar };
