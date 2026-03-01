import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ibm-plex-arabic",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wahaj",
  description: "Wahaj Restaurant featuring Signature Dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body
        className={`${ibmPlex.variable} ${cairo.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
