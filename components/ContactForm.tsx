"use client";
import { useState } from "react";

const purposes = ["Business enquiry", "Supplier", "Job application question", "Media / press question", "Website feedback", "Other"];
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 focus:border-sea";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="block text-sm font-medium">Purpose
        <select name="purpose" required className={field}>{purposes.map((p) => <option key={p}>{p}</option>)}</select>
      </label>
      <label className="block text-sm font-medium">Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block text-sm font-medium">Telephone
          <input name="phone" type="tel" inputMode="numeric" pattern="[0-9]*" autoComplete="tel" className={field} />
          <span className="mt-1 block text-xs font-normal text-ink/55">Digits only</span>
        </label>
      </div>
      <label className="block text-sm font-medium">Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <div className="flex items-center gap-4">
        <button disabled={status === "sending"} className="rounded-full bg-container px-6 py-3 font-medium text-white hover:brightness-110 disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p role="status" className="text-sm">
          {status === "sent" && "Message sent. We'll get back to you soon."}
          {status === "error" && "Couldn't send your message. Please email info@pbl.co.id instead."}
        </p>
      </div>
    </form>
  );
}
