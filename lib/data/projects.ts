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
      "Gisela Saldarriaga's site. Videos stream with HLS from Cloudflare R2. Spanish by default, English at /en/.",
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
      "Envelope budgeting, investments, net worth, several currencies, and CSV or bank import.",
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
      "My training week, macros by day type, meal logging, and a grocery list scored by price vs. protein, for the stores I shop at in Spain.",
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
    name: "AI chat on membership sites",
    description:
      "Custom chat built into WordPress membership sites, using the content they already have.",
    context: "MemberDev",
  },
  {
    name: "Media offload",
    description:
      "Moving heavy files off WordPress onto S3 or Cloudflare R2.",
    context: "MemberDev",
  },
  {
    name: "Migrations",
    description:
      "DNS and database moves, keeping the site up while it changes hands.",
    context: "MemberDev",
  },
];
