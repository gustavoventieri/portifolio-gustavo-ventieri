"use client";

import { JsonSpecsCard } from "@/components/ui/json-specs";
import { useLanguage } from "@/contexts/language-contexts";
import { aboutData } from "@/data/about";
import Image from "next/image";

export function About() {
  const { language } = useLanguage();
  const translatedAboutData = aboutData[language];

  return (
    <section id="sobre" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          marginBottom: 40,
          color: "var(--heading)",
        }}
      >
        {translatedAboutData.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-30 items-start">
        {/* Bio + skills */}
        <div className="flex flex-col gap-5">
          <p
            className="text-justify"
            style={{ lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            {translatedAboutData.description1}
          </p>
          <p
            className="text-justify"
            style={{ lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            {translatedAboutData.description2}
          </p>
          <p
            className="text-justify"
            style={{ lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            {translatedAboutData.description3}
          </p>

          <div className="flex flex-col gap-2 mt-4 w-full">
            <p className="mono text-xs mb-3 mt-2 text--muted">
              {translatedAboutData.title2}
            </p>
            <p className="hidden md:flex text-left">
              <a href="https://skillicons.dev">
                <Image
                  src="https://skillicons.dev/icons?i=java,spring,go,react,nextjs,ts,tailwind,postgres,mysql,linux,git,githubactions,docker,cloudflare,"
                  alt="Skills"
                  width={800}
                  height={48}
                  unoptimized
                />
              </a>
            </p>
            <p className="md:hidden text-left ">
              <a href="https://skillicons.dev">
                <Image
                  src="https://skillicons.dev/icons?i=java,spring,go,react,nextjs,ts,tailwind"
                  alt="Backend & Frontend skills"
                  width={1000}
                  height={48}
                  unoptimized
                  className="w-full max-w-84 h-auto mb-5"
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="https://skillicons.dev/icons?i=postgres,mysql,linux,git,githubactions,docker,cloudflare"
                  alt="DevOps & Database skills"
                  width={10000}
                  height={48}
                  unoptimized
                  className="w-full max-w-84 h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </p>
          </div>
        </div>

        <div>
          <JsonSpecsCard data={aboutData[language]} />
        </div>
      </div>
    </section>
  );
}
