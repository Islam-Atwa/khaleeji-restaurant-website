"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
    children: ReactNode;
    /** Animation variant */
    direction?: Direction;
    /** Delay in seconds */
    delay?: number;
    /** Duration in seconds */
    duration?: number;
    /** Distance in px to travel */
    distance?: number;
    className?: string;
    /** Viewport threshold 0-1 */
    threshold?: number;
}

function getInitial(direction: Direction, distance: number) {
    switch (direction) {
        case "up": return { opacity: 0, y: distance };
        case "down": return { opacity: 0, y: -distance };
        case "left": return { opacity: 0, x: distance };
        case "right": return { opacity: 0, x: -distance };
    }
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.65,
    distance = 40,
    className,
    threshold = 0.15,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: threshold });

    const variants: Variants = {
        hidden: getInitial(direction, distance),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger container ────────────────────────────────────────────────────── */

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    threshold = 0.1,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: threshold });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.05,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger item (goes inside StaggerContainer) ─────────────────────────── */

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    distance?: number;
    duration?: number;
}

export function StaggerItem({
    children,
    className,
    direction = "up",
    distance = 40,
    duration = 0.6,
}: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: getInitial(direction, distance),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
