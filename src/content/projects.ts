export type Project = {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  kind: "Client work" | "Employer work" | "Independent";
  year: string;
  role: string;
  problem: string;
  built: string[];
  stack: string[];
  howBuilt?: string;
  images: { src: string; alt: string }[];
  mobile?: string;
  imageNote?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

const shots = (slug: string, alts: string[]) =>
  alts.map((alt, i) => ({ src: `/images/projects/${slug}/${String(i + 1).padStart(2, "0")}.webp`, alt }));

export const projects: Project[] = [
  {
    slug: "brightbridge",
    name: "BrightBridge platform",
    tagline: "Property deal platform for supported housing, from first requirement to signed lease.",
    context: "Bright Bridge Connect",
    kind: "Employer work",
    year: "2026",
    role: "Product definition and build",
    problem: "Care providers, landlords and introducers needed one place to run a property deal without exposing each other's contacts too early.",
    built: [
      "Four role portals: internal team, care provider, landlord and introducer",
      "Requirements, property submission and review, viewings and offers",
      "Heads of terms with identity reveal, works and snagging, compliance documents, lease and completion",
      "Built in 11 stages, each type-checked and buildable",
    ],
    stack: ["Next.js", "TypeScript", "Vercel"],
    howBuilt: "AI-assisted build that I specified, directed and reviewed stage by stage.",
    images: shots("brightbridge", ["Internal workspace: property review", "Care provider overview", "Care provider requirements", "Viewings", "Landing page with role selection", "Care provider registration"]),
    links: [{ label: "Source on GitHub", href: "https://github.com/Boluwatife07/BrightBridge" }],
    featured: true,
  },
  {
    slug: "peng",
    name: "Peng",
    tagline: "Wedding planning platform: onboarding, dashboard, website templates and gift registry.",
    context: "Purejim Limited",
    kind: "Employer work",
    year: "2023",
    role: "Frontend developer",
    problem: "Couples needed one place to plan their wedding, publish a wedding website and manage gifts.",
    built: [
      "Multi-step sign-up and onboarding with an image carousel",
      "Couple dashboard with planning shortcuts and a website preview",
      "Website template gallery and editor",
      "Gift registry with empty and populated states",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "React Hook Form", "Zod"],
    images: shots("peng", ["Create an account", "Couple dashboard", "Website templates", "Gift registry", "Log in"]),
    mobile: "/images/projects/peng/mobile.webp",
    featured: true,
  },
  {
    slug: "zenon-website",
    name: "Zenon website",
    tagline: "Company website for Zenon Mobile, the team behind Zenon Go.",
    context: "Zenon",
    kind: "Employer work",
    year: "2024",
    role: "Frontend developer",
    problem: "The company needed a website explaining its products and services to businesses, riders and customers.",
    built: ["Responsive marketing pages from high-fidelity designs", "Products, services, blog and FAQ sections", "API integration for dynamic content"],
    stack: ["React", "Next.js", "JavaScript"],
    images: [],
    imageNote: "Screenshots coming soon.",
    links: [{ label: "Visit zenon.systems", href: "https://zenon.systems/" }],
  },
  {
    slug: "psnl-website",
    name: "PSNL website",
    tagline: "Corporate website for a construction and engineering company.",
    context: "Pinhole Services Nigeria Limited",
    kind: "Client work",
    year: "2025",
    role: "Designer and developer",
    problem: "The company needed a professional web presence for its services and projects.",
    built: ["Full-screen video hero", "Services, about, projects and contact sections", "Scroll-reveal animations"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "ScrollReveal"],
    images: shots("psnl", ["Hero", "Services", "About us", "Projects", "Contact"]),
    mobile: "/images/projects/psnl/mobile.webp",
    links: [{ label: "Source on GitHub", href: "https://github.com/Boluwatife07/PSNL" }],
  },
  {
    slug: "age-dp-generator",
    name: "AGE 2026 display-picture generator",
    tagline: "Attendees upload a photo and download a branded 'I'm attending' image.",
    context: "Africa Gaming Expo",
    kind: "Employer work",
    year: "2026",
    role: "Product owner and builder",
    problem: "The event needed attendees to share their attendance on social media in a consistent, on-brand way.",
    built: ["Photo upload and name entry", "Branded image generated in the browser", "One-click download for sharing"],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    howBuilt: "Built with an AI app builder; I defined it and directed the design fixes.",
    images: shots("age-dp-generator", ["Generator screen"]),
    mobile: "/images/projects/age-dp-generator/mobile.webp",
    featured: true,
  },
  {
    slug: "bandcheck",
    name: "BandCheck",
    tagline: "Look up the official electricity supply band for a Nigerian feeder.",
    context: "Independent product",
    kind: "Independent",
    year: "2026",
    role: "Product owner and builder",
    problem: "Customers are billed by supply band but can rarely check which band their feeder is officially on, or what hours that band guarantees.",
    built: [
      "Feeder search returning band, guaranteed hours and approximate tariff",
      "Automated weekly pipeline that finds, parses and diffs the regulator's published PDFs",
      "Light human review step for flagged changes",
      "Data-freshness notice per distribution company",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    images: shots("bandcheck", ["Feeder search and band guide"]),
    mobile: "/images/projects/bandcheck/mobile.webp",
    links: [{ label: "Source on GitHub", href: "https://github.com/Boluwatife07/BandCheck" }],
    featured: true,
  },
  {
    slug: "reading-room",
    name: "The Reading Room",
    tagline: "A small library app for borrowing books and ebooks.",
    context: "Independent product",
    kind: "Independent",
    year: "2026",
    role: "Product owner and builder",
    problem: "A community library needed members to browse, borrow and track books, and admins to manage the shelves.",
    built: ["Catalogue with search and genre filter", "Book detail with borrowing", "Member library and admin tools", "Email and Google sign-in"],
    stack: ["TanStack Start", "React 19", "Supabase", "Tailwind CSS", "Cloudflare Workers"],
    howBuilt: "AI-assisted build; I added the admin side and fixed Google sign-in.",
    images: shots("reading-room", ["Home", "Catalogue", "Book detail"]),
    mobile: "/images/projects/reading-room/mobile.webp",
    imageNote: "Shown with demo data.",
  },
  {
    slug: "lagosstay",
    name: "LagosStay",
    tagline: "Find hotels across Lagos by area, price, rating and amenities.",
    context: "Independent product",
    kind: "Independent",
    year: "2026",
    role: "Product owner and builder",
    problem: "Visitors to Lagos, including event delegates, need a quick way to compare hotels by area and budget.",
    built: ["Search and area filters", "Hotel detail with reviews and directions", "Map view", "Favourites for signed-in users"],
    stack: ["React", "Vite", "TypeScript", "Supabase", "Leaflet"],
    howBuilt: "Built with an AI app builder from my specification.",
    images: shots("lagosstay", ["Home", "Hotel listings", "Hotel detail", "Map view"]),
    mobile: "/images/projects/lagosstay/mobile.webp",
    imageNote: "Shown with demo data and illustrated placeholder photos.",
  },
  {
    slug: "lagos-oims",
    name: "Lagos State OIMS",
    tagline: "Orphanage information management system: homes, records, adoptions and reports.",
    context: "Independent product",
    kind: "Independent",
    year: "2026",
    role: "Product owner and builder",
    problem: "Records about children's homes, admissions and adoption cases are often kept on paper, which makes oversight slow.",
    built: ["Dashboard with occupancy and capacity alerts", "Registered orphanages by local government area", "Child records with status tracking", "Adoption case pipeline from application to completion", "Reports with CSV export"],
    stack: ["React", "Vite", "TypeScript", "Supabase"],
    images: shots("lagos-oims", ["Dashboard", "Orphanages", "Records", "Adoptions", "Reports"]),
    mobile: "/images/projects/lagos-oims/mobile.webp",
    imageNote: "Shown with demo data. All names are placeholders.",
  },
  {
    slug: "easysch",
    name: "EasySCH",
    tagline: "School management platform for administrators, teachers and students.",
    context: "Purejim Limited",
    kind: "Employer work",
    year: "2023",
    role: "Frontend developer",
    problem: "Schools needed one system for administration, teaching and student records.",
    built: ["Admin dashboards", "Student and teacher modules", "Forms and administrative interfaces"],
    stack: ["React", "Next.js", "JavaScript"],
    images: [],
    imageNote: "Screenshots coming soon.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
