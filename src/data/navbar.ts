import { Languages } from "./languages";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: Record<Languages, NavItem[]> = {
  pt: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Acadêmico", href: "#academic" },

    { label: "Certificações", href: "#certifications" },
    { label: "Contato", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Academic", href: "#academic" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export const themeLabels: Record<Languages, { light: string; dark: string }> = {
  pt: { light: "Claro", dark: "Escuro" },
  en: { light: "Light", dark: "Dark" },
};
