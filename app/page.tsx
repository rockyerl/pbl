import Link from "next/link";
import Image from "next/image";
import { clients, certifications, news } from "@/lib/data";
import { Section, CtaBand, ServiceCards, WhyGrid, Shapes } from "@/components/ui";

const legs = [
    ["Pickup", "Warehouse"],
    ["Customs", "Port clearance"],
    ["Sea freight", "Port to port"],
    ["Delivery", "Client site"],
];
const stats = [["2008", "Founded"], ["6", "Integrated services"], ["7", "Branch offices"], ["1x24", "Hour operations"]];

export default function Home() {
    return (
        <>
            <section className="navy-bg grid-lines slant-b relative overflow-hidden text-white">
                <Shapes />
                <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-40 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-24">
                    <div>
                        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
                            Your cargo, on schedule, across Indonesia.
                        </h1>
                        <p className="mt-6 max-w-[52ch] text-lg text-white/75">
                            Integrated logistics since 2008. One team handles warehousing, transport, customs and freight, so you don't have to coordinate five vendors.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/contact" className="-skew-x-[12deg] bg-container px-7 py-3 font-semibold hover:brightness-110"><span className="block skew-x-[12deg]">Request a quote</span></Link>
                            <Link href="/services" className="-skew-x-[12deg] border border-white/40 px-7 py-3 font-semibold hover:bg-white hover:text-ink"><span className="block skew-x-[12deg]">See our services</span></Link>
                        </div>
                        <dl className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
                            {stats.map(([n, l]) => (
                                <div key={l}>
                                    <dt className="font-display text-3xl font-semibold">{n}</dt>
                                    <dd className="mt-1 text-sm text-white/65">{l}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <aside aria-label="Example shipment route" className="self-center rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                        <div className="flex items-center justify-between text-sm">
                            <p className="text-white/70">Example shipment</p>
                            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-container ring-4 ring-container/30" aria-hidden />On schedule</p>
                        </div>
                        <div className="relative mt-10 mb-2">
                            <div className="absolute left-[12.5%] right-[12.5%] top-[6px] h-0.5 bg-white/25" aria-hidden />
                            <div className="route absolute left-[12.5%] right-[12.5%] top-[6px] h-0.5 bg-container" aria-hidden />
                            <div className="relative grid grid-cols-4 text-center">
                                {legs.map(([step, where]) => (
                                    <div key={step} className="px-1">
                                        <span className="mx-auto block h-3.5 w-3.5 rounded-full bg-white ring-2 ring-container" aria-hidden />
                                        <p className="mt-3 text-sm font-medium leading-tight">{step}</p>
                                        <p className="mt-1 text-xs leading-tight text-white/60">{where}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Section title="What we move, and how" tone="fog"><ServiceCards /></Section>

            <Section title="Why companies choose PBL" tone="white">
                <WhyGrid />
                <Link href="/why-pbl" className="mt-8 inline-block font-medium text-container underline-offset-4 hover:underline">More about how we work</Link>
            </Section>

            <Section title="Trusted by industry" tone="fog">
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                    {clients.map(([name, src]) => (
                        <li key={name} className="flex h-24 items-center justify-center rounded-xl border border-line bg-white p-4">
                            <Image src={src} alt={name} width={140} height={60} className="max-h-full w-auto object-contain grayscale transition hover:grayscale-0" />
                        </li>
                    ))}
                </ul>
                <h3 className="mb-4 mt-16 font-display text-xl font-semibold">Certifications and awards</h3>
                <ul className="flex flex-wrap gap-6">
                    {certifications.map((src) => (
                        <li key={src} className="rounded-xl border border-line bg-white p-4"><Image src={src} alt="Certification" width={120} height={120} className="h-20 w-auto object-contain" /></li>
                    ))}
                </ul>
            </Section>

            <Section title="From the news" tone="white">
                <ul className="grid gap-6 md:grid-cols-3">
                    {news.slice(0, 3).map((n) => (
                        <li key={n.id} className="rounded-2xl border border-line border-t-4 border-t-container bg-white p-6 shadow-sm">
                            <p className="text-sm text-ink/55">{n.date}</p>
                            <h3 className="mt-2 font-display text-xl font-medium leading-snug">{n.title}</h3>
                            <p className="mt-3 text-sm text-ink/70">{n.summary}</p>
                        </li>
                    ))}
                </ul>
                <Link href="/news" className="mt-8 inline-block font-medium text-container underline-offset-4 hover:underline">All news</Link>
            </Section>

            <CtaBand />
        </>
    );
}