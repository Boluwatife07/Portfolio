import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudy } from "@/content/case-studies";
import { roles } from "@/content/experience";
import { getProject } from "@/content/projects";
import { Arrow, Container, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles and contributions: KEYS Community, Bright Bridge Connect, Africa Gaming Expo, Zenon and Purejim.",
};

export default function ExperiencePage() {
  return (
    <Container className="flex flex-col gap-14 pt-14 pb-24 sm:pt-20">
      <SectionHeading as="h1" eyebrow="Experience" title="Where I have worked and what I did there">
        Most recent first. Each role links to the case studies and projects that show the work in detail.
      </SectionHeading>

      <nav aria-label="Jump to a role" className="flex flex-wrap gap-2">
        {roles.map((r) => (
          <a key={r.slug} href={`#${r.slug}`} className="min-h-10 rounded-full border border-line px-4 py-2 text-sm text-body hover:border-ink hover:text-ink">
            {r.org}
          </a>
        ))}
      </nav>

      <ol className="flex flex-col">
        {roles.map((r) => (
          <li key={r.slug} id={r.slug} className="scroll-mt-24 border-t border-line py-14 first:border-t-0 first:pt-0">
            <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
              <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
                <span className="font-mono text-sm text-muted">{r.dates}</span>
                <h2 className="text-[28px] leading-tight font-bold tracking-[-0.02em]">{r.org}</h2>
                <p className="text-sm text-muted">{r.orgNote}</p>
                <p className="text-lg font-semibold text-ink">
                  {r.role}
                  {r.type && <span className="ml-2 rounded bg-surface px-2 py-0.5 align-middle font-mono text-xs font-normal text-muted">{r.type}</span>}
                </p>
                <p className="text-sm text-muted">{r.location}</p>
              </div>

              <div className="flex min-w-0 flex-col gap-8">
                <p className="text-lg leading-relaxed text-body">{r.summary}</p>
                <div className="grid gap-8 md:grid-cols-2">
                  {r.groups.map((g) => (
                    <div key={g.title} className="flex flex-col gap-3">
                      <h3 className="font-mono text-[13px] uppercase text-accent">{g.title}</h3>
                      <ul className="flex flex-col gap-2.5">
                        {g.items.map((it) => (
                          <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-body">
                            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-line-strong" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {r.alsoFor && (
                  <div className="flex flex-col gap-4 rounded-2xl bg-surface p-6">
                    <h3 className="font-mono text-[13px] uppercase text-muted">Also delivered through this role</h3>
                    {r.alsoFor.map((a) => (
                      <div key={a.org}>
                        <p className="font-semibold text-ink">{a.org}</p>
                        <p className="text-sm text-muted">{a.orgNote}</p>
                        <ul className="mt-1">
                          {a.items.map((it) => (
                            <li key={it} className="text-[15px] text-body">{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {(r.caseStudies?.length || r.projects?.length) && (
                  <div className="flex flex-col gap-3">
                    <h3 className="font-mono text-[13px] uppercase text-muted">See the work</h3>
                    <div className="flex flex-col">
                      {r.caseStudies?.map((s) => {
                        const cs = getCaseStudy(s);
                        return cs ? (
                          <Link key={s} href={`/work/${s}`} className="group flex items-center justify-between gap-4 border-b border-line py-3 hover:border-ink">
                            <span className="text-[15px]"><span className="mr-3 font-mono text-xs text-muted">{cs.id}</span>{cs.title}</span>
                            <span className="text-accent"><Arrow /></span>
                          </Link>
                        ) : null;
                      })}
                      {r.projects?.map((s) => {
                        const p = getProject(s);
                        return p ? (
                          <Link key={s} href={`/projects/${s}`} className="group flex items-center justify-between gap-4 border-b border-line py-3 hover:border-ink">
                            <span className="text-[15px]"><span className="mr-3 font-mono text-xs text-muted">PROJECT</span>{p.name}</span>
                            <span className="text-accent"><Arrow /></span>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {r.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
