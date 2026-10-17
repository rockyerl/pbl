import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { news } from "@/lib/data";

export const metadata: Metadata = { title: "News" };

export default function News() {
  return (
    <>
      <PageHero title="Logistics news and events." />
      <Section tone="white">
        <ul className="divide-y divide-line border-y border-line">
          {news.map((n) => (
            <li key={n.id}>
              <a href={n.href} target="_blank" rel="noopener noreferrer" className="group grid gap-2 py-7 md:grid-cols-[10rem_1fr]">
                <span className="text-sm text-ink/55">{n.date}</span>
                <span>
                  <span className="block font-display text-2xl font-medium group-hover:text-container">{n.title}</span>
                  <span className="mt-2 block max-w-[62ch] text-ink/70">{n.summary}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        {/* TODO: pindahkan artikel ke CMS/MDX, lalu buat route /news/[id] */}
      </Section>
    </>
  );
}
