export type ProjectStatus = "Production" | "In development" | "Private beta";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  link?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "giseugc",
    name: "GiseUGC",
    tagline: "Marketing site for a UGC creator, built around video",
    summary:
      "Gisela Saldarriaga's site. Videos stream with HLS from Cloudflare R2, Spanish by default and English at /en/, plus some motion on top.",
    stack: ["React", "TypeScript", "Vite", "GSAP", "Lenis", "three.js", "HLS", "Cloudflare R2"],
    status: "Production",
    link: "https://giselasaldarriaga.com",
    featured: true,
  },
  {
    slug: "budget-expense",
    name: "Budget & Expense",
    tagline: "Personal finance, in English and Spanish",
    summary:
      "Envelope budgeting, investments, net worth, a few currencies, CSV and bank import. I wanted the numbers to feel solid, not like a fintech ad.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Base UI", "Supabase", "Recharts", "Zod"],
    status: "Production",
    featured: true,
  },
  {
    slug: "jptracker",
    name: "JPTracker",
    tagline: "Time tracking and invoices for freelance work",
    summary:
      "Weekly calendar, invoices from draft to final, export to PDF/CSV/PNG. Auth with OAuth and WebAuthn, data behind Supabase row-level security.",
    stack: ["React 19", "TypeScript", "Vite", "Supabase", "jsPDF", "Recharts"],
    status: "Production",
    link: "https://jptimetracker.vercel.app",
    featured: true,
  },
  {
    slug: "trainer-cloud",
    name: "Trainer Cloud",
    tagline: "Training, food, and groceries in a private app",
    summary:
      "My training week, macros by day type, meal logging, and a grocery list scored by price vs. protein, for the stores I actually use in Spain.",
    stack: ["Next.js 16", "React 19", "Supabase", "Zod", "Vitest"],
    status: "Private beta",
    featured: false,
  },
];

export type ClientWork = {
  name: string;
  description: string;
  context: string;
};

export const clientWork: ClientWork[] = [
  {
    name: "Production RAG assistant",
    description:
      "A RAG assistant for a large online training platform. Python, Supabase pgvector, OpenAI, a custom WordPress plugin, a test suite, and a handover doc.",
    context: "MemberDev",
  },
  {
    name: "warwickschiller.com DNS migration",
    description:
      "A live DNS migration: TTL planning, Cloudflare and origin cache, watching propagation, and keeping the site up through the cutover.",
    context: "MemberDev",
  },
  {
    name: "mdp-direct-s3-uploader",
    description:
      "A WordPress plugin that sends files straight from the browser to S3, including 5GB+ videos, so the origin server never sees them.",
    context: "MemberDev",
  },
  {
    name: "Cloudflare R2/CDN rewrite tooling",
    description:
      "A URL-rewrite plugin so heavy media comes from Cloudflare R2 instead of the origin.",
    context: "MemberDev",
  },
  {
    name: "Multi-GB MySQL/InnoDB migration",
    description:
      "Moved multi-gigabyte MySQL databases, tuned InnoDB, and checked the data afterwards.",
    context: "MemberDev",
  },
  {
    name: "AI triage playbooks",
    description:
      "AI-assisted triage notes for the issues we see over and over in client support."
    context: "MemberDev",
  },
];
