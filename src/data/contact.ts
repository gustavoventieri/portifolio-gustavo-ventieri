import { IconGithub, IconLinkedin, IconMail } from "@/components/ui/icons";
import { Languages } from "./languages";

export interface ContactType {
  name: string;
  path: string;
}

export const contactData: ContactType[] = [
  { name: "Github", path: "https://github.com/gustavoventieri" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/gustavo-ventieri/" },
  { name: "Email", path: "contato.gustavoventieri@gmail.com" },
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
}

export const contactPageData: Record<Languages, ContactSection> = {
  pt: {
    label: "// 06. Contato",
    title: "Contato",
    description:
      "Vamos conversar? Estou aberto a novas oportunidades e projetos interessantes.",
  },
  en: {
    label: "// 06. Contact",
    title: "Contact",
    description:
      "Let's talk? I'm open to new opportunities and interesting projects.",
  },
};
