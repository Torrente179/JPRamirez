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
    tone: "brand",
    title: "AI systems",
    body: "Agentic coding, RAG, evals. And four apps of my own.",
    href: "/now",
    meta: "building",
  },
  {
    label: "Work",
    tone: "ok",
    title: "MemberDev",
    body: "WordPress membership platforms, plus production RAG assistants and chatbots.",
    href: "/experience",
    meta: "since 2023",
  },
  {
    label: "Shipping",
    tone: "brand",
    title: "My own apps",
    body: "GiseUGC, Budget & Expense, and JPTracker are live. Trainer Cloud is a private beta I use myself.",
    href: "/projects",
    meta: "3 in production",
  },
];

export type StudyTopic = {
  id: number;
  short: string;
  title: string;
  summary: string;
};

export const studyTopics: StudyTopic[] = [
  {
    id: 1,
    short: "Agents",
    title: "Agentic coding",
    summary:
      "Claude Code, Codex, Cursor. Inspect, plan, implement, test, review, against real repos.",
  },
  {
    id: 2,
    short: "Debugging",
    title: "Debugging, SQL, Git",
    summary: "Shell, Git, SQL, and a tight loop on small tasks.",
  },
  {
    id: 3,
    short: "TypeScript",
    title: "TypeScript, React, Node",
    summary: "The languages and libraries I use when I build my own apps.",
  },
  {
    id: 4,
    short: "A small SaaS",
    title: "A small SaaS",
    summary: "Auth, billing, and data boundaries, written down so the app stays clear.",
  },
  {
    id: 5,
    short: "Model output",
    title: "Reliable model output",
    summary: "Schemas, validation, retries, and a fallback when the model keeps failing.",
  },
  {
    id: 6,
    short: "Retrieval",
    title: "Retrieval with sources",
    summary: "Chunking, citations, freshness, and tests so answers can be checked.",
  },
  {
    id: 7,
    short: "Production",
    title: "Running it in production",
    summary: "Approvals, traces, cost, model routing, and safety.",
  },
];
