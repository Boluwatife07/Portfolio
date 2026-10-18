import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-8 py-24 sm:py-32">
      <div className="w-full max-w-md rotate-[-1.5deg] rounded-xl border border-line bg-paper p-5 shadow-[0_12px_28px_rgba(14,17,22,0.10)]">
        <div className="flex items-center justify-between font-mono text-xs text-muted">
          <span>BUG-404</span>
          <span className="rounded bg-surface px-1.5 py-0.5">WON&apos;T FIX</span>
        </div>
        <p className="mt-3 text-lg font-semibold">Page not found</p>
        <p className="mt-1 text-sm text-body">Steps to reproduce: follow a link that doesn&apos;t exist. Expected: a page. Actual: this ticket.</p>
      </div>
      <h1 className="text-[clamp(36px,5vw,56px)] leading-tight font-bold tracking-[-0.03em]">This page isn&apos;t in scope.</h1>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/work" variant="secondary">See my work</ButtonLink>
      </div>
    </Container>
  );
}
