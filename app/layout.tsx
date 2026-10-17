import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ui";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-next" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body-next" });

export const metadata: Metadata = {
    title: { default: "Panca Budi Logistindo", template: "%s | Panca Budi Logistindo" },
    description:
        "Integrated logistics across Indonesia: contract logistics, inland transportation, customs clearance, sea freight, project cargo and air freight.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
        <body className="font-sans antialiased">
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}