import Image from "next/image";
import { ViewTransition } from "react";
import { Lock } from "lucide-react";
import { Ambient } from "@/components/ambient";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Variant = "card" | "frame" | "hero";

const sizes: Record<Variant, string> = {
  card: "(min-width: 1024px) 300px, 80vw",
  frame: "(min-width: 1024px) 640px, 92vw",
  hero: "(min-width: 1280px) 1260px, 96vw",
};

/**
 * A project's picture. The same `name` is used on Home, Projects and the case
 * study, so the browser morphs it from card to hero during navigation.
 */
export function ProjectMedia({
  project,
  variant,
  preload = false,
  className,
}: {
  project: Project;
  variant: Variant;
  preload?: boolean;
  className?: string;
}) {
  const media = project.media;
  const hero = variant === "hero";

  return (
    <ViewTransition name={`media-${project.slug}`} share="media">
      <div
        className={cn(
          "relative overflow-hidden bg-[#0a0b10]",
          hero ? "rounded-[20px]" : "rounded-[16px]",
          media.kind === "image" && hero ? "" : "aspect-[16/10]",
          hero && media.kind !== "image" && "aspect-auto md:aspect-[16/8]",
          className,
        )}
        style={
          media.kind === "image" && hero
            ? { aspectRatio: `${media.width} / ${media.height}` }
            : undefined
        }
      >
        {media.kind === "image" && (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes[variant]}
            preload={preload}
            quality={hero ? 85 : 75}
            className="object-cover object-left-top"
          />
        )}

        {media.kind === "icon" &&
          (hero ? (
            <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center gap-8 p-6 md:block md:min-h-0 md:p-0">
              <Ambient src={project.ambient} opacity={0.45} fade={false} />
              <Image
                src={media.src}
                alt={media.alt}
                width={512}
                height={512}
                preload={preload}
                className="relative size-28 rounded-[28px] shadow-[0_40px_80px_rgba(0,0,0,0.55)] md:absolute md:top-1/2 md:left-1/2 md:size-48 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[44px]"
              />
              <ul className="relative grid w-full gap-2 sm:grid-cols-2 md:contents">
                {media.callouts.map((c, i) => (
                  <li
                    key={c.label}
                    className={cn(
                      "glass rounded-2xl px-4 py-3 text-[15px] md:absolute md:bg-white/8",
                      i === 0 && "md:top-[20%] md:left-[11%]",
                      i === 1 && "md:top-[26%] md:right-[11%]",
                      i === 2 && "md:bottom-[20%] md:left-[16%]",
                      i === 3 && "md:right-[15%] md:bottom-[18%]",
                    )}
                  >
                    <span className="block meta text-[11px]">{c.label}</span>
                    {c.value}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={media.src}
                alt={media.alt}
                width={512}
                height={512}
                sizes="120px"
                className={cn(
                  "rounded-[22%] shadow-[0_24px_48px_rgba(0,0,0,0.5)]",
                  variant === "frame" ? "size-32 md:size-36" : "size-20",
                )}
              />
            </div>
          ))}

        {media.kind === "private" &&
          (hero ? (
            <div className="flex h-full flex-col gap-5 p-5 md:p-10">
              <div className="flex flex-wrap justify-between gap-3">
                <span className="label">{media.sections.length} sections</span>
                <span className="meta">Private beta</span>
              </div>
              <ul className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4">
                {media.sections.map((s, i) => (
                  <li
                    key={s.name}
                    className="glass flex min-h-32 flex-col justify-between rounded-[20px] p-5 md:min-h-52 md:p-6"
                  >
                    <span className="meta text-brand">0{i + 1}</span>
                    <span>
                      <span className="block text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                        {s.name}
                      </span>
                      {s.note && (
                        <span className="mt-1 block text-sm text-subtle">{s.note}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {media.callouts.map((c) => (
                  <li
                    key={c}
                    className="rounded-xl border border-white/12 bg-white/5 px-3.5 py-2.5 text-sm text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-subtle">
              <Lock size={variant === "frame" ? 34 : 26} strokeWidth={1.5} aria-hidden />
              <span className="meta">Private app</span>
            </div>
          ))}
      </div>
    </ViewTransition>
  );
}
