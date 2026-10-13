import type { ProjectStatus } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export const statusColor: Record<ProjectStatus, string> = {
  Production: "bg-ok",
  "In development": "bg-brand",
  "Private beta": "bg-brand",
};

/** Dot plus label; the colour never carries the meaning alone. */
export function StatusLabel({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 meta", className)}>
      <span className={cn("dot", statusColor[status])} />
      {status}
    </span>
  );
}
