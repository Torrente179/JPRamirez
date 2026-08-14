import type { MaintainedSite } from "@/lib/data/experience";

function host(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

export function SiteList({ sites }: { sites: MaintainedSite[] }) {
  const count = String(sites.length).padStart(2, "0");

  return (
    <details className="mt-7">
      <summary className="site-list-summary flex cursor-pointer items-center justify-between gap-4 py-3 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-brand">
        <span>
          <span className="text-brand">{count}</span>
          <span className="mx-2 text-border">—</span>
          Sites under care
        </span>
        <span aria-hidden className="site-list-mark text-subtle" />
      </summary>
      <ul>
        {sites.map((site) => (
          <li key={site.url} className="hairline">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3.5 active:scale-[0.99]"
            >
              <span className="text-sm font-medium tracking-tight transition-colors group-hover:text-brand">
                {site.name}
              </span>
              <span className="shrink-0 font-mono text-[11px] tracking-[0.04em] text-subtle">
                {host(site.url)} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
