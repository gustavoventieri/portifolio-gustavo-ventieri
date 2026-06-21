"use client";
import { ArrowUpRight } from "lucide-react";
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
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (terminalStep < terminalLines.length - 1) {
      const t = setTimeout(
        () => setTerminalStep((s) => s + 1),
        terminalStep === 0 ? 800 : 520,
      );
      return () => clearTimeout(t);
    }
  }, [terminalStep]);

  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-13 gap-8  ">
      <div className="lg:col-span-7 space-y-4 min-h-0">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
              About
            </span>
          </div>

          <span className="text-[#e2e8f0]">Gustavo</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ventieri
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#94a3b8]">
          <span>Fullstack Developer &amp; Data Analyst</span>
          <span className="text-[rgba(167,139,250,0.3)]">|</span>
          <span>São Paulo, Brazil</span>
          <span className="text-[rgba(167,139,250,0.3)]">|</span>
          <span>~1 year experience</span>
        </div>
        <p className="text-sm text-[#64748b] leading-relaxed max-w-md">
          Building scalable web applications and data-driven solutions. Focused
          on full-stack development, data analysis, and software engineering,
          with experience in Java, Spring Boot, TypeScript, Node.js, Next.js and
          PostgreSQL.
        </p>
        <div className="flex items-center gap-3 pt-1">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.35)",
              color: "#a78bfa",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(167,139,250,0.16)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(167,139,250,0.08)";
            }}
          >
            View Projects
            <ArrowUpRight
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-[rgba(34,211,238,0.12)] text-[#64748b] text-[10px] uppercase tracking-[0.15em] hover:border-[rgba(34,211,238,0.3)] hover:text-[#22d3ee] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 h-full">
        {/* 3. MUDANÇA: Adicionado 'h-full flex flex-col' */}
        <div
          className="rounded-[3px] overflow-hidden h-full flex flex-col"
          style={{ border: "1px solid rgba(167,139,250,0.18)" }}
        >
          {/* Header do Terminal */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 bg-paper shrink-0"
            style={{ borderBottom: "1px solid rgba(167,139,250,0.1)" }}
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="text-[10px] mt-1 text-[#64748b] ml-1 tracking-wider">
              bash — ~/profile.sh
            </span>
          </div>

          {/* 4. MUDANÇA: Adicionado 'flex-1' para o corpo crescer e preencher o espaço */}
          <div className="p-4 bg-background flex-1 space-y-1.5 font-mono  ">
            {terminalLines.slice(0, terminalStep + 1).map((line, i) => (
              <div
                key={i}
                className={`text-xs leading-relaxed ${
                  line.type === "cmd"
                    ? "text-[#22d3ee]"
                    : line.type === "cursor"
                      ? "text-[#22d3ee]"
                      : "text-[#94a3b8]"
                }`}
              >
                {line.type === "cursor" ? (
                  <span>
                    ${" "}
                    <span
                      className="inline-block w-1.75 h-3.25 bg-[#22d3ee] align-middle ml-px"
                      style={{
                        opacity: cursor ? 1 : 0,
                        transition: "opacity 0.1s",
                      }}
                    />
                  </span>
                ) : (
                  line.text
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
