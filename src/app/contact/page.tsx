import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="relative min-h-[90vh] py-24">
                {/* Background elements */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2560')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-background/80" />

                <div className="container relative z-10 mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Contact Information */}
                            <div className="flex flex-col justify-center space-y-8">
                                <div>
                                    <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">
                                        تواصل <span className="text-primary neon-glow">معنا</span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        نحن هنا للرد على استفساراتكم وتلقي حجوزاتكم لقضاء وقت ممتع في مطعمنا
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            {/* Using simple SVG icon instead of Lucide to avoid hydration mismatch if not loaded */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-white">رقم الهاتف</h3>
                                            <p className="text-muted-foreground" dir="ltr">+966 50 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-white">العنوان</h3>
                                            <p className="text-muted-foreground">شارع التحلية، الرياض، المملكة العربية السعودية</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Component */}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
