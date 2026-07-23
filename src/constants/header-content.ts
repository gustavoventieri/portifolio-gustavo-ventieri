import { User, Database, Mail, Backpack } from "lucide-react";

export const navLinks = {
  pt: [
    { label: "Sobre", href: "#about", icon: User },
    { label: "Experiência", href: "#experience", icon: Backpack },
    { label: "Certificações", href: "#certifications", icon: Database },
    // { label: "Projetos", href: "#projects", icon: Briefcase },
    { label: "Contato", href: "#contact", icon: Mail },
  ],

  en: [
    { label: "About", href: "#about", icon: User },
    { label: "Experience", href: "#experience", icon: Backpack },
    { label: "Certifications", href: "#certifications", icon: Database },
    // { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ],
};
