import { IconGithub, IconLinkedin, IconMail } from "@/components/ui/icons";
import { Languages } from "./languages";
import { Clock, LucideIcon, MapPin, Zap } from "lucide-react";

export interface ContactType {
  name: string;
  path: string;
}

export const contactData: ContactType[] = [
  { name: "LinkedIn", path: "https://www.linkedin.com/in/gustavo-ventieri/" },
  { name: "Email", path: "contato.gustavoventieri@gmail.com" },
  { name: "Github", path: "https://github.com/gustavoventieri" },
];

export const contactIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  Github: IconGithub,
  LinkedIn: IconLinkedin,
  Email: IconMail,
};

export function getHref(contact: ContactType) {
  if (contact.name === "Email") return `mailto:${contact.path}`;
  return contact.path;
}

export interface ContactSection {
  label: string;
  title: string;
  description: string;
  badge: string;
  text: string;
  heading: string;
  items: ItemsData[];
}

export interface ItemsData {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const contactPageData: Record<Languages, ContactSection> = {
  pt: {
    label: "// 06. Contato",
    title: "Contato",
    description:
      "Vamos conversar? Estou aberto a novas oportunidades e projetos interessantes.",
    badge: "Disponível",
    heading: "Aberto a novas oportunidades",
    text: "Aberto a trabalho, e de olho em projetos e desafios interessantes. Costumo responder em até 24h.",
    items: [
      { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
      { icon: Clock, label: "Fuso horário", value: "GMT-3" },
      { icon: Zap, label: "Tempo de resposta", value: "~24 horas" },
    ],
  },
  en: {
    label: "// 06. Contact",
    title: "Contact",
    description:
      "Let's talk? I'm open to new opportunities and interesting projects.",

    badge: "Available",
    heading: "Open to new opportunities",
    text: "Open to work, and always keeping an eye out for interesting projects and challenges. I usually respond within 24h.",
    items: [
      { icon: MapPin, label: "Location", value: "São Paulo, Brazil" },
      { icon: Clock, label: "Timezone", value: "GMT-3" },
      { icon: Zap, label: "Response time", value: "~24 hours" },
    ],
  },
};
