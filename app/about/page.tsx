import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Eye, Target, CalendarDays, Layers, MapPin, Clock } from "lucide-react";
import { PageHero, CtaBand } from "@/components/ui";
import { VideoPlayer } from "@/components/VideoPlayer";
import { strengthIcons, valueIcons } from "@/components/icons";
import { vision, mission, coreValues, strengths } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const facts = [
    { icon: CalendarDays, value: "2008", label: "Founded, June 2008" },
    { icon: Layers, value: "6", label: "Integrated services" },
    { icon: MapPin, value: "7", label: "Branch offices" },
    { icon: Clock, value: "1x24", label: "Hour operations" },
];

export default function About() {
    return (
        <>
            <PageHero icon={Building2} title="A full range of logistics under one roof.">
                PBL provides integrated logistics services: warehousing and distribution, inland transportation, customs and clearance documents, sea freight, air freight and project cargo. We are a subsidiary of Panca Budi Group, founded in June 2008.
            </PageHero>

            {/* Company profile video */}
            <section className="bg-fog">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
                    <div className="relative">
                        <div aria-hidden className="absolute -left-4 -top-4 hidden h-full w-full -skew-x-[6deg] border-2 border-container/70 lg:block" />
                        <div className="relative">
                            <VideoPlayer src="/video/pbl-profile.mp4" poster="/video/pbl-profile-poster.jpg" title="PBL company profile" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-container">Company profile</p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Wide and reliable distribution network.</h2>
                        <p className="mt-4 text-lg text-ink/75">
                            From night-time container runs to a live tracking room, see how our people, fleet and systems keep cargo moving across Indonesia.
                        </p>
                        <dl className="mt-8 grid grid-cols-2 gap-4">
                            {facts.map(({ icon: Icon, value, label }) => (
                                <div key={label} className="rounded-xl border border-line bg-white p-4">
                                    <Icon size={20} className="text-container" aria-hidden />
                                    <dd className="mt-2 font-display text-2xl font-semibold">{value}</dd>
                                    <dt className="text-sm text-ink/65">{label}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* Vision & mission */}
            <section className="dots border-y border-line bg-white">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                    <div className="grid gap-8 md:grid-cols-2">
                        {[
                            { icon: Eye, title: "Vision", text: vision },
                            { icon: Target, title: "Mission", text: mission },
                        ].map(({ icon: Icon, title, text }) => (
                            <article key={title} className="rounded-2xl border border-line border-t-4 border-t-container bg-white p-6 shadow-sm sm:p-8">
                                <span className="flex h-14 w-14 items-center justify-center bg-ink text-white"><Icon size={28} aria-hidden /></span>
                                <h2 className="mt-6 font-display text-2xl font-semibold">{title}</h2>
                                <p className="mt-3 max-w-[52ch] text-lg text-ink/80">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strengths */}
            <section>
                <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                    <h2 className="mb-8 max-w-[24ch] font-display text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl">What we're strong at</h2>
                    <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
                        <div className="grid gap-4 lg:sticky lg:top-32">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                                <Image src="/images/about/truck-night.jpg" alt="PBL container truck on the road at night" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
                                <span aria-hidden className="absolute bottom-0 left-0 h-2 w-1/3 bg-container" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                    <Image src="/images/about/fleet.jpg" alt="Row of PBL delivery trucks at a warehouse" fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
                                </div>
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                    <Image src="/images/about/tracking-room.jpg" alt="Operations team monitoring shipments on a live tracking map" fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" />
                                </div>
                            </div>
                        </div>
                        <ul className="grid gap-4">
                            {strengths.map((s, i) => {
                                const Icon = strengthIcons[i];
                                return (
                                    <li key={s} className="flex items-center gap-5 rounded-xl border border-line border-l-4 border-l-container bg-white p-5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-fog text-container"><Icon size={24} aria-hidden /></span>
                                        <span className="text-lg leading-snug">{s}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Core values */}
            <section className="navy-bg grid-lines relative overflow-hidden text-white">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                    <h2 className="mb-8 max-w-[24ch] font-display text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl">Core values</h2>
                    <ul className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {coreValues.map((v) => {
                            const Icon = valueIcons[v];
                            return (
                                <li key={v} className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur transition hover:border-container hover:bg-white/10">
                                    {Icon && <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-container"><Icon size={20} aria-hidden /></span>}
                                    <span className="font-medium leading-tight">{v}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            <CtaBand />
        </>
    );
}