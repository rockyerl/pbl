"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

/** Form ringkas untuk hero: hanya informasi awal. Detail berat, volume, dan tanggal ditanyakan tim sales. */
export default function QuoteForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    purpose: "Request a quote",
                    email: d.email,
                    message: `Service: ${d.service}\nOrigin: ${d.origin}\nDestination: ${d.destination}`,
                }),
            });
            if (!res.ok) throw new Error();
            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    const field = "mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-3 text-ink focus:border-sea";

    return (
        <form onSubmit={onSubmit} className="rounded-2xl border-t-4 border-t-container bg-white p-6 text-ink shadow-2xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-container">Request a quote</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight">Let's move your cargo.</h2>
            <p className="mt-2 text-sm text-ink/65">Tell us a little about your shipment. Our team will follow up regarding your requirements.</p>

            <div className="mt-6 grid gap-4">
                <label className="block text-sm font-medium">Service required
                    <select name="service" required defaultValue="" className={field}>
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                    </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-medium">Origin
                        <input name="origin" required placeholder="City or port" className={field} />
                    </label>
                    <label className="block text-sm font-medium">Destination
                        <input name="destination" required placeholder="City or port" className={field} />
                    </label>
                </div>
                <label className="block text-sm font-medium">Business email
                    <input name="email" type="email" required autoComplete="email" placeholder="name@company.com" className={field} />
                </label>
            </div>

            <button disabled={status === "sending"} className="mt-6 flex w-full -skew-x-[8deg] items-center justify-center bg-container px-6 py-3.5 font-semibold text-white hover:brightness-110 disabled:opacity-60">
        <span className="flex skew-x-[8deg] items-center gap-2">
          {status === "sending" ? "Sending..." : <>Request a quote <ArrowRight size={18} aria-hidden /></>}
        </span>
            </button>
            <p role="status" className="mt-3 min-h-5 text-sm">
                {status === "sent" && "Thank you. We'll be in touch soon."}
                {status === "error" && "Couldn't send your request. Please email info@pbl.co.id instead."}
            </p>
        </form>
    );
}