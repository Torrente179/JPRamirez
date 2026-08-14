import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function CvDownload({
  className,
  label = "cv.pdf ↓",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.cv.href}
      download={site.cv.filename}
      className={cn(
        "font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand",
        className,
      )}
    >
      {label}
    </a>
  );
}
