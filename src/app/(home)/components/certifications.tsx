"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const { language } = useLanguage();
  const { title, description, items } = certifications[language];

  return (
    <section id="certifications" className="py-24">
      <Reveal>
        <SectionHeading label={description} title={title} />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {items.map((cert, i) => {
          const Icon = cert.icon;

          return (
            <Reveal
              key={cert.title}
              triggerOnce={false}
              delay={(i % 4) * 100}
              className="h-full"
            >
              <div className="project-card flex flex-col h-full min-h-55 rounded-lg overflow-hidden">
                <div className="flex flex-col gap-3 px-4.5 pt-4.5 pb-4 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center justify-center bg-(--accent-dim) rounded-lg p-2.5">
                      <Icon
                        className="w-5 h-5 text-(--accent)"
                        strokeWidth={1.75}
                      />
                    </span>

                    {cert.current ? (
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="mono text-[0.65rem] font-medium text-green-600 dark:text-green-400">
                          {language === "pt" ? "Em andamento" : "In progress"}
                        </span>
                      </span>
                    ) : (
                      <span className="mono text-xs text-(--muted)">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[0.85rem] font-semibold text-(--heading) leading-[1.4] mb-1">
                      {cert.title}
                    </h3>
                    <p className="mono text-[0.7rem] text-(--muted)">
                      {cert.institution}
                    </p>
                    {cert.description && (
                      <p className="text-[0.72rem] leading-normal text-(--fg) mt-2 line-clamp-3">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
