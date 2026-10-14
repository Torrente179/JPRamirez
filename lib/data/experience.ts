import type { Text } from "@/lib/i18n";

export type MaintainedSite = {
  name: string;
  url: string;
};

/** `S` is Text in the data below and a string once localized. */
export type Role<S = string> = {
  slug: string;
  company: string;
  title: S;
  period: S;
  location: S;
  companyBlurb: S;
  tagline: S;
  points: S[];
  sites?: MaintainedSite[];
  current?: boolean;
};

/** Apex domains for MemberDev sites (2026-07-16 SITES.md + OMR). */
export const memberdevSites: MaintainedSite[] = [
  { name: "Adam Block Studios", url: "https://adamblockstudios.com" },
  { name: "Adventure of Fatherhood", url: "https://adventureoffatherhood.com" },
  { name: "Art Feeds Online", url: "https://artfeeds.org" },
  { name: "BLI Academy", url: "https://bli.academy" },
  { name: "Boldheart", url: "https://boldheart.com" },
  { name: "Brave Clan", url: "https://braveclan.com" },
  { name: "Chirag Shah Coaching", url: "https://chiragshahcoaching.com" },
  { name: "Choice Literacy", url: "https://choiceliteracy.com" },
  { name: "Club Cal Online", url: "https://clubcalonline.com" },
  { name: "Compass Fitness Denver", url: "https://compassfitnessdenver.com" },
  { name: "Conscious Learning", url: "https://conscious.is" },
  { name: "Conscious Public", url: "https://conscious.is" },
  { name: "ECG Weekly", url: "https://ecgweekly.com" },
  { name: "Evolve the Mastermind", url: "https://evolvethemastermind.com" },
  { name: "Front Row Dads", url: "https://frontrowdads.com" },
  { name: "Garrett Movement", url: "https://garrettmovement.com" },
  { name: "Genius of You", url: "https://geniusofyou.com" },
  { name: "Ladies Working Dog Group", url: "https://ladiesworkingdoggroup.com" },
  { name: "Making Justice Work", url: "https://makingjusticework.org" },
  { name: "Obesity Medicine Review", url: "https://obesitymedicinereview.com" },
  { name: "Paloma Piano", url: "https://palomapiano.com" },
  { name: "Physio Anywhere", url: "https://physioanywhere.co" },
  { name: "Piano With Jonny", url: "https://pianowithjonny.com" },
  { name: "Pink Gloves Boxing", url: "https://pinkglovesboxing.com" },
  { name: "Professionally Integrated", url: "https://professionallyintegrated.com" },
  { name: "Recruiting Daily", url: "https://recruitingdaily.com" },
  { name: "SLP Video Games", url: "https://slpvideogames.com" },
  { name: "Virtual HYA", url: "https://virtualhya.com" },
  { name: "Warwick Schiller", url: "https://warwickschiller.com" },
  { name: "Xchange", url: "https://xchangeapproach.com" },
  { name: "Yoga Trade", url: "https://yogatrade.com" },
];


export const roles: Role<Text>[] = [
  {
    slug: "memberdev",
    company: "MemberDev",
    title: { en: "WebOps & DevOps · AI Systems", es: "WebOps y DevOps · Sistemas de IA" },
    period: { en: "Sep 2023 — Present", es: "sept. 2023 — actualidad" },
    location: {
      en: "Denver, CO, US · Remote · Freelance",
      es: "Denver, CO, EE. UU. · Remoto · Freelance",
    },
    current: true,
    companyBlurb: {
      en: "A small agency that builds custom WordPress membership sites for coaches, educators and communities.",
      es: "Una agencia pequeña que crea sitios de membresía a medida en WordPress para coaches, educadores y comunidades.",
    },
    tagline: {
      en: "Hosting, WordPress care and AI chat for membership sites",
      es: "Hosting, mantenimiento de WordPress y chat de IA para sitios de membresía",
    },
    points: [
      {
        en: "I look after the agency's WordPress membership sites: new features, hosting, plugins, DNS, security, and the day-to-day work that keeps them online.",
        es: "Me encargo de los sitios de membresía en WordPress de la agencia: funciones nuevas, hosting, plugins, DNS, seguridad y el trabajo del día a día que los mantiene en línea.",
      },
      {
        en: "I build AI chat for these sites that reads their content and answers members' questions.",
        es: "Desarrollo chats de IA para estos sitios, que leen su contenido y responden las preguntas de los miembros.",
      },
      {
        en: "I built QBank, the question bank Obesity Medicine Review's members use to study for their board exam. It replaced SpeedExam in October 2026.",
        es: "Desarrollé QBank, el banco de preguntas con el que los miembros de Obesity Medicine Review estudian para su examen de certificación. Reemplazó a SpeedExam en octubre de 2026.",
      },
      {
        en: "I take on the bigger jobs too, like migrations, moving media off the server, and digging through logs when something is slow or broken.",
        es: "También me ocupo de los trabajos más grandes, como migraciones, sacar los archivos multimedia del servidor y revisar los logs cuando algo va lento o deja de funcionar.",
      },
    ],
    sites: memberdevSites,
  },
  {
    slug: "digitalocean",
    company: "DigitalOcean",
    title: { en: "Technical Account Manager", es: "Gerente técnico de cuentas" },
    period: { en: "Jul 2022 — May 2023", es: "jul. 2022 — may. 2023" },
    location: { en: "New York, US · Remote", es: "Nueva York, EE. UU. · Remoto" },
    companyBlurb: {
      en: "Managed cloud hosting for agencies and small businesses. I worked at Cloudways, which DigitalOcean bought in 2022.",
      es: "Hosting administrado en la nube para agencias y pequeñas empresas. Trabajé en Cloudways, que DigitalOcean compró en 2022.",
    },
    tagline: {
      en: "450+ hosting accounts, about $160K a month in revenue",
      es: "Más de 450 cuentas de hosting, unos 160 000 USD al mes en ingresos",
    },
    points: [
      {
        en: "I managed more than 450 web companies on managed cloud hosting, worth about $160K a month in recurring revenue.",
        es: "Gestioné más de 450 empresas web con hosting administrado en la nube, que sumaban unos 160 000 USD al mes en ingresos recurrentes.",
      },
      {
        en: "I ran account reviews that covered WordPress hosting, DNS, SSL, migrations, backups, server setup and performance.",
        es: "Hacía revisiones de cuentas que cubrían hosting de WordPress, DNS, SSL, migraciones, copias de seguridad, configuración de servidores y rendimiento.",
      },
      {
        en: "I watched for churn risk, upsell openings and badly configured servers, and turned what I found into a plan or an escalation.",
        es: "Estaba atento al riesgo de cancelación, a las oportunidades de upsell y a los servidores mal configurados, y convertía lo que encontraba en un plan o en un escalamiento.",
      },
      {
        en: "When a ticket wasn't enough, I brought in Support, Product and Engineering and worked it through with the customer.",
        es: "Cuando un ticket no bastaba, sumaba a Soporte, Producto e Ingeniería y lo resolvíamos junto con el cliente.",
      },
    ],
  },
  {
    slug: "hostinger",
    company: "Hostinger",
    title: {
      en: "Technical Success Specialist · Web Hosting",
      es: "Especialista en éxito técnico · Hosting web",
    },
    period: { en: "Aug 2020 — Jul 2022", es: "ago. 2020 — jul. 2022" },
    location: { en: "Lithuania · Remote", es: "Lituania · Remoto" },
    companyBlurb: {
      en: "A big web hosting company with millions of customers.",
      es: "Una gran empresa de hosting web con millones de clientes.",
    },
    tagline: {
      en: "4,800+ customers helped over chat and email",
      es: "Más de 4800 clientes atendidos por chat y correo",
    },
    points: [
      {
        en: "I helped more than 4,800 customers over live chat and email in a busy hosting support queue.",
        es: "Atendí a más de 4800 clientes por chat en vivo y por correo, en una cola de soporte de hosting con mucho volumen.",
      },
      {
        en: "I fixed problems with hosting, domains, DNS, SSL, business email, WordPress, slow sites, backups and migrations.",
        es: "Resolví problemas de hosting, dominios, DNS, SSL, correo corporativo, WordPress, sitios lentos, copias de seguridad y migraciones.",
      },
      {
        en: "I tracked issues down with control panels, Chrome DevTools, a bit of HTML, CSS and PHP, and DNS tools.",
        es: "Encontraba el origen de cada problema con paneles de control, Chrome DevTools, algo de HTML, CSS y PHP, y herramientas de DNS.",
      },
      {
        en: "I walked people through connecting domains, turning on SSL and setting up email, and I documented the problems that kept coming back.",
        es: "Guiaba a los clientes paso a paso para conectar dominios, activar SSL y configurar el correo, y documentaba los problemas que se repetían.",
      },
    ],
  },
];

export const education: { title: Text; org: string; year: string }[] = [
  {
    title: { en: "Bachelor of Foreign Trade", es: "Profesional en Comercio Exterior" },
    org: "Universidad del Valle",
    year: "2014",
  },
  {
    title: {
      en: "CS50 — Computer Science Foundations",
      es: "CS50 — Fundamentos de ciencias de la computación",
    },
    org: "Harvard / edX",
    year: "",
  },
  {
    title: { en: "Responsive Web Design", es: "Diseño web responsivo" },
    org: "freeCodeCamp",
    year: "",
  },
];

/**
 * Numbers that appear in the role points above, surfaced as metrics.
 * Spanish follows the RAE: no separator in four digits, a non-breaking space
 * from five (4800, 160 000).
 */
export const highlights: { value: Text; label: Text }[] = [
  {
    value: { en: String(memberdevSites.length), es: String(memberdevSites.length) },
    label: { en: "Sites I maintain", es: "Sitios que mantengo" },
  },
  {
    value: { en: "450+", es: "450+" },
    label: { en: "Hosting accounts, ~$160K MRR", es: "Cuentas de hosting, ~160 000 USD/mes" },
  },
  {
    value: { en: "4,800+", es: "4800+" },
    label: { en: "Customers helped", es: "Clientes atendidos" },
  },
];

/** First remote role on the public history. */
export const remoteSince = {
  year: "2020",
  label: { en: "Remote since August", es: "Remoto desde agosto" },
};
