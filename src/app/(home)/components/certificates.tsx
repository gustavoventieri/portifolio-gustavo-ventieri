"use client";

import { ContentHeader } from "@/components/ui/content-header";
import { certificationDetailsSection } from "@/constants/certification-details";
import { certifications } from "@/constants/certifications";
import { useLanguage } from "@/contexts/language-contexts";

export const Certificates = () => {
  const { language } = useLanguage();
  const certs = certifications[language];

  const {
    badge,
    proficiency,
    proficiencyTitle,
    studyingTitle,
    studyingStatus,
    studyingColors,
  } = certificationDetailsSection[language];

  const totalCertificates = certs.length;
  const currentCertificates = certs.filter((c) => c.current);
  const institutions = new Set(certs.map((c) => c.institution));

  const summary = [
    {
      value: totalCertificates.toString(),
      label: language === "pt" ? "certificados" : "certificates",
      color: "#fbbf24",
    },
    {
      value: currentCertificates.length.toString(),
      label: language === "pt" ? "em andamento" : "in progress",
      color: "#22d3ee",
    },
    {
      value: institutions.size.toString(),
      label: language === "pt" ? "instituições" : "institutions",
      color: "#a78bfa",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2.5 mb-10">
        <ContentHeader text={badge} variant="purple" />
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
                <div className="w-10 shrink-0 pt-1">
                  <span className="text-[11px] font-bold text-[#4a5568] tracking-tighter">
                    {cert.date}
                  </span>
                </div>

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

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {summary.map((s) => (
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

          <div className="flex-1 rounded-md p-6 bg-paper border border-white/5 backdrop-blur-sm flex flex-col">
            <div className="text-[11px] text-[#64748b] uppercase tracking-[0.2em] mb-6 font-bold">
              {proficiencyTitle}
            </div>

            <div className="space-y-8 flex-1 flex flex-col justify-center">
              {proficiency.map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-[12px] mb-2">
                    <span className="text-[#94a3b8] font-medium">{label}</span>

                    <span style={{ color }} className="font-bold">
                      {value}%
                    </span>
                  </div>

                  <div className="h-1.5 bg-paper rounded-full overflow-hidden">
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

          <div className="rounded-md p-6 bg-paper border border-white/5 backdrop-blur-sm">
            <div className="text-[11px] text-[#64748b] uppercase tracking-[0.2em] mb-6 font-bold">
              {studyingTitle}
            </div>

            <div className="space-y-6">
              {currentCertificates.map((cert, index) => (
                <div key={cert.title}>
                  <div className="flex justify-between text-[12px] mb-2 text-[#e2e8f0]">
                    <span>{cert.title}</span>

                    <span
                      style={{
                        color: studyingColors[index % studyingColors.length],
                      }}
                    >
                      {studyingStatus}
                    </span>
                  </div>

                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-pulse"
                      style={{
                        width: "100%",
                        backgroundColor:
                          studyingColors[index % studyingColors.length],
                      }}
                    />
                  </div>

                  <div className="text-[11px] text-[#4a5568] mt-2">
                    {cert.institution}
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
