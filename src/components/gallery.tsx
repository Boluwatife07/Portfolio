"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "./ui";

type Img = { src: string; alt: string };

export function Gallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const go = useCallback((d: number) => setActive((a) => (a + d + images.length) % images.length), [images.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (zoom && !el.open) el.showModal();
    if (!zoom && el.open) el.close();
  }, [zoom]);

  if (!images.length) return null;
  const img = images[active];

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setZoom(true)}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface"
        aria-label={`Enlarge: ${img.alt}`}
      >
        <Image src={img.src} alt={img.alt} fill priority sizes="(min-width: 1200px) 1136px, 100vw" className="object-contain" />
        <span className="absolute right-3 bottom-3 rounded-md bg-ink/80 px-2.5 py-1 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          click to enlarge
        </span>
      </button>

      {images.length > 1 && (
        <div className="flex items-center gap-3">
          <div className="flex flex-1 gap-2 overflow-x-auto pb-1">
            {images.map((im, i) => (
              <button
                key={im.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${im.alt}`}
                aria-current={i === active}
                className={cx(
                  "relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border-2 transition",
                  i === active ? "border-accent" : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <Image src={im.src} alt="" fill sizes="112px" className="object-cover object-left-top" />
              </button>
            ))}
          </div>
          <span className="font-mono text-xs text-muted">
            {active + 1}/{images.length}
          </span>
        </div>
      )}
      <p className="text-sm text-muted">{img.alt}</p>

      <dialog
        ref={dialog}
        onClose={() => setZoom(false)}
        onClick={(e) => e.target === dialog.current && setZoom(false)}
        className="m-auto max-h-[92vh] w-[min(1400px,94vw)] max-w-none rounded-2xl bg-paper p-0 backdrop:bg-ink/80"
        aria-label={img.alt}
      >
        <div className="relative">
          <Image src={img.src} alt={img.alt} width={1440} height={900} className="h-auto w-full" />
          <div className="flex items-center justify-between gap-3 border-t border-line p-3">
            <span className="text-sm text-body">{img.alt}</span>
            <div className="flex gap-2">
              {images.length > 1 && (
                <>
                  <button type="button" onClick={() => go(-1)} className="min-h-10 rounded-lg border border-line px-3 hover:border-ink" aria-label="Previous image">←</button>
                  <button type="button" onClick={() => go(1)} className="min-h-10 rounded-lg border border-line px-3 hover:border-ink" aria-label="Next image">→</button>
                </>
              )}
              <button type="button" onClick={() => setZoom(false)} className="min-h-10 rounded-lg bg-ink px-4 text-white">Close</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
