export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  period: string;
  duration?: string;
  highlights: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    id: "omaapply",
    company: "OmaApply",
    role: "Trainee Software Engineer",
    location: "Pori, Finland",
    workMode: "Remote",
    period: "Jun – Sep 2026",
    duration: "4 months",
    highlights: [
      "Built and delivered full-stack features from planning to production, working across frontend and backend within a 3-engineer remote team.",
      "Refactored the role system from an enum-based design to flexible Role and UserRole schemas while preserving existing data through a zero-data-loss migration.",
      "Managed application deployment and environments by configuring PM2, Nginx, and Docker across Local, Staging, and production, including environment and configuration management.",
      "Improved application security with Cloudflare Turnstile, rate limiting, and staging password protection.",
      "Accelerated development with Claude Code, delivering production-ready features faster.",
    ],
    tech: [
      "Scrum Methodology",
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "PM2",
      "Jira",
      "Gitlab",
      "Cloudflare Turnstile",
      "Nginx",
      "Docker",
      "Claude Code",
    ],
  },
];
