import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const statusColor: Record<Project["status"], string> = {
  Production: "bg-ok",
  "In development": "bg-brand-dim",
  "Private beta": "bg-subtle",
};

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group hairline block px-1 py-7 transition-colors duration-300 hover:bg-surface sm:px-4 sm:py-8"
    >
      <div className="flex items-baseline gap-4 sm:gap-8">
        <span className="nums font-mono text-[11px] tracking-[0.14em] text-subtle">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-brand sm:text-2xl">
              {project.name}
            </h3>
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span
                className={cn(
                  "inline-block size-[5px] rounded-full",
                  statusColor[project.status],
                )}
              />
              {project.status}
            </span>
          </div>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
          <p className="mt-3 font-mono text-[11px] tracking-[0.06em] text-subtle">
            {project.stack.slice(0, 5).join(" · ")}
          </p>
        </div>
        <span
          aria-hidden
          className="hidden text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand sm:block"
        >
          →
        </span>
      </div>
    </Link>
  );
}
