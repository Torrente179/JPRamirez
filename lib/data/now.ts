import type { Text } from "@/lib/i18n";

export type StatusCard<S = string> = {
  label: S;
  tone: "ok" | "brand";
  title: S;
  body: S;
  /** unprefixed path; the page adds the language */
  href: string;
  meta: S;
};

export const statusBoard: StatusCard<Text>[] = [
  {
    label: { en: "Now", es: "Ahora" },
    tone: "brand",
    title: { en: "Learning AI systems", es: "Aprendiendo sistemas de IA" },
    body: {
      en: "I'm going deep on coding agents and on getting reliable answers out of models.",
      es: "Me estoy metiendo a fondo en los agentes de programación y en cómo obtener respuestas confiables de los modelos.",
    },
    href: "/now",
    meta: { en: "studying", es: "estudiando" },
  },
  {
    label: { en: "Work", es: "Trabajo" },
    tone: "ok",
    title: { en: "MemberDev", es: "MemberDev" },
    body: {
      en: "I run the hosting and day-to-day of WordPress membership sites, and I build the AI chat on them.",
      es: "Me encargo del hosting y del día a día de sitios de membresía en WordPress, y desarrollo su chat de IA.",
    },
    href: "/experience",
    meta: { en: "since 2023", es: "desde 2023" },
  },
  {
    label: { en: "Shipping", es: "Lanzamiento" },
    tone: "brand",
    title: { en: "QBank", es: "QBank" },
    body: {
      en: "The question bank I built for Obesity Medicine Review went live on 1 October. Members answered 163,000 questions in the first two weeks.",
      es: "El banco de preguntas que desarrollé para Obesity Medicine Review se lanzó el 1 de octubre. En las dos primeras semanas, los miembros respondieron 163 000 preguntas.",
    },
    href: "/projects/qbank",
    meta: { en: "live", es: "en producción" },
  },
];

export type StudyTopic<S = string> = {
  id: number;
  short: S;
  title: S;
  summary: S;
};

export const studyTopics: StudyTopic<Text>[] = [
  {
    id: 1,
    short: { en: "Agents", es: "Agentes" },
    title: { en: "Agentic coding", es: "Programación con agentes" },
    summary: {
      en: "Working with Claude Code, Codex and Cursor on real repos, from planning a change to reviewing it.",
      es: "Trabajo con Claude Code, Codex y Cursor en repos reales, desde planear un cambio hasta revisarlo.",
    },
  },
  {
    id: 2,
    short: { en: "Debugging", es: "Depuración" },
    title: { en: "Debugging, SQL, Git", es: "Depuración, SQL, Git" },
    summary: {
      en: "The basics I lean on every day, practised on small tasks until they're quick.",
      es: "Lo básico en lo que me apoyo cada día, practicado en tareas pequeñas hasta que me sale rápido.",
    },
  },
  {
    id: 3,
    short: { en: "TypeScript", es: "TypeScript" },
    title: { en: "TypeScript, React, Node", es: "TypeScript, React, Node" },
    summary: {
      en: "What I use to build my own apps.",
      es: "Lo que uso para construir mis propias apps.",
    },
  },
  {
    id: 4,
    short: { en: "A small SaaS", es: "Un SaaS pequeño" },
    title: { en: "A small SaaS", es: "Un SaaS pequeño" },
    summary: {
      en: "Auth, billing and data boundaries, written down before I build so the app stays easy to reason about.",
      es: "Autenticación, cobros y límites de datos, definidos por escrito antes de construir para que la app siga siendo fácil de entender.",
    },
  },
  {
    id: 5,
    short: { en: "Model output", es: "Respuestas" },
    title: { en: "Reliable model output", es: "Respuestas confiables del modelo" },
    summary: {
      en: "Schemas, validation and retries, plus a fallback for when the model keeps getting it wrong.",
      es: "Esquemas, validación y reintentos, además de un plan B para cuando el modelo sigue equivocándose.",
    },
  },
  {
    id: 6,
    short: { en: "Retrieval", es: "Recuperación" },
    title: { en: "Retrieval with sources", es: "Recuperación con fuentes" },
    summary: {
      en: "Chunking, citations and keeping content fresh, with tests so every answer can be checked.",
      es: "Fragmentación, citas y contenido siempre al día, con pruebas para que cada respuesta se pueda verificar.",
    },
  },
  {
    id: 7,
    short: { en: "Production", es: "Producción" },
    title: { en: "Running it in production", es: "Operarlo en producción" },
    summary: {
      en: "Approvals, tracing, cost, deciding which model handles what, and safety.",
      es: "Aprobaciones, trazas, costos, qué modelo se encarga de qué, y seguridad.",
    },
  },
];
