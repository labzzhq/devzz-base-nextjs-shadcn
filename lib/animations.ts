"use client";

/**
 * Canonical Motion imports for this template.
 * The `motion` package (v12+) exports React components from "motion/react" — NOT from "motion".
 */
export { motion, AnimatePresence, type Variants } from "motion/react";

export const defaultTransition = { duration: 0.25, ease: "easeOut" as const };

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
} as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
} as const;
