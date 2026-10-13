export const site = {
  name: "Juan Pablo Ramirez",
  fullName: "Juan Pablo Ramirez Romero",
  role: "AI Engineer · DevOps · WebOps",
  headline:
    "I'm an AI engineer based in Málaga. I build AI chat and agent tools that work from a site's own content, and I keep the hosting and WordPress side of those sites running. I work in English and Spanish.",
  email: "pablopablo179@gmail.com",
  linkedin: "https://www.linkedin.com/in/juan-pablo-ramirez-romero",
  /** the nav's Contact me button opens a WhatsApp chat */
  whatsapp: "https://wa.me/34676568366",
  instagram: { handle: "@soyjpramirez", href: "https://www.instagram.com/soyjpramirez/" },
  location: "Málaga, Spain",
  availability: "Remote · EU/Americas overlap",
  languages: ["English", "Spanish"],
  url: "https://jpramirez.dev",
  cv: {
    href: "/cv.pdf",
    filename: "Juan_Pablo_Ramirez_Romero_CV.pdf",
  },
  /** cut out of the seafront portrait with on-device segmentation */
  heroCutout: { src: "/images/hero/jp-depth.webp", width: 1594, height: 2609 },
  /** the same photo with its background, for Open Graph and schema */
  portrait: "/images/hero/jp-depth-portrait.jpg",
} as const;
