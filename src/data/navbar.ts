import { Languages } from "./languages";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: Record<Languages, NavItem[]> = {
  pt: [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Certificações", href: "#certifications" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const themeLabels: Record<Languages, { light: string; dark: string }> = {
  pt: { light: "Claro", dark: "Escuro" },
  en: { light: "Light", dark: "Dark" },
};
