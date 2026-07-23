"use client";
import { ContentHeader } from "@/components/ui/content-header";
import { aboutContent } from "@/constants/about";
import { terminalLines } from "@/constants/terminal-lines";
import { useLanguage } from "@/contexts/language-contexts";
import { ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const About = () => {
  const [terminalStep, setTerminalStep] = useState(0);
  const { language } = useLanguage();
  const [displayedText, setDisplayedText] = useState("");
  const [cursor, setCursor] = useState(true);

  const languageAboutContent = aboutContent[language];
  const languageTerminalLines = terminalLines[language];
  

  useEffect(() => {
    if (terminalStep >= languageTerminalLines.length) return;

    const currentLine = languageTerminalLines[terminalStep];

    if (currentLine.type === "cmd") {
      // Lógica de Digitação para comandos
      if (displayedText.length < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentLine.text.slice(0, displayedText.length + 1));
        }, 60); // Velocidade da digitação
        return () => clearTimeout(timeout);
      } else {
        // Terminou de digitar o comando, espera um pouco e pula para a próxima linha
        const timeout = setTimeout(() => {
          setTerminalStep((s) => s + 1);
          setDisplayedText(""); // Reseta o texto digitado para a próxima linha
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else if (currentLine.type === "out") {
      // Lógica de Aparição Instantânea para output
      const timeout = setTimeout(() => {
        setTerminalStep((s) => s + 1);
      }, 500); // Tempo que o output leva para aparecer
      return () => clearTimeout(timeout);
    }
  }, [terminalStep, displayedText, languageTerminalLines]);

  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-13 gap-8">
      <div className="lg:col-span-7 space-y-4 min-h-0">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
          <ContentHeader text={languageAboutContent.title} variant="blue" />
          <span className="text-[#e2e8f0]">Gustavo</span>
          <br />
          <span className="text-hero">Ventieri</span>
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#94a3b8]">
          <span>{languageAboutContent.role}</span>
          <span className="text-[rgba(167,139,250,0.3)]">|</span>
          <span>{languageAboutContent.location}</span>
        </div>
        <p className="text-sm text-[#64748b] leading-relaxed max-w-md">
          {languageAboutContent.description}
        </p>
        <div className="flex items-center gap-3 pt-1">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.35)] text-[#a78bfa]"
          >
            {languageAboutContent.projects}

            <ArrowUpRight
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all bg-[rgba(49,162,255,0.08)] border border-[rgba(30,135,247,0.35)] text-[#36a1f2]"
          >
            {languageAboutContent.contact}

            <Phone
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 h-full">
        <div className="rounded-[3px] overflow-hidden h-full flex flex-col border border-[rgba(167,139,250,0.18)]">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-paper shrink-0 border-b border-[rgba(167,139,250,0.1)]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="text-[12px] mt-1 text-[#64748b] ml-1 tracking-wider">
              {languageAboutContent.terminalTitle}
            </span>
          </div>

          <div className="p-4 bg-background flex-1 space-y-1.5 font-mono text-xs">
            {languageTerminalLines.map((line, i) => {
              if (i > terminalStep) return null;

              const isCurrentLine = i === terminalStep;

              const textColor =
                line.type === "cmd" || line.type === "cursor"
                  ? "text-[#22d3ee]"
                  : "text-[#94a3b8]";

              return (
                <div
                  key={i}
                  className={`${textColor} leading-relaxed flex items-center min-h-[1.2rem]`}
                >
                  {line.type === "cursor" ? (
                    <span>
                      ${" "}
                      <span
                        className="inline-block w-1.5 h-3.5 bg-[#22d3ee] align-middle"
                        style={{ opacity: cursor ? 1 : 0 }}
                      />
                    </span>
                  ) : (
                    <>
                      {isCurrentLine && line.type === "cmd"
                        ? displayedText
                        : line.text}

                      {isCurrentLine && line.type === "cmd" && (
                        <span className="ml-0.5 w-1.5 h-3.5 bg-[#22d3ee] inline-block align-middle animate-pulse" />
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
