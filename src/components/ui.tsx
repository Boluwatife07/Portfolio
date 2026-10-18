import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("font-mono text-[13px] uppercase tracking-wide text-accent", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  as: As = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <As
        className={cx(
          "font-bold tracking-[-0.03em] text-ink",
          As === "h1" ? "text-[clamp(40px,5.2vw,64px)] leading-[1.02]" : "text-[clamp(30px,3.4vw,40px)] leading-[1.1]",
        )}
      >
        {title}
      </As>
      {children && <div className="max-w-2xl text-lg leading-relaxed text-body">{children}</div>}
    </div>
  );
}

type BtnProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "accent" | "ghost-dark" };

export function ButtonLink({ variant = "primary", className, ...props }: BtnProps) {
  const styles = {
    primary: "bg-ink text-white hover:bg-[#252a33]",
    secondary: "border border-line-strong text-ink hover:border-ink",
    accent: "bg-accent text-white hover:bg-accent-strong",
    "ghost-dark": "border border-night-line text-white hover:border-white",
  }[variant];
  return (
    <Link
      className={cx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-semibold transition-colors duration-200",
        styles,
        className,
      )}
      {...props}
    />
  );
}

export function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cx(
        "group inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-strong",
        className,
      )}
      {...props}
    />
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-paper px-2.5 py-1 text-[13px] text-body">
      {children}
    </span>
  );
}
