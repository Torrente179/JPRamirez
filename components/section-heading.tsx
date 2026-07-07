export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">
        <span className="text-brand">{index}</span>
        <span className="mx-2 text-border">—</span>
        {title}
      </p>
    </div>
  );
}
