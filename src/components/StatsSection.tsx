"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
    end: number;
    suffix: string;
    label: string;
}

const STATS: Stat[] = [
    { end: 15, suffix: "+", label: "سنة من الخبرة" },
    { end: 200, suffix: "+", label: "طبق أصيل" },
    { end: 5000, suffix: "+", label: "ضيف سعيد" },
    { end: 12, suffix: "", label: "جائزة تميّز" },
];

function useCountUp(end: number, duration = 1800, started: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, started]);

    return count;
}

function StatCard({ stat, started }: { stat: Stat; started: boolean }) {
    const count = useCountUp(stat.end, 1800, started);
    return (
        <div className="px-8 py-10 text-center">
            <p className="font-heading text-4xl font-bold text-primary neon-glow tabular-nums">
                {count.toLocaleString("en-US")}
                {stat.suffix}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
    );
}

export function StatsSection() {
    const ref = useRef<HTMLElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="container mx-auto px-4 py-16">
            <div className="glass-panel grid grid-cols-2 divide-x divide-x-reverse divide-white/10 rounded-[32px] border border-white/10 md:grid-cols-4">
                {STATS.map((stat) => (
                    <StatCard key={stat.label} stat={stat} started={started} />
                ))}
            </div>
        </section>
    );
}
