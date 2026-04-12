import {
  AdvancedJavascriptCertificate,
  AiEngineeringPathCertificate,
  ProgrammingWithJsByMetaCertificate,
  ReactiveAccelaeratorCertificate,
} from "@/assets/certifications";
import { GraduationCap } from "lucide-react";
import { IAcademicEducation, ICertification } from "./interface";

export const ACADEMIC_EDUCATION: IAcademicEducation = {
  school: "Begum Rokeya University, Rangpur",
  program: "B.B.A in Management Information Systems",
  status: "4th Year, 1st Sem",
  period: "2022 — Present (Expected 2026)",
  description:
    "Developing a strong foundation in enterprise systems, database architecture, and business process optimization. Bridging core management theory with hands-on skills in full-stack development, data analysis, and modern cloud infrastructure.",
  highlights: [
    "Enterprise systems and process analysis",
    "Database architecture and information modeling",
    "Practical full-stack development workflow",
  ],
  icon: <GraduationCap className="w-9 h-9 text-primary" />,
};

export const CERTIFICATIONS: ICertification[] = [
  {
    id: "cert-1",
    title: "Advanced JavaScript",
    platform: "Scrimba",
    platformColor: "var(--primary)",
    completionDate: "December 2025",
    imageUrl: AdvancedJavascriptCertificate,
    summary:
      "Completed a focused certification covering modern JavaScript patterns, asynchronous workflows, and production-ready code structure.",
    highlights: ["Modern syntax", "Async patterns", "Production practices"],
  },
  {
    id: "cert-2",
    title: "AI Engineering Path",
    platform: "Scrimba",
    platformColor: "var(--primary)",
    completionDate: "2025",
    imageUrl: AiEngineeringPathCertificate,
    summary:
      "Built a practical foundation in AI-assisted development, model workflows, and integrating AI tools into real products.",
    highlights: ["AI workflows", "Tool integration", "Applied learning"],
  },
  {
    id: "cert-3",
    title: "Programming with JavaScript",
    platform: "Coursera (Meta)",
    platformColor: "var(--primary)",
    completionDate: "2024",
    imageUrl: ProgrammingWithJsByMetaCertificate,
    summary:
      "Completed the Meta JavaScript curriculum with emphasis on DOM logic, program structure, and clean implementation.",
    highlights: [
      "DOM fundamentals",
      "Core programming",
      "Implementation focus",
    ],
  },
  {
    id: "cert-4",
    title: "Reactive Accelerator",
    platform: "Learn With Sumith",
    platformColor: "var(--primary)",
    completionDate: "2024",
    imageUrl: ReactiveAccelaeratorCertificate,
    summary:
      "Focused on modern reactive UI composition, state transitions, and maintaining smooth user experiences under load.",
    highlights: ["Reactive UI", "State transitions", "Smooth UX"],
  },
];

export const CERTIFICATIONS_TITLE = "Professional Certifications";
