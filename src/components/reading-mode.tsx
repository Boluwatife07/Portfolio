"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export type Mode = "plain" | "eng";
type Ctx = { mode: Mode; setMode: (m: Mode) => void; generation: number };

const ModeContext = createContext<Ctx>({ mode: "plain", setMode: () => {}, generation: 0 });
const KEY = "reading-mode";

export function ReadingModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("plain");
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "eng" || saved === "plain") setModeState(saved);
    } catch {}
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState((prev) => {
      if (prev !== m) setGeneration((g) => g + 1);
      return m;
    });
    try {
      localStorage.setItem(KEY, m);
    } catch {}
  }, []);

  const value = useMemo(() => ({ mode, setMode, generation }), [mode, setMode, generation]);
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export const useReadingMode = () => useContext(ModeContext);

/* ---------- Toggle ---------- */

export function ModeToggle({ size = "lg", className = "" }: { size?: "lg" | "sm"; className?: string }) {
  const { mode, setMode } = useReadingMode();
  const opts: { id: Mode; label: string; short: string }[] = [
    { id: "plain", label: "a hiring manager", short: "Hiring manager" },
    { id: "eng", label: "an engineer", short: "Engineer" },
  ];
  const lg = size === "lg";
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <span id={`rm-label-${size}`} className={lg ? "text-[17px] text-body" : "sr-only"}>
        {lg ? "Read this as" : "Reading as"}
      </span>
      <div
        role="radiogroup"
        aria-labelledby={`rm-label-${size}`}
        className={`relative inline-grid grid-cols-2 rounded-full bg-mist p-1 ${lg ? "" : "text-sm"}`}
      >
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-ink shadow-[0_6px_16px_-8px_rgba(20,24,38,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.25,1)]"
          style={{ transform: mode === "eng" ? "translateX(100%)" : "translateX(0)" }}
        />
        {opts.map((o) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={mode === o.id}
            onClick={() => setMode(o.id)}
            className={`relative z-10 rounded-full font-semibold transition-colors duration-300 ${
              lg ? "min-h-11 px-5 text-[15px]" : "min-h-9 px-3.5"
            } ${mode === o.id ? "text-white" : "text-body hover:text-ink"}`}
          >
            {lg ? o.label : o.short}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Tracked text: rewrites itself like tracked changes ---------- */

type Tok = { t: string; k: "same" | "del" | "ins" };

function diff(a: string[], b: string[]): Tok[] {
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i].toLowerCase() === b[j].toLowerCase() ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: Tok[] = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i].toLowerCase() === b[j].toLowerCase()) { out.push({ t: b[j], k: "same" }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) out.push({ t: a[i++], k: "del" });
    else out.push({ t: b[j++], k: "ins" });
  }
  while (i < n) out.push({ t: a[i++], k: "del" });
  while (j < m) out.push({ t: b[j++], k: "ins" });
  return out;
}

export function Tracked({ plain, eng, className = "" }: { plain: string; eng: string; className?: string }) {
  const { mode, generation } = useReadingMode();
  const current = mode === "eng" ? eng : plain;
  const [anim, setAnim] = useState<{ toks: Tok[]; phase: "out" | "in" } | null>(null);
  const prevRef = useRef(current);
  const firstGen = useRef(generation);

  useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = current;
    if (generation === firstGen.current || prev === current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnim(null);
      return;
    }
    const toks = diff(prev.split(" "), current.split(" "));
    setAnim({ toks, phase: "out" });
    const t1 = setTimeout(() => setAnim({ toks, phase: "in" }), 620);
    const t2 = setTimeout(() => setAnim(null), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [current, generation]);

  let body: React.ReactNode = current;
  if (anim) {
    const shown = anim.toks.filter((t) => (anim.phase === "out" ? t.k !== "ins" : t.k !== "del"));
    body = shown.map((tok, i) => (
      <span key={`${anim.phase}-${i}`}>
        {tok.k === "same" ? (
          tok.t
        ) : (
          <span className={tok.k === "del" ? "tc-del" : "tc-ins"} style={{ ["--d" as string]: `${Math.min(i, 40) * 14}ms` }}>
            {tok.t}
          </span>
        )}
        {i < shown.length - 1 ? " " : ""}
      </span>
    ));
  }

  return (
    <span className={`grid ${className}`}>
      <span className="sr-only">{current}</span>
      <span aria-hidden="true" className="invisible [grid-area:1/1]">{plain}</span>
      <span aria-hidden="true" className="invisible [grid-area:1/1]">{eng}</span>
      <span aria-hidden="true" className="[grid-area:1/1]">{body}</span>
    </span>
  );
}

/* Plain swap for content that should change but not animate word by word */
export function ByMode({ plain, eng }: { plain: React.ReactNode; eng: React.ReactNode }) {
  const { mode } = useReadingMode();
  return <>{mode === "eng" ? eng : plain}</>;
}
