import Link from "next/link";

export function Footer() {
    return (
        <footer className="glass-panel mt-24 border-t border-white/10">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="font-heading text-3xl font-bold text-white">وهــج</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            تجربة طعام خليجية أصيلة تجمع بين عراقة الموروث الثقافي وأرقى معايير الضيافة الحديثة.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-white">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/#featured" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    الأطباق المميزة
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                    تواصل معنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-white">تواصل معنا</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li dir="ltr">+966 50 123 4567</li>
                            <li>info@khaleeji.sa</li>
                            <li>شارع التحلية، الرياض، المملكة العربية السعودية</li>
                        </ul>
                    </div>
                </div>

                {/* Divider & Bottom Row */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} وهــج. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                            سياسة الخصوصية
                        </Link>
                        <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                            الشروط والأحكام
                        </Link>
                    </div>
                </div>
            <p className="text-center text-xs text-muted-foreground">تم تنفيذ الموقع بواسطة <a href="https://github.com/Islam-Atwa"> Islam Atwa</a></p>
            </div>
        </footer>
    );
}
