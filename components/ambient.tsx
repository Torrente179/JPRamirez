import { cn } from "@/lib/utils";

const masks = {
  /** page and hero lights: full at the top, gone by the bottom */
  bottom: "linear-gradient(to bottom, #000 35%, transparent 92%)",
  /** section lights: soft on both edges so no seam shows */
  both: "linear-gradient(to bottom, transparent, #000 28%, #000 62%, transparent)",
} as const;

/**
 * Light from a photograph. The source is a ~40px pre-blurred WebP; the browser
 * upscales it with bilinear filtering, so there is no CSS blur to compute.
 */
export function Ambient({
  src,
  opacity = 0.5,
  className,
  fade = "both",
}: {
  src: string;
  opacity?: number;
  className?: string;
  fade?: keyof typeof masks | false;
}) {
  const mask = fade ? masks[fade] : undefined;
  return (
    <div
      aria-hidden
      className={cn("ambient", className)}
      style={{
        backgroundImage: `url(${src})`,
        opacity,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
