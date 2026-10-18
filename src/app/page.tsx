import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { roles } from "@/content/experience";
import { projects } from "@/content/projects";
import { capabilities, flow, site } from "@/content/site";
import { CaseCard, ProjectCard } from "@/components/cards";
import { Arrow, ButtonLink, Container, SectionHeading, TextLink } from "@/components/ui";

const toneDot = { idle: "bg-line-strong", progress: "bg-warn", review: "bg-accent", done: "bg-ok" } as const;

export default function Home() {
  const featured = caseStudies.slice(0, 4);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Container className="grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:pb-24">
        <div className="flex animate-rise flex-col gap-7">
          <p className="flex items-center gap-2.5 font-mono text-[13px] text-muted">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-ok" aria-hidden="true" />
            {site.availability} · Lagos · Remote
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-body">Hi, I&apos;m Dorcas.</p>
            <h1 className="text-[clamp(42px,5.8vw,78px)] leading-[1.0] font-bold tracking-[-0.04em]">
              Technical Project Manager who gets software{" "}
              <span className="relative inline-block whitespace-nowrap">
                shipped
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2.5 left-[-2%] h-4 w-[104%] text-accent"
                >
                  <path
                    d="M3 12 C 40 4, 80 4, 112 10 S 182 15, 217 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="260"
                    className="animate-draw"
                  />
                </svg>
              </span>
              .
            </h1>
          </div>
          <p className="max-w-[600px] text-[19px] leading-[1.6] text-body sm:text-xl">
            I sit between delivery and the technical detail: writing requirements engineers can build from, setting the
            process between teams and agencies, and checking that what ships matches what was agreed. Frontend developer
            before I became a Technical Project Manager.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/work">View selected work</ButtonLink>
            <ButtonLink href={site.cv} variant="secondary" download prefetch={false}>
              Download résumé
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] animate-rise [animation-delay:120ms]">
          <Image
            src="/images/dorcas.webp"
            alt="Portrait of Dorcas Adeboye"
            width={800}
            height={1000}
            priority
            sizes="(min-width: 1024px) 400px, 90vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute -right-3 -bottom-9 w-[212px] rotate-3 rounded-xl border border-line bg-paper p-3.5 shadow-[0_12px_28px_rgba(14,17,22,0.12)] transition-transform duration-300 hover:rotate-0 sm:-right-6"
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-muted">
              <span>DA-2026</span>
              <span className="rounded bg-ok-soft px-1.5 py-0.5 text-ok-ink">READY</span>
            </div>
            <p className="mt-2 text-sm leading-snug font-semibold">Hire a TPM fluent in product and engineering</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
              <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-accent text-[10px] font-bold text-white">
                D
              </span>
              Assigned to you
            </div>
          </div>
        </div>
      </Container>

      {/* Flow */}
      <section aria-labelledby="flow-title" className="border-y border-line bg-surface">
        <Container className="flex flex-col gap-5 py-9">
          <h2 id="flow-title" className="font-mono text-[13px] uppercase text-muted">
            How a piece of work moves with me
          </h2>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((s, i) => (
              <li key={s.n} className="relative flex flex-col gap-2 rounded-xl border border-line bg-paper px-4.5 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{s.n}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${toneDot[s.tone]}`} aria-hidden="true" />
                </div>
                <span className="text-[17px] font-semibold">{s.title}</span>
                <span className="text-sm leading-snug text-body">{s.text}</span>
                {i < flow.length - 1 && (
                  <span aria-hidden="true" className="absolute top-1/2 -right-2.5 hidden text-line-strong lg:block">
                    ›
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What I do */}
      <Container className="flex flex-col gap-10 pt-24 pb-12">
        <SectionHeading eyebrow="What I do" title="Three things I am hired for" />
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.n} className="flex flex-col gap-3 rounded-2xl border border-line p-7">
              <span className="font-mono text-[13px] text-muted">{c.n}</span>
              <h3 className="text-[22px] font-bold">{c.title}</h3>
              <p className="leading-relaxed text-body">{c.text}</p>
            </div>
          ))}
        </div>
        <TextLink href="/skills">
          See the evidence for each skill <Arrow />
        </TextLink>
      </Container>

      {/* Selected work */}
      <Container className="flex flex-col gap-10 pt-12 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected work" title="Case studies" />
          <TextLink href="/work">
            All work <Arrow />
          </TextLink>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((cs) => (
            <CaseCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </Container>

      {/* Projects */}
      <section className="bg-surface">
        <Container className="flex flex-col gap-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Projects" title="Things I have built" />
            <TextLink href="/projects">
              All projects <Arrow />
            </TextLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <Container className="grid gap-12 py-24 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="Experience" title="Where I have worked" />
          <TextLink href="/experience">
            Full experience <Arrow />
          </TextLink>
        </div>
        <ul className="flex flex-col">
          {roles.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/experience#${r.slug}`}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5 transition-colors hover:border-ink"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-semibold group-hover:text-accent">{r.org}</span>
                  <span className="text-[15px] text-body">
                    {r.role}
                    {r.type ? ` (${r.type})` : ""}
                  </span>
                </span>
                <span className="font-mono text-sm text-muted">{r.dates}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
