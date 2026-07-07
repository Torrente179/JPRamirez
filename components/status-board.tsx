import Link from "next/link";
import { statusBoard } from "@/lib/data/now";
import { cn } from "@/lib/utils";

export function StatusBoard() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {statusBoard.map((card) => (
        <Link
          key={card.label}
          href={card.href}
          className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-white/16 hover:bg-surface-2"
        >
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span
                className={cn(
                  "inline-block size-[6px] rounded-full",
                  card.tone === "ok" ? "status-dot bg-ok" : "bg-brand-dim",
                )}
              />
              {card.label}
            </p>
            <span className="font-mono text-[10px] tracking-[0.08em] text-subtle">
              {card.meta}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-brand">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {card.body}
          </p>
        </Link>
      ))}
    </div>
  );
}
