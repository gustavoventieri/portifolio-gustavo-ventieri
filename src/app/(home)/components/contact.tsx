"use client";
import { ContentHeader } from "@/components/ui/content-header";
import { contactLinks } from "@/constants/contact-links";
import { ChevronRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="w-full">
      <div className="container mx-auto   ">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
          {/* LADO ESQUERDO: TEXTO */}
          <div className="max-w-md lg:pt-2">
            <ContentHeader text={"Get in Touch"} variant="blue" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
              {"Let's build"}
              <br />
              <span className="bg-clip-text text-hero">together.</span>
            </h2>

            <p className="text-base text-[#64748b] leading-relaxed max-w-sm font-sans">
              Open to full-stack development opportunities, data analytics
              projects, and technology collaborations. Especially interested in
              scalable web applications, data-driven solutions, backend
              architecture, and software engineering challenges
            </p>
          </div>

          {/* LADO DIREITO: CARDS */}
          <div className="w-full lg:w-105 space-y-2.5">
            {contactLinks.map(({ icon: Icon, label, href, sub, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-sm transition-all duration-300 border border-white/3 hover:border-white/10"
                style={{
                  backgroundColor: "#0d1627",
                  // Variável CSS para usar no hover via Tailwind se quiser,
                  // mas manteremos o estilo dinâmico para os ícones
                }}
                // Efeito de brilho sutil no hover baseado na cor do item
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}40`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="p-2 rounded-md transition-colors"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <Icon size={16} style={{ color }} className="shrink-0" />
                </div>

                <span className="text-[11px] text-[#94a3b8] group-hover:text-white transition-colors flex-1 font-mono tracking-tight">
                  {label}
                </span>

                <div className="flex items-center gap-3 ">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#475569] font-mono group-hover:text-[#64748b] transition-colors">
                    {sub}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-[#475569] group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
