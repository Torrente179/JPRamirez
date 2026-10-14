import Image from "next/image";
import type { GalleryShot } from "@/lib/data/projects";
import { fill, type Locale, localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const copy = {
  open: { en: "Open {caption}", es: "Abrir {caption}" },
  openWithNotes: { en: "Open {caption}, {n} notes", es: "Abrir {caption}, {n} notas" },
  screen: { en: "screen", es: "pantalla" },
  screens: { en: "screens", es: "pantallas" },
  notes: { en: "{n} notes", es: "{n} notas" },
};

/**
 * A case study's screenshots. Each one is a button with data-shot, which
 * ShotViewer picks up to open the full-screen walkthrough. Two shots keep the
 * pair of turned frames; a grouped set becomes a grid per group.
 * `offset` is the index of the first shot in the viewer's list.
 */
export function ShotGallery({
  shots,
  offset = 0,
  lang,
}: {
  shots: GalleryShot[];
  offset?: number;
  lang: Locale;
}) {
  const t = localize(copy, lang);
  const grouped = shots.some((s) => s.group);

  if (!grouped) {
    return (
      <div className="mt-6 grid gap-5 md:grid-cols-2 [perspective:1800px]">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            data-shot={offset + i}
            aria-label={fill(t.open, { caption: shot.caption })}
            data-reveal
            className={cn(
              "glass block cursor-zoom-in rounded-[26px] p-2.5 text-left transition-transform duration-700 ease-[var(--ease)] md:hover:[transform:rotateY(0deg)]",
              i === 0
                ? "md:[transform:rotateY(6deg)] md:origin-right"
                : "md:[transform:rotateY(-6deg)] md:origin-left",
            )}
          >
            <Thumb shot={shot} sizes="(min-width: 768px) 620px, 92vw" />
            <span className="block px-2 pt-3 pb-1 meta">{shot.caption}</span>
          </button>
        ))}
      </div>
    );
  }

  const groups = shots.reduce<{ name: string; items: { shot: GalleryShot; i: number }[] }[]>(
    (acc, shot, i) => {
      const name = shot.group ?? "";
      const last = acc[acc.length - 1];
      if (last && last.name === name) last.items.push({ shot, i });
      else acc.push({ name, items: [{ shot, i }] });
      return acc;
    },
    [],
  );

  return (
    <div className="mt-10 flex flex-col gap-14 md:mt-12">
      {groups.map((g) => (
        <section key={g.name} aria-label={g.name}>
          <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
            <h3 className="text-2xl font-medium tracking-[-0.03em]">{g.name}</h3>
            <span className="meta nums">
              {g.items.length} {g.items.length === 1 ? t.screen : t.screens}
            </span>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map(({ shot, i }) => (
              <li key={shot.src} data-reveal>
                <button
                  type="button"
                  data-shot={offset + i}
                  aria-label={
                    shot.notes
                      ? fill(t.openWithNotes, { caption: shot.caption, n: shot.notes.length })
                      : fill(t.open, { caption: shot.caption })
                  }
                  className="glass lift group block w-full cursor-zoom-in rounded-[22px] p-2 text-left"
                >
                  <Thumb shot={shot} sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw" />
                  <span className="flex items-center justify-between gap-3 px-2 pt-3 pb-1.5">
                    <span className="text-[15px] font-medium transition-colors duration-300 group-hover:text-brand">
                      {shot.caption}
                    </span>
                    {shot.notes && <span className="meta nums">{fill(t.notes, { n: shot.notes.length })}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Thumb({ shot, sizes }: { shot: GalleryShot; sizes: string }) {
  return (
    <span
      className="relative block overflow-hidden rounded-[16px] bg-[#0a0b10]"
      style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        className="object-cover object-left-top"
      />
    </span>
  );
}
