"use client";
import { Terminal } from "@/components/ui/terminal";
import { useLanguage } from "@/contexts/language-contexts";
import { contactData, contactIcons, getHref } from "@/data/contact";
import { heroData } from "@/data/hero";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const transalatedHeroData = heroData[language];

  return (
    // Espaçamento vertical da seção
    <section
      id="hero"
      className="min-h-[85vh] flex justify-between  items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-6 min-w-0 min-h-100 items-start justify-center">
          <div>
            {/* Tamanho fluido (clamp) precisa de valor arbitrário, Tailwind não tem utilitário nativo pra isso */}
            <h1 className="text-[clamp(2.9rem,10vw,3.9rem)] font-bold leading-[1.1] tracking-[-0.02em] text-(--heading)">
              Gustavo
              <br />
              <span className="text-(--accent)">Ventieri</span>
            </h1>
            <p className="mono mt-3 text-base text-(--fg)">
              {transalatedHeroData.role}
            </p>
          </div>

          {/* max-w-110 = 440px (110 * 4px) */}
          <p className="text-base leading-[1.75] text-(--fg) max-w-100">
            {transalatedHeroData.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              {transalatedHeroData.btn01} <ArrowRight />
            </a>
            <a href="#" className="btn-outline">
              <Download size={15} /> {transalatedHeroData.btn02}
            </a>
          </div>

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
        </div>

        <div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
