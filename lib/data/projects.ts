export type ProjectStatus = "Production" | "In development" | "Private beta";

export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "icon";
      src: string;
      alt: string;
      /** short facts floated around the icon on the case study */
      callouts: { label: string; value: string }[];
    };

export type GalleryShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  link?: string;
  /** button text for the live link; defaults to the host */
  linkLabel?: string;
  featured: boolean;
  media: ProjectMedia;
  gallery?: GalleryShot[];
  /** tiny pre-blurred image used as the page's light */
  ambient: string;
  glance: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "qbank",
    name: "QBank",
    tagline: "The question bank I built for Obesity Medicine Review",
    summary:
      "Doctors use it to study for the obesity medicine board exam. It replaced SpeedExam on 1 October 2026, and in the first two weeks members answered 163,000 questions over more than 6,000 hours of tests.",
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "esbuild", "Playwright", "axe-core"],
    status: "Production",
    link: "https://obesitymedicinereview.com/online-qbank/",
    linkLabel: "OMR's QBank page",
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/qbank-tutor.jpg",
      alt: "QBank in Tutor mode: a pharmacotherapy question with the correct answer marked and the explanation below",
      width: 1800,
      height: 1125,
    },
    gallery: [
      {
        src: "/images/projects/qbank-create.jpg",
        alt: "QBank Create test screen with ready-made sets, a question count and a summary of the test",
        caption: "Create test · ready-made sets or your own",
        width: 1800,
        height: 1125,
      },
      {
        src: "/images/projects/qbank-phone.jpg",
        alt: "QBank on a phone: the Today screen, a question in Tutor mode, and Performance",
        caption: "On a phone · Today, a question, Performance",
        width: 1800,
        height: 1125,
      },
    ],
    ambient: "/images/ambient/qbank.webp",
    glance: [
      { label: "Status", value: "Live since 1 October 2026" },
      { label: "First two weeks", value: "163,000 questions answered" },
      { label: "Time in tests", value: "6,000+ hours" },
      { label: "Migrated", value: "2,713 questions from SpeedExam" },
      { label: "Built for", value: "Obesity Medicine Review, at MemberDev" },
    ],
  },
  {
    slug: "giseugc",
    name: "GiseUGC",
    tagline: "A video-first website for a UGC creator",
    summary:
      "Gisela Saldarriaga's website. Her videos stream from Cloudflare R2, and the site is in Spanish with an English version at /en/.",
    stack: ["React", "TypeScript", "Vite", "GSAP", "Lenis", "three.js", "HLS", "Cloudflare R2"],
    status: "Production",
    link: "https://giselasaldarriaga.com",
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/giseugc-home.jpg",
      alt: "GiseUGC home page in Spanish: Gisela's portrait, her name, and a vertical video reel",
      width: 1280,
      height: 720,
    },
    ambient: "/images/ambient/giseugc.webp",
    glance: [
      { label: "Status", value: "Live, still maintained" },
      { label: "Languages", value: "Spanish at /, English at /en/" },
      { label: "Video", value: "HLS, MP4 fallback" },
      { label: "Files", value: "Cloudflare R2" },
      { label: "Server", value: "None, static build" },
    ],
  },
  {
    slug: "budget-expense",
    name: "Budget & Expense",
    tagline: "My personal finance app, in English and Spanish",
    summary:
      "Envelope budgets, investments, net worth and several currencies in one place, with CSV and bank statement imports.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Base UI", "Supabase", "Recharts", "Zod"],
    status: "Production",
    link: "https://budget-expense-seven.vercel.app",
    linkLabel: "Open the app",
    featured: true,
    media: {
      kind: "icon",
      src: "/images/projects/budget-expense-icon.png",
      alt: "Budget & Expense app icon",
      callouts: [
        { label: "Currencies", value: "20, EUR as the base" },
        { label: "Budgeting", value: "Envelopes, one bar per pool" },
        { label: "Imports", value: "CSV and Santander statements" },
        { label: "Net worth", value: "Next to day-to-day spending" },
      ],
    },
    ambient: "/images/ambient/budget.webp",
    glance: [
      { label: "Status", value: "Live, still adding to it" },
      { label: "Languages", value: "English and Spanish" },
      { label: "Currencies", value: "20, EUR as the base" },
      { label: "Imports", value: "CSV, Santander statements" },
      { label: "Layout", value: "Bottom nav on phone, sidebar on desktop" },
    ],
  },
  {
    slug: "jptracker",
    name: "JPTracker",
    tagline: "Time tracking and invoicing for my freelance work",
    summary:
      "A weekly calendar for logging hours, invoices that go from draft to final, and exports to PDF, CSV and PNG. Sign-in supports Google, Apple and passkeys, and the data sits behind Supabase row-level security.",
    stack: ["React 19", "TypeScript", "Vite", "Supabase", "jsPDF", "Recharts"],
    status: "Production",
    link: "https://jptimetracker.vercel.app",
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/jptracker-screen-time-dark.jpg",
      alt: "JPTracker week view: a calendar of client tasks, a running timer, and weekly totals",
      width: 1800,
      height: 1315,
    },
    gallery: [
      {
        src: "/images/projects/jptracker-screen-invoices.jpg",
        alt: "JPTracker invoices screen",
        caption: "Invoices · draft to final",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/jptracker-screen-reports.jpg",
        alt: "JPTracker monthly reports screen",
        caption: "Reports · client hours",
        width: 1800,
        height: 1200,
      },
    ],
    ambient: "/images/ambient/jptracker.webp",
    glance: [
      { label: "Status", value: "Deployed, in use" },
      { label: "Auth", value: "Email, Google, Apple, WebAuthn" },
      { label: "Exports", value: "PDF, CSV, PNG" },
      { label: "Time", value: "Stored in UTC" },
      { label: "Server", value: "None needed to invoice" },
    ],
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
      "Chat assistants built into WordPress membership sites that answer from the site's own content.",
    context: "MemberDev",
  },
  {
    name: "Media offload",
    description:
      "Moving heavy media off WordPress servers and onto S3 or Cloudflare R2.",
    context: "MemberDev",
  },
  {
    name: "Migrations",
    description:
      "Moving sites, DNS and databases to new hosts without taking them offline.",
    context: "MemberDev",
  },
];

export function projectHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}
