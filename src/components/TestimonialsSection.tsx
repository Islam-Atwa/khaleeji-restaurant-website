"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
    {
        id: 1,
        name: "محمد بن سالم",
        role: "رجل أعمال — الرياض",
        avatar: "م",
        rating: 5,
        text: "تجربة لا تُنسى! المكبوس كان بمستوى عالٍ جداً وتذكرني بأوقات سعيدة في بيت جدتي. الخدمة الراقية والأجواء الدافئة جعلت العشاء مميزاً.",
    },
    {
        id: 2,
        name: "نورة العتيبي",
        role: "مدوّنة طعام — جدة",
        avatar: "ن",
        rating: 5,
        text: "من أفضل المطاعم الخليجية في الرياض على الإطلاق! الجريش كان مذهلاً والسمبوسك لا مثيل له. سأعود قريباً مع عائلتي بالتأكيد.",
    },
    {
        id: 3,
        name: "فوزي الغامدي",
        role: "مهندس — الدمام",
        avatar: "ف",
        rating: 5,
        text: "المندي كان طازجاً ومطهواً بإتقان حقيقي، ليس له مثيل. الديكور الفاخر والخصوصية التي يوفرها المطعم يجعلانه مثالياً لاجتماعات العمل.",
    },
    {
        id: 4,
        name: "ليلى المنصوري",
        role: "طبيبة — أبوظبي",
        avatar: "ل",
        rating: 5,
        text: "زرت المطعم خلال إقامتي في الرياض وكانت مفاجأة رائعة. هريسة الجمال تستحق رحلة خاصة! الطاقم مهذب وسريع الاستجابة.",
    },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#CD7F32" className="neon-glow">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

export function TestimonialsSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease },
        },
    };

    return (
        <section ref={ref} id="testimonials" className="container mx-auto px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.65, ease }}
                className="mb-16 text-center"
            >
                <h2 className="mb-4 font-heading text-4xl font-bold text-white">آراء ضيوفنا</h2>
                <p className="mx-auto max-w-xl text-muted-foreground">
                    رضا ضيوفنا هو أعظم جائزة نسعى إليها في كل يوم
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
                {TESTIMONIALS.map((t) => (
                    <motion.div
                        key={t.id}
                        variants={cardVariants}
                        className="group flex flex-col gap-5 rounded-[24px] border border-white/10 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]"
                    >
                        {/* Stars */}
                        <StarRating count={t.rating} />

                        {/* Quote */}
                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                            &ldquo;{t.text}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 font-heading text-lg font-bold text-primary">
                                {t.avatar}
                            </div>
                            <div>
                                <p className="font-heading text-sm font-bold text-white">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
