import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { roles } from "@/content/experience";
import { projects } from "@/content/projects";
import { capabilities, hero, site } from "@/content/site";
import { ModeToggle, Tracked } from "@/components/reading-mode";
import { ProjectRail } from "@/components/rail";
import { ButtonLink, Container } from "@/components/ui";

export default function Home() {
  const work = caseStudies;
  const railProjects = projects.filter((p) => p.images.length);

  return (
    <>
      {/* Hero */}
      <Container className="grid gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20 lg:pb-28">
        <div className="flex flex-col gap-10">
          <div className="flex animate-rise flex-col gap-1">
            <h1 className="text-[19px] font-semibold tracking-[-0.01em]">
              Dorcas Adeboye
              <span className="block font-normal text-body">Technical Project Manager, Lagos and remote</span>
            </h1>
          </div>

          <p className="max-w-[22ch] animate-rise text-[clamp(34px,4.4vw,60px)] leading-[1.06] font-semibold tracking-[-0.032em] [animation-delay:80ms]">
            <Tracked plain={hero.plain} eng={hero.eng} />
          </p>

          <div className="flex animate-rise flex-col gap-4 [animation-delay:160ms]">
            <ModeToggle />
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted">
              I spend my days translating between the people who need software and the people who build it. Every
              page here reads both ways. Switch whenever you like.
            </p>
          </div>

          <div className="flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <ButtonLink href="/work">See the work</ButtonLink>
            <ButtonLink href={site.cv} variant="secondary" download prefetch={false}>
              Download résumé
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] animate-rise [animation-delay:200ms] lg:mb-2">
          <Image
            src="/images/dorcas.webp"
            alt="Portrait of Dorcas Adeboye"
            width={800}
            height={1000}
            priority
            sizes="(min-width: 1024px) 360px, 80vw"
            className="aspect-[4/5] w-full rounded-[28px] object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-4 w-[220px] -rotate-3 rounded-2xl bg-paper p-4 shadow-[0_18px_40px_-14px_rgba(20,24,38,0.35)] ring-1 ring-line transition-transform duration-500 hover:rotate-0 sm:-left-10"
          >
            <div className="flex items-center justify-between text-xs text-muted">
              <span>DA-2026</span>
              <span className="rounded-md bg-ok-soft px-1.5 py-0.5 font-medium text-ok-ink">Ready</span>
            </div>
            <p className="mt-2 text-[15px] leading-snug font-semibold">
              <Tracked plain="Hire a TPM fluent in product and engineering" eng="Hire a TPM who writes specs you can build from" />
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
              <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-accent text-[10px] font-bold text-white">D</span>
              Assigned to you
            </p>
          </div>
        </div>
      </Container>

      {/* Selected work: an index */}
      <section aria-labelledby="work-title" className="border-t border-line">
        <Container className="pt-20 pb-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 id="work-title" className="text-[clamp(30px,3.4vw,44px)] font-semibold tracking-[-0.03em]">
              Selected work
            </h2>
            <Link href="/work" className="font-semibold text-accent hover:text-accent-strong">
              All case studies
            </Link>
          </div>
          <ol className="border-t border-ink">
            {work.map((cs) => (
              <li key={cs.slug} className="border-b border-line">
                <Link
                  href={`/work/${cs.slug}`}
                  className="group grid gap-x-10 gap-y-3 py-8 transition-colors duration-300 hover:bg-surface md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:px-4"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-muted">{cs.org}</span>
                    <h3 className="text-[clamp(22px,2.3vw,30px)] leading-[1.15] font-semibold tracking-[-0.02em] transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-1.5">
                      {cs.title}
                    </h3>
                  </div>
                  <p className="text-[16px] leading-relaxed text-body md:pt-7">
                    <Tracked plain={cs.summary} eng={cs.summaryTech} />
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What I do */}
      <section aria-labelledby="do-title" className="bg-surface">
        <Container className="grid gap-12 py-24 lg:grid-cols-[300px_minmax(0,1fr)]">
          <h2 id="do-title" className="text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.03em]">
            What I am hired for
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="flex flex-col gap-3 border-t-2 border-ink pt-5">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="leading-relaxed text-body">
                  <Tracked plain={c.text} eng={c.tech} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects rail */}
      <section aria-labelledby="built-title" className="overflow-hidden">
        <Container className="pt-24 pb-24">
          <div className="mb-2 flex flex-col gap-3">
            <h2 id="built-title" className="text-[clamp(30px,3.4vw,44px)] font-semibold tracking-[-0.03em]">
              Things I have built
            </h2>
            <p className="max-w-[56ch] text-body">
              Websites and products, some coded by hand, newer ones specified and built with AI-assisted tools.{" "}
              <Link href="/projects" className="font-semibold text-accent hover:text-accent-strong">
                All projects
              </Link>
            </p>
          </div>
          <ProjectRail items={railProjects} />
        </Container>
      </section>

      {/* Experience */}
      <section aria-labelledby="exp-title" className="border-t border-line">
        <Container className="grid gap-12 py-24 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <h2 id="exp-title" className="text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.03em]">
              Where I have worked
            </h2>
            <Link href="/experience" className="font-semibold text-accent hover:text-accent-strong">
              Full experience
            </Link>
          </div>
          <ul>
            {roles.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/experience#${r.slug}`}
                  className="group grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                >
                  <span>
                    <span className="block text-lg font-semibold group-hover:text-accent">{r.org}</span>
                    <span className="text-[15px] text-body">
                      {r.role}
                      {r.type ? `, ${r.type.toLowerCase()}` : ""}
                    </span>
                  </span>
                  <span className="text-sm text-muted tabular-nums">{r.dates}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
