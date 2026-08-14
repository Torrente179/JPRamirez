export type AboutPhoto = {
  src: string;
  alt: string;
  position?: string;
};

export const aboutPhotos: AboutPhoto[] = [
  {
    src: "/images/about/pantheon.jpg",
    alt: "JP and a friend in front of the Panthéon in Paris",
    position: "center 42%",
  },
  {
    src: "/images/about/hilltop.jpg",
    alt: "JP and a friend on a rocky hilltop",
    position: "center 62%",
  },
  {
    src: "/images/about/motorcycle.jpg",
    alt: "JP on a motorcycle with a snow-capped mountain behind him",
    position: "32% 50%",
  },
  {
    src: "/images/about/clouds.jpg",
    alt: "JP and a friend with motorcycles above the clouds",
    position: "68% 42%",
  },
  {
    src: "/images/about/sunset.jpg",
    alt: "JP standing in a field at sunset",
    position: "center 38%",
  },
  {
    src: "/images/about/promenade.jpg",
    alt: "JP and a friend on a sunny promenade",
    position: "center 48%",
  },
];
