"use client";

import { JsonSpecsCard } from "@/components/ui/json-specs";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import { aboutData } from "@/data/about";

export function About() {
  const { language } = useLanguage();
  const translatedAboutData = aboutData[language];

  return (
    <section
      id="about"
      className="min-h-[85vh]  justify-center flex flex-col  "
    >
      <SectionHeading
        label={translatedAboutData.subTitle}
        title={translatedAboutData.title}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Bio + skills */}
        <div className="flex flex-col gap-5 max-w-150">
          <p className="text-justify leading-[1.8] text-[0.95rem]">
            {translatedAboutData.description1}
          </p>
          <p className="text-justify leading-[1.8] text-[0.95rem]">
            {translatedAboutData.description2}
          </p>
          <p className="text-justify leading-[1.8] text-[0.95rem]">
            {translatedAboutData.description3}
          </p>
        </div>

        <div className="flex flex-col">
          <JsonSpecsCard data={aboutData[language]} />
        </div>
      </div>
    </section>
  );
}
