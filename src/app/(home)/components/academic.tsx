"use client";

import { EventCarousel } from "@/components/ui/event-carrousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import { academicData } from "@/data/academic-experience";

export function Academic() {
  const { language } = useLanguage();
  const { title, description, items } = academicData[language];

  return (
    <section
      id="academic"
      className="min-h-[85vh] justify-center flex flex-col"
    >
      <SectionHeading label={description} title={title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative flex flex-col gap-0 pl-5.75">
          <div className="absolute left-1.25 top-2 bottom-2 w-px bg-(--border)" />

          {items.map((e, i) => (
            <div
              key={i}
              className={`relative flex flex-col gap-2 ${
                i < items.length - 1 ? "pb-10" : "pb-0"
              }`}
            >
              <div className="timeline-dot absolute left-[-23px] top-[5px] w-[11px] h-[11px] rounded-full" />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-semibold text-[0.95rem] text-[var(--heading)]">
                  {e.role}
                </span>
                <span className="font-medium text-sm text-[var(--accent)]">
                  @ {e.company}
                </span>
              </div>

              <p className="mono text-xs text-[var(--muted)]">{e.period}</p>

              <p className="text-sm leading-[1.75] text-[var(--fg)] max-w-[640px] text-justify">
                {e.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mono text-xs mb-4 text-[var(--muted)]">
            {"// Eventos & comunidade"}
          </p>
          <EventCarousel />
        </div>
      </div>
    </section>
  );
}
