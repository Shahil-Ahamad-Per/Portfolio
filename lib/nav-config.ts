import {
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  Send,
  Mail,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export const SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "blog",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const SIDEBAR_WIDTH_PX = 288;

export interface NavItemConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Send },
];

export interface SocialLinkConfig {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverColor: string;
  bgColor: string;
}

export const FLOATING_SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    name: "GitHub",
    href: "https://github.com/Shahil-Ahamad-Per",
    icon: Github,
    hoverColor: "group-hover:text-[#24292e] dark:group-hover:text-white",
    bgColor: "hover:bg-slate-100 dark:hover:bg-slate-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shahil-ahamad/",
    icon: Linkedin,
    hoverColor: "group-hover:text-[#0a66c2] dark:group-hover:text-[#388bfd]",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
  },
  {
    name: "Gmail",
    href: "mailto:contact@shahilahamad.com.np",
    icon: Mail,
    hoverColor: "group-hover:text-[#ea4335] dark:group-hover:text-[#ff6b6b]",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-950/30",
  },
];
