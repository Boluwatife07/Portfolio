import type { Metadata } from "next";
import Link from "next/link";
import { skillGroups } from "@/content/skills";
import { tools } from "@/content/site";
import { Container, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills, each linked to the work that shows it.",
};

export default function SkillsPage() {
  return (
    <Container className="flex flex-col gap-16 pt-14 pb-24 sm:pt-20">
      <SectionHeading as="h1" eyebrow="Skills" title="Skills, with the receipts">
        Anyone can list skills. Each one here links to the work that shows it.
      </SectionHeading>

      <div className="flex flex-col gap-14">
        {skillGroups.map((g, gi) => (
          <section key={g.title} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[13px] text-muted">{String(gi + 1).padStart(2, "0")}</span>
              <h2 className="text-[26px] font-bold tracking-[-0.02em]">{g.title}</h2>
              <p className="leading-relaxed text-body">{g.intro}</p>
            </div>
            <ul className="flex flex-col">
              {g.skills.map((s) => (
                <li key={s.name} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[240px_minmax(0,1fr)] sm:gap-6">
                  <span className="text-lg font-semibold">{s.name}</span>
                  <span className="flex flex-wrap gap-2">
                    {s.evidence.map((e) => (
                      <Link
                        key={e.href + e.label}
                        href={e.href}
                        className="group inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-sm text-body transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                      >
                        <span aria-hidden="true" className="font-mono text-[11px] text-muted group-hover:text-accent">↳</span>
                        {e.label}
                      </Link>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
        <h2 className="text-[26px] font-bold tracking-[-0.02em]">Tools I use</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>
    </Container>
  );
}
