import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { company, services, whyPoints } from "@/lib/data";
import { serviceIcons, whyIcons } from "@/components/icons";

/** Jajaran genjang miring ala logo, dipakai sebagai dekorasi di blok navy */
export function Shapes() {
    return (
        <>
            <div aria-hidden className="pointer-events-none absolute -right-24 top-0 h-full w-72 -skew-x-[20deg] bg-white/5" />
            <div aria-hidden className="pointer-events-none absolute right-56 top-0 hidden h-full w-3 -skew-x-[20deg] bg-container md:block" />
            <div aria-hidden className="pointer-events-none absolute right-72 top-0 hidden h-full w-1 -skew-x-[20deg] bg-white/20 md:block" />
        </>
    );
}

export function Footer() {
    return (
        <footer className="navy-bg grid-lines slant-t mt-10 pt-24 text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <p className="font-display text-2xl font-semibold">{company.name}</p>
                    <p className="mt-3 max-w-[34ch] text-white/70">It's all about partnership and performance.</p>
                </div>
                <div className="space-y-1 text-sm text-white/80">
                    <a className="block hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
                    {company.phones.map((p) => (
                        <a key={p} className="block hover:text-white" href={`tel:${p.replace(/\D/g, "")}`}>{p}</a>
                    ))}
                </div>
                <ul className="space-y-1 text-sm text-white/80">
                    {company.social.map(([n, href]) => (
                        <li key={n}><a className="hover:text-white" href={href} rel="noopener noreferrer" target="_blank">{n}</a></li>
                    ))}
                </ul>
            </div>
            <p className="border-t border-white/15 py-5 text-center text-xs text-white/55">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </footer>
    );
}

export function PageHero({ title, children, icon: Icon }: { title: string; children?: React.ReactNode; icon?: LucideIcon }) {
    return (
        <section className="navy-bg grid-lines slant-b relative overflow-hidden text-white">
            <Shapes />
            <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-16 md:pt-24">
                {Icon && <span className="mb-6 flex h-14 w-14 items-center justify-center bg-container"><Icon size={28} aria-hidden /></span>}
                <h1 className="max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
                {children && <p className="mt-6 max-w-[58ch] text-lg text-white/75">{children}</p>}
            </div>
        </section>
    );
}

export function Section({ title, children, tone = "white" }: { title?: string; children: React.ReactNode; tone?: "white" | "fog" | "ink" }) {
    const bg = tone === "white" ? "dots bg-white border-y border-line" : tone === "ink" ? "navy-bg grid-lines text-white" : "";
    return (
        <section className={bg}>
            <div className="mx-auto max-w-6xl px-6 py-20">
                {title && <h2 className="mb-10 max-w-[24ch] font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
                {children}
            </div>
        </section>
    );
}

export function ServiceCards() {
    return (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
                const Icon = serviceIcons[s.slug];
                return (
                    <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white">
                            <span className="flex h-12 w-12 items-center justify-center bg-ink text-white transition group-hover:bg-container"><Icon size={24} aria-hidden /></span>
                            <h3 className="mt-6 font-display text-2xl font-medium">{s.name}</h3>
                            <p className="mt-2 flex-1 text-ink/70 group-hover:text-white/75">{s.summary}</p>
                            <span className="mt-6 text-sm font-medium text-container group-hover:text-white">Learn more</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export function WhyGrid() {
    return (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p, i) => {
                const Icon = whyIcons[i];
                return (
                    <li key={p} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                        <span className="flex h-11 w-11 items-center justify-center bg-fog text-container"><Icon size={22} aria-hidden /></span>
                        <p className="mt-4 text-lg font-medium leading-snug">{p}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export function CtaBand() {
    return (
        <section className="px-6 py-20">
            <div className="navy-bg grid-lines relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-white md:px-14">
                <Shapes />
                <h2 className="relative max-w-[18ch] font-display text-3xl font-semibold tracking-tight sm:text-5xl">Tell us what needs to move.</h2>
                <div className="relative mt-8 flex flex-wrap items-center gap-6">
                    <Link href="/contact" className="-skew-x-[12deg] bg-container px-7 py-3 font-semibold hover:brightness-110"><span className="block skew-x-[12deg]">Request a quote</span></Link>
                    <a href="tel:0215524626" className="font-medium underline-offset-4 hover:underline">(021) 552 4626</a>
                </div>
            </div>
        </section>
    );
}