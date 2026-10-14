import type { Text } from "@/lib/i18n";

export type AboutPhoto<S = string> = {
  src: string;
  alt: S;
  position?: string;
};

export const aboutPhotos: AboutPhoto<Text>[] = [
  {
    src: "/images/about/pantheon.jpg",
    alt: {
      en: "JP and a friend in front of the Panthéon in Paris",
      es: "JP y una amiga frente al Panteón de París",
    },
    position: "center 42%",
  },
  {
    src: "/images/about/hilltop.jpg",
    alt: {
      en: "JP and a friend on a rocky hilltop",
      es: "JP y un amigo en la cima rocosa de un cerro",
    },
    position: "center 62%",
  },
  {
    src: "/images/about/motorcycle.jpg",
    alt: {
      en: "JP on a motorcycle with a snow-capped mountain behind him",
      es: "JP en moto con una montaña nevada detrás",
    },
    position: "32% 50%",
  },
  {
    src: "/images/about/clouds.jpg",
    alt: {
      en: "JP and a friend with motorcycles above the clouds",
      es: "JP y un amigo con sus motos por encima de las nubes",
    },
    position: "68% 42%",
  },
  {
    src: "/images/about/sunset.jpg",
    alt: {
      en: "JP standing in a field at sunset",
      es: "JP de pie en un campo al atardecer",
    },
    position: "center 38%",
  },
  {
    src: "/images/about/promenade.jpg",
    alt: {
      en: "JP and a friend on a sunny promenade",
      es: "JP y un amigo en un malecón soleado",
    },
    position: "center 48%",
  },
];
