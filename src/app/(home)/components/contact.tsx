"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/language-contexts";
import {
  contactData,
  contactIcons,
  contactPageData,
  getHref,
} from "@/data/contact";
import { ExternalLink } from "lucide-react";

export function Contact() {
  const { language } = useLanguage();
  const { label, title, description } = contactPageData[language];

  return (
    <section id="contact" className="min-h-[85vh] justify-center flex flex-col">
      <Reveal triggerOnce={false}>
        <SectionHeading label={label} title={title} />
      </Reveal>

      <Reveal triggerOnce={false} delay={100}>
        <p className="text-[0.9rem] -mt-6 mb-12 max-w-125 leading-[1.7] text-(--fg)">
          {description}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Coluna direita - vazia por enquanto */}
        <div></div>

        <div className="flex flex-col gap-5">
          {contactData.map((contact, i) => {
            const Icon = contactIcons[contact.name];

            return (
              <Reveal
                triggerOnce={false}
                key={contact.name}
                direction="left"
                delay={i * 100}
              >
                <a
                  href={getHref(contact)}
                  target={contact.name === "Email" ? undefined : "_blank"}
                  rel={contact.name === "Email" ? undefined : "noopener"}
                  className="flex items-center gap-3.5 px-4.5 py-3.5 bg-(--card-bg) border border-(--border) rounded-lg no-underline transition-[border-color,transform] duration-200 hover:border-(--accent) hover:translate-x-1"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
