import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactList } from "@/components/site-footer";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dorcas Adeboye.",
};

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-14 pt-14 pb-24 sm:pt-20">
      <SectionHeading as="h1" eyebrow="Contact" title="Let's talk about what you're building">
        Hiring for a Technical Project Manager, or have a project that needs untangling? Send a message, or reach me
        directly.
      </SectionHeading>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <ContactForm />
        <div className="flex flex-col gap-6 rounded-2xl bg-surface p-6 sm:p-8 [&_dl]:grid-cols-1 [&_dl]:lg:grid-cols-1 [&_dl]:sm:grid-cols-2">
          <p className="font-mono text-xs uppercase text-muted">Direct</p>
          <ContactList />
        </div>
      </div>
    </Container>
  );
}
