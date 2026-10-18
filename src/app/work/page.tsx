import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { Container, SectionHeading } from "@/components/ui";
import { WorkFilter } from "@/components/work-filter";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in technical delivery, requirements, QA and partnerships.",
};

export default function WorkPage() {
  return (
    <Container className="flex flex-col gap-12 pt-14 pb-24 sm:pt-20">
      <SectionHeading as="h1" eyebrow="Work" title="Case studies">
        What the problem was, what I did about it, the decisions behind it and what changed. Client details are kept
        confidential.
      </SectionHeading>
      <WorkFilter items={caseStudies} />
    </Container>
  );
}
