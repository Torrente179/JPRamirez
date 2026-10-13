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
    title: "Learning AI systems",
    body: "I'm going deep on coding agents and on getting reliable answers out of models.",
    href: "/now",
    meta: "studying",
  },
  {
    label: "Work",
    tone: "ok",
    title: "MemberDev",
    body: "I run the hosting and day-to-day of WordPress membership sites, and I build the AI chat on them.",
    href: "/experience",
    meta: "since 2023",
  },
  {
    label: "Shipping",
    tone: "brand",
    title: "QBank",
    body: "The question bank I built for Obesity Medicine Review went live on 1 October. Members answered 163,000 questions in the first two weeks.",
    href: "/projects/qbank",
    meta: "live",
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
      "Working with Claude Code, Codex and Cursor on real repos, from planning a change to reviewing it.",
  },
  {
    id: 2,
    short: "Debugging",
    title: "Debugging, SQL, Git",
    summary: "The basics I lean on every day, practised on small tasks until they're quick.",
  },
  {
    id: 3,
    short: "TypeScript",
    title: "TypeScript, React, Node",
    summary: "What I use to build my own apps.",
  },
  {
    id: 4,
    short: "A small SaaS",
    title: "A small SaaS",
    summary:
      "Auth, billing and data boundaries, written down before I build so the app stays easy to reason about.",
  },
  {
    id: 5,
    short: "Model output",
    title: "Reliable model output",
    summary:
      "Schemas, validation and retries, plus a fallback for when the model keeps getting it wrong.",
  },
  {
    id: 6,
    short: "Retrieval",
    title: "Retrieval with sources",
    summary:
      "Chunking, citations and keeping content fresh, with tests so every answer can be checked.",
  },
  {
    id: 7,
    short: "Production",
    title: "Running it in production",
    summary: "Approvals, tracing, cost, deciding which model handles what, and safety.",
  },
];
