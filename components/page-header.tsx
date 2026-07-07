import { Stagger } from "@/components/motion";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <Stagger className="pt-24 pb-16 sm:pt-32 sm:pb-20">
      <p data-stagger className="eyebrow">
        {eyebrow}
      </p>
      <h1
        data-stagger
        className="mt-5 max-w-3xl text-4xl leading-[1.06] font-medium tracking-[-0.02em] sm:text-5xl md:text-6xl"
      >
        {title}
      </h1>
      {lede && (
        <p
          data-stagger
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {lede}
        </p>
      )}
    </Stagger>
  );
}
