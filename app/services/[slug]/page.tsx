import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section, CtaBand } from "@/components/ui";
import { services } from "@/lib/data";
import { serviceIcons } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.name, description: s?.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <PageHero title={s.name} icon={serviceIcons[s.slug]}>{s.intro}</PageHero>
      <Section tone="white">
        <ul className="grid gap-6 md:grid-cols-3">
          {s.details.map((d) => (
            <li key={d.title} className="rounded-2xl border border-line border-t-4 border-t-container bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold">{d.title}</h2>
              <p className="mt-2 text-ink/70">{d.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Other services" tone="fog">
        <ul className="flex flex-wrap gap-3">
          {services.filter((x) => x.slug !== s.slug).map((x) => (
            <li key={x.slug}>
              <Link href={`/services/${x.slug}`} className="block rounded-full border border-ink/25 px-4 py-2 hover:border-container hover:text-container">{x.name}</Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
