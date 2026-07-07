export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  quote: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Muhammad Zaafir",
    title: "Senior Customer Success Leader, Enterprise SaaS",
    relationship: "Managed Juan Pablo directly at Cloudways",
    quote:
      "Juan consistently demonstrates a high standard of professionalism and possesses a deep understanding of cloud technology. His follow-through skills are exceptional, setting him apart from his peers. His ability to remain calm under pressure and to anticipate potential issues, always considering the customer's point of view, is highly commendable.",
  },
  {
    name: "Artūras Savanoris",
    title: "Customer Success Engineer, Cloudways by DigitalOcean",
    relationship: "Worked with Juan Pablo on the same team",
    quote:
      "Juan is highly skilled at process documentation and has a keen eye for detail. He is adept at analyzing complex information and presenting it in a clear and concise manner, making him an invaluable asset to any project. His positive attitude and commitment to excellence make him a pleasure to work with.",
  },
];
