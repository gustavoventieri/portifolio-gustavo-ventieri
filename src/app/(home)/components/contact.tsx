"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { contactData, contactIcons, getHref } from "@/data/contact";
import { ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-[85vh] justify-center flex flex-col">
      <SectionHeading label="// 06. Contato" title="Contato" />

      <p className="text-[0.9rem] -mt-6 mb-12 max-w-125 leading-[1.7] text-(--fg)">
        Vamos conversar? Estou aberto a novas oportunidades e projetos
        interessantes.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Links */}

        {/* Coluna direita - vazia por enquanto */}
        <div></div>

        <div className="flex flex-col gap-5">
          {contactData.map((contact) => {
            const Icon = contactIcons[contact.name];

            return (
              <a
                key={contact.name}
                href={getHref(contact)}
                target={contact.name === "Email" ? undefined : "_blank"}
                rel={contact.name === "Email" ? undefined : "noopener"}
                className="flex items-center gap-3.5 px-[18px] py-3.5 bg-(--card-bg) border border-(--border) rounded-lg no-underline transition-[border-color,transform] duration-200 hover:border-(--accent) hover:translate-x-1"
              >
                <span className="text-(--accent)">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="mono text-xs mb-0.5 text-(--muted)">
                    {contact.name}
                  </p>
                  <p className="text-sm text-(--heading) font-medium">
                    {contact.path}
                  </p>
                </div>
                <span className="ml-auto text-(--muted)">
                  <ExternalLink size={13} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
