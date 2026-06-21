import { Globe, LucideIcon, Mail } from "lucide-react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface ContactLink {
  icon: LucideIcon | IconType;
  label: string;
  href: string;
  sub: string;
  color: string;
}

export const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "ventierigustavo@gmail.com",
    href: "mailto:ventierigustavo@gmail.com",
    sub: "email",
    color: "#22d3ee", // Ciano
  },
  {
    icon: FaGithub,
    label: "github.com/gusstavoventieri",
    href: "https://github.com/gustavoventieri",
    sub: "code",
    color: "#a78bfa", // Violeta
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/gustavo-ventieri",
    href: "https://www.linkedin.com/in/gustavo-ventieri",
    sub: "network",
    color: "#34d399", // Esmeralda
  },
  {
    icon: Globe,
    label: "gustavoventieri.com.br",
    href: "https://gustavoventieri.com.br",
    sub: "site",
    color: "#f472b6", // Rosa
  },
];
