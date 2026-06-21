"use client";
import { ContentHeader } from "@/components/ui/content-header";
import { ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  { text: "$ whoami", type: "cmd" },
  {
    text: "  → Gustavo Ventieri — Fullstack Developer & Data Analyst",
    type: "out",
  },
  { text: "$ cat expertise.txt", type: "cmd" },
  {
    text: "  → Java · SpringBoot · Docker · Postgres · Data Analysis",
    type: "out",
  },
  { text: "$ ls ./status.sh", type: "cmd" },
  {
    text: "  → open to work  remote hybrid  developer data analyst",
    type: "out",
  },
  { text: "$ █", type: "cursor" },
];

export const About = () => {
  const [terminalStep, setTerminalStep] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Texto da linha atual sendo digitada
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (terminalStep >= terminalLines.length) return;

    const currentLine = terminalLines[terminalStep];

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
  }, [terminalStep, displayedText]);

  // Cursor piscante
  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-13 gap-8">
      <div className="lg:col-span-7 space-y-4 min-h-0">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
          <ContentHeader text={"About"} variant={"blue"} />
          <span className="text-[#e2e8f0]">Gustavo</span>
          <br />
          <span className="text-hero">Ventieri</span>
        </h1>
        {/* ... Resto do seu conteúdo lateral (Bio, botões, etc) ... */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#94a3b8]">
          <span>Fullstack Developer &amp; Data Analyst</span>
          <span className="text-[rgba(167,139,250,0.3)]">|</span>
          <span>São Paulo, Brazil</span>
        </div>
        <p className="text-sm text-[#64748b] leading-relaxed max-w-md">
          Building scalable web applications and data-driven solutions. Focused
          on full-stack development, data analysis, and software engineering,
          with experience in Java, Spring Boot, API RESTful, TypeScript, Next.js
          and PostgreSQL.
        </p>
        <div className="flex items-center gap-3 pt-1">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.35)] text-[#a78bfa]"
          >
            View Projects{" "}
            <ArrowUpRight
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all bg-[rgba(49,162,255,0.08)] border border-[rgba(30,135,247,0.35)] text-[#36a1f2]"
          >
            Get in Touch
            <Phone
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 h-full">
        <div className="rounded-[3px] overflow-hidden h-full flex flex-col border border-[rgba(167,139,250,0.18)]">
          {/* Header do Terminal */}
          <div className="flex items-center gap-2 px-3 py-2.5 bg-paper shrink-0 border-b border-[rgba(167,139,250,0.1)]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="text-[10px] mt-1 text-[#64748b] ml-1 tracking-wider">
              bash — ~/profile.sh
            </span>
          </div>

          {/* Corpo do Terminal */}
          <div className="p-4 bg-background flex-1 space-y-1.5 font-mono text-xs">
            {terminalLines.map((line, i) => {
              // Só renderiza linhas que já passaram ou a linha atual
              if (i > terminalStep) return null;

              const isCurrentLine = i === terminalStep;

              // Define a cor
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
                      {/* Se for a linha atual e for comando, mostra o que está sendo digitado. 
                          Se já passou, mostra o texto completo. */}
                      {isCurrentLine && line.type === "cmd"
                        ? displayedText
                        : line.text}

                      {/* Adiciona um cursor piscante no final do comando enquanto ele está sendo digitado */}
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
