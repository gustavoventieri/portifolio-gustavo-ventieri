export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-3.5">
        <span className="mono text-[0.72rem] text-(--accent) tracking-[0.08em] whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-[linear-gradient(to_right,var(--accent),transparent)] opacity-35" />
      </div>

      {/* Title with left accent bar + underline */}
      <div className="relative pl-5">
        {/* Left bar */}
        <div className="absolute left-0 top-[10%] bottom-[10%] w-0.75 rounded-xs bg-(--accent)" />

        <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-(--heading) tracking-[-0.02em] leading-[1.15]">
          {title}
        </h2>
      </div>
    </div>
  );
}
