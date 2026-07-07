export type Role = {
  slug: string;
  company: string;
  title: string;
  period: string;
  location: string;
  companyBlurb: string;
  points: string[];
  shipped?: string[];
};

export const roles: Role[] = [
  {
    slug: "memberdev",
    company: "MemberDev",
    title: "Customer Success Engineer · WebOps & AI-Assisted Support",
    period: "Sep 2023 — Present",
    location: "Denver, CO, US · Remote · Freelance",
    companyBlurb:
      "Agency building custom membership platforms on WordPress for creators and businesses.",
    points: [
      "Own WordPress membership and SaaS-style client support across Kinsta, AWS, Cloudways, DNS, Cloudflare, QA, and post-launch stability.",
      "Investigate issues across plugins, themes, PHP, forms, custom fields, permissions, user flows, cache behavior, and hosting configuration.",
      "Build targeted code fixes and small custom WordPress plugins when a support or workflow problem needs a lightweight technical solution.",
      "Design and test AI-assisted workflows for technical research, troubleshooting, documentation, QA, and support operations.",
      "Create playbooks, tutorials, and process documentation that help the team resolve repeat issues consistently.",
    ],
    shipped: [
      "warwickschiller.com DNS migration",
      "mdp-direct-s3-uploader plugin",
      "Cloudflare R2/CDN rewrite tooling",
      "Multi-GB MySQL/InnoDB migration",
      "AI triage playbooks",
    ],
  },
  {
    slug: "cloudways",
    company: "Cloudways · DigitalOcean",
    title: "Technical Account Manager",
    period: "Jun 2022 — Apr 2023",
    location: "New York, US · Remote",
    companyBlurb:
      "Managed cloud hosting platform for agencies and SMBs, acquired by DigitalOcean in 2022.",
    points: [
      "Managed 450+ customer accounts across managed cloud hosting environments, representing about $160K+ in monthly recurring revenue.",
      "Owned account reviews across WordPress hosting, DNS, SSL, migrations, backups, server configuration, performance, plugins, and adoption blockers.",
      "Identified churn signals, expansion fit, technical risks, and configuration gaps; translated findings into success actions and escalation paths.",
      "Partnered with Support, Sales, Product, and Engineering to protect account health and communicate customer feedback.",
    ],
  },
  {
    slug: "hostinger",
    company: "Hostinger International",
    title: "Customer Success Specialist · Web Hosting Support",
    period: "Aug 2020 — Jul 2022",
    location: "Lithuania · Remote",
    companyBlurb:
      "One of the world's largest web hosting providers, serving millions of customers.",
    points: [
      "Supported 4,800+ customers in a high-volume remote hosting environment through live chat and written technical support.",
      "Troubleshot hosting, domains, DNS, SSL, business email, WordPress, CMS issues, website performance, backups, and migrations.",
      "Used hosting control panels, Chrome DevTools, HTML, CSS, PHP fundamentals, and DNS tools to resolve site-level problems.",
      "Guided website setup, domain connection, SSL activation, email configuration, and recurring issue documentation.",
    ],
  },
  {
    slug: "5ca",
    company: "5CA — Epic Games",
    title: "Player Support Specialist",
    period: "Mar 2019 — Mar 2020",
    location: "Netherlands · Remote",
    companyBlurb:
      "Remote-first CX company; embedded with Epic Games player support for Fortnite.",
    points: [
      "Provided remote Epic Games / Fortnite support for account, billing, access, technical, and gameplay-related inquiries.",
      "Troubleshot user accounts, payments, platform compatibility, bugs, access problems, and player experience cases.",
      "Documented interactions, identified recurring issues, escalated cases, and built a foundation in remote high-volume troubleshooting.",
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
