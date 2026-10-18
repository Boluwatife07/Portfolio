import type { Metadata } from "next";
import Link from "next/link";
import { skillGroups } from "@/content/skills";
import { tools } from "@/content/site";
import { ModeToggle, Tracked } from "@/components/reading-mode";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills, each described in plain terms and in engineering terms, with links to the work that proves it.",
};

export default function SkillsPage() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <>
      <Container className="grid gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-end">
        <div className="flex flex-col gap-5">
          <h1 className="text-[clamp(40px,5.4vw,72px)] leading-[1.0] font-semibold tracking-[-0.04em]">
            Skills, with the proof attached
          </h1>
          <p className="max-w-[54ch] text-lg leading-relaxed text-body">
            {total} skills, each linked to the work that shows it. Switch the reading to see every description rewritten
            for the person you are.
          </p>
        </div>
        <ModeToggle className="lg:justify-end" />
      </Container>

      <nav aria-label="Skill groups" className="sticky top-[76px] z-30 border-y border-line bg-paper/90 backdrop-blur-md">
        <Container>
          <ul className="flex gap-1 overflow-x-auto py-2">
            {skillGroups.map((g) => (
              <li key={g.id} className="shrink-0">
                <a
                  href={`#${g.id}`}
                  className="flex min-h-10 items-center gap-2 rounded-full px-4 text-[15px] text-body transition-colors hover:bg-mist hover:text-ink"
                >
                  {g.title}
                  <span className="rounded-full bg-mist px-2 text-xs tabular-nums text-muted">{g.skills.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <Container className="flex flex-col pb-24">
        {skillGroups.map((g) => (
          <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="grid scroll-mt-36 gap-8 border-b border-line py-16 last:border-b-0 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-40 lg:self-start">
              <h2 id={`${g.id}-title`} className="text-[28px] leading-tight font-semibold tracking-[-0.025em]">
                {g.title}
              </h2>
              <p className="mt-3 leading-relaxed text-body">{g.intro}</p>
            </div>

            <ul className="flex flex-col">
              {g.skills.map((s) => (
                <li key={s.name} className="grid gap-5 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-10">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[21px] leading-snug font-semibold tracking-[-0.015em]">{s.name}</h3>
                    <p className="text-[16.5px] leading-relaxed text-body">
                      <Tracked plain={s.plain} eng={s.eng} />
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:pt-1">
                    <p className="text-sm text-muted">Where it shows</p>
                    <ul className="flex flex-col">
                      {s.evidence.map((e) => (
                        <li key={e.href + e.label}>
                          <Link
                            href={e.href}
                            className="group flex items-baseline justify-between gap-4 border-b border-dashed border-line-strong py-2 transition-colors hover:border-accent"
                          >
                            <span className="text-[15px] font-medium text-ink group-hover:text-accent">{e.label}</span>
                            <span className="shrink-0 text-[13px] text-muted">{e.kind}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="tools-title" className="grid gap-6 rounded-[28px] bg-surface p-8 sm:p-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <h2 id="tools-title" className="text-[28px] leading-tight font-semibold tracking-[-0.025em]">
            Tools I work in
          </h2>
          <p className="text-[19px] leading-[1.7] text-body">{tools.join(", ")}.</p>
        </section>
      </Container>
    </>
  );
}
