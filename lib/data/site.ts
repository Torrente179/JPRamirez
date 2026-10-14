export const site = {
  name: "Juan Pablo Ramirez",
  fullName: "Juan Pablo Ramirez Romero",
  role: {
    en: "AI Engineer · DevOps · WebOps",
    es: "Ingeniero de IA · DevOps · WebOps",
  },
  headline: {
    en: "I'm an AI engineer based in Málaga. I build AI chat and agent tools that work from a site's own content, and I keep the hosting and WordPress side of those sites running. I work in English and Spanish.",
    es: "Soy ingeniero de IA y vivo en Málaga. Desarrollo chats y agentes de IA que trabajan con el contenido de cada sitio, y me encargo de que el hosting y el WordPress de esos sitios sigan funcionando. Trabajo en inglés y en español.",
  },
  email: "pablopablo179@gmail.com",
  linkedin: "https://www.linkedin.com/in/juan-pablo-ramirez-romero",
  /** the nav's Contact me button opens a WhatsApp chat */
  whatsapp: "https://wa.me/34676568366",
  instagram: { handle: "@soyjpramirez", href: "https://www.instagram.com/soyjpramirez/" },
  location: { en: "Málaga, Spain", es: "Málaga, España" },
  availability: {
    en: "Remote · EU/Americas overlap",
    es: "Remoto · horario de Europa y América",
  },
  languages: { en: "English and Spanish", es: "Inglés y español" },
  url: "https://jpramirez.dev",
  /** the CV is in English for both versions of the site */
  cv: {
    href: "/cv.pdf",
    filename: "jpRamirez.pdf",
  },
  /** cut out of the seafront portrait with on-device segmentation */
  heroCutout: { src: "/images/hero/jp-depth.webp", width: 1594, height: 2609 },
  /** the same photo with its background, for schema */
  portrait: "/images/hero/jp-depth-portrait.jpg",
  /** link preview per language, drawn by scripts/og/render.mjs */
  og: {
    width: 1200,
    height: 630,
    src: { en: "/og/en.jpg", es: "/og/es.jpg" },
    alt: {
      en: 'Juan Pablo Ramirez, AI engineer, in front of his surname, with the line "I build AI tools and look after the infrastructure under them."',
      es: "Juan Pablo Ramirez, ingeniero de IA, delante de su apellido, con la frase “Construyo herramientas de IA y cuido la infraestructura que las sostiene”.",
    },
  },
} as const;
