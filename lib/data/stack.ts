export type StackGroup = {
  id: string;
  title: string;
  items: { name: string; note?: string }[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "ai",
    title: "AI & Agents",
    items: [
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "Cursor" },
      { name: "OpenAI" },
      { name: "Python", note: "RAG · evals" },
      { name: "Gemini" },
      { name: "OpenRouter", note: "model routing" },
      { name: "MCP servers", note: "tool integrations" },
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
      { name: "Supabase", note: "auth · Postgres · pgvector" },
      { name: "Git / REST APIs" },
    ],
  },
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
    title: "Agentic coding",
    body: "Claude Code, Codex, and Cursor run the loop: inspect, plan, implement, test, review. Each repo has instructions so the agent follows the same architecture and commands I would.",
  },
  {
    title: "AI in production",
    body: "I have shipped RAG assistants and chatbots for large educator platforms, plus triage playbooks for repeat issues. Python, OpenAI, pgvector, custom WordPress plugins, tests, handover.",
  },
  {
    title: "AI systems engineering",
    body: "Structured outputs, retrieval with citations, evals, traces, cost, model routing. The goal is systems that still work after launch.",
  },
];
