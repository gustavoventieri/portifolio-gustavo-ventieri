import { contactData, contactIcons, getHref } from "@/data/contact"; // ajuste o path conforme sua estrutura

export function Footer() {
  return (
    <footer className="border-t border-(--border) mt-0">
      <div className="max-w-400 mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono text-xs text-(--muted)">
          © 2026 Gustavo Ventieri. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          {contactData.map((contact) => {
            const Icon = contactIcons[contact.name];
            return (
              <a
                key={contact.name}
                href={getHref(contact)}
                target={contact.name !== "Email" ? "_blank" : undefined}
                rel={contact.name !== "Email" ? "noopener" : undefined}
                className="icon-link"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
