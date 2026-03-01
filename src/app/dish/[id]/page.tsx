import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DISHES } from "@/data/dishes";

export async function generateStaticParams() {
    return DISHES.map((dish) => ({ id: dish.id }));
}

export default async function DishPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const dish = DISHES.find((d) => d.id === id);

    if (!dish) notFound();

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container mx-auto mt-10 px-4">
                <div className="glass-panel mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Image */}
                        <div className="relative h-[400px] w-full md:h-auto min-h-[400px]">
                            <Image
                                src={dish.imageUrl}
                                alt={dish.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
                        </div>

                        {/* Details */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="rounded-full bg-white/10 px-4 py-1 text-sm text-muted-foreground">
                                    {dish.category ?? "طبق مميز"}
                                </span>
                                <span className="font-heading text-2xl font-bold text-primary neon-glow" dir="ltr">
                                    {dish.price} SAR
                                </span>
                            </div>

                            <h1 className="mb-6 font-heading text-4xl font-bold text-white">
                                {dish.name}
                            </h1>

                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                {dish.description}
                            </p>

                            <div className="mb-10">
                                <h3 className="mb-4 font-heading text-xl font-bold text-white">المكونات الرئيسية</h3>
                                <ul className="grid grid-cols-2 gap-3">
                                    {dish.ingredients.map((ingredient, idx) => (
                                        <li key={idx} className="flex items-center text-muted-foreground">
                                            <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href="/contact" className="flex-1">
                                    <Button size="lg" className="w-full neon-glow rounded-full text-lg">
                                        احجز وتذوق
                                    </Button>
                                </Link>
                                <Link href="/#featured" className="flex-1">
                                    <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                                        عودة للقائمة
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
