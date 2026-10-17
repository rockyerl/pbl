import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Layers, MapPin, Clock, Truck, FileCheck2, Ship, PackageCheck, Cpu, FlaskConical, UtensilsCrossed, Car } from "lucide-react";
import { clients, certifications } from "@/lib/data";
import { Section, CtaBand, ServiceCards, WhyGrid, Shapes } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";

/* 02 Trust indicators: hanya fakta yang ada di data perusahaan */
const trust = [
    { icon: CalendarDays, value: "2008", label: "Founded" },
    { icon: Layers, value: "6", label: "Integrated services" },
    { icon: MapPin, value: "7", label: "Branch offices" },
    { icon: Clock, value: "1x24", label: "Hour operations" },
];
const capabilities = ["Live tracking system", "Integrated WMS and TMS", "Paperless POP and POD"];

/* 05 How it works */
const steps = [
    { icon: Truck, title: "Pickup", text: "Our container and box trucks collect cargo from your warehouse or site." },
    { icon: FileCheck2, title: "Customs", text: "Documents prepared completely and cleared by our customs team, in line with current regulations." },
    { icon: Ship, title: "Freight", text: "By sea or air, with one point of contact who keeps you informed at every step." },
    { icon: PackageCheck, title: "Delivery", text: "Delivered to the client site with live tracking and paperless proof of delivery." },
];

/* 06 Industries: disebut di halaman layanan inland transportation */
const industries = [
    { icon: Cpu, name: "Electronics" },
    { icon: FlaskConical, name: "Chemicals" },
    { icon: UtensilsCrossed, name: "Food and beverage" },
    { icon: Car, name: "Automotive" },
];

/* 07 Proof: setiap poin diambil dari deskripsi layanan */
const proof = [
    { img: "/images/about/fleet.jpg", alt: "Row of PBL delivery trucks at a warehouse", title: "A mixed fleet", text: "20 and 40 foot container trucks, wing box, tronton, Fuso, CDD, CDE and minivan." },
    { img: "/images/about/tracking-room.jpg", alt: "Operations team monitoring shipments on a live tracking map", title: "Live visibility", text: "Shipments monitored through our own IT infrastructure, with integrated WMS and TMS." },
    { img: "/images/about/truck-night.jpg", alt: "PBL container truck on the road at night", title: "Around the clock", text: "Delivery and operational logistics available 1x24 hours, including remote areas." },
];

export default function Home() {
    return (
        <>
            {/* 01 Hero */}
            <section className="navy-bg grid-lines slant-b relative overflow-hidden text-white">
                <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
                <Shapes />
                <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-40 pt-6 sm:pb-44 sm:pt-8 lg:grid-cols-[1.1fr_1fr] lg:pt-10">
                    <div>
                        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Your cargo, on schedule, across Indonesia.
                        </h1>
                        <p className="mt-6 max-w-[52ch] text-lg text-white/75">
                            Integrated logistics since 2008. One team handles warehousing, transport, customs and freight, so you don't have to coordinate five vendors.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <Link href="/services" className="-skew-x-[12deg] border border-white/40 px-7 py-3 font-semibold hover:bg-white hover:text-ink"><span className="block skew-x-[12deg]">See our services</span></Link>
                            <a href="tel:0215524626" className="font-medium underline-offset-4 hover:underline">Or call (021) 552 4626</a>
                        </div>
                    </div>
                    <QuoteForm />
                </div>
            </section>

            {/* 02 Trust indicators */}
            <section className="relative z-10 -mt-20 px-4 sm:-mt-24 sm:px-6">
                <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-white p-5 shadow-xl sm:p-6 md:p-8">
                    <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {trust.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex items-center gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-white"><Icon size={22} aria-hidden /></span>
                                <div>
                                    <dd className="font-display text-3xl font-semibold leading-none">{value}</dd>
                                    <dt className="mt-1 text-sm text-ink/65">{label}</dt>
                                </div>
                            </div>
                        ))}
                    </dl>
                    <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-sm text-ink/75">
                        <li className="font-medium text-ink">A subsidiary of Panca Budi Group</li>
                        {capabilities.map((c) => (
                            <li key={c} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-container" aria-hidden />{c}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 03 Our services */}
            <Section title="Our services" tone="fog"><ServiceCards /></Section>

            {/* 04 Why PBL */}
            <Section title="Why companies choose PBL" tone="white">
                <WhyGrid />
                <Link href="/why-pbl" className="mt-8 inline-block font-medium text-container underline-offset-4 hover:underline">More about how we work</Link>
            </Section>

            {/* 05 How it works */}
            <Section title="How it works" tone="ink">
                <p className="-mt-4 mb-10 flex items-center gap-3 text-sm text-white/70">
                    Example shipment
                    <span className="flex items-center gap-2 text-white"><span className="h-2 w-2 rounded-full bg-container ring-4 ring-container/30" aria-hidden />On schedule</span>
                </p>
                <ol className="relative grid gap-6 md:grid-cols-4">
                    <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-white/20 md:block" />
                    {steps.map(({ icon: Icon, title, text }, i) => (
                        <li key={title} className="relative">
                            <span className="relative flex h-14 w-14 items-center justify-center bg-container text-white md:mx-auto"><Icon size={26} aria-hidden /></span>
                            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/55 md:text-center">Step {i + 1}</p>
                            <h3 className="mt-1 font-display text-2xl font-medium md:text-center">{title}</h3>
                            <p className="mt-2 text-white/75 md:text-center">{text}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* 06 Industries & clients */}
            <Section title="Industries and clients" tone="fog">
                <ul className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
                    {industries.map(({ icon: Icon, name }) => (
                        <li key={name} className="flex items-center gap-4 rounded-xl border border-line border-l-4 border-l-container bg-white p-5">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-fog text-container"><Icon size={22} aria-hidden /></span>
                            <span className="text-lg font-medium leading-tight">{name}</span>
                        </li>
                    ))}
                </ul>
                <h3 className="mb-4 mt-12 font-display text-xl font-semibold sm:mt-14">Trusted by</h3>
                {/* Tampilkan hanya logo klien yang sudah memberi izin */}
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                    {clients.map(([name, src]) => (
                        <li key={name} className="flex h-24 items-center justify-center rounded-xl border border-line bg-white p-4">
                            <Image src={src} alt={name} width={140} height={60} className="max-h-full w-auto object-contain grayscale transition hover:grayscale-0" />
                        </li>
                    ))}
                </ul>
            </Section>

            {/* 07 Certifications & proof */}
            <Section title="Certifications and proof" tone="white" >
                <ul className="flex flex-wrap gap-6">
                    {certifications.map((src) => (
                        <li key={src} className="rounded-xl border border-line bg-white p-4"><Image src={src} alt="Certification" width={120} height={120} className="h-20 w-auto object-contain" /></li>
                    ))}
                </ul>
            </Section>

            {/* 08 Final CTA */}
            <CtaBand />
        </>
    );
}