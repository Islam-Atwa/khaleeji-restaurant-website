import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full glass-panel">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-heading text-2xl font-bold text-white">
                        وهـــج
                    </span>
                </Link>
                <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-white transition-colors hover:text-primary"
                    >
                        الرئيسية
                    </Link>
                    <Link
                        href="/#featured"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        الأطباق المميزة
                    </Link>
                    <Link
                        href="/#experience"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        تجربتنا
                    </Link>
                    <Link
                        href="/#location"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        موقعنا
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="default" className="neon-glow rounded-full px-6">
                            احجز طاولتك
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
