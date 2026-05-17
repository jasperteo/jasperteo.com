"use client";

import { LayoutGroup, MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

import { Experience } from "@/components/experience";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";

const MotionSocials = motion.create(Socials);
const MotionExperience = motion.create(Experience);
const MotionSeparator = motion.create(Separator);

function MotionProvider({ children }: { children: ReactNode }) {
	return (
		<MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
			<LayoutGroup>{children}</LayoutGroup>
		</MotionConfig>
	);
}

export { MotionExperience, MotionProvider, MotionSeparator, MotionSocials };
