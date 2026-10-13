import type { MaintainedSite } from "@/lib/data/experience";
import { projectHost } from "@/lib/data/projects";

/** Native disclosure: no JavaScript, keyboard and screen-reader friendly. */
export function SiteList({ sites }: { sites: MaintainedSite[] }) {
  return (
    <details className="disclosure group mt-8 rounded-[22px] border border-white/10 bg-black/25">
      <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4">
        <span className="flex items-baseline gap-3">
          <span className="nums text-[28px] leading-none font-medium tracking-[-0.03em]">
            {sites.length}
          </span>
          <span className="font-medium transition-colors duration-300 group-hover:text-brand">
            Sites I maintain
          </span>
        </span>
        <span className="flex items-center gap-3 meta">
          <span className="max-sm:hidden">Membership sites</span>
          <span
            aria-hidden
            className="disclosure-mark flex size-7 items-center justify-center rounded-full border border-white/15 text-sm text-foreground"
          />
        </span>
      </summary>
      <ul className="grid gap-1.5 px-3 pb-3 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 flex-col justify-center rounded-xl border border-white/8 bg-white/[0.04] px-3.5 py-2 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="text-sm">{s.name}</span>
              <span className="meta text-[11px]">{projectHost(s.url)} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
