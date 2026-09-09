import type { ComponentType } from "react";
import {
  TypescriptIcon,
  Javascript,
  _React as ReactIcon,
  NextjsIcon,
  TailwindIcon,
  NodejsIcon,
  Express,
  Graphql,
  Prisma,
  Postgresql,
  MongodbIcon,
  DockerIcon,
  GitIcon,
  GithubIcon,
  VercelIcon,
  Nx,
  Mysql,
  CloudflareIcon,
} from "@dev.icons/react";

export interface Skill {
  name: string;
  category: string;
  url: string;
  icon?: ComponentType<{ className?: string; size?: number | string }>;
  image?: string;
  invertDark?: boolean;
}

export const skills: Skill[] = [
  // Core Languages & Frontend
  {
    name: "TypeScript",
    category: "Language",
    url: "https://www.typescriptlang.org/docs/",
    icon: TypescriptIcon,
    image: "https://devicons.io/devicons/icons/typescript-icon.svg",
  },
  {
    name: "JavaScript",
    category: "Language",
    url: "https://javascript.info/",
    icon: Javascript,
  },
  {
    name: "React.js",
    category: "Frontend",
    url: "https://react.dev/learn",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    category: "Framework",
    url: "https://nextjs.org/docs",
    icon: NextjsIcon,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    url: "https://tailwindcss.com/",
    icon: TailwindIcon,
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend",
    url: "https://nodejs.org/docs/latest/api/",
    icon: NodejsIcon,
  },
  {
    name: "Express.js",
    category: "Backend",
    url: "https://expressjs.com/en/starter/installing.html",
    icon: Express,
    invertDark: true,
  },
  {
    name: "GraphQL",
    category: "API",
    url: "https://graphql.org/learn/",
    icon: Graphql,
  },
  {
    name: "Prisma",
    category: "ORM",
    url: "https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma",
    icon: Prisma,
    invertDark: true,
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Database",
    url: "https://www.postgresql.org/docs/",
    icon: Postgresql,
    image: "https://devicons.io/devicons/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    url: "https://www.mongodb.com/",
    icon: MongodbIcon,
  },
  {
    name: "MySQL",
    category: "Database",
    url: "https://dev.mysql.com/doc/",
    icon: Mysql,
    image: "https://devicons.io/devicons/icons/mysql.svg",
  },

  // DevOps, Cloud & Tools
  {
    name: "Docker",
    category: "DevOps",
    url: "https://www.docker.com/",
    icon: DockerIcon,
  },
  {
    name: "Git",
    category: "Version Control",
    url: "https://git-scm.com/doc",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    category: "Version Control",
    url: "https://github.com/resources/articles",
    icon: GithubIcon,
    image: "https://devicons.io/devicons/icons/github-icon.svg",
    invertDark: true,
  },
  {
    name: "Linux",
    category: "System",
    url: "https://linux.org",
    image: "/Linux.svg",
  },
  {
    name: "Cloudflare",
    category: "Infrastructure",
    url: "https://www.cloudflare.com/",
    icon: CloudflareIcon,
  },
  {
    name: "Vercel",
    category: "Deployment",
    url: "https://vercel.com/docs",
    icon: VercelIcon,
    image: "https://devicons.io/devicons/icons/vercel-icon.svg",
    invertDark: true,
  },
  {
    name: "NX Workspace",
    category: "Workspace",
    url: "https://nx.dev/getting-started/intro",
    icon: Nx,
    image: "https://devicons.io/devicons/icons/nx.svg",
  },
];
