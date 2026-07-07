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
      { name: "Custom plugins", note: "targeted fixes & tooling" },
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
    title: "Agents as development environments",
    body: "Claude Code, Codex, and Cursor are not typing assistants in my workflow — they run inspect → plan → implement → test → review loops, governed by repo-level instructions (CLAUDE.md, AGENTS.md, Cursor rules) that keep architecture, commands, and review standards inside the project.",
  },
  {
    title: "AI inside support operations",
    body: "I design AI-assisted workflows for the unglamorous parts of support that decide its quality: triage playbooks for repeat issue classes, QA checklists, bug-reproduction notes, documentation, and response drafts that a human always reviews.",
  },
  {
    title: "Building toward harness engineering",
    body: "The current study focus is what makes AI systems dependable in production: structured outputs and schemas, validation and repair loops, retrieval pipelines with citations, evals, traces, and cost control. The end goal is an AI WebOps support copilot.",
  },
];
