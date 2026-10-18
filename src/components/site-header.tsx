"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cx } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cx(
        "sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-colors",
        scrolled || open ? "border-line" : "border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5 text-[17px] font-bold tracking-[-0.01em]">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-[13px] font-medium text-white transition-transform duration-300 group-hover:-rotate-6"
          >
            DA
          </span>
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(
                "relative rounded-md px-3 py-2 text-[15px] transition-colors",
                isActive(item.href) ? "text-ink" : "text-body hover:text-ink",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
          <a
            href={site.cv}
            download
            className="ml-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Résumé <span aria-hidden="true">↓</span>
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cx(
                  "flex min-h-12 items-center justify-between border-b border-line text-lg",
                  isActive(item.href) ? "font-semibold text-ink" : "text-body",
                )}
              >
                {item.label}
                <span aria-hidden="true" className="text-muted">→</span>
              </Link>
            ))}
            <a
              href={site.cv}
              download
              className="mt-4 mb-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent font-semibold text-white"
            >
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
