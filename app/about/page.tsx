import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "@/components/ui";
import { vision, mission, coreValues, strengths } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero title="A full range of logistics under one roof.">
        PBL provides integrated logistics services: warehousing and distribution, inland transportation, customs and clearance documents, sea freight, air freight and project cargo. We are a subsidiary of Panca Budi Group, founded in June 2008.
      </PageHero>
      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Vision</h2>
            <p className="mt-3 max-w-[50ch] text-lg text-ink/80">{vision}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Mission</h2>
            <p className="mt-3 max-w-[50ch] text-lg text-ink/80">{mission}</p>
          </div>
        </div>
      </Section>
      <Section title="What we're strong at" tone="fog">
        <ul className="grid gap-4 md:grid-cols-2">
          {strengths.map((s) => <li key={s} className="rounded-xl border border-line border-l-4 border-l-container bg-white p-5 text-lg">{s}</li>)}
        </ul>
      </Section>
      <Section title="Core values" tone="ink">
        <ul className="flex flex-wrap gap-3">
          {coreValues.map((v) => <li key={v} className="rounded-full border border-white/25 px-4 py-2">{v}</li>)}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
