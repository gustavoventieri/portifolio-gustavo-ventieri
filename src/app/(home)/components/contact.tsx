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
  const { label, title, description, badge, heading, items, text } =
    contactPageData[language];
  function formatDisplayPath(path: string) {
    return path
      .replace(/^https?:\/\//, "") // remove http:// ou https://
      .replace(/^www\./, "") // remove www.
      .replace(/\/$/, ""); // remove barra final, se tiver
  }
  return (
    <section
      id="contact"
      className="min-h-[85vh] justify-center flex flex-col h-full"
    >
      <Reveal triggerOnce={false}>
        <SectionHeading label={label} title={title} />
      </Reveal>

      <Reveal triggerOnce={false} delay={100}>
        <p className="text-[0.9rem] -mt-6 mb-12 max-w-125 leading-[1.7] text-(--fg)">
          {description}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
        {/* Card de status */}
        <Reveal triggerOnce={false} direction="right" className="h-full">
          <div className="bg-(--card-bg) border border-(--border) rounded-lg p-6 flex flex-col gap-5 h-full project-card">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="mono text-xs font-medium text-green-600 dark:text-green-400">
                {badge}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-(--heading) mb-2">
                {heading}
              </h3>
              <p className="text-sm leading-[1.7] text-(--fg)">{text}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-(--border) mt-auto ">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-(--accent)">
                      <Icon size={15} />
                    </span>
                    <span className="mono text-xs text-(--muted)">
                      {item.label}
                    </span>
                    <span className="text-sm text-(--heading) font-medium ml-auto">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <div className="flex flex-col gap-5 h-full">
          {contactData.map((contact, i) => {
            const Icon = contactIcons[contact.name];

            return (
              <Reveal
                triggerOnce={false}
                key={contact.name}
                direction="left"
                className="flex-1"
                delay={i * 100}
              >
                <a
                  href={getHref(contact)}
                  target={contact.name === "Email" ? undefined : "_blank"}
                  rel={contact.name === "Email" ? undefined : "noopener"}
                  className="flex items-center gap-3 md:gap-3.5 px-2.5 md:px-4.5  py-3.5 bg-(--card-bg) border border-(--border) rounded-lg no-underline transition-[border-color,transform] duration-200 hover:border-(--accent) hover:translate-x-1 h-full project-card"
                >
                  <span className="text-(--accent)">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="mono text-xs mb-0.5 text-(--muted)">
                      {contact.name}
                    </p>
                    <p className="text-sm text-(--heading) font-medium truncate">
                      {formatDisplayPath(contact.path)}
                    </p>
                  </div>
                  <span className="ml-auto text-(--muted) icon-link hidden md:flex">
                    <ExternalLink size={18} />
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
