export type Evidence = { label: string; href: string; kind: "Case study" | "Project" | "Experience" };
export type Skill = { name: string; plain: string; eng: string; evidence: Evidence[] };
export type SkillGroup = { id: string; title: string; intro: string; skills: Skill[] };

const cs = (slug: string, label: string): Evidence => ({ label, href: `/work/${slug}`, kind: "Case study" });
const pr = (slug: string, label: string): Evidence => ({ label, href: `/projects/${slug}`, kind: "Project" });
const ex = (slug: string, label: string): Evidence => ({ label, href: `/experience#${slug}`, kind: "Experience" });

export const skillGroups: SkillGroup[] = [
  {
    id: "delivery",
    title: "Delivery management",
    intro: "Getting work from plan to release, with everyone agreeing on the rules.",
    skills: [
      {
        name: "Agile and Scrum delivery",
        plain: "I run work in short, predictable cycles, so everyone knows what is coming and when.",
        eng: "Two-week sprints, written committed scope and reviews against a shared Definition of Done. PSM I certified.",
        evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "Delivery process for an outsourced build"), ex("keys-community", "Sprint tracking at KEYS")],
      },
      {
        name: "Agency and vendor governance",
        plain: "When part of the work is outsourced, I set the rules both sides work by, so quality does not depend on who built it.",
        eng: "Shared Definition of Done, CODEOWNERS review gates, demo-based acceptance and per-feature ownership across in-house and agency teams.",
        evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "Working agreement with a Flutter agency"), ex("bright-bridge-connect", "Fixed-budget design engagement")],
      },
      {
        name: "Dependency and critical-path analysis",
        plain: "I spot what has to happen first, so nobody starts work that will be thrown away.",
        eng: "Prerequisites such as auth, roles and logging mapped ahead of feature tickets, with the backlog sequenced by what blocks what.",
        evidence: [cs("admin-panel-from-scope-to-backlog", "Admin panel prerequisites")],
      },
      {
        name: "Release readiness",
        plain: "Nothing ships until it has been checked against what was agreed.",
        eng: "Readiness criteria, QA staging, a merge freeze before release and requirement-level verification.",
        evidence: [ex("keys-community", "Stabilisation sprint"), cs("verifying-what-phase-1-delivered", "Phase 1 verification")],
      },
      {
        name: "Roadmapping and phasing",
        plain: "Big products broken into phases a team can actually deliver.",
        eng: "Phase 1 and Phase 2 split at sub-feature level, with roadmaps tied to the scope each team commits to.",
        evidence: [ex("keys-community", "Phase 1 roadmaps and scope split")],
      },
    ],
  },
  {
    id: "requirements",
    title: "Requirements and QA",
    intro: "Plans that engineers trust, and proof that what shipped matches them.",
    skills: [
      {
        name: "PRD writing",
        plain: "Clear written plans that designers, engineers and the business all agree on.",
        eng: "Versioned end-to-end PRDs with business rules, notification catalogues, user stories and acceptance criteria.",
        evidence: [cs("admin-panel-from-scope-to-backlog", "Admin panel PRD"), cs("defining-and-building-a-property-platform-mvp", "Two end-to-end PRDs")],
      },
      {
        name: "Requirements traceability",
        plain: "Every promise can be followed from the plan, to the design, to the test.",
        eng: "Requirement IDs linking PRD lines, design frames, API endpoints and test cases.",
        evidence: [cs("verifying-what-phase-1-delivered", "Screen-to-API mapping"), cs("one-source-of-truth-for-requirements", "Decision logs")],
      },
      {
        name: "User stories and acceptance criteria",
        plain: "Work described so clearly that everyone knows when it is done.",
        eng: "Small, single-responsibility tickets with Given/When/Then criteria, delivered as Jira imports.",
        evidence: [cs("admin-panel-from-scope-to-backlog", "Backlog from PRD")],
      },
      {
        name: "QA and UAT coordination",
        plain: "I organise testing so problems are found before users find them.",
        eng: "Test cases from acceptance criteria, bug audits, and UAT coordination across web and mobile.",
        evidence: [ex("africa-gaming-expo", "Web and mobile QA at AGE"), cs("verifying-what-phase-1-delivered", "Verification tracker")],
      },
      {
        name: "Design and spec reconciliation",
        plain: "When the documents and the designs disagree, I get a decision and make them match.",
        eng: "PRD-versus-Figma comparisons with one logged decision per discrepancy.",
        evidence: [cs("one-source-of-truth-for-requirements", "PRDs versus designs")],
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    intro: "Enough engineering to ask the right questions, and sometimes to just build it.",
    skills: [
      {
        name: "React, Next.js and TypeScript",
        plain: "I built web products as a frontend developer before I managed them.",
        eng: "Production frontends in React and Next.js, with TypeScript, Tailwind CSS and React Query.",
        evidence: [pr("peng", "Peng"), pr("psnl-website", "PSNL website"), pr("bandcheck", "BandCheck")],
      },
      {
        name: "APIs and integration",
        plain: "I understand how the screens talk to the systems behind them.",
        eng: "Reading API contracts, mapping screens to endpoints, and checking responses against requirements.",
        evidence: [cs("verifying-what-phase-1-delivered", "API verification"), ex("zenon", "API integration at Zenon")],
      },
      {
        name: "Code review workflows",
        plain: "I set up how code is checked before it reaches users.",
        eng: "Protected branches, CODEOWNERS merge gates and no self-approval.",
        evidence: [cs("delivery-process-for-an-outsourced-mobile-build", "Review gates")],
      },
      {
        name: "Automation",
        plain: "I automate the repetitive parts, and keep a person checking the results.",
        eng: "Scheduled GitHub Actions that fetch, parse and diff source data, with human review of flagged changes.",
        evidence: [pr("bandcheck", "BandCheck weekly data refresh")],
      },
      {
        name: "AI-assisted development",
        plain: "I use AI tools to build faster, with my own checks on what they produce.",
        eng: "Specify, generate, type-check and review in stages, plus written rules for AI-assisted Flutter work.",
        evidence: [pr("age-dp-generator", "AGE display-picture generator"), ex("keys-community", "Rules for AI-assisted work")],
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial and stakeholders",
    intro: "Partners, vendors and contracts kept tied to delivery.",
    skills: [
      {
        name: "Partnership development",
        plain: "I find the right people, start the conversation and close the deal.",
        eng: "Cold outreach through LinkedIn, email and airline MICE channels, through to signed partnership and activation.",
        evidence: [cs("securing-two-airline-partnerships", "Two airline deals, closed solo")],
      },
      {
        name: "Scope and budget negotiation",
        plain: "I keep work inside the budget without losing what matters.",
        eng: "Re-scoped a design engagement to a fixed budget, with staged payment and a signed statement of work.",
        evidence: [ex("bright-bridge-connect", "Fixed-budget design engagement")],
      },
      {
        name: "Contract coordination",
        plain: "I make sure contracts match how the work will actually run.",
        eng: "Redlines, tracked changes and briefs to legal counsel on services agreements and statements of work.",
        evidence: [ex("bright-bridge-connect", "Commercial agreement review"), ex("keys-community", "Agency contract changes")],
      },
      {
        name: "Executive communication",
        plain: "I turn complex topics into clear material for senior audiences.",
        eng: "Keynote decks and decision documents for founders, executives and regulators.",
        evidence: [ex("africa-gaming-expo", "Keynote deck for a state regulator")],
      },
    ],
  },
];
