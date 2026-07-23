"use client";
import { ContentHeader } from "@/components/ui/content-header";
import { TimelineCard } from "@/components/ui/timeline-card";
import { timelineItems } from "@/constants/timeline-items";
import { useLanguage } from "@/contexts/language-contexts";

export const Experience = () => {
  const { language } = useLanguage();
  const languageTimelineItems = timelineItems[language];

  return (
    <div>
      <div className="relative">
        <ContentHeader text={languageTimelineItems.badge} variant="purple" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0 relative items-center">
          <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-slate-800" />

          {languageTimelineItems.works.map((item, i) => {
            const isAbove = i % 2 === 0;

            return (
              <div
                key={item.id}
                className="flex flex-row md:flex-col items-center md:items-center relative"
              >
                <div
                  className={`hidden md:block w-full px-2 pb-5 ${isAbove ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  style={{ minHeight: "150px" }}
                >
                  {isAbove && <TimelineCard item={item} />}
                </div>

                <div
                  className={`relative z-10 flex flex-col items-center shrink-0 w-10 md:w-auto gap-1.5 
                    ${!isAbove ? "md:flex-col-reverse" : "md:flex-col"} 
                  `}
                >
                  <div
                    className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 flex items-center justify-center md:mr-0  mr-1.5"
                    style={{
                      borderColor: item.color,
                      backgroundColor: "#07101f",
                      boxShadow: `0 0 8px ${item.color}60`,
                    }}
                  >
                    <div
                      className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  <div
                    className="text-[9px] font-bold tracking-wider md:mr-0 mr-1.5"
                    style={{ color: item.color }}
                  >
                    {item.startYear}
                  </div>
                </div>

                <div
                  className={`w-full px-2 md:pt-5 
                    ${!isAbove ? "md:opacity-100" : "md:opacity-0 md:pointer-events-none"} 
                    block opacity-100 pointer-events-auto`}
                  style={{ minHeight: "150px" }}
                >
                  <div className="md:hidden">
                    <TimelineCard item={item} />
                  </div>

                  <div className="hidden md:block">
                    {!isAbove && <TimelineCard item={item} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
