export type Capability = "Delivery" | "Requirements" | "QA" | "Vendor management" | "Technical" | "Commercial" | "Product";

export type CaseStudy = {
  slug: string;
  id: string;
  org: string;
  title: string;
  summary: string;
  summaryTech: string;
  capabilities: Capability[];
  glance: { role: string; timeline: string; team: string; tools: string[]; status: string };
  context: string;
  problem: string[];
  myRole: string;
  actions: { title: string; text: string }[];
  decisions: { title: string; why: string }[];
  results: string[];
  artifacts: { title: string; text: string; items?: string[] }[];
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "delivery-process-for-an-outsourced-mobile-build",
    id: "CS-01",
    org: "KEYS Community",
    title: "Setting up the delivery process for an outsourced mobile build",
    summary:
      "Two teams, one product and no shared rules. I got an in-house team and an outside agency agreeing on how work is planned, checked and accepted, before any code was written.",
    summaryTech:
      "Negotiated the development process for an in-house plus agency Flutter build: two-week sprints, written scope, a shared Definition of Done, CODEOWNERS merge gates and per-feature ownership.",
    capabilities: ["Delivery", "Vendor management", "Technical"],
    glance: {
      role: "Technical Project Manager (lead on the agreement)",
      timeline: "Jul – Oct 2026",
      team: "Founder, in-house engineers, an external Flutter agency, legal counsel",
      tools: ["Google Docs", "Jira", "GitHub", "Figma"],
      status: "Agreement near final, pending agency sign-off",
    },
    context:
      "KEYS is a UK residential community platform on iOS and Android. The mobile app was being rebuilt in Flutter, with part of the work outsourced to an external agency while an in-house team kept building other parts.",
    problem: [
      "Two teams were about to work on the same product with no agreed way of working. Nobody had written down how work would be committed, reviewed, accepted or paid for.",
      "Without that, the most likely outcome was duplicated foundations, code merged without review, and disputes about whether a feature was actually done.",
    ],
    myRole:
      "I prepared the agency's onboarding pack, then led the section-by-section negotiation of the software development process and communication strategy with the founder, the in-house team and the agency.",
    actions: [
      { title: "Prepared the onboarding pack", text: "Project brief, MVP strategy, feature delivery and release strategy, and a CI/CD pipeline specification, so the agency started with the same picture as the in-house team." },
      { title: "Set the delivery rhythm", text: "Fixed two-week sprints, a call cadence, and committed scope agreed in writing within one working day of planning." },
      { title: "Defined what 'done' means", text: "A shared Definition of Done for both teams, including accessibility (WCAG 2.2 AA) and a minimum test-coverage bar, with integration shown on the real backend, not mocks." },
      { title: "Put review gates in the repository", text: "No self-approval, a tech-lead merge gate enforced with GitHub CODEOWNERS, and the agency working inside the company-owned repository." },
      { title: "Split ownership by feature", text: "Mapped every feature to an owning team across the delivery phases, so each team knew exactly what it was building." },
    ],
    decisions: [
      { title: "Keep shared foundations and authentication in-house", why: "Reviewing an earlier design-system proposal, I flagged that the biggest risk was the lack of agreed architecture between the two teams. Keeping the shared base in one team removes that risk at the source." },
      { title: "Accept work through a live demo", why: "A working demo on the real backend is the clearest proof that work is done, and it keeps both teams honest without extra paperwork." },
    ],
    results: [
      "Both teams and the founder have one written process covering scope, review, acceptance and ownership.",
      "The top delivery risk, no joint architecture, was addressed before any code was written.",
      "A newly onboarded Flutter lead was given a week-one goal of turning the agreement into day-to-day standards.",
    ],
    artifacts: [
      { title: "Sprint and acceptance cycle", text: "How a feature moves from commitment to payment.", items: ["Sprint planning", "Written scope (1 working day)", "Build", "Code review via CODEOWNERS", "Demo on real backend", "Acceptance"] },
      { title: "Definition of Done (recreated)", text: "The checks every feature must pass, for both teams.", items: ["Acceptance criteria met", "Reviewed by tech lead, no self-approval", "Integrated with the real backend", "Accessibility: WCAG 2.2 AA", "Minimum automated test coverage", "Demo recorded and accepted"] },
    ],
    learned:
      "Process documents only work when each rule answers a risk people can already see. Tying every section to a concrete failure made the negotiation faster.",
  },
  {
    slug: "verifying-what-phase-1-delivered",
    id: "CS-02",
    org: "KEYS Community",
    title: "Verifying what Phase 1 actually delivered",
    summary:
      "Nobody could say how finished the backend really was. I turned every requirement into a yes-or-no check, so leadership could see exactly what was done, half done and missing.",
    summaryTech:
      "Built a requirement-level verification tracker for Phase 1: every PRD line as a testable check with status, evidence and priority, plus a screen-to-API map for handoff.",
    capabilities: ["QA", "Requirements", "Technical"],
    glance: {
      role: "Technical Project Manager (owner)",
      timeline: "Sep – Oct 2026",
      team: "Founder, backend engineers, design lead",
      tools: ["Google Sheets", "Postman", "Figma", "Jira"],
      status: "In progress",
    },
    context:
      "Before the next phase of frontend work, the team needed to know how complete the backend really was, and nobody could say with confidence.",
    problem: [
      "Status was reported feature by feature, in broad terms like 'mostly done'. The product requirement documents had drifted from the designs, so they could not be used as the checklist either.",
    ],
    myRole:
      "I designed the verification approach, built the tracker, and rebuilt the requirements for the first feature from the approved designs.",
    actions: [
      { title: "Turned every PRD into checkable requirements", text: "Broke each Phase 1 document into individual, testable statements, grouped by feature area." },
      { title: "Gave each requirement a status and evidence", text: "Confirmed, Partial, Missing, Cannot verify or Not started, with an evidence column and a P1–P3 priority, and an automatic summary on top." },
      { title: "Rebuilt requirements from the designs", text: "For resident onboarding, I rebuilt the requirements from the 'Ready for dev' designs and approved decisions, using the old PRD only for comparison." },
      { title: "Mapped screens to APIs", text: "Linked each onboarding screen to the backend endpoints it needs, with a verification plan of API checks and test cases." },
    ],
    decisions: [
      { title: "Designs and approved decisions as the source of truth", why: "The documents were out of date; the designs reflected what the business had actually agreed. Verifying against the wrong source would have produced false confidence." },
      { title: "One sheet per feature, merged into one workbook", why: "Engineers could work feature by feature while leadership still saw the whole picture in one place." },
    ],
    results: [
      "Leadership got a requirement-level picture of delivered, partial and missing backend work for the first time.",
      "The tracker surfaced specific gaps between what was specified and what the backend actually did, each logged with evidence.",
      "Resident onboarding now has an engineering handoff pack: requirements, design-versus-PRD decisions, screen-to-API mapping and a verification plan.",
    ],
    artifacts: [
      { title: "Status model", text: "Every requirement carries one of five statuses.", items: ["Confirmed", "Partial", "Missing", "Cannot verify", "Not started"] },
      { title: "Handoff pack contents", text: "What an engineer receives for a feature.", items: ["Approved requirements with IDs", "Design-versus-PRD decision log", "Screen-to-API map", "API checks and test cases", "Open items and design fixes"] },
    ],
    learned:
      "Asking 'is it done?' gets opinions. Asking 'does requirement 4.2 pass?' gets facts. Breaking work down far enough changes the conversation.",
  },
  {
    slug: "one-source-of-truth-for-requirements",
    id: "CS-03",
    org: "KEYS Community",
    title: "Creating one source of truth for product requirements",
    summary:
      "The documents said one thing and the designs said another. I settled every disagreement with the product owner and turned the documents into one set the team trusts.",
    summaryTech:
      "Diffed each PRD against Figma, logged a decision per discrepancy, and rewrote the Phase 1 PRDs into one versioned format with user stories and acceptance criteria.",
    capabilities: ["Requirements", "Product"],
    glance: {
      role: "Technical Project Manager (owner)",
      timeline: "Jul – Oct 2026",
      team: "Founder, design lead, PRD authors, engineers",
      tools: ["Figma", "Word", "Google Docs", "Python"],
      status: "Largely complete",
    },
    context:
      "KEYS had requirement documents written by several people over time. Many no longer matched the Figma designs, and engineers, both in-house and outsourced, were unsure which to follow.",
    problem: [
      "When a document and a design disagree, an engineer either guesses or stops and asks. Both slow delivery, and guesses become bugs.",
      "Documents were also structured differently from author to author, which made them hard to review or compare.",
    ],
    myRole: "I ran the reconciliation process, gathered decisions from the product owner, and owned the standard format.",
    actions: [
      { title: "Compared each PRD with its designs", text: "Extracted the design details, listed every discrepancy, and put each one to the product owner for a decision." },
      { title: "Logged every decision with an ID", text: "Each discrepancy got a decision record stating which source wins and why." },
      { title: "Created a standard document format", text: "Cover page, document table, numbered sections, and user stories with acceptance criteria at the end, with tracked changes on every edit." },
      { title: "Flagged contradictions across documents", text: "Found rules and names that disagreed from one feature to another, and recorded the final ruling for each." },
    ],
    decisions: [
      { title: "Decide every discrepancy explicitly", why: "A silent fix in one document creates a new contradiction somewhere else. A logged decision can be found and reused." },
      { title: "Tracked changes, never silent rewrites", why: "Authors and reviewers could see exactly what changed and challenge it, which kept trust in the documents." },
    ],
    results: [
      "An 'Approved PRDs' folder now holds the documents engineers should build from, all in one format.",
      "Decision logs make it clear why each requirement reads the way it does.",
      "The same format was applied to later Phase 2 documents.",
    ],
    artifacts: [
      { title: "Reconciliation process", text: "Three steps for each feature.", items: ["Audit: PRD versus design", "Decide: product owner rules on each discrepancy", "Publish: reconciled PRD with user stories"] },
      { title: "Standard PRD structure", text: "Every approved document follows this order.", items: ["Cover page and version table", "Overview and scope", "Numbered functional sections", "Business rules", "User stories and acceptance criteria"] },
    ],
    learned: "Documentation is a product. If engineers do not trust it, they stop reading it.",
  },
  {
    slug: "admin-panel-from-scope-to-backlog",
    id: "CS-04",
    org: "KEYS Community",
    title: "Turning admin panel scope into an engineering backlog",
    summary:
      "The team wanted to start building staff tools straight away. I wrote the spec and showed what had to exist first, so nobody built on sand.",
    summaryTech:
      "Took the admin panel from scope document to PRD v3.0 and a Jira backlog that front-loads staff auth, role-based access, 2FA and audit logging before feature tickets.",
    capabilities: ["Requirements", "Delivery", "Technical"],
    glance: {
      role: "Technical Project Manager (owner)",
      timeline: "Aug – Oct 2026",
      team: "Founder, backend engineers",
      tools: ["Google Docs", "Word", "Jira (CSV import)"],
      status: "PRD complete; build pending",
    },
    context: "The platform's staff needed internal tools to manage communities, users and content, but nothing had been specified.",
    problem: [
      "There was pressure to start building the admin frontend straight away, but there were no designs and no secure staff login to build on.",
    ],
    myRole: "I wrote the PRD, ran the decisions with the founder, and converted it into the engineering backlog.",
    actions: [
      { title: "From scope to PRD", text: "Moved the functional scope through several versions to a locked v3.0, splitting it into Phase 1 and Phase 2 parts." },
      { title: "Locked the key decisions", text: "Recorded each ruling on scope, roles and permissions, and what was out of scope." },
      { title: "Built the backlog", text: "Merged the PRD's user stories with the foundation tickets nobody had listed: staff accounts, role-based access, two-factor login and activity logging." },
      { title: "Kept tickets small", text: "Every ticket covers one responsibility, so it can be estimated, built and tested on its own." },
    ],
    decisions: [
      { title: "Do not start the admin frontend yet", why: "With no design coverage and no authenticated staff shell, frontend work would be thrown away. The only useful start was staff login, two-factor and the app shell." },
    ],
    results: [
      "Engineering received a backlog that starts with its true prerequisites instead of discovering them mid-sprint.",
      "The PRD is versioned and its decisions are written down, so later changes can be traced.",
    ],
    artifacts: [
      { title: "Hidden prerequisites surfaced", text: "Foundation tickets added ahead of feature work.", items: ["Staff accounts", "Role-based access control", "Two-factor authentication", "Activity logging"] },
    ],
    learned: "The most useful thing a backlog can do is show what has to exist before the first visible feature.",
  },
  {
    slug: "defining-and-building-a-property-platform-mvp",
    id: "CS-05",
    org: "Bright Bridge Connect",
    title: "Prototyping a multi-party platform so design could move forward",
    summary:
      "Designers needed to see how every user moves through a deal. I wrote the requirements and built a clickable prototype they could design from.",
    summaryTech:
      "Wrote two end-to-end PRDs, then built a staged Next.js and TypeScript prototype with AI assistance, type-checked and buildable at every stage, as the design reference.",
    capabilities: ["Product", "Technical", "Requirements"],
    glance: {
      role: "Technical Project Manager (requirements and prototype)",
      timeline: "Jul – Oct 2026",
      team: "Founder, a product designer",
      tools: ["Next.js", "TypeScript", "Airtable", "Figma", "Claude (AI-assisted build)"],
      status: "Internal prototype used to guide design (not public)",
    },
    context:
      "Bright Bridge Connect is a pre-launch UK platform connecting care providers with housing. Every deal involves several parties and many steps, and the product had to be designed before it could be built.",
    problem: [
      "The requirements were long and detailed. The designers needed to understand how each type of user moves through a deal before they could design the screens, and static wireframes were not showing how the steps connect.",
    ],
    myRole:
      "I wrote the product requirements, then built a clickable prototype from them with AI-assisted development, so the design team had a working reference to design from.",
    actions: [
      { title: "Wrote the requirements", text: "Two end-to-end PRDs, one per type of user, including notification, activity timeline and escalation catalogues." },
      { title: "Built a clickable prototype", text: "Covered the full journey for every user role, so anyone could click through a deal from start to finish." },
      { title: "Built it in stages", text: "Planned the prototype as a sequence of stages, each type-checked and buildable, so it always worked and could be reviewed early." },
      { title: "Used it to drive design reviews", text: "Ran design reviews against the prototype rather than against documents, which produced a concrete list of fixes." },
      { title: "Set up operations", text: "An Airtable register with linked tables, automations and prefilled partner forms." },
    ],
    decisions: [
      { title: "Prototype before high-fidelity design", why: "Finding a gap in the requirements is far cheaper in a rough clickable prototype than in polished screens." },
      { title: "One working stage at a time", why: "The designer could review early stages while later ones were still being built, so design and requirements moved together." },
    ],
    results: [
      "The design team had a working reference for every user role before designing the screens.",
      "Gaps in the requirements surfaced and were fixed before high-fidelity design started.",
      "Design reviews produced specific, actionable fixes instead of debates about wireframes.",
    ],
    artifacts: [
      { title: "How I built the prototype", text: "The loop I repeated for each stage.", items: ["Requirement from the PRD", "Plan the stage", "Build it with AI assistance", "Type-check and build", "Review with design", "Next stage"] },
    ],
    learned: "Building the prototype yourself is the fastest way to find the gaps in your own requirements.",
  },
  {
    slug: "securing-two-airline-partnerships",
    id: "CS-06",
    org: "Africa Gaming Expo",
    title: "Securing two airline partnerships",
    summary:
      "Took two official airline partnerships from a cold first message to a signed deal, on my own: Kenya Airways for AGE 2026 and Ethiopian Airlines for AGE 2027.",
    summaryTech:
      "Replaced paper letters with LinkedIn, email and airline MICE channels, closed Kenya Airways and Ethiopian Airlines solo, then ran activation: travel code, passes and entitlements.",
    capabilities: ["Commercial", "Delivery"],
    glance: {
      role: "Technical Project Coordinator (sole owner, initiation to close)",
      timeline: "2025 – 2026",
      team: "Just me, from first contact to close",
      tools: ["Email", "LinkedIn", "Airline MICE portals"],
      status: "Kenya Airways: AGE 2026 · Ethiopian Airlines: AGE 2027",
    },
    context:
      "Africa Gaming Expo is a gaming and fintech industry event with delegates travelling from across Africa and beyond. It had no existing airline relationships.",
    problem: ["Airline outreach relied on paper letters, which were slow and rarely reached the right person."],
    myRole:
      "I owned both deals end to end, alone: finding the right contacts, cold outreach, the proposal, negotiating and closing, then running the activation.",
    actions: [
      { title: "Moved outreach to digital channels", text: "Replaced paper letters with LinkedIn, email and airline MICE (events) applications, and found the right people in each airline's events team." },
      { title: "Closed Kenya Airways for AGE 2026", text: "Took the deal from first cold message to signed Official Airline Partner, the event's first airline partnership." },
      { title: "Ran the activation", text: "Set up the delegate travel code, arranged representative passes and clarified what each entitlement covered." },
      { title: "Closed Ethiopian Airlines for AGE 2027", text: "Repeated the approach from scratch and closed Ethiopian Airlines as Official Airline Partner for the next edition." },
    ],
    decisions: [
      { title: "Go through the airlines' own events channels", why: "MICE teams exist to support events. Reaching them directly was faster than general correspondence." },
    ],
    results: [
      "Two official airline partnerships for consecutive editions of the event, both originated and closed by me.",
      "A repeatable digital outreach approach for future partners.",
    ],
    artifacts: [
      { title: "Partnership path", text: "From first contact to delegates travelling.", items: ["Identify the airline's events team", "Cold outreach", "Proposal and agreement", "Delegate travel code", "Passes and entitlements"] },
    ],
    learned: "Most of a partnership's value comes after the yes: activation is where delegates actually feel it.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
