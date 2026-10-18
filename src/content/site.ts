export const site = {
  name: "Dorcas Adeboye",
  role: "Technical Project Manager",
  location: "Works remotely with teams in the UK and Africa",
  availability: "Open to Technical Project Manager roles",
  url: "https://dorcas-adeboye.vercel.app",
  description:
    "Dorcas Adeboye is a Technical Project Manager with a frontend engineering background. She writes requirements engineers can build from, sets the process between in-house teams and agencies, and checks that what ships matches what was agreed.",
  cv: "/dorcas-adeboye-cv.pdf",
  contacts: {
    email: "adeboyedorcas67@gmail.com",
    phone: "+234 814 948 3345",
    phoneHref: "tel:+2348149483345",
    linkedin: "https://www.linkedin.com/in/dorcas-adeboye-526a7929b",
    linkedinLabel: "in/dorcas-adeboye-526a7929b",
    github: "https://github.com/Boluwatife07",
    githubLabel: "github.com/Boluwatife07",
  },
  nav: [
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const credentials = [
  { title: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", date: "Nov 2025", note: "Assessment score: 100%" },
  { title: "Certificate in IT", issuer: "British Computer Society (BCS)", date: "Dec 2025", note: "Information Systems, Computer & Network Technology, Software Development" },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Lagos State University, Ojo, Lagos",
  dates: "Aug 2021 – Oct 2024",
  grade: "CGPA 4.11 / 5.0",
};

export const hero = {
  plain: "I make sure what the business asked for is what the team ships, on time and without surprises.",
  eng: "I turn scope into specs you can build against, keep dependencies visible, and check every requirement before it ships.",
};

export const capabilities = [
  {
    n: "01",
    title: "Delivery management",
    text: "Teams, agencies and deadlines kept in step, so launches happen when they were promised.",
    tech: "Sprint cadence, release readiness, Definition of Done and the working agreement between in-house and agency teams.",
  },
  {
    n: "02",
    title: "Requirements and QA",
    text: "Clear plans everyone signs up to, and proof that what shipped matches them.",
    tech: "Testable requirements traced from PRD to design to test, and verified against the build before release.",
  },
  {
    n: "03",
    title: "Technical understanding",
    text: "A frontend developer before I became a TPM, so engineering conversations stay grounded in what is realistic.",
    tech: "Frontend background in React and Next.js. I follow API contracts and estimates closely, and prototype when that is faster than a document.",
  },
];

export const flow = [
  { n: "01", title: "Clarify", text: "Turn the idea into requirements engineers can build from.", tone: "idle" },
  { n: "02", title: "Plan", text: "Scope, owners, dependencies and the order of work.", tone: "idle" },
  { n: "03", title: "Build", text: "Run the sprints and keep in-house and agency teams aligned.", tone: "progress" },
  { n: "04", title: "Verify", text: "Check delivery against every requirement before release.", tone: "review" },
  { n: "05", title: "Ship", text: "Release with clear criteria, then learn from it.", tone: "done" },
] as const;

export const tools = [
  "Jira", "Confluence", "Notion", "Plane", "Figma", "FigJam", "GitHub", "Postman", "Airtable",
  "Slack", "Google Workspace", "Microsoft Office", "DocuSign", "VS Code", "Claude",
];
