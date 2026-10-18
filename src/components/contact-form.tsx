"use client";

import { useState } from "react";
import { site } from "@/content/site";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(String(data.get("subject") || "Hello from your portfolio"));
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`);
      window.location.href = `mailto:${site.contacts.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-3 rounded-2xl border border-line p-8" role="status">
        <div className="flex items-center justify-between font-mono text-xs text-muted">
          <span>MSG-NEW</span>
          <span className="rounded bg-ok-soft px-1.5 py-0.5 text-ok-ink">DELIVERED</span>
        </div>
        <p className="text-2xl font-bold tracking-[-0.02em]">Message received. Thank you!</p>
        <p className="text-body">I&apos;ll reply to the email you gave, usually within a couple of days.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-2 self-start font-semibold text-accent hover:text-accent-strong">
          Send another message
        </button>
      </div>
    );
  }

  const field = "min-h-12 w-full rounded-lg border border-line-strong bg-paper px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-2xl border border-line p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Your name
          <input name="name" required autoComplete="name" className={field} placeholder="Ada Lovelace" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Subject
        <input name="subject" className={field} placeholder="A role, a project, or just hello" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Message
        <textarea name="message" required rows={6} className={`${field} resize-y`} placeholder="Tell me what you're building and where it's stuck." />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-[#b42318]">
            That didn&apos;t send. Please email me directly at {site.contacts.email}.
          </p>
        )}
      </div>
    </form>
  );
}
