import type { Text } from "@/lib/i18n";

/** Product names stay as they are; descriptions come in both languages. */
export type StackGroup<S = string> = {
  id: string;
  title: S;
  items: { name: string | S; note?: S }[];
};

export const stackGroups: StackGroup<Text>[] = [
  {
    id: "ai",
    title: { en: "AI & Agents", es: "IA y agentes" },
    items: [
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "Cursor" },
      { name: "OpenAI" },
      { name: "Python", note: { en: "RAG · evals", es: "RAG · evals" } },
      { name: "Gemini" },
      { name: "OpenRouter", note: { en: "model routing", es: "enrutamiento de modelos" } },
      {
        name: { en: "MCP servers", es: "Servidores MCP" },
        note: { en: "tool integrations", es: "integración de herramientas" },
      },
    ],
  },
  {
    id: "code",
    title: { en: "Code & Data", es: "Código y datos" },
    items: [
      { name: "TypeScript / JavaScript" },
      { name: "React / Next.js" },
      { name: "HTML / CSS", note: { en: "Tailwind", es: "Tailwind" } },
      { name: "PHP" },
      { name: "SQL / MySQL", note: { en: "InnoDB tuning", es: "ajuste de InnoDB" } },
      { name: "Supabase", note: { en: "auth · Postgres · pgvector", es: "auth · Postgres · pgvector" } },
      { name: { en: "Git / REST APIs", es: "Git / APIs REST" } },
    ],
  },
  {
    id: "hosting",
    title: { en: "Hosting & Infrastructure", es: "Hosting e infraestructura" },
    items: [
      { name: "Kinsta", note: { en: "managed WordPress", es: "WordPress administrado" } },
      { name: "Cloudways", note: { en: "managed cloud", es: "nube administrada" } },
      { name: "DigitalOcean" },
      { name: "AWS", note: { en: "S3 · EC2", es: "S3 · EC2" } },
      { name: "Cloudflare", note: { en: "DNS · R2 · CDN", es: "DNS · R2 · CDN" } },
      { name: "Vercel" },
      {
        name: { en: "DNS / SSL / cache", es: "DNS / SSL / caché" },
        note: { en: "migrations & debugging", es: "migraciones y depuración" },
      },
    ],
  },
  {
    id: "wordpress",
    title: { en: "WordPress & CMS", es: "WordPress y CMS" },
    items: [
      {
        name: "WordPress",
        note: { en: "core, multisite, debugging", es: "core, multisitio, depuración" },
      },
      { name: "WooCommerce" },
      { name: "MemberMouse", note: { en: "membership platforms", es: "plataformas de membresía" } },
      { name: "ACF", note: { en: "custom fields", es: "campos personalizados" } },
      { name: "Gravity Forms" },
      { name: "Elementor" },
      {
        name: { en: "Custom plugins", es: "Plugins a medida" },
        note: { en: "small plugins", es: "plugins pequeños" },
      },
    ],
  },
  {
    id: "support",
    title: { en: "Support Operations", es: "Operaciones de soporte" },
    items: [
      { name: { en: "Technical account management", es: "Gestión técnica de cuentas" } },
      { name: { en: "SaaS implementation", es: "Implementación de SaaS" } },
      { name: { en: "Escalations / SLA", es: "Escalamientos / SLA" } },
      { name: { en: "QA & bug reproduction", es: "QA y reproducción de bugs" } },
      { name: { en: "Docs & playbooks", es: "Documentación y playbooks" } },
      { name: { en: "Customer success", es: "Éxito del cliente" } },
    ],
  },
];

export const aiPractice: { title: Text; body: Text }[] = [
  {
    title: { en: "Agentic coding", es: "Programación con agentes" },
    body: {
      en: "I write most code with Claude Code, Codex and Cursor. They read the repo, plan the change, write it and test it, and then I review it. Every repo has written instructions, so the agent follows the same architecture and commands I would.",
      es: "Escribo la mayor parte del código con Claude Code, Codex y Cursor. Leen el repo, planean el cambio, lo escriben y lo prueban, y después yo lo reviso. Cada repo tiene instrucciones por escrito, así que el agente sigue la misma arquitectura y los mismos comandos que seguiría yo.",
    },
  },
  {
    title: { en: "AI in production", es: "IA en producción" },
    body: {
      en: "I've shipped custom AI chat on WordPress membership sites. It has to fit into the site the client already has, not the other way round.",
      es: "He puesto en producción chats de IA a medida en sitios de membresía en WordPress. Tienen que encajar en el sitio que el cliente ya tiene, no al revés.",
    },
  },
  {
    title: { en: "AI systems engineering", es: "Ingeniería de sistemas de IA" },
    body: {
      en: "What I care about is how a system behaves after launch. That means structured outputs, retrieval with citations, evals, tracing, cost and choosing the right model for each job.",
      es: "Lo que me importa es cómo se comporta un sistema después del lanzamiento. Eso significa salidas estructuradas, recuperación con citas, evals, trazas, costos y elegir el modelo adecuado para cada tarea.",
    },
  },
];
