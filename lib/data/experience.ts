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
      "A small agency that builds custom WordPress membership sites for coaches, educators, and communities.",
    tagline: "WordPress membership sites, plus AI assistants",
    points: [
      "I maintain the production WordPress membership sites (MemberMouse, MemberPress, BuddyBoss): hosting, DNS, Cloudflare, QA, and issues after launch.",
      "I shipped a RAG assistant for a large online training platform: Python, Supabase pgvector, OpenAI, and a custom WordPress plugin. It has a test suite and a handover doc.",
      "I built a second chatbot for another educator platform. More on the way.",
      "I've done live DNS cutovers and multi-GB MySQL/InnoDB migrations, with checks afterwards so we knew the data was intact.",
      "I wrote a plugin that uploads 5GB+ files straight to S3, and another that rewrites media URLs onto Cloudflare R2. Also some performance and security work, and AI playbooks for support triage.",
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
      "Cloud hosting for agencies and small businesses. Cloudways, acquired by DigitalOcean in 2022.",
    tagline: "450+ hosting accounts, about $160K MRR",
    points: [
      "I looked after 450+ web companies on managed cloud hosting, about $160K a month in recurring revenue.",
      "I did account reviews covering WordPress hosting, DNS, SSL, migrations, backups, server setup, and performance.",
      "I watched for churn, upsells, technical risk, and bad configs, then turned that into next steps or an escalation.",
      "I worked with customers, Support, Product, and Engineering when a ticket wasn't enough.",
    ],
  },
  {
    slug: "hostinger",
    company: "Hostinger",
    title: "Technical Success Specialist · Web Hosting",
    period: "Aug 2020 — Jul 2022",
    location: "Lithuania · Remote",
    companyBlurb: "A large web hosting company with millions of customers.",
    tagline: "4,800+ customers over live chat and email",
    points: [
      "I helped 4,800+ customers over live chat and email in a busy hosting queue.",
      "I fixed hosting, domains, DNS, SSL, business email, WordPress, slow sites, backups, and migrations.",
      "I used control panels, Chrome DevTools, some HTML/CSS/PHP, and DNS tools to find the problem.",
      "I walked people through connecting a domain, turning on SSL, setting up email, and wrote down the issues that kept coming back.",
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
