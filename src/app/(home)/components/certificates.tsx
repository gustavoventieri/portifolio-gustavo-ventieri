"use client";

import { ContentHeader } from "@/components/ui/content-header";
import { certifications } from "@/constants/certifications";
import { useLanguage } from "@/contexts/language-contexts";

export const Certificates = () => {
  const { language } = useLanguage();
  const certs = certifications[language];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2.5 mb-10">
        <ContentHeader text={"Certifications"} variant="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Esquerda — Timeline compacta e colada à esquerda */}
        <div className="relative">
          {/* Linha Vertical - Grossura de 2px para igualar à foto */}
          {/* Linha Vertical com Animação de Fluxo */}
          <div
            className="absolute left-[53.1px] top-2 bottom-0 w-1 overflow-hidden"
            style={{
              background: "rgba(30, 41, 59, 0.7)", // Uma cor de fundo mais suave para a trilha
            }}
          >
            {/* O "Pulso" de luz que desce */}
            <div
              className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-transparent via-purple-500 to-transparent animate-line-flow"
              style={{
                boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.4)", // Brilho roxo (ajuste para a sua cor)
              }}
            />
          </div>

          <div className="space-y-0">
            {certs.map((cert, i) => (
              <div key={i} className="flex items-start group relative">
                {/* Data - Alinhada totalmente à esquerda */}
                <div className="w-10 shrink-0 pt-1">
                  <span className="text-[11px] font-bold text-[#4a5568] tracking-tighter">
                    {cert.date}
                  </span>
                </div>

                {/* Marcador Estilo "Experience" (Anel + Ponto central) */}
                <div className="relative z-10 mx-1.75 mt-1.75 flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center bg-[#030712]"
                    style={{
                      borderColor: cert.current ? "#22d3ee" : "#334155",
                      boxShadow: cert.current
                        ? "0 0 10px rgba(34,211,238,0.3)"
                        : "none",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: cert.current ? "#22d3ee" : "#475569",
                      }}
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="pb-10 pl-2">
                  <div className="text-[13px] font-semibold text-[#e2e8f0] leading-tight group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </div>
                  <div className="text-[11px] text-[#64748b] mt-1">
                    {cert.institution}
                  </div>
                  {cert.current && (
                    <div className="mt-2 text-[9px] font-bold tracking-[0.15em] uppercase text-[#22d3ee] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#22d3ee] animate-pulse" />
                      Estudando
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direita — Cards pegando a altura total */}
        <div className="flex flex-col gap-4">
          {/* Summary */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "7", label: "certificados", color: "#fbbf24" },
              { value: "2", label: "em andamento", color: "#22d3ee" },
              { value: "5", label: "instituições", color: "#a78bfa" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-md py-3 text-center bg-paper border border-white/5 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-[8px] text-[#64748b] uppercase tracking-widest mt-1 text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Card - flex-1 para preencher altura */}
          <div className="flex-1 rounded-md p-6 bg-paper border border-white/5 backdrop-blur-sm flex flex-col">
            <div className="text-[9px] text-[#64748b] uppercase tracking-[0.2em] mb-6 font-bold">
              Domain Proficiency
            </div>
            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {[
                { label: "Segurança & Pentest", value: 72, color: "#fb923c" },
                {
                  label: "Infraestrutura & DevOps",
                  value: 65,
                  color: "#22d3ee",
                },
                { label: "Data & Privacidade", value: 80, color: "#34d399" },
                { label: "Backend (Go / Java)", value: 58, color: "#a78bfa" },
                { label: "Publicação Acadêmica", value: 40, color: "#f472b6" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] mb-2">
                    <span className="text-[#94a3b8] font-medium">{label}</span>
                    <span style={{ color }} className="font-bold">
                      {value}%
                    </span>
                  </div>
                  <div className="h-0.5 bg-paper rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${value}%`,
                        backgroundColor: color,
                        boxShadow: `0 0 8px ${color}40`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Studying Card - flex-1 para preencher altura */}
          <div className="flex-1 rounded-md p-6 bg-paper border border-white/5 backdrop-blur-sm">
            <div className="text-[9px] text-[#64748b] uppercase tracking-[0.2em] mb-6 font-bold">
              Currently Studying
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Golang do Zero ao Avançado",
                  progress: 38,
                  color: "#22d3ee",
                },
                {
                  title: "Kubernetes do Básico ao Avançado",
                  progress: 14,
                  color: "#a78bfa",
                },
              ].map(({ title, progress, color }) => (
                <div key={title}>
                  <div className="flex justify-between text-[11px] mb-2 text-[#e2e8f0]">
                    <span>{title}</span>
                    <span style={{ color }}>{progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                      className="h-full rounded-full relative"
                      style={{ width: `${progress}%`, backgroundColor: color }}
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer-new" />
                    </div>
                  </div>
                  <div className="text-[9px] text-[#4a5568] mt-2 italic">
                    Udemy · em andamento
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
