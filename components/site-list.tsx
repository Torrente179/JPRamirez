import type { MaintainedSite } from "@/lib/data/experience";

function host(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

export function SiteList({ sites }: { sites: MaintainedSite[] }) {
  const count = String(sites.length).padStart(2, "0");

  return (
    <details className="mt-7">
      <summary className="site-list-summary hairline group flex cursor-pointer items-baseline justify-between gap-4 py-3.5">
        <span className="flex items-baseline gap-2.5">
          <span className="nums text-xl font-medium tracking-tight text-brand">
            {count}
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-brand">
            Sites I maintain
          </span>
        </span>
        <span
          aria-hidden
          className="site-list-mark font-mono text-sm leading-none text-subtle"
        />
      </summary>
      <ul>
        {sites.map((site) => (
          <li key={site.name} className="hairline">
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
