import type { Text } from "@/lib/i18n";
import { qbankShots } from "@/lib/data/qbank-shots";

export type ProjectStatus = "Production" | "In development" | "Private beta";

export const statusLabels: Record<ProjectStatus, Text> = {
  Production: { en: "Production", es: "En producción" },
  "In development": { en: "In development", es: "En desarrollo" },
  "Private beta": { en: "Private beta", es: "Beta privada" },
};

// `S` is Text in the data below and a string once localized.

/** A box on a screenshot, in percent of its width and height, and the note that explains it. */
export type ShotNote<S = string> = {
  x: number;
  y: number;
  w: number;
  h: number;
  text: S;
};

export type ProjectMedia<S = string> =
  | {
      kind: "image";
      src: string;
      alt: S;
      width: number;
      height: number;
      /** title in the screenshot viewer, when the image isn't also in the gallery */
      caption?: S;
    }
  | {
      kind: "icon";
      src: string;
      alt: S;
      /** short facts floated around the icon on the case study */
      callouts: { label: S; value: S }[];
    };

export type GalleryShot<S = string> = {
  src: string;
  alt: S;
  caption: S;
  width: number;
  height: number;
  /** heading the shot is listed under, e.g. "Admin" */
  group?: S;
  /** walkthrough notes shown in the viewer */
  notes?: ShotNote<S>[];
};

export type Project<S = string> = {
  slug: string;
  name: string;
  tagline: S;
  summary: S;
  stack: string[];
  status: ProjectStatus;
  link?: string;
  /** button text for the live link; defaults to the host */
  linkLabel?: S;
  featured: boolean;
  media: ProjectMedia<S>;
  gallery?: GalleryShot<S>[];
  /** tiny pre-blurred image used as the page's light */
  ambient: string;
  glance: { label: S; value: S }[];
};

export const projects: Project<Text>[] = [
  {
    slug: "qbank",
    name: "QBank",
    tagline: {
      en: "The question bank I built for Obesity Medicine Review",
      es: "El banco de preguntas que desarrollé para Obesity Medicine Review",
    },
    summary: {
      en: "Doctors use it to study for the obesity medicine board exam. It replaced SpeedExam on 1 October 2026, and in the first two weeks members answered 163,000 questions over more than 6,000 hours of tests.",
      es: "Los médicos lo usan para preparar el examen de certificación en medicina de la obesidad. Reemplazó a SpeedExam el 1 de octubre de 2026, y en las dos primeras semanas los miembros respondieron 163 000 preguntas en más de 6000 horas de exámenes.",
    },
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "esbuild", "Playwright", "axe-core"],
    status: "Production",
    link: "https://obesitymedicinereview.com/online-qbank/",
    linkLabel: { en: "OMR's QBank page", es: "QBank en el sitio de OMR" },
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/qbank-create.jpg",
      alt: {
        en: "QBank Create test screen with ready-made sets, a question count, your own mix by topic, and a summary of the test",
        es: "Pantalla para crear un examen en QBank, con sets listos, el número de preguntas, una mezcla propia por tema y un resumen del examen",
      },
      width: 1800,
      height: 1125,
    },
    gallery: qbankShots,
    ambient: "/images/ambient/qbank.webp",
    glance: [
      {
        label: { en: "Status", es: "Estado" },
        value: { en: "Live since 1 October 2026", es: "En producción desde el 1 de octubre de 2026" },
      },
      {
        label: { en: "First two weeks", es: "Primeras dos semanas" },
        value: { en: "163,000 questions answered", es: "163 000 preguntas respondidas" },
      },
      {
        label: { en: "Time in tests", es: "Tiempo en exámenes" },
        value: { en: "6,000+ hours", es: "Más de 6000 horas" },
      },
      {
        label: { en: "Migrated", es: "Migradas" },
        value: { en: "2,713 questions from SpeedExam", es: "2713 preguntas desde SpeedExam" },
      },
      {
        label: { en: "Built for", es: "Hecho para" },
        value: {
          en: "Obesity Medicine Review, at MemberDev",
          es: "Obesity Medicine Review, en MemberDev",
        },
      },
    ],
  },
  {
    slug: "giseugc",
    name: "GiseUGC",
    tagline: {
      en: "A video-first website for a UGC creator",
      es: "Un sitio web centrado en el video para una creadora de UGC",
    },
    summary: {
      en: "Gisela Saldarriaga's website. Her videos stream from Cloudflare R2, and the site is in Spanish with an English version at /en/.",
      es: "El sitio web de Gisela Saldarriaga. Sus videos se transmiten desde Cloudflare R2, y el sitio está en español, con una versión en inglés en /en/.",
    },
    stack: ["React", "TypeScript", "Vite", "GSAP", "Lenis", "three.js", "HLS", "Cloudflare R2"],
    status: "Production",
    link: "https://giselasaldarriaga.com",
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/giseugc-home.jpg",
      alt: {
        en: "GiseUGC home page in Spanish: Gisela's portrait, her name, and a vertical video reel",
        es: "Página de inicio de GiseUGC en español: el retrato de Gisela, su nombre y un reel de video vertical",
      },
      width: 1280,
      height: 720,
    },
    ambient: "/images/ambient/giseugc.webp",
    glance: [
      {
        label: { en: "Status", es: "Estado" },
        value: { en: "Live, still maintained", es: "En producción, con mantenimiento" },
      },
      {
        label: { en: "Languages", es: "Idiomas" },
        value: { en: "Spanish at /, English at /en/", es: "Español en /, inglés en /en/" },
      },
      {
        label: { en: "Video", es: "Video" },
        value: { en: "HLS, MP4 fallback", es: "HLS, con MP4 de respaldo" },
      },
      {
        label: { en: "Files", es: "Archivos" },
        value: { en: "Cloudflare R2", es: "Cloudflare R2" },
      },
      {
        label: { en: "Server", es: "Servidor" },
        value: { en: "None, static build", es: "Ninguno, sitio estático" },
      },
    ],
  },
  {
    slug: "budget-expense",
    name: "Budget & Expense",
    tagline: {
      en: "My personal finance app, in English and Spanish",
      es: "Mi app de finanzas personales, en inglés y en español",
    },
    summary: {
      en: "Envelope budgets, investments, net worth and several currencies in one place, with CSV and bank statement imports.",
      es: "Presupuestos por sobres, inversiones, patrimonio neto y varias monedas en un solo lugar, con importación de CSV y de estados de cuenta bancarios.",
    },
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Base UI", "Supabase", "Recharts", "Zod"],
    status: "Production",
    link: "https://budget-expense-seven.vercel.app",
    linkLabel: { en: "Open the app", es: "Abrir la app" },
    featured: true,
    media: {
      kind: "icon",
      src: "/images/projects/budget-expense-icon.png",
      alt: { en: "Budget & Expense app icon", es: "Ícono de la app Budget & Expense" },
      callouts: [
        {
          label: { en: "Currencies", es: "Monedas" },
          value: { en: "20, EUR as the base", es: "20, con el EUR como base" },
        },
        {
          label: { en: "Budgeting", es: "Presupuesto" },
          value: { en: "Envelopes, one bar per pool", es: "Sobres, una barra por fondo" },
        },
        {
          label: { en: "Imports", es: "Importación" },
          value: { en: "CSV and Santander statements", es: "CSV y estados de cuenta de Santander" },
        },
        {
          label: { en: "Net worth", es: "Patrimonio neto" },
          value: { en: "Next to day-to-day spending", es: "Junto al gasto del día a día" },
        },
      ],
    },
    ambient: "/images/ambient/budget.webp",
    glance: [
      {
        label: { en: "Status", es: "Estado" },
        value: { en: "Live, still adding to it", es: "En producción, le sigo agregando cosas" },
      },
      {
        label: { en: "Languages", es: "Idiomas" },
        value: { en: "English and Spanish", es: "Inglés y español" },
      },
      {
        label: { en: "Currencies", es: "Monedas" },
        value: { en: "20, EUR as the base", es: "20, con el EUR como base" },
      },
      {
        label: { en: "Imports", es: "Importación" },
        value: { en: "CSV, Santander statements", es: "CSV, estados de cuenta de Santander" },
      },
      {
        label: { en: "Layout", es: "Diseño" },
        value: {
          en: "Bottom nav on phone, sidebar on desktop",
          es: "Barra inferior en el celular, barra lateral en escritorio",
        },
      },
    ],
  },
  {
    slug: "jptracker",
    name: "JPTracker",
    tagline: {
      en: "Time tracking and invoicing for my freelance work",
      es: "Registro de horas y facturación para mi trabajo freelance",
    },
    summary: {
      en: "A weekly calendar for logging hours, invoices that go from draft to final, and exports to PDF, CSV and PNG. Sign-in supports Google, Apple and passkeys, and the data sits behind Supabase row-level security.",
      es: "Un calendario semanal para registrar horas, facturas que pasan de borrador a definitivas y exportaciones a PDF, CSV y PNG. Se puede iniciar sesión con Google, Apple o llaves de acceso, y los datos están protegidos con la seguridad a nivel de fila de Supabase.",
    },
    stack: ["React 19", "TypeScript", "Vite", "Supabase", "jsPDF", "Recharts"],
    status: "Production",
    link: "https://jptimetracker.vercel.app",
    featured: true,
    media: {
      kind: "image",
      src: "/images/projects/jptracker-screen-time-dark.jpg",
      alt: {
        en: "JPTracker week view: a calendar of client tasks, a running timer, and weekly totals",
        es: "Vista semanal de JPTracker: un calendario de tareas por cliente, un temporizador en marcha y los totales de la semana",
      },
      caption: {
        en: "Week view · tasks and timers",
        es: "Vista semanal · tareas y temporizadores",
      },
      width: 1800,
      height: 1315,
    },
    gallery: [
      {
        src: "/images/projects/jptracker-screen-invoices.jpg",
        alt: { en: "JPTracker invoices screen", es: "Pantalla de facturas de JPTracker" },
        caption: { en: "Invoices · draft to final", es: "Facturas · de borrador a definitiva" },
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/jptracker-screen-reports.jpg",
        alt: {
          en: "JPTracker monthly reports screen",
          es: "Pantalla de reportes mensuales de JPTracker",
        },
        caption: { en: "Reports · client hours", es: "Reportes · horas por cliente" },
        width: 1800,
        height: 1200,
      },
    ],
    ambient: "/images/ambient/jptracker.webp",
    glance: [
      {
        label: { en: "Status", es: "Estado" },
        value: { en: "Deployed, in use", es: "Publicado y en uso" },
      },
      {
        label: { en: "Auth", es: "Acceso" },
        value: { en: "Email, Google, Apple, WebAuthn", es: "Correo, Google, Apple, WebAuthn" },
      },
      {
        label: { en: "Exports", es: "Exportación" },
        value: { en: "PDF, CSV, PNG", es: "PDF, CSV, PNG" },
      },
      {
        label: { en: "Time", es: "Horas" },
        value: { en: "Stored in UTC", es: "Guardadas en UTC" },
      },
      {
        label: { en: "Server", es: "Servidor" },
        value: { en: "None needed to invoice", es: "No hace falta para facturar" },
      },
    ],
  },
];

export type ClientWork<S = string> = {
  name: S;
  description: S;
  context: string;
};

export const clientWork: ClientWork<Text>[] = [
  {
    name: { en: "AI chat on membership sites", es: "Chat de IA en sitios de membresía" },
    description: {
      en: "Chat assistants built into WordPress membership sites that answer from the site's own content.",
      es: "Asistentes de chat integrados en sitios de membresía en WordPress, que responden con el contenido del propio sitio.",
    },
    context: "MemberDev",
  },
  {
    name: { en: "Media offload", es: "Medios fuera del servidor" },
    description: {
      en: "Moving heavy media off WordPress servers and onto S3 or Cloudflare R2.",
      es: "Sacar los archivos multimedia pesados de los servidores de WordPress y pasarlos a S3 o Cloudflare R2.",
    },
    context: "MemberDev",
  },
  {
    name: { en: "Migrations", es: "Migraciones" },
    description: {
      en: "Moving sites, DNS and databases to new hosts without taking them offline.",
      es: "Mover sitios, DNS y bases de datos a otros servidores sin dejarlos fuera de línea.",
    },
    context: "MemberDev",
  },
];

export function projectHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}
