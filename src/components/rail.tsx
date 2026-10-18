"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/content/projects";

export function ProjectRail({ items }: { items: Project[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const move = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 480;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end gap-2">
        <button type="button" onClick={() => move(-1)} aria-label="Previous projects" className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4L6 9l5 5" /></svg>
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next projects" className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4l5 5-5 5" /></svg>
        </button>
      </div>
      <ul
        ref={ref}
        className="rail -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
      >
        {items.map((p) => {
          const cover = p.images[0];
          return (
            <li key={p.slug} className="w-[min(84vw,560px)] shrink-0 snap-start">
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-mist ring-1 ring-line">
                  {cover && (
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="560px"
                      className="object-cover object-left-top transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-[22px] font-semibold tracking-[-0.015em] group-hover:text-accent">{p.name}</h3>
                  <span className="shrink-0 text-sm text-muted">{p.context}</span>
                </div>
                <p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-body">{p.tagline}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
