import { Languages } from "./languages";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: Record<Languages, NavItem[]> = {
  pt: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Acadêmico", href: "#academic" },

    { label: "Certificações", href: "#certifications" },
    { label: "Contato", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Academic", href: "#academic" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export const themeLabels: Record<Languages, { light: string; dark: string }> = {
  pt: { light: "Claro", dark: "Escuro" },
  en: { light: "Light", dark: "Dark" },
};
