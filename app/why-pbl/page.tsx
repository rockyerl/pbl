import type { Metadata } from "next";
import { PageHero, Section, CtaBand, WhyGrid } from "@/components/ui";

export const metadata: Metadata = { title: "Why PBL" };

export default function WhyPbl() {
  return (
    <>
      <PageHero title="Partnership and performance.">
        PBL is an integrated logistics provider focused on every part of the supply chain. With mature skills and up-to-date technology and information, we help improve efficiency in production and distribution throughout Indonesia.
      </PageHero>
      <Section tone="fog"><WhyGrid /></Section>
      <CtaBand />
    </>
  );
}
