export type StatusCard = {
  label: string;
  tone: "ok" | "brand";
  title: string;
  body: string;
  href: string;
  meta: string;
};

export const statusBoard: StatusCard[] = [
  {
    label: "Now",
    tone: "ok",
    title: "Client WebOps at MemberDev",
    body: "Keeping WordPress membership platforms healthy — support, QA, hosting, DNS, migrations, and the AI-assisted workflows around them.",
    href: "/experience",
    meta: "since 2023",
  },
  {
    label: "On the radar",
    tone: "brand",
    title: "AI harness engineering",
    body: "Structured outputs, evals, context pipelines — working a seven-phase roadmap toward AI support systems, one shipped artifact at a time.",
    href: "/now",
    meta: "phase 0–1 active",
  },
  {
    label: "Shipping",
    tone: "brand",
    title: "Four products in flight",
    body: "GiseUGC, Budget & Expense, and JPTracker in production; Trainer Cloud in private beta.",
    href: "/projects",
    meta: "3 in production",
  },
];

export const currentFocus = [
  {
    title: "Client WebOps at MemberDev",
    body: "Day to day I keep WordPress membership platforms healthy — support, QA, hosting, DNS, migrations, and the AI-assisted workflows around them.",
  },
  {
    title: "Shipping my own apps",
    body: "Four products in flight: GiseUGC, Budget & Expense, and JPTracker in production; Trainer Cloud in private beta.",
  },
  {
    title: "Studying with a system",
    body: "Working through a seven-phase roadmap toward AI support systems engineering — 8–10 hours a week, tracked with spaced review and a mistake log, proof over certificates.",
  },
];

export type RoadmapPhase = {
  phase: number;
  title: string;
  summary: string;
  state: "done" | "active" | "next";
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 0,
    title: "Study System + AI Fluency",
    summary:
      "Install the learning method first: retrieval practice, spaced review, AI fluency, and explicit agent-use rules.",
    state: "active",
  },
  {
    phase: 1,
    title: "CS + Developer Tools + Agent Workflow",
    summary:
      "Strengthen debugging, systems intuition, SQL, shell, and Git — with a disciplined AI-agent workflow on small tasks.",
    state: "active",
  },
  {
    phase: 2,
    title: "TypeScript + Full-Stack Base",
    summary:
      "TypeScript depth, React and Node fundamentals, and architecture review habits applied to real features.",
    state: "next",
  },
  {
    phase: 3,
    title: "Next.js SaaS Shell + Architecture",
    summary:
      "A production SaaS shell with auth, billing, and explicit data boundaries — documented with C4 diagrams and ADRs.",
    state: "next",
  },
  {
    phase: 4,
    title: "AI Harness Engineering",
    summary:
      "Structured outputs, schemas, validation, repair loops, and fallback chains — the machinery that makes AI dependable.",
    state: "next",
  },
  {
    phase: 5,
    title: "Context Engineering + Grounded AI",
    summary:
      "Retrieval and context pipelines: chunking, citations, freshness, and retrieval evals that prove the answers.",
    state: "next",
  },
  {
    phase: 6,
    title: "Production AI Support OS",
    summary:
      "Guardrails, human approval, traces, cost control, model routing, and safety — an AI support system run like production.",
    state: "next",
  },
];

export const northStar = {
  title: "AI Support Systems / Context Engineer",
  body: "The destination is a role I'm partly inventing and partly growing into: someone who combines technical support and WebOps depth with harness engineering — context pipelines, evals, observability, and cost control. The end-state product of the roadmap is an AI WebOps Support Copilot for hosting, DNS, SSL, WordPress, and SaaS operations.",
  identities: [
    "AI-enabled technical support engineer",
    "WebOps automation specialist",
    "AI support systems builder",
    "Context / harness engineer",
  ],
};
