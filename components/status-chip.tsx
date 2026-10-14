import { statusLabels, type ProjectStatus } from "@/lib/data/projects";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const statusColor: Record<ProjectStatus, string> = {
  Production: "bg-ok",
  "In development": "bg-brand",
  "Private beta": "bg-brand",
};

/** Dot plus label; the colour never carries the meaning alone. */
export function StatusLabel({
  status,
  lang,
  className,
}: {
  status: ProjectStatus;
  lang: Locale;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 meta", className)}>
      <span className={cn("dot", statusColor[status])} />
      {statusLabels[status][lang]}
    </span>
  );
}
