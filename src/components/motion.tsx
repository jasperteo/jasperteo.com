"use client";

import { motion } from "motion/react";

import { Experience } from "@/components/experience";
import { Socials } from "@/components/socials";
import { Separator } from "@/components/ui/separator";

const MotionSocials = motion.create(Socials);
const MotionExperience = motion.create(Experience);
const MotionSeparator = motion.create(Separator);

export { MotionExperience, MotionSeparator, MotionSocials };
