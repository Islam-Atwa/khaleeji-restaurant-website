import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FoodCard } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { DISHES } from "@/data/dishes";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { HeroContent } from "@/components/HeroContent";


const EXPERIENCE_FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11h.01" /><path d="M11 15h.01" /><path d="M16 16h.01" /><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" /><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
      </svg>
    ),
    title: "وصفات سرية موروثة",
    description: "توارثنا وصفاتنا جيلاً بعد جيل محافظين على سرّ النكهة الأصيلة",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    title: "مكونات طازجة مختارة",
    description: "نختار أجود المكونات يومياً من أفضل المصادر المحلية والعالمية",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "طواقم خبراء متخصصون",
    description: "طهاتنا تلقوا تدريبهم في أرقى المطاعم الخليجية والعالمية",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "تجربة ضيافة فريدة",
    description: "أجواء راقية وديكورات فاخرة وخدمة مخصصة لكل ضيف",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2560')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

        {/* Hero content animates on mount (client component) */}
        <HeroContent />
      </section>

      {/* ── Stats (animated count-up) ── */}
      <StatsSection />

      {/* ── Experience Section ── */}
      <section id="experience" className="container mx-auto px-4 py-24">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-white">لماذا تختارنا؟</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            نحن لا نقدم مجرد طعام — نصنع لكم ذكريات وتجارب تبقى في الوجدان
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE_FEATURES.map((feat) => (
            <StaggerItem key={feat.title}>
              <div className="group rounded-[24px] border border-white/10 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] h-full">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary neon-glow transition-transform duration-300 group-hover:scale-110">
                  {feat.icon}
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{feat.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Featured Dishes ── */}
      <section id="featured" className="container mx-auto px-4 py-24">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-white">الأطباق المميزة</h2>
          <p className="text-muted-foreground">تشكيلة مختارة بعناية لتلبي ذائقتكم الرفيعة</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <StaggerItem key={dish.id}>
              <FoodCard {...dish} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Location Section ── */}
      <section id="location" className="container mx-auto px-4 py-24">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-white">موقعنا</h2>
          <p className="text-muted-foreground">يسعدنا استقبالكم في قلب الرياض</p>
        </ScrollReveal>

        <div className="overflow-hidden rounded-[32px] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map embed – slides in from left */}
            <ScrollReveal direction="right" className="relative h-[400px] lg:h-auto">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4736769986636!2d46.67321!3d24.68901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xbc9c4e03bb70de2d!2sTahlia%20St%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1700000000000"
                className="absolute inset-0 h-full w-full border-0 grayscale"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollReveal>

            {/* Info panel – slides in from right */}
            <ScrollReveal direction="left" delay={0.15} className="glass-panel flex flex-col justify-center gap-8 p-10 lg:p-14">
              <h3 className="font-heading text-3xl font-bold text-white">زوروا مطعمنا</h3>

              <div className="space-y-6">
                {[
                  {
                    label: "العنوان",
                    value: "شارع التحلية، حي العليا، الرياض 12244",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    ),
                  },
                  {
                    label: "ساعات العمل",
                    value: "يومياً من الساعة ١٢ ظهراً حتى ١٢ منتصف الليل",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    ),
                  },
                  {
                    label: "الهاتف",
                    value: "+966 50 123 4567",
                    ltr: true,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-white">{item.label}</p>
                      <p className={`text-muted-foreground ${item.ltr ? "dir-ltr" : ""}`} dir={item.ltr ? "ltr" : "rtl"}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="neon-glow w-full rounded-full py-6 text-lg">
                  احجز طاولتك الآن
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
