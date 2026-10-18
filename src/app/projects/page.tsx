import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/cards";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Websites, platforms and tools I have designed, specified or built.",
};

export default function ProjectsPage() {
  const groups = [
    { title: "Employer and client work", items: projects.filter((p) => p.kind !== "Independent") },
    { title: "Independent products", items: projects.filter((p) => p.kind === "Independent") },
  ];
  return (
    <Container className="flex flex-col gap-16 pt-14 pb-24 sm:pt-20">
      <SectionHeading as="h1" eyebrow="Projects" title="Things I have built">
        I still build. Some of these I coded by hand as a frontend developer; newer ones I specified and built with
        AI-assisted tools, and each page says which.
      </SectionHeading>
      {groups.map((g) => (
        <section key={g.title} className="flex flex-col gap-6">
          <h2 className="font-mono text-[13px] uppercase text-muted">{g.title}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}
