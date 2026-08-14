export type MaintainedSite = {
  name: string;
  url: string;
};

export type Role = {
  slug: string;
  company: string;
  title: string;
  period: string;
  location: string;
  companyBlurb: string;
  tagline: string;
  points: string[];
  shipped?: string[];
  sites?: MaintainedSite[];
  current?: boolean;
};

/** Confirmed production URLs from MemberDev SITES.md (2026-07-16) + OMR. */
export const memberdevSites: MaintainedSite[] = [
  { name: "Adam Block Studios", url: "https://adamblockstudios.com" },
  { name: "Adventure of Fatherhood", url: "https://members.adventureoffatherhood.com" },
  { name: "Art Feeds Online", url: "https://online.artfeeds.org" },
  { name: "BLI Academy", url: "https://bli.academy" },
  { name: "Boldheart", url: "https://member.boldheart.com" },
  { name: "Brave Clan", url: "https://braveclan.com" },
  { name: "Chirag Shah Coaching", url: "https://community.chiragshahcoaching.com" },
  { name: "Choice Literacy", url: "https://choiceliteracy.com" },
  { name: "Club Cal Online", url: "https://clubcalonline.com" },
  { name: "Compass Fitness Denver", url: "https://online.compassfitnessdenver.com" },
  { name: "Conscious Learning", url: "https://learn.conscious.is" },
  { name: "Conscious Public", url: "https://conscious.is" },
  { name: "ECG Weekly", url: "https://ecgweekly.com" },
  { name: "Evolve the Mastermind", url: "https://evolvethemastermind.com" },
  { name: "Front Row Dads", url: "https://brotherhood.frontrowdads.com" },
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
  { name: "Texas Council", url: "https://txcouncil.com" },
  { name: "Texas Council Community", url: "https://intranet.txcouncil.com" },
  { name: "Virtual HYA", url: "https://virtualhya.com" },
  { name: "Warwick Schiller", url: "https://videos.warwickschiller.com" },
  { name: "Xchange", url: "https://learninglab.xchangeapproach.com" },
  { name: "Yoga Trade", url: "https://yogatrade.com" },
];

export const roles: Role[] = [
  {
    slug: "memberdev",
    company: "MemberDev",
    title: "WebOps & DevOps · AI Systems",
    period: "Sep 2023 — Present",
    location: "Denver, CO, US · Remote · Freelance",
    current: true,
    companyBlurb:
      "Agency building custom membership platforms on WordPress for coaches, educators, and community owners.",
    tagline:
      "Production WordPress, memberships, and AI assistants for educator platforms",
    points: [
      "Own production WordPress membership platforms — MemberMouse, MemberPress, BuddyBoss — across hosting, DNS, Cloudflare, QA, and post-launch stability.",
      "Shipped a production RAG assistant for a large online training platform using Python, Supabase pgvector, OpenAI, and a custom WordPress plugin, with a verification suite and documented handover.",
      "Built a second AI chatbot for another large educator platform; more in the pipeline.",
      "Led live DNS cutovers and multi-GB MySQL/InnoDB migrations with data validation.",
      "Shipped a direct-to-S3 uploader for 5GB+ files and a Cloudflare R2 URL-rewrite plugin; performance and security remediation plus AI support-triage playbooks.",
    ],
    shipped: [
      "Production RAG assistant",
      "warwickschiller.com DNS migration",
      "mdp-direct-s3-uploader plugin",
      "Cloudflare R2/CDN rewrite tooling",
      "Multi-GB MySQL/InnoDB migration",
      "AI triage playbooks",
    ],
    sites: memberdevSites,
  },
  {
    slug: "digitalocean",
    company: "DigitalOcean",
    title: "Technical Account Manager",
    period: "Jul 2022 — May 2023",
    location: "New York, US · Remote",
    companyBlurb:
      "Cloud hosting for agencies and SMBs — Cloudways, acquired by DigitalOcean in 2022.",
    tagline: "450+ hosting accounts representing about $160K MRR",
    points: [
      "Managed 450+ high-profile web organizations across managed cloud hosting, representing about $160K in monthly recurring revenue.",
      "Conducted account reviews across WordPress hosting, DNS, SSL, migrations, backups, server configuration, and performance.",
      "Identified churn signals, expansion fit, technical risks, and configuration gaps; translated findings into success actions and escalation paths.",
      "Coordinated escalations across customers, Support, Product, and Engineering to protect account health.",
    ],
  },
  {
    slug: "hostinger",
    company: "Hostinger",
    title: "Technical Success Specialist · Web Hosting",
    period: "Aug 2020 — Jul 2022",
    location: "Lithuania · Remote",
    companyBlurb:
      "One of the world's largest web hosting providers, serving millions of customers.",
    tagline: "4,800+ customers in a high-volume hosting environment",
    points: [
      "Supported 4,800+ customers in a high-volume hosting environment through live chat and written technical support.",
      "Troubleshot hosting, domains, DNS, SSL, business email, WordPress, site performance, backups, and migrations.",
      "Used hosting control panels, Chrome DevTools, HTML, CSS, PHP fundamentals, and DNS tools to resolve site-level problems.",
      "Guided website setup, domain connection, SSL activation, email configuration, and recurring issue documentation.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Foreign Trade",
    org: "Universidad del Valle",
    year: "2014",
  },
  { title: "CS50 — Computer Science Foundations", org: "Harvard / edX", year: "" },
  { title: "Responsive Web Design", org: "freeCodeCamp", year: "" },
];
