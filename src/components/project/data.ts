import { Project } from "./interface";

export const PROJECTS: Project[] = [
  {
    id: "nexus-crm",
    title: "Nexus CRM Platform",
    type: "Full Stack",
    description:
      "A high-performance customer relationship management platform built for SaaS teams. Features real-time dashboards, multi-tenant architecture, role-based access control, and an intelligent lead scoring engine — all wrapped in a keyboard-first UI.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    fullPageImageUrlArray: [
      "https://picsum.photos/seed/nexus1/1200/3200",
      "https://picsum.photos/seed/nexus2/1200/3000",
      "https://picsum.photos/seed/nexus3/1200/3400",
    ],
    frontendStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    backendStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Auth.js",
      "Redis",
    ],
    liveUrl: "https://nexus-crm.example.com",
    githubUrlFrontend: "https://github.com/example/nexus-crm-frontend",
    githubUrlBackend: "https://github.com/example/nexus-crm-backend",
    deepDiveUrl: "/blog/nexus-crm-deep-dive",
    accentColor: "#6366f1",
  },
  {
    id: "forge-api",
    title: "Forge API Gateway",
    type: "Full Stack",
    description:
      "A self-hosted API gateway with a visual route builder, live traffic analytics, JWT middleware injection, and OAuth provider proxying. Designed for indie hackers who need enterprise-grade routing without the enterprise price tag.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    fullPageImageUrlArray: [
      "https://picsum.photos/seed/forge1/1200/3100",
      "https://picsum.photos/seed/forge2/1200/2900",
      "https://picsum.photos/seed/forge3/1200/3300",
    ],
    frontendStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Recharts",
    ],
    backendStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Docker",
    ],
    liveUrl: "https://forge-api.example.com",
    githubUrlFrontend: "https://github.com/example/forge-api-frontend",
    githubUrlBackend: "https://github.com/example/forge-api-backend",
    deepDiveUrl: "/blog/forge-api-deep-dive",
    accentColor: "#10b981",
  },
  {
    id: "atlas-finance",
    title: "Atlas Finance Tracker",
    type: "Full Stack",
    description:
      "A personal finance dashboard with bank-sync simulation, AI-categorized transactions, monthly budget forecasting, and beautiful chart-driven reports. Privacy-first — all processing happens server-side with end-to-end encrypted storage.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    fullPageImageUrlArray: [
      "https://picsum.photos/seed/atlas1/1200/3000",
      "https://picsum.photos/seed/atlas2/1200/3200",
      "https://picsum.photos/seed/atlas3/1200/2800",
    ],
    frontendStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Chart.js",
    ],
    backendStack: [
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Better-Auth",
      "OAuth 2.0",
    ],
    liveUrl: "https://atlas-finance.example.com",
    githubUrlFrontend: "https://github.com/example/atlas-finance-frontend",
    githubUrlBackend: "https://github.com/example/atlas-finance-backend",
    deepDiveUrl: "/blog/atlas-finance-deep-dive",
    accentColor: "#f59e0b",
  },
];
