import { timelineItems } from "@/constants/timeline-items";
import { Language } from "@/contexts/language-contexts";

export const TimelineCard = ({
  item,
}: {
  item: (typeof timelineItems[Language])[number];
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
     
    </div>
  );
};
