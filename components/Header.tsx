"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { company, nav } from "@/lib/data";

export function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Tutup menu mobile setiap pindah halaman
    useEffect(() => setOpen(false), [pathname]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="sticky top-0 z-20">
            <div className="hidden bg-ink text-xs text-white/80 md:block">
                <div className="mx-auto flex max-w-6xl justify-end gap-6 px-6 py-1.5">
                    <a className="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
                    <a className="hover:text-white" href="tel:0215524626">{company.phones[0]}</a>
                </div>
            </div>

            <nav aria-label="Main" className="border-b border-line bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
                    <Link href="/" aria-label="Panca Budi Logistindo, home" className="py-3">
                        <Image src="https://www.pbl.co.id/img/logo.png" alt="Panca Budi Logistindo" width={160} height={44} className="h-10 w-auto" priority />
                    </Link>

                    <ul className="hidden self-stretch text-sm font-medium md:flex md:gap-8">
                        {nav.map(([label, href]) => {
                            const active = isActive(href);
                            return (
                                <li key={href} className="flex">
                                    <Link
                                        href={href}
                                        aria-current={active ? "page" : undefined}
                                        className={`relative flex items-center transition-colors hover:text-container ${active ? "text-container" : ""}`}
                                    >
                                        {label}
                                        <span
                                            aria-hidden
                                            className={`absolute inset-x-0 bottom-0 h-[3px] origin-left bg-container transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <Link
                        href="/contact"
                        aria-current={isActive("/contact") ? "page" : undefined}
                        className="hidden -skew-x-[12deg] bg-container px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 md:block"
                    >
                        <span className="block skew-x-[12deg]">Request a quote</span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 md:hidden"
                    >
                        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
                    </button>
                </div>

                {open && (
                    <ul id="mobile-menu" className="border-t border-line bg-white px-6 py-3 md:hidden">
                        {[...nav, ["Contact", "/contact"] as const].map(([label, href]) => {
                            const active = isActive(href);
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        aria-current={active ? "page" : undefined}
                                        className={`block border-l-4 px-3 py-3 font-medium ${active ? "border-container text-container" : "border-transparent hover:bg-fog"}`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </nav>
        </header>
    );
}