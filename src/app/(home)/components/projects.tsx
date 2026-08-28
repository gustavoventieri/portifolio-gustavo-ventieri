"use client";

import { IconGithub } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import {
  projectsData,
  projectsMeta,
  projectsSectionData,
} from "@/data/projects";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const { language } = useLanguage();
  const t = projectsSectionData[language];

  // Junta os dados traduzidos (título, descrição, tags) com os fixos (repo, demo, cor) pelo id
  const projects = projectsData[language].map((item) => ({
    ...item,
    ...projectsMeta.find((meta) => meta.id === item.id)!,
  }));

  return (
    <section
      id="projects"
      className="min-h-[85vh]  justify-center flex flex-col"
    >
      <div className="flex justify-between  items-start ">
        <SectionHeading label={t.s3SubTitle} title={t.s3Title} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => {
          const cardUrl = p.demo !== "#" ? p.demo : p.repo;

          const handleCardClick = () => {
            if (cardUrl !== "#") {
              window.open(cardUrl, "_blank", "noopener,noreferrer");
            }
          };

          const handleCardKeyDown = (
            event: React.KeyboardEvent<HTMLDivElement>,
          ) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleCardClick();
            }
          };

          return (
            <div
              key={p.id}
              className="project-card flex flex-col cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={handleCardClick}
              onKeyDown={handleCardKeyDown}
            >
              <div className="flex flex-col gap-3 flex-1 px-5 pt-5 pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[0.95rem] font-semibold text-(--heading)">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex gap-2 shrink-0 items-center">
                    <span
                      className={`w-fit text-[0.65rem] font-medium px-2 py-0.5 rounded-md ${
                        p.status === "developing"
                          ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                          : "bg-green-500/10 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {p.status === "developing"
                        ? language === "pt"
                          ? "Em desenvolvimento"
                          : "In development"
                        : language === "pt"
                          ? "Desenvolvido"
                          : "Developed"}
                    </span>

                    {p.repo !== "#" && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="Repositório"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <IconGithub size={16} />
                      </a>
                    )}

                    {p.demo !== "#" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="Demo"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[0.82rem] leading-[1.65] text-(--fg) text-justify items-start">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
