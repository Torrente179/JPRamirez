import type { ReactNode } from "react";

export function SectionHeading({
  title,
  aside,
  as: Tag = "h2",
  size = "lg",
}: {
  title: ReactNode;
  aside?: ReactNode;
  as?: "h2" | "h3";
  size?: "lg" | "md";
}) {
  return (
    <div
      data-reveal
      className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 md:mb-12"
    >
      <Tag
        className={
          size === "lg"
            ? "text-[clamp(2.4rem,5vw,4.5rem)] leading-none font-medium tracking-[-0.045em]"
            : "text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-medium tracking-[-0.04em]"
        }
      >
        {title}
      </Tag>
      {aside && <div className="flex flex-wrap items-center gap-4">{aside}</div>}
    </div>
  );
}
