import type { HTMLMotionProps, MotionProps, MotionValue } from "motion/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { createContext, use, useMemo, useRef } from "react";

import { cn } from "@/utils/utils";

type DockContextValue = {
	mouseX: MotionValue<number>;
	iconSize: number;
	iconMagnification: number;
	disableMagnification: boolean;
	iconDistance: number;
};

const DockContext = createContext<DockContextValue | undefined>(undefined);

function useDockContext() {
	const context = use(DockContext);

	if (!context) {
		throw new Error("DockIcon must be used within a Dock");
	}

	return context;
}

type DockProps = {
	className?: string;
	iconSize?: number;
	iconMagnification?: number;
	disableMagnification?: boolean;
	iconDistance?: number;
	direction?: "top" | "middle" | "bottom";
	children: ReactNode;
} & HTMLMotionProps<"div">;

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const DEFAULT_DISABLEMAGNIFICATION = false;

function Dock({
	className,
	children,
	iconSize = DEFAULT_SIZE,
	iconMagnification = DEFAULT_MAGNIFICATION,
	disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
	iconDistance = DEFAULT_DISTANCE,
	direction = "middle",
	ref,
	...props
}: DockProps) {
	const mouseX = useMotionValue(Infinity);

	const contextValue = useMemo<DockContextValue>(
		() => ({
			mouseX,
			iconSize,
			iconMagnification,
			disableMagnification,
			iconDistance,
		}),
		[mouseX, iconSize, iconMagnification, disableMagnification, iconDistance]
	);

	return (
		<DockContext value={contextValue}>
			<motion.div
				ref={ref}
				onMouseMove={(event) => {
					mouseX.set(event.pageX);
				}}
				onMouseLeave={() => {
					mouseX.set(Infinity);
				}}
				{...props}
				className={cn(
					"bg-foreground/10 border-border/50 mx-auto flex h-14 w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
					{
						"items-start": direction === "top",
						"items-center": direction === "middle",
						"items-end": direction === "bottom",
					},
					className
				)}
			>
				{children}
			</motion.div>
		</DockContext>
	);
}

type DockIconProps = {
	size?: number;
	magnification?: number;
	disableMagnification?: boolean;
	distance?: number;
	mouseX?: MotionValue<number>;
	className?: string;
	children?: ReactNode;
	props?: PropsWithChildren;
} & Omit<MotionProps & ComponentProps<"div">, "children">;

function DockIcon({ className, children, ...props }: DockIconProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	// Use context values exclusively - ignore any props passed directly to DockIcon
	// This preserves the original behavior where cloneElement was the only way to pass these props
	const context = useDockContext();
	const finalSize = context.iconSize;
	const finalMagnification = context.iconMagnification;
	const finalDisableMagnification = context.disableMagnification;
	const finalDistance = context.iconDistance;
	const finalMouseX = context.mouseX;

	const padding = Math.max(6, finalSize * 0.2);

	const distanceCalc = useTransform(finalMouseX, (value: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return value - bounds.x - bounds.width / 2;
	});

	const targetSize = finalDisableMagnification ? finalSize : finalMagnification;

	const sizeTransform = useTransform(
		distanceCalc,
		[-finalDistance, 0, finalDistance],
		[finalSize, targetSize, finalSize]
	);

	const scaleSize = useSpring(sizeTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width: scaleSize, height: scaleSize, padding }}
			className={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				finalDisableMagnification &&
					"hover:bg-muted-foreground transition-colors",
				className
			)}
			{...props}
		>
			<div>{children}</div>
		</motion.div>
	);
}

export { Dock, DockIcon };
