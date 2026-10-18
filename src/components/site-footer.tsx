import Link from "next/link";
import { site } from "@/content/site";
import { ButtonLink, Container } from "./ui";

export function ContactList({ dark = false }: { dark?: boolean }) {
  const items = [
    { label: "Email", value: site.contacts.email, href: `mailto:${site.contacts.email}` },
    { label: "Phone", value: site.contacts.phone, href: site.contacts.phoneHref },
    { label: "LinkedIn", value: site.contacts.linkedinLabel, href: site.contacts.linkedin },
    { label: "GitHub", value: site.contacts.githubLabel, href: site.contacts.github },
  ];
  return (
    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i.label} className="flex flex-col gap-1.5">
          <dt className={`font-mono text-xs uppercase tracking-wide ${dark ? "text-night-muted" : "text-muted"}`}>{i.label}</dt>
          <dd>
            <a
              href={i.href}
              {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`break-words text-[15px] underline-offset-4 hover:underline ${dark ? "text-white" : "text-ink"}`}
            >
              {i.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <Container className="flex flex-col gap-14 pt-20 pb-10 sm:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-[13px] text-night-muted">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse-dot rounded-full bg-ok align-middle" />
              {"// status: accepting new projects"}
            </p>
            <h2 className="text-[clamp(34px,4.4vw,58px)] leading-[1.05] font-bold tracking-[-0.03em]">
              Got a build that needs untangling? Let&apos;s talk.
            </h2>
          </div>
          <ButtonLink href="/contact" variant="accent">
            Get in touch
          </ButtonLink>
        </div>
        <div className="border-t border-night-line pt-8">
          <ContactList dark />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-night-muted">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
