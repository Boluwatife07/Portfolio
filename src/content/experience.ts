export type Role = {
  slug: string;
  org: string;
  orgNote: string;
  role: string;
  type?: string;
  dates: string;
  location: string;
  summary: string;
  groups: { title: string; items: string[] }[];
  alsoFor?: { org: string; orgNote: string; items: string[] }[];
  caseStudies?: string[];
  projects?: string[];
  tools: string[];
};

export const roles: Role[] = [
  {
    slug: "keys-community",
    org: "KEYS Community",
    orgNote: "UK residential community platform on iOS and Android",
    role: "Technical Project Manager",
    dates: "Jan 2026 – Present",
    location: "London, UK · Remote",
    summary:
      "I run technical delivery for the platform's rebuild, working with a cross-functional team of about 12 across engineering, design and product, plus an external development agency.",
    groups: [
      {
        title: "Delivery and process",
        items: [
          "Tracked sprint delivery across iOS, Android and backend Jira projects, with design, API, platform and testing status per ticket.",
          "Structured a stabilisation sprint for the legacy apps: readiness criteria, QA staging and a no-merge window before release.",
          "Produced the Phase 1 roadmaps and the Phase 1 versus Phase 2 scope split used in vendor documentation.",
        ],
      },
      {
        title: "Requirements and QA",
        items: [
          "Standardised the Phase 1 requirement documents into one approved format with tracked changes.",
          "Reconciled requirements against Figma designs and logged every product decision.",
          "Built a requirement-level verification tracker for Phase 1 and an engineering handoff pack for resident onboarding.",
          "Turned changing PRDs into small, single-responsibility backend tickets delivered as Jira imports.",
        ],
      },
      {
        title: "Agency and engineering governance",
        items: [
          "Prepared the onboarding pack for an external Flutter agency and coordinated contract changes with legal counsel.",
          "Led the negotiation of the shared development process: sprint cadence, Definition of Done, review gates and feature ownership.",
          "Onboarded a new Flutter lead and set the week-one goals for consolidating standards, testing and approvals.",
        ],
      },
      {
        title: "Technical decisions",
        items: [
          "Led a cloud and tooling cost review to reduce running costs.",
          "Untangled overlapping concepts across specs so each team knew exactly what it owned.",
          "Introduced ID-linked build specifications connecting rules, acceptance criteria, PRDs and design frames.",
        ],
      },
    ],
    caseStudies: [
      "delivery-process-for-an-outsourced-mobile-build",
      "verifying-what-phase-1-delivered",
      "one-source-of-truth-for-requirements",
      "admin-panel-from-scope-to-backlog",
    ],
    tools: ["Jira", "Figma", "FigJam", "GitHub", "Postman", "Google Workspace", "Word", "Claude"],
  },
  {
    slug: "bright-bridge-connect",
    org: "Bright Bridge Connect",
    orgNote: "UK platform matching care providers with housing",
    role: "Technical Project Manager",
    dates: "Jan 2026 – Present",
    location: "London, UK · Remote",
    summary: "I define and build the platform, manage design work, and support the commercial and operational side of a pre-launch business.",
    groups: [
      {
        title: "Product and build",
        items: [
          "Wrote end-to-end PRDs for care providers and property partners.",
          "Built a clickable prototype of every user journey so the design team could design from a working reference.",
          "Wrote the admin panel specification and design and build checklists.",
        ],
      },
      {
        title: "Design management",
        items: [
          "Wrote design briefs and ran a wireframe review that produced a clear list of fixes.",
          "Turned a PRD into a requirements tracker the designer could work through.",
          "Negotiated a fixed-budget design-system engagement: reset the scope, agreed staged payment and got the statement of work signed.",
        ],
      },
      {
        title: "Operations and commercial",
        items: [
          "Set up an Airtable operations register with linked tables, automations and partner forms.",
          "Reviewed commercial agreements and flagged risks before legal review.",
          "Maintained reusable NDA and consultancy agreement templates, sent through DocuSign.",
        ],
      },
    ],
    caseStudies: ["defining-and-building-a-property-platform-mvp"],
    tools: ["Next.js", "TypeScript", "Vercel", "Airtable", "Figma", "DocuSign", "Claude"],
  },
  {
    slug: "africa-gaming-expo",
    org: "Africa Gaming Expo",
    orgNote: "Lagos-based gaming and fintech industry event (AGEAfrique)",
    role: "Technical Project Coordinator",
    type: "Freelance",
    dates: "Mar 2025 – Present",
    location: "Lagos · Remote",
    summary: "I coordinate technical projects and strategic initiatives across Africa Gaming Expo and affiliated businesses.",
    groups: [
      {
        title: "Software delivery and QA",
        items: [
          "Clarified requirements, wrote user stories and acceptance criteria, and supported backlog refinement between engineering and design.",
          "Coordinated QA and UAT across web and mobile products, including a bug audit of the website and registration portals.",
          "Documented operational pain points with recommendations, scalability and cost.",
        ],
      },
      {
        title: "Partnerships",
        items: [
          "Closed Kenya Airways as Official Airline Partner for AGE 2026, owning the deal alone from cold outreach to signature, then ran the activation.",
          "Closed Ethiopian Airlines as Official Airline Partner for AGE 2027, again from first cold outreach to close.",
          "Managed media and sponsorship partnership threads and sponsorship collateral.",
        ],
      },
      {
        title: "Programme delivery",
        items: [
          "Project-managed the AFRIPitch competition: stakeholders, timelines, communications and delivery.",
          "Supported AGE 2026 event operations, including exhibitor allocations and delegate entitlements.",
        ],
      },
      {
        title: "Builds",
        items: [
          "Designed and built the AGE 2026 attendee display-picture generator.",
          "Built an AI email-drafting system from past partnership emails to keep replies consistent.",
        ],
      },
    ],
    alsoFor: [
      { org: "Pinhole Services Nigeria Limited (PSNL)", orgNote: "Construction and engineering company", items: ["Built and maintained the corporate website."] },
      { org: "Lagos State Lotteries and Gaming Authority", orgNote: "State gaming regulator", items: ["Built the keynote presentation for the Gaming Regulators Africa Forum (GRAF) 2026."] },
    ],
    caseStudies: ["securing-two-airline-partnerships"],
    projects: ["age-dp-generator", "psnl-website"],
    tools: ["Jira", "Google Workspace", "Figma", "Next.js", "Python", "Claude"],
  },
  {
    slug: "zenon",
    org: "Zenon",
    orgNote: "Nigerian technology company behind Zenon Go (commerce, payments and logistics)",
    role: "Frontend Developer",
    dates: "Mar 2024 – Feb 2025",
    location: "Remote",
    summary: "I built and maintained the company website.",
    groups: [
      {
        title: "Frontend development",
        items: [
          "Developed and maintained the Zenon website (zenon.systems) with React, Next.js and JavaScript.",
          "Translated high-fidelity designs into responsive pages and integrated backend APIs.",
          "Worked with product managers and backend engineers to clarify requirements and deliver production-ready features.",
        ],
      },
    ],
    projects: ["zenon-website"],
    tools: ["React", "Next.js", "JavaScript", "RTK Query", "Git"],
  },
  {
    slug: "purejim",
    org: "Purejim Limited",
    orgNote: "Software company",
    role: "Frontend Developer Intern",
    dates: "Jan 2023 – Jan 2024",
    location: "Nigeria",
    summary: "I built frontend features for the company's products while studying.",
    groups: [
      {
        title: "Frontend development",
        items: [
          "Built Peng, a wedding planning platform: sign-up and onboarding, dashboard, website templates and gift registry.",
          "Built modules of EasySCH, a school management platform: dashboards, admin interfaces and student and teacher modules.",
          "Built reusable components and worked with designers and backend engineers on each release.",
        ],
      },
    ],
    projects: ["peng", "easysch"],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query"],
  },
];
