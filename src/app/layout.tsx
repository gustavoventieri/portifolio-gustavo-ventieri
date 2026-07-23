import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-contexts";
import { App } from "./app";

export const metadata: Metadata = {
  title: "Gustavo Ventieri | Backend Software Enginnner & Data Analyst",
  description:
    "Backend Software Enginnner and Data Analyst focused on building scalable web applications and transforming complex data into actionable insights.",
  keywords: [
    "Full Stack Developer",
    "Data Analyst",
    "Software Engineer",
    "Back End Development",
    "Data Analysis",
    "Web Development",
    "Backend Software Enginnner",
  ],
  authors: [{ name: "Gustavo Ventieri" }],
  openGraph: {
    title: "Gustavo Ventieri | Backend Software Enginnner & Data Analyst",
    description:
      "Crafting robust full-stack solutions with a data-driven mindset.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <App>{children}</App>
    </LanguageProvider>
  );
}
