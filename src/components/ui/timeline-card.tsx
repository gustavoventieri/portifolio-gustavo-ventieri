import { timelineItems } from "@/constants/timeline-items";

export const TimelineCard = ({
  item,
}: {
  item: (typeof timelineItems)[number];
}) => {
  return (
    <div
      className="rounded-[3px] p-3.5 transition-all duration-200 group hover:scale-[1.02] bg-paper"
      style={{
        border: `1px solid ${item.color}20`,
      }}
    >
      <div
        className="text-[11px] uppercase tracking-[0.2em] mb-1"
        style={{ color: item.color + "99" }}
      >
        {item.period}
      </div>
      <div className="text-[12px] font-bold text-[#e2e8f0] leading-snug mb-0.5">
        {item.role}
      </div>
      <div className="text-[12px] mb-2" style={{ color: item.color }}>
        {item.company}
      </div>
      <p className="text-[12px] text-[#64748b] leading-relaxed mb-2">
        {item.desc}
      </p>
      <div className="flex flex-wrap gap-1">
        {item.tags.map((t) => (
          <span
            key={t}
            className={`text-[10px] px-1.5 py-0.5 rounded-xs `}
            style={{ border: `1px solid ${item.color}70`, color: item.color }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
