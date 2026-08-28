"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import { experienceData } from "@/data/profissional-experience";
export function Experience() {
  const { language } = useLanguage();
  const { title, description, items } = experienceData[language];

  return (
    <section
      id="experience"
      className="min-h-[85vh] justify-center flex flex-col"
    >
      <SectionHeading label={description} title={title} />

      <div className="relative flex flex-col gap-0" style={{ paddingLeft: 23 }}>
        <div
          style={{
            position: "absolute",
            left: 5,
            top: 8,
            bottom: 8,
            width: 1,
            background: "var(--border)",
          }}
        />

        {items.map((e, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-2"
            style={{ paddingBottom: i < items.length - 1 ? 40 : 0 }}
          >
            <div
              className="timeline-dot"
              style={{
                position: "absolute",
                left: -23,
                top: 5,
                width: 11,
                height: 11,
                borderRadius: "50%",
              }}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                style={{
                  fontWeight: 600,
                  color: "var(--heading)",
                  fontSize: "0.95rem",
                }}
              >
                {e.role}
              </span>
              <span
                style={{
                  color: "var(--accent)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                }}
              >
                @ {e.company}
              </span>
            </div>
            <p className="mono text-xs" style={{ color: "var(--muted)" }}>
              {e.period}
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "var(--fg)",
                maxWidth: 640,
                textAlign: "justify",
              }}
            >
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
