import { site } from "@/lib/data/site";

export function StatusLine() {
  return (
    <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
      <span>{site.availability}</span>
      <span className="text-border">/</span>
      <span>{site.location}</span>
    </p>
  );
}
