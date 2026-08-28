import { IconGithub, IconLinkedin, IconMail } from "@/components/ui/icons";

export interface ContactType {
  name: string;
  path: string;
}

export const contactData: ContactType[] = [
  { name: "Github", path: "https://github.com/gustavoventieri" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/gustavo-ventieri/" },
  { name: "Email", path: "contato.gustavoventieri@gmail.com" },
];

export const contactIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: IconGithub,
  LinkedIn: IconLinkedin,
  Email: IconMail,
};

export function getHref(contact: ContactType) {
  if (contact.name === "Email") return `mailto:${contact.path}`;
  return contact.path;
}
