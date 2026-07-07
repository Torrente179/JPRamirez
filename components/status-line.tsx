import { site } from "@/lib/data/site";

export function StatusLine({ compact = false }: { compact?: boolean }) {
  return (
    <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
      <span className="status-dot inline-block size-[7px] rounded-full bg-ok" />
      <span className="text-ok">Operational</span>
      {!compact && (
        <>
          <span className="text-border">/</span>
          <span>{site.availability}</span>
          <span className="hidden text-border sm:inline">/</span>
          <span className="hidden sm:inline">{site.location}</span>
        </>
      )}
    </p>
  );
}
