export type StackGroup = {
  id: string;
  title: string;
  items: { name: string; note?: string }[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "hosting",
    title: "Hosting & Infrastructure",
    items: [
      { name: "Kinsta", note: "managed WordPress" },
      { name: "Cloudways", note: "managed cloud" },
      { name: "DigitalOcean" },
      { name: "AWS", note: "S3 · EC2" },
      { name: "Cloudflare", note: "DNS · R2 · CDN" },
      { name: "Vercel" },
      { name: "DNS / SSL / cache", note: "migrations & debugging" },
    ],
  },
  {
    id: "wordpress",
    title: "WordPress & CMS",
    items: [
      { name: "WordPress", note: "core, multisite, debugging" },
      { name: "WooCommerce" },
      { name: "MemberMouse", note: "membership platforms" },
      { name: "ACF", note: "custom fields" },
      { name: "Gravity Forms" },
      { name: "Elementor" },
      { name: "Custom plugins", note: "small plugins" },
    ],
  },
  {
    id: "code",
    title: "Code & Data",
    items: [
      { name: "TypeScript / JavaScript" },
      { name: "React / Next.js" },
      { name: "HTML / CSS", note: "Tailwind" },
      { name: "PHP" },
      { name: "SQL / MySQL", note: "InnoDB tuning" },
      { name: "Supabase", note: "auth · Postgres · RLS" },
      { name: "Git / REST APIs" },
    ],
  },
  {
    id: "ai",
    title: "AI Tooling",
    items: [
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "Cursor" },
      { name: "Gemini" },
      { name: "OpenRouter", note: "model routing" },
      { name: "MCP servers", note: "tool integrations" },
    ],
  },
  {
    id: "support",
    title: "Support Operations",
    items: [
      { name: "Technical account management" },
      { name: "SaaS implementation" },
      { name: "Escalations / SLA" },
      { name: "QA & bug reproduction" },
      { name: "Docs & playbooks" },
      { name: "Customer success" },
    ],
  },
];

export const aiPractice = [
  {
    title: "How I use coding agents",
    body: "Claude Code, Codex, and Cursor inspect, plan, implement, test, and review. Each repo has instructions so they follow the same architecture and commands I would.",
  },
  {
    title: "AI in support work",
    body: "I use it on high-volume parts of the job: triage notes for issues we see a lot, QA checklists, reproduction steps, docs, and draft replies. A person still reads everything before it goes out.",
  },
  {
    title: "What I'm studying next",
    body: "How to make AI systems reliable in production: structured outputs, validation, retrieval with citations, evals, traces, and cost. Longer term I want an AI copilot for WebOps support.",
  },
];
