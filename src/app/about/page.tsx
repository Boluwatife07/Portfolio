import type { Metadata } from "next";
import Image from "next/image";
import { credentials, education, site, tools } from "@/content/site";
import { ButtonLink, Container, Eyebrow, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "About Dorcas Adeboye, Technical Project Manager with a frontend engineering background.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="grid items-start gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-[clamp(38px,5vw,60px)] leading-[1.05] font-bold tracking-[-0.035em]">
            I started by building the interfaces. Now I make sure the whole thing ships.
          </h1>
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-[1.7] text-body">
            <p>
              I studied Computer Science at Lagos State University and spent my first years as a frontend developer,
              building products like a wedding planning platform and a school management system with React and Next.js.
            </p>
            <p>
              Working inside engineering teams showed me where projects really go wrong: unclear requirements, teams
              with different ideas of &ldquo;done&rdquo;, and nobody checking what shipped against what was agreed. That is the
              work I do now as a Technical Project Manager.
            </p>
            <p>
              Today I run delivery for UK product teams, including the working rules between in-house engineers and
              external agencies, and I coordinate technical and commercial projects for Africa Gaming Expo. I still
              build prototypes when it is the fastest way to answer a question.
            </p>
            <p>Outside the day job I build small products for problems I see around me, like checking your electricity supply band in Nigeria.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href={site.cv} variant="secondary" download prefetch={false}>
              Download résumé
            </ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[380px]">
          <Image src="/images/dorcas.webp" alt="Portrait of Dorcas Adeboye" width={800} height={1000} priority sizes="(min-width: 1024px) 380px, 90vw" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <p className="mt-3 font-mono text-xs text-muted">{site.location}</p>
        </div>
      </Container>

      <section className="border-t border-line bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Eyebrow>Certifications</Eyebrow>
            {credentials.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold">{c.title}</h2>
                  <span className="font-mono text-sm text-muted">{c.date}</span>
                </div>
                <p className="text-body">{c.issuer}</p>
                <p className="mt-2 text-sm text-muted">{c.note}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <Eyebrow>Education</Eyebrow>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{education.degree}</h2>
                <span className="font-mono text-sm text-muted">{education.dates}</span>
              </div>
              <p className="text-body">{education.school}</p>
              <p className="mt-2 text-sm text-muted">{education.grade}</p>
            </div>
            <Eyebrow className="mt-6">Tools</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
