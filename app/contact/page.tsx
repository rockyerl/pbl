import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { company, offices } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero title="Send us your message." />
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-4 lg:grid-cols-[1.1fr_1fr]">
        <ContactForm />
        <div>
          <h2 className="font-display text-xl font-semibold">{offices.head.name}</h2>
          <p className="mt-2 max-w-[40ch] text-ink/75">{offices.head.address}</p>
          <p className="mt-3 text-ink/75">
            {company.phones.map((p, i) => (
              <span key={p}>{i > 0 && ", "}<a className="hover:text-container" href={`tel:${p.replace(/\D/g, "")}`}>{p}</a></span>
            ))}
          </p>
          <a className="mt-1 block text-ink/75 hover:text-container" href={`mailto:${company.email}`}>{company.email}</a>
          <iframe title="PBL head office map" src={company.mapEmbed} loading="lazy" className="mt-8 h-64 w-full rounded-2xl border border-line" />
        </div>
      </section>
      <Section title="Branches" tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          {offices.branches.map((b) => (
            <div key={b.region}>
              <h3 className="font-display text-lg font-semibold">{b.region}</h3>
              <ul className="mt-2 space-y-2 text-ink/75">
                {b.items.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
