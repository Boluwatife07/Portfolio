import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import type { Project } from "@/content/projects";
import { Arrow } from "./ui";

export function CaseCard({ cs, headingLevel = 3 }: { cs: CaseStudy; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="group relative flex min-h-[260px] flex-col gap-4 rounded-2xl bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#eef0f4] hover:shadow-[0_18px_40px_-20px_rgba(14,17,22,0.25)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4 font-mono text-[13px] text-muted">
        <span className="rounded bg-paper px-2 py-0.5 text-ink transition-colors group-hover:bg-accent group-hover:text-white">{cs.id}</span>
        <span>{cs.org}</span>
      </div>
      <H className="text-[clamp(22px,2.2vw,26px)] leading-[1.2] font-bold tracking-[-0.015em] text-ink">{cs.title}</H>
      <p className="flex-1 text-base leading-relaxed text-body">{cs.summary}</p>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-muted">{cs.capabilities.join(" · ")}</span>
        <span className="text-sm font-semibold text-accent">
          Read <Arrow />
        </span>
      </div>
    </Link>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const cover = p.images[0];
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(14,17,22,0.25)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center">
            <span className="font-mono text-sm text-muted">{"// screenshots coming soon"}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>{p.context}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="text-xl font-bold tracking-[-0.01em]">{p.name}</h3>
        <p className="flex-1 text-[15px] leading-relaxed text-body">{p.tagline}</p>
        <p className="pt-2 text-sm text-muted">{p.stack.slice(0, 4).join(" · ")}</p>
      </div>
    </Link>
  );
}
