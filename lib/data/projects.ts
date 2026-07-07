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
    tagline: "A bilingual marketing site for a UGC creator, built around video",
    summary:
      "Marketing and portfolio site for a user-generated-content creator: HLS adaptive video streaming from Cloudflare R2, bilingual routing (ES/EN), and motion design as a core pillar.",
    stack: ["React", "TypeScript", "Vite", "GSAP", "Lenis", "three.js", "HLS", "Cloudflare R2"],
    status: "Production",
    link: "https://giselasaldarriaga.com",
    featured: true,
  },
  {
    slug: "budget-expense",
    name: "Budget & Expense",
    tagline: "A calm, bilingual personal-finance app",
    summary:
      "Envelope budgeting, investments and net worth, multi-currency support, CSV and bank import — designed around composed, trustworthy finance UI with a documented design system.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Base UI", "Supabase", "Recharts", "Zod"],
    status: "Production",
    featured: true,
  },
  {
    slug: "jptracker",
    name: "JPTracker",
    tagline: "Time tracking and invoicing for freelance work",
    summary:
      "Weekly calendar time tracking with draft-to-final invoice generation, PDF/CSV/PNG export, and OAuth plus WebAuthn multi-factor auth on top of Supabase row-level security.",
    stack: ["React 19", "TypeScript", "Vite", "Supabase", "jsPDF", "Recharts"],
    status: "Production",
    link: "https://jptimetracker.vercel.app",
    featured: true,
  },
  {
    slug: "throughline",
    name: "Throughline",
    tagline: "A learning-roadmap tracker with study science built in",
    summary:
      "Turns my AI Support Systems roadmap into a living tracker: spaced review (1·3·7·14·30), mistake logging, mastery flags, and per-course workspaces that roll up to the roadmap.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
    status: "In development",
    featured: false,
  },
  {
    slug: "trainer-cloud",
    name: "Trainer Cloud",
    tagline: "Training, nutrition, and grocery planning in one private app",
    summary:
      "Models a configurable training week with macro targets per day type, meal logging, and a curated grocery catalog scored by cost-benefit — domain logic as pure, tested functions.",
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
    name: "warwickschiller.com DNS migration",
    description:
      "Led a live DNS migration with TTL planning, Cloudflare/origin cache coordination, propagation monitoring, and launch continuity.",
    context: "MemberDev",
  },
  {
    name: "mdp-direct-s3-uploader",
    description:
      "WordPress plugin for direct browser-to-S3 uploads, handling 5GB+ media workflows without touching the origin server.",
    context: "MemberDev",
  },
  {
    name: "Cloudflare R2/CDN rewrite tooling",
    description:
      "URL rewrite plugin moving heavy media delivery off origin onto R2-backed CDN.",
    context: "MemberDev",
  },
  {
    name: "Multi-GB MySQL/InnoDB migration",
    description:
      "Migrated multi-gigabyte MySQL workloads with InnoDB tuning and post-migration validation.",
    context: "MemberDev",
  },
  {
    name: "AI triage playbooks",
    description:
      "Designed AI-assisted triage playbooks for repeat issue classes across client support.",
    context: "MemberDev",
  },
];
