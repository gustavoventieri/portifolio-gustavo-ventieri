"use client";
import { Reveal } from "@/components/ui/reveal";
import { Terminal } from "@/components/ui/terminal";
import { useLanguage } from "@/contexts/language-contexts";
import { contactData, contactIcons, getHref } from "@/data/contact";
import { heroData } from "@/data/hero";
import { ArrowRight, Download, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { language } = useLanguage();
  const transalatedHeroData = heroData[language];

  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        resumeMenuRef.current &&
        !resumeMenuRef.current.contains(e.target as Node)
      ) {
        setResumeMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex justify-between  items-center "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full pt-20 lg:pt-10">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-6 min-w-0 min-h-100 items-start justify-center">
          <Reveal triggerOnce={false}>
            <div>
              <h1 className="text-[clamp(2.9rem,10vw,3.9rem)] font-bold leading-[1.1] tracking-[-0.02em] text-(--heading)">
                Gustavo
                <br />
                <span className="text-(--accent)">Ventieri</span>
              </h1>
              <p className="mono mt-3 text-base text-(--fg)">
                {transalatedHeroData.role}
              </p>
            </div>
          </Reveal>

          <Reveal triggerOnce={false} delay={100}>
            <p className="text-base leading-[1.75] text-(--fg) max-w-100">
              {transalatedHeroData.desc}
            </p>
          </Reveal>

          <Reveal delay={200} className="relative z-20">
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                {transalatedHeroData.btn01} <ArrowRight size={15} />
              </a>

              <div className="relative" ref={resumeMenuRef}>
                <button
                  type="button"
                  onClick={() => setResumeMenuOpen((open) => !open)}
                  className="btn-outline"
                >
                  <Download size={15} /> {transalatedHeroData.btn02}
                </button>

                {resumeMenuOpen && (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-50 flex flex-col overflow-hidden rounded-md border border-(--border) bg-white dark:bg-(--card-bg) shadow-lg min-w-45">
                    <a
                      href="/assets/curriculo-gustavo-ventieri-pt.pdf"
                      download
                      onClick={() => setResumeMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-(--fg) hover:bg-(--accent)/10 hover:text-(--accent) transition-colors"
                    >
                      <FileText size={14} />
                      {language === "pt" ? "Português" : "Portuguese"}
                    </a>
                    <div className="h-px w-full bg-(--border)" />
                    <a
                      href="/assets/resume-gustavo-ventieri-en.pdf"
                      download
                      onClick={() => setResumeMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-(--fg) hover:bg-(--accent)/10 hover:text-(--accent) transition-colors"
                    >
                      <FileText size={14} />
                      {language === "pt" ? "Inglês" : "English"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal triggerOnce={false} delay={300}>
            <div className="flex items-center gap-4 mt-1">
              {/* Ícones de contato, gerados a partir de contactData */}
              {contactData.map((contact) => {
                const Icon = contactIcons[contact.name];

                return (
                  <a
                    key={contact.name}
                    href={getHref(contact)}
                    target={contact.name === "Email" ? undefined : "_blank"}
                    rel={contact.name === "Email" ? undefined : "noopener"}
                    className="icon-link"
                    title={contact.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}

              {/* Divisor vertical entre ícones e email */}
              <div className="h-px w-10 bg-(--border) hidden md:flex" />

              {/* Email extraído do mesmo contactData, sem duplicar dado */}
              <span className="mono text-xs text-(--muted) hidden md:flex">
                {contactData.find((contact) => contact.name === "Email")?.path}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal triggerOnce={false} direction="right" delay={150}>
          <div className="">
            <Terminal key={language} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
