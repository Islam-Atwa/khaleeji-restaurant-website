import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FoodCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export function FoodCard({ id, name, description, price, imageUrl }: FoodCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
            <div className="relative h-[300px] w-full">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-muted" />
                )}
                {/* Dark gradient overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Price Tag with Neon Glow */}
                <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground neon-glow">
                    {price} ر.س
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2">{name}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground mb-4">
                    {description}
                </p>
                <Link href={`/dish/${id}`} className="block">
                    <Button variant="outline" className="w-full rounded-full border-primary/50 text-white hover:bg-primary/20 hover:text-white">
                        عرض التفاصيل
                    </Button>
                </Link>
            </div>
        </div>
    );
}
