"use client";

import { JsonSpecsCard } from "@/components/ui/json-specs";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import { aboutData, jsonSpecsData } from "@/data/about";

export function About() {
  const { language } = useLanguage();
  const translatedAboutData = aboutData[language];
  const translatedJsonSpecs = jsonSpecsData[language];

  return (
    <section
      id="about"
      className="min-h-[85vh]  justify-center flex flex-col  "
    >
      <Reveal triggerOnce={false}>
        <SectionHeading
          label={translatedAboutData.subTitle}
          title={translatedAboutData.title}
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Bio + skills */}
        <div className="flex flex-col gap-5 max-w-150">
          <Reveal triggerOnce={false} direction="left" delay={0}>
            <p className="text-justify leading-[1.8] text-[0.95rem]">
              {translatedAboutData.description1}
            </p>
          </Reveal>
          <Reveal triggerOnce={false} direction="left" delay={100}>
            <p className="text-justify leading-[1.8] text-[0.95rem]">
              {translatedAboutData.description2}
            </p>
          </Reveal>
          <Reveal triggerOnce={false} direction="left" delay={200}>
            <p className="text-justify leading-[1.8] text-[0.95rem]">
              {translatedAboutData.description3}
            </p>
          </Reveal>
        </div>

        <Reveal triggerOnce={false} direction="right" delay={150}>
          <div className="flex flex-col">
            <JsonSpecsCard data={translatedJsonSpecs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
