"use client";

import { useMemo, useState } from "react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseCard } from "./cards";
import { cx } from "./ui";

export function WorkFilter({ items }: { items: CaseStudy[] }) {
  const orgs = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.org)))], [items]);
  const caps = useMemo(() => ["All", ...Array.from(new Set(items.flatMap((i) => i.capabilities)))], [items]);
  const [org, setOrg] = useState("All");
  const [cap, setCap] = useState("All");

  const shown = items.filter(
    (i) => (org === "All" || i.org === org) && (cap === "All" || (i.capabilities as string[]).includes(cap)),
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 rounded-2xl border border-line p-5">
        <FilterRow label="Company" options={orgs} value={org} onChange={setOrg} />
        <FilterRow label="Skill" options={caps} value={cap} onChange={setCap} />
      </div>
      <p className="font-mono text-sm text-muted" aria-live="polite">
        {shown.length} {shown.length === 1 ? "case study" : "case studies"}
      </p>
      {shown.length ? (
        <div className="grid gap-5 md:grid-cols-2">
          {shown.map((cs) => (
            <CaseCard key={cs.slug} cs={cs} headingLevel={2} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line-strong p-10 text-center">
          <p className="font-mono text-sm text-muted">{"// no matches. Try another combination."}</p>
          <button
            type="button"
            onClick={() => {
              setOrg("All");
              setCap("All");
            }}
            className="mt-4 min-h-11 rounded-lg border border-line-strong px-4 font-semibold hover:border-ink"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="mr-2 mb-2 w-full font-mono text-xs uppercase text-muted sm:mb-0 sm:w-20">{label}</legend>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={cx(
            "min-h-10 rounded-full border px-4 text-sm transition-colors",
            value === o ? "border-ink bg-ink text-white" : "border-line text-body hover:border-ink hover:text-ink",
          )}
        >
          {o}
        </button>
      ))}
    </fieldset>
  );
}
