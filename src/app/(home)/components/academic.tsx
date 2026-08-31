"use client";

import { EventCarousel } from "@/components/ui/event-carrousel";
import { Reveal } from "@/components/ui/reveal";
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
      <Reveal>
        <SectionHeading label={description} title={title} />
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative flex flex-col gap-0 pl-5.75">
          <div className="absolute left-1.25 top-2 bottom-2 w-px bg-(--border)" />

          {items.map((e, i) => (
            <Reveal triggerOnce={false}key={i} direction="left" delay={i * 100}>
              <div
                className={`relative flex flex-col gap-2 ${
                  i < items.length - 1 ? "pb-10" : "pb-0"
                }`}
              >
                <div className="timeline-dot absolute -left-5.75 top-1.25 w-2.75 h-2.75 rounded-full" />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-semibold text-[0.95rem] text-(--heading)">
                    {e.role}
                  </span>
                  <span className="font-medium text-sm text-(--accent)">
                    @ {e.company}
                  </span>
                </div>

                <p className="mono text-xs text-(--muted)">{e.period}</p>

                <p className="text-sm leading-[1.75] text-(--fg) max-w-160 text-justify">
                  {e.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal triggerOnce={false}direction="right" delay={150}>
          <div>
            <p className="mono text-xs mb-4 text-(--muted)">
              {"// Eventos & comunidade"}
            </p>

            <EventCarousel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
