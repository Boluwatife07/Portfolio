export type Evidence = { label: string; href: string };
export type SkillGroup = { title: string; intro: string; skills: { name: string; evidence: Evidence[] }[] };

const cs = (slug: string, label: string): Evidence => ({ label, href: `/work/${slug}` });
const pr = (slug: string, label: string): Evidence => ({ label, href: `/projects/${slug}` });
const ex = (slug: string, label: string): Evidence => ({ label, href: `/experience#${slug}` });

export const skillGroups: SkillGroup[] = [
  {
    title: "Delivery management",
    intro: "Getting work from plan to release, with the right people agreeing on the rules.",
    skills: [
      { name: "Agile and Scrum delivery", evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "Delivery process for an outsourced build"), ex("keys-community", "Sprint tracking at KEYS")] },
      { name: "Agency and vendor governance", evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "Working agreement with a Flutter agency"), ex("bright-bridge-connect", "Fixed-budget design engagement")] },
      { name: "Dependency and critical-path analysis", evidence: [cs("admin-panel-from-scope-to-backlog", "Admin panel prerequisites")] },
      { name: "Release readiness", evidence: [ex("keys-community", "Stabilisation sprint"), cs("verifying-what-phase-1-delivered", "Phase 1 verification")] },
      { name: "Roadmapping and phasing", evidence: [ex("keys-community", "Phase 1 roadmaps and scope split")] },
    ],
  },
  {
    title: "Requirements and QA",
    intro: "Specs engineers trust, and proof that what shipped matches them.",
    skills: [
      { name: "PRD writing", evidence: [cs("admin-panel-from-scope-to-backlog", "Admin panel PRD"), cs("defining-and-building-a-property-platform-mvp", "Two end-to-end PRDs")] },
      { name: "Requirements traceability", evidence: [cs("verifying-what-phase-1-delivered", "Screen-to-API mapping"), cs("one-source-of-truth-for-requirements", "Decision logs")] },
      { name: "User stories and acceptance criteria", evidence: [cs("admin-panel-from-scope-to-backlog", "Backlog from PRD")] },
      { name: "QA and UAT coordination", evidence: [ex("africa-gaming-expo", "Web and mobile QA at AGE"), cs("verifying-what-phase-1-delivered", "Verification tracker")] },
      { name: "Design and spec reconciliation", evidence: [cs("one-source-of-truth-for-requirements", "PRD versus Figma")] },
    ],
  },
  {
    title: "Technical",
    intro: "Enough engineering to ask the right questions, and sometimes to just build it.",
    skills: [
      { name: "React, Next.js and TypeScript", evidence: [pr("peng", "Peng"), pr("brightbridge", "BrightBridge platform"), pr("bandcheck", "BandCheck")] },
      { name: "REST APIs and integration", evidence: [cs("verifying-what-phase-1-delivered", "API verification"), ex("zenon", "API integration at Zenon")] },
      { name: "Git and code review workflows", evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "CODEOWNERS merge gate")] },
      { name: "Data pipelines and automation", evidence: [pr("bandcheck", "Weekly data refresh with GitHub Actions")] },
      { name: "Directing AI-assisted development", evidence: [pr("brightbridge", "11-stage AI-assisted build"), ex("keys-community", "Rules for AI-assisted Flutter work")] },
    ],
  },
  {
    title: "Commercial and stakeholders",
    intro: "Keeping partners, vendors and contracts tied to delivery.",
    skills: [
      { name: "Partnership development", evidence: [cs("securing-two-airline-partnerships", "Two airline deals, closed solo")] },
      { name: "Scope and budget negotiation", evidence: [ex("bright-bridge-connect", "Fixed-budget design engagement")] },
      { name: "Contract coordination", evidence: [ex("bright-bridge-connect", "Commercial agreement review"), ex("keys-community", "Agency contract changes")] },
      { name: "Executive communication", evidence: [ex("africa-gaming-expo", "Keynote deck for a state regulator")] },
    ],
  },
];
