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
    body: "WordPress membership sites: support, QA, hosting, DNS, migrations, and a bit of AI around the tickets.",
    href: "/experience",
    meta: "since 2023",
  },
  {
    label: "On the radar",
    tone: "brand",
    title: "AI harness engineering",
    body: "Schemas, evals, retrieval. I'm on a seven-phase plan toward AI support systems. Still in the early phases.",
    href: "/now",
    meta: "phase 0–1 active",
  },
  {
    label: "Shipping",
    tone: "brand",
    title: "Four of my own apps",
    body: "GiseUGC, Budget & Expense, and JPTracker are live. Trainer Cloud is a private beta I use myself.",
    href: "/projects",
    meta: "3 in production",
  },
];

export const currentFocus = [
  {
    title: "Client WebOps at MemberDev",
    body: "Most days I'm on client WordPress membership sites: support, QA, hosting, DNS, migrations, and some AI workflows around that.",
  },
  {
    title: "My own apps",
    body: "GiseUGC, Budget & Expense, and JPTracker are live. Trainer Cloud is a private beta that runs my training week.",
  },
  {
    title: "The study plan",
    body: "Seven phases toward AI support systems. About 8–10 hours a week. I write down what I get wrong. I'd rather ship something than collect another certificate.",
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
      "Get the study habit in place first: recall practice, spaced review, and clear rules for when I use an AI agent.",
    state: "active",
  },
  {
    phase: 1,
    title: "CS + Developer Tools + Agent Workflow",
    summary:
      "Get better at debugging, SQL, the shell, and Git. Use an AI agent on small tasks, with a tight loop.",
    state: "active",
  },
  {
    phase: 2,
    title: "TypeScript + Full-Stack Base",
    summary:
      "More TypeScript, React, and Node, and actually reviewing the architecture when I add a feature.",
    state: "next",
  },
  {
    phase: 3,
    title: "Next.js SaaS Shell + Architecture",
    summary:
      "A small SaaS with auth and billing, and written-down boundaries so it doesn't turn into a mess. C4 diagrams and ADRs.",
    state: "next",
  },
  {
    phase: 4,
    title: "AI Harness Engineering",
    summary:
      "Make model output reliable: schemas, validation, retries when it fails, and a fallback when it keeps failing.",
    state: "next",
  },
  {
    phase: 5,
    title: "Context Engineering + Grounded AI",
    summary:
      "Retrieval that cites sources and can be tested. Chunking, freshness, and evals so I know the answers are grounded.",
    state: "next",
  },
  {
    phase: 6,
    title: "Production AI Support OS",
    summary:
      "The full thing in production: human approval, traces, cost, model routing, and safety. Run it like any other service.",
    state: "next",
  },
];

export const northStar = {
  title: "AI Support Systems / Context Engineer",
  body: "The job I want sits between technical support, WebOps, and the systems that make AI trustworthy: context, evals, logs, cost. At the end of this plan I want an AI copilot for hosting, DNS, SSL, WordPress, and SaaS support.",
  identities: [
    "Technical support, with AI in the loop",
    "WebOps",
    "AI support systems",
    "Context and evals",
  ],
};
