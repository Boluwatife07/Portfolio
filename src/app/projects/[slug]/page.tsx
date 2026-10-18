import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Gallery } from "@/components/gallery";
import { Arrow, Container, Eyebrow, Tag } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.name, description: p.tagline } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <Container className="flex flex-col gap-6 pt-10 pb-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="font-mono text-[13px] text-muted">
          <Link href="/projects" className="hover:text-ink">Projects</Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{p.name}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
          <span className="rounded bg-surface px-2 py-0.5 text-ink">{p.kind}</span>
          <span>{p.context}</span>
          <span aria-hidden="true">·</span>
          <span>{p.year}</span>
        </div>
        <h1 className="text-[clamp(36px,4.8vw,60px)] leading-[1.05] font-bold tracking-[-0.035em]">{p.name}</h1>
        <p className="max-w-3xl text-xl leading-relaxed text-body">{p.tagline}</p>
        {p.links && (
          <div className="flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line-strong px-4 font-semibold hover:border-ink">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </Container>

      <Container className="pb-6">
        {p.images.length ? (
          <Gallery images={p.images} />
        ) : (
          <div className="grid aspect-[16/7] place-items-center rounded-2xl border border-dashed border-line-strong bg-surface">
            <span className="font-mono text-sm text-muted">{"// screenshots coming soon"}</span>
          </div>
        )}
        {p.imageNote && <p className="mt-2 font-mono text-xs text-muted">{p.imageNote}</p>}
      </Container>

      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div className="flex min-w-0 flex-col gap-12">
          <section className="flex flex-col gap-3">
            <Eyebrow>The problem</Eyebrow>
            <p className="text-[17px] leading-[1.7] text-body">{p.problem}</p>
          </section>
          <section className="flex flex-col gap-4">
            <Eyebrow>What I built</Eyebrow>
            <ul className="flex flex-col gap-3">
              {p.built.map((b) => (
                <li key={b} className="flex gap-3 text-[17px] leading-relaxed text-body">
                  <span aria-hidden="true" className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded bg-accent-soft font-mono text-[11px] text-accent">+</span>
                  {b}
                </li>
              ))}
            </ul>
          </section>
          {p.mobile && (
            <section className="flex flex-col gap-4">
              <Eyebrow>On a phone</Eyebrow>
              <div className="w-[240px] overflow-hidden rounded-[28px] border-[6px] border-ink bg-ink">
                <Image src={p.mobile} alt={`${p.name} on a phone`} width={390} height={844} className="h-auto w-full rounded-[22px]" />
              </div>
            </section>
          )}
        </div>
        <aside>
          <dl className="flex flex-col gap-5 rounded-2xl border border-line p-6 lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase text-muted">At a glance</p>
            <div className="flex flex-col gap-1"><dt className="text-sm text-muted">My role</dt><dd className="text-[15px] text-ink">{p.role}</dd></div>
            <div className="flex flex-col gap-1"><dt className="text-sm text-muted">For</dt><dd className="text-[15px] text-ink">{p.context}</dd></div>
            {p.howBuilt && <div className="flex flex-col gap-1"><dt className="text-sm text-muted">How it was built</dt><dd className="text-[15px] text-ink">{p.howBuilt}</dd></div>}
            <div className="flex flex-col gap-2"><dt className="text-sm text-muted">Stack</dt><dd className="flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</dd></div>
          </dl>
        </aside>
      </Container>

      <Container className="pb-20">
        <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-3 rounded-2xl bg-ink p-8 text-white transition-colors hover:bg-[#1b2029] sm:p-10">
          <span className="font-mono text-[13px] text-night-muted">Next project</span>
          <span className="text-[clamp(24px,3vw,34px)] leading-tight font-bold tracking-[-0.02em]">{next.name} <Arrow /></span>
        </Link>
      </Container>
    </article>
  );
}
