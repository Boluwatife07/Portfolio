import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { Arrow, Container, Eyebrow } from "@/components/ui";
import { ModeToggle, Tracked } from "@/components/reading-mode";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  return cs ? { title: cs.title, description: cs.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const cs = getCaseStudy((await params).slug);
  if (!cs) notFound();
  const i = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article>
      <header className="border-b border-line">
        <Container className="flex flex-col gap-6 pt-10 pb-14 sm:pt-14">
          <nav aria-label="Breadcrumb" className="font-mono text-[13px] text-muted">
            <Link href="/work" className="hover:text-ink">
              Work
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{cs.id}</span>
          </nav>
          <p className="text-[15px] text-muted">{cs.org}</p>
          <h1 className="max-w-4xl text-[clamp(36px,4.8vw,60px)] leading-[1.05] font-semibold tracking-[-0.035em]">{cs.title}</h1>
          <p className="max-w-3xl text-[clamp(19px,1.8vw,23px)] leading-relaxed text-body">
            <Tracked plain={cs.summary} eng={cs.summaryTech} />
          </p>
          <ModeToggle size="sm" className="xl:hidden" />
        </Container>
      </header>

      <Container className="grid gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div className="order-2 flex min-w-0 flex-col gap-16 lg:order-1">
          <Section title="Context">
            <p>{cs.context}</p>
          </Section>

          <Section title="The problem">
            {cs.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Section>

          <Section title="My role">
            <p className="rounded-xl border-l-0 bg-accent-soft px-5 py-4 text-ink">{cs.myRole}</p>
          </Section>

          <Section title="What I did">
            <ol className="flex flex-col gap-4">
              {cs.actions.map((a, n) => (
                <li key={a.title} className="grid grid-cols-[40px_minmax(0,1fr)] gap-3">
                  <span className="font-mono text-sm text-muted">{String(n + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{a.title}</h3>
                    <p className="mt-1">{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Key decisions">
            <div className="flex flex-col gap-4">
              {cs.decisions.map((d) => (
                <div key={d.title} className="rounded-2xl border border-line p-6">
                  <p className="font-mono text-xs uppercase text-muted">Decision</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2">
                    <span className="font-semibold text-ink">Why: </span>
                    {d.why}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Results">
            <ul className="flex flex-col gap-3">
              {cs.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ok-soft text-xs text-ok-ink">
                    ✓
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Artifacts">
            <p className="text-sm text-muted">Recreated from my working documents, with confidential details removed.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.artifacts.map((a) => (
                <figure key={a.title} className="flex flex-col gap-4 rounded-2xl bg-surface p-6">
                  <figcaption>
                    <span className="block font-semibold text-ink">{a.title}</span>
                    <span className="text-sm text-muted">{a.text}</span>
                  </figcaption>
                  {a.items && (
                    <ol className="flex flex-col gap-2">
                      {a.items.map((it, k) => (
                        <li key={it} className="flex items-center gap-3 rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink">
                          <span className="font-mono text-xs text-muted">{String(k + 1).padStart(2, "0")}</span>
                          {it}
                        </li>
                      ))}
                    </ol>
                  )}
                </figure>
              ))}
            </div>
          </Section>

          <Section title="What I learned">
            <p className="text-xl leading-relaxed text-ink">{cs.learned}</p>
          </Section>
        </div>

        <aside className="order-1 lg:order-2">
          <dl className="flex flex-col gap-5 rounded-2xl border border-line p-6 lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase text-muted">At a glance</p>
            <Glance label="Role" value={cs.glance.role} />
            <Glance label="Timeline" value={cs.glance.timeline} />
            <Glance label="Team" value={cs.glance.team} />
            <Glance label="Tools" value={cs.glance.tools.join(", ")} />
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted">Status</dt>
              <dd className="flex items-start gap-2 text-[15px] text-ink">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ok" />
                {cs.glance.status}
              </dd>
            </div>
          </dl>
        </aside>
      </Container>

      <Container className="pb-20">
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-3 rounded-2xl bg-ink p-8 text-white transition-colors hover:bg-[#1b2029] sm:p-10"
        >
          <span className="text-sm text-night-muted">Next case study</span>
          <span className="text-[clamp(24px,3vw,34px)] leading-tight font-bold tracking-[-0.02em]">
            {next.title} <Arrow />
          </span>
        </Link>
      </Container>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <Eyebrow>{title}</Eyebrow>
      <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-body">{children}</div>
    </section>
  );
}

function Glance({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-[15px] text-ink">{value}</dd>
    </div>
  );
}
