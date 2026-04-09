export interface SkillGroup {
  category: string;
  color: string;
  glowColor: string;
  tech: string[];
}

export const SKILLS_DATA: readonly SkillGroup[] = [
  {
    category: "Programming Languages",
    color: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.4)", // Cyan
    tech: ["JavaScript", "TypeScript", "Node.js"],
  },
  {
    category: "Frameworks & Libraries",
    color: "text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.4)", // Purple
    tech: ["React.js", "Next.js", "Express.js"],
  },
  {
    category: "Databases & Modeling",
    color: "text-amber-400",
    glowColor: "rgba(251, 191, 36, 0.4)", // Amber
    tech: ["PostgreSQL (Prisma)", "MongoDB (Mongoose)", "ERD Design"],
  },
  {
    category: "Frontend Development",
    color: "text-pink-400",
    glowColor: "rgba(244, 114, 182, 0.4)", // Pink
    tech: ["HTML", "CSS", "Tailwind CSS", "ShadCN", "Bootstrap"],
  },
  {
    category: "AI & Prompt Engineering",
    color: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)", // Emerald
    tech: ["Copilot", "Claude", "LLM Integrations", "System Prompts"],
  },
] as const;

export interface IProject {
  slug: string;
  category?: string;
  title: string;
  description: string;
  techStack: string[];
  live: string;
  videoUrl?: string;
  image?: string;
  frontendGit: string;
  frontedGit?: string;
  backendGit?: string;
  frontendReadme?: string;
  backendReadme?: string;
}

export const PROJECTS_DATA: readonly IProject[] = [
  {
    slug: "ai-powered-job-application-assistant",
    category: "Full-Stack",
    title: "AI-Powered Job Application Assistant",
    description:
      "A web application that streamlines the job application process by leveraging AI to generate tailored resumes and cover letters based on user input and job descriptions.",
    techStack: ["React", "Node.js", "Express", "OpenAI API", "MongoDB"],
    live: "https://job-assistant.example.com",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: "/images/job-assistant.png",
    frontendGit: "https://github.com/arafat/job-assistant-frontend",
    backendGit: "https://github.com/arafat/job-assistant-backend",
    frontendReadme: "readmes/parcel-koy-frontend.md",
    backendReadme: "readmes/parcel-koy-backend.md",
  },
];
