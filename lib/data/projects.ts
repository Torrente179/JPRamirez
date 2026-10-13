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
    }
  | {
      kind: "private";
      /** the app's sections, shown instead of screenshots */
      sections: { name: string; note?: string }[];
      callouts: string[];
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
  {
    slug: "trainer-cloud",
    name: "Trainer Cloud",
    tagline: "A private app for my training, food and groceries",
    summary:
      "It plans my training week, sets macros by type of day, logs meals, and scores groceries on price against protein at the stores I use in Spain.",
    stack: ["Next.js 16", "React 19", "Supabase", "Zod", "Vitest"],
    status: "Private beta",
    featured: false,
    media: {
      kind: "private",
      sections: [
        { name: "Today" },
        { name: "Plan", note: "The training week" },
        { name: "Food", note: "Meals" },
        { name: "Week", note: "Review" },
      ],
      callouts: [
        "2-day or 3-day splits",
        "Macro targets per day type",
        "Mercadona and HiperDino, scored by price vs. protein",
      ],
    },
    ambient: "/images/ambient/hilltop.webp",
    glance: [
      { label: "Status", value: "Private beta" },
      { label: "Sections", value: "Today, Plan, Food, Week" },
      { label: "Stores", value: "Mercadona, HiperDino" },
      { label: "Auth", value: "Magic link, Supabase" },
      { label: "Tests", value: "Domain layer, Vitest" },
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
