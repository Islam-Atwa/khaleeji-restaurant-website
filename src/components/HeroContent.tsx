"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroContent() {
    return (
        <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 text-sm text-primary"
            >
                مطعم خليجي فاخر
            </motion.span>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="mb-6 font-heading text-5xl font-bold leading-tight text-white md:text-7xl"
            >
                مذاق الفخامة <br />
                <span className="text-primary neon-glow">الخليجية الأصيلة</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
                نقدم لكم تجربة طعام استثنائية تمزج بين عراقة الماضي وإبداع الحاضر في أجواء راقية
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <Link href="#featured">
                    <Button size="lg" className="neon-glow rounded-full px-8 py-6 text-lg">
                        استعرض المنيو
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full border-white/20 px-8 py-6 text-lg text-white hover:bg-white/10 hover:text-white"
                    >
                        احجز طاولتك الآن
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
