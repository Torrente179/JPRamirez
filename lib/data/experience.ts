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

export const roles: Role[] = [
  {
    slug: "memberdev",
    company: "MemberDev",
    title: "WebOps & DevOps · AI Systems",
    period: "Sep 2023 — Present",
    location: "Denver, CO, US · Remote · Freelance",
    current: true,
    companyBlurb:
      "A small agency that builds custom WordPress membership sites for coaches, educators and communities.",
    tagline: "Hosting, WordPress care and AI chat for membership sites",
    points: [
      "I look after the agency's WordPress membership sites: new features, hosting, plugins, DNS, security, and the day-to-day work that keeps them online.",
      "I build AI chat for these sites that reads their content and answers members' questions.",
      "I take on the bigger jobs too, like migrations, moving media off the server, and digging through logs when something is slow or broken.",
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
      "Managed cloud hosting for agencies and small businesses. I worked at Cloudways, which DigitalOcean bought in 2022.",
    tagline: "450+ hosting accounts, about $160K a month in revenue",
    points: [
      "I managed more than 450 web companies on managed cloud hosting, worth about $160K a month in recurring revenue.",
      "I ran account reviews that covered WordPress hosting, DNS, SSL, migrations, backups, server setup and performance.",
      "I watched for churn risk, upsell openings and badly configured servers, and turned what I found into a plan or an escalation.",
      "When a ticket wasn't enough, I brought in Support, Product and Engineering and worked it through with the customer.",
    ],
  },
  {
    slug: "hostinger",
    company: "Hostinger",
    title: "Technical Success Specialist · Web Hosting",
    period: "Aug 2020 — Jul 2022",
    location: "Lithuania · Remote",
    companyBlurb: "A big web hosting company with millions of customers.",
    tagline: "4,800+ customers helped over chat and email",
    points: [
      "I helped more than 4,800 customers over live chat and email in a busy hosting support queue.",
      "I fixed problems with hosting, domains, DNS, SSL, business email, WordPress, slow sites, backups and migrations.",
      "I tracked issues down with control panels, Chrome DevTools, a bit of HTML, CSS and PHP, and DNS tools.",
      "I walked people through connecting domains, turning on SSL and setting up email, and I documented the problems that kept coming back.",
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

/** Numbers that appear in the role points above, surfaced as metrics. */
export const highlights = [
  { value: String(memberdevSites.length), label: "Sites I maintain" },
  { value: "450+", label: "Hosting accounts, ~$160K MRR" },
  { value: "4,800+", label: "Customers helped" },
];

/** First remote role on the public history. */
export const remoteSince = { year: "2020", label: "Remote since August" };
