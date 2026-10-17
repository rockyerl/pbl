import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Career" };

export default function Career() {
    return (
        <>
            <PageHero title="Build your career in logistics.">
                Take a look at the opportunities across Panca Budi Group and find the one that suits you.
            </PageHero>
            <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pb-28 sm:pt-16">
                <a href={company.careerUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-container px-6 py-3 font-medium text-white hover:brightness-110">
                    Browse open positions
                </a>
                <p className="mt-4 text-sm text-ink/60">Opens the Panca Budi Group careers page.</p>
            </section>
        </>
    );
}