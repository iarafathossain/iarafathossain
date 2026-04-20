import {
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  FramerMotionIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  MongodbIcon,
  NextJSIcon,
  NodeJSIcon,
  PgsqlIcon,
  PostmanIcon,
  ReactIcon,
  SvgIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VsCodeIcon,
} from "@/assets/svgs";
import {
  Cloud,
  Container,
  Cpu,
  Database,
  FileJson,
  Key,
  Layers,
  LayoutGrid,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  TableProperties,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { IBentoCategory, ICoreSkill, IExploringGroup } from "./interface";

export const CORE_STACK: ICoreSkill[] = [
  {
    name: "Next.js",
    icon: <NextJSIcon className="w-6 h-6" />,
    description: "Full-stack React framework with App Router",
  },
  {
    name: "React.js",
    icon: <ReactIcon className="w-6 h-6" />,
    description: "Component-based UI library",
  },
  {
    name: "TypeScript",
    icon: <TypescriptIcon className="w-6 h-6" />,
    description: "Typed superset of JavaScript",
  },
  {
    name: "Node.js & Express.js",
    icon: <NodeJSIcon className="w-6 h-6" />,
    description: "JavaScript runtime for backend services",
  },
  {
    name: "PostgreSQL",
    icon: <PgsqlIcon className="w-6 h-6" />,
    description: "Advanced open-source relational database",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindcssIcon className="w-6 h-6" />,
    description: "Utility-first CSS framework",
  },
];

export const BENTO_CATEGORIES: IBentoCategory[] = [
  {
    title: "Frontend",
    icon: <LayoutGrid className="w-4 h-4" />,
    skills: [
      {
        name: "JavaScript",
        icon: <JavascriptIcon className="w-4 h-4" />,
      },
      {
        name: "TypeScript",
        icon: <TypescriptIcon className="w-4 h-4" />,
      },
      { name: "React.js", icon: <ReactIcon className="w-4 h-4" /> },
      {
        name: "Next.js",
        icon: <NextJSIcon className="w-4 h-4" />,
      },
      {
        name: "Tailwind CSS & Shadcn UI",
        icon: <TailwindcssIcon className="w-4 h-4" />,
      },
      {
        name: "framer-motion",
        icon: <FramerMotionIcon className="w-4 h-4" />,
      },
      { name: "Bootstrap", icon: <BootstrapIcon className="w-4 h-4" /> },
      { name: "SVG", icon: <SvgIcon className="w-4 h-4" /> },
      { name: "CSS3", icon: <CssIcon className="w-4 h-4" /> },
      { name: "HTML5", icon: <HtmlIcon className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend & Security",
    icon: <Shield className="w-4 h-4" />,
    skills: [
      {
        name: "Node.js & Express.js",
        icon: <Server className="w-4 h-4" />,
      },
      { name: "REST API Design", icon: <FileJson className="w-4 h-4" /> },
      { name: "Auth.js & Better-Auth", icon: <Lock className="w-4 h-4" /> },
      { name: "JWT & Token Management", icon: <Key className="w-4 h-4" /> },
      { name: "OAuth / Social Login", icon: <Users className="w-4 h-4" /> },
    ],
  },
  {
    title: "Databases & Data Modeling",
    icon: <Database className="w-4 h-4" />,
    skills: [
      {
        name: "PostgreSQL & Prisma ORM",
        icon: <PgsqlIcon className="w-4 h-4" />,
      },
      { name: "MongoDB & Mongoose", icon: <MongodbIcon className="w-4 h-4" /> },
      {
        name: "Firebase Realtime Database",
        icon: <FirebaseIcon className="w-4 h-4" />,
      },
      { name: "ERD Design", icon: <TableProperties className="w-4 h-4" /> },
    ],
    colSpan: "single",
  },
  {
    title: "Tools & Workflow",
    icon: <Workflow className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", icon: <GithubIcon className="w-4 h-4" /> },
      { name: "Postman", icon: <PostmanIcon className="w-4 h-4" /> },
      { name: "VS Code", icon: <VsCodeIcon className="w-4 h-4" /> },
      { name: "Figma", icon: <FigmaIcon className="w-4 h-4" /> },
    ],
    colSpan: "single",
  },
];

export const EXPLORING_GROUPS: IExploringGroup[] = [
  {
    groupTitle: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    skills: [
      { name: "AWS", icon: <Cloud className="w-3 h-3" /> },
      { name: "Docker", icon: <Container className="w-3 h-3" /> },
      { name: "CI/CD Pipelines", icon: <Workflow className="w-3 h-3" /> },
    ],
  },
  {
    groupTitle: "Architecture",
    icon: <Cpu className="w-4 h-4" />,
    skills: [
      { name: "System Design", icon: <Layers className="w-3 h-3" /> },
      { name: "Web Security", icon: <ShieldCheck className="w-3 h-3" /> },
      { name: "Performance Optimization", icon: <Zap className="w-3 h-3" /> },
    ],
  },
];
