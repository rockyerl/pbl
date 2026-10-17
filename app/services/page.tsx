import type { Metadata } from "next";
import { PageHero, Section, CtaBand, ServiceCards } from "@/components/ui";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero title="The best service to serve you.">
        Six services that work alone or as one integrated chain.
      </PageHero>
      <Section tone="fog"><ServiceCards /></Section>
      <CtaBand />
    </>
  );
}
