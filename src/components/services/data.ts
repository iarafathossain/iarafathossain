import {
  BrainCircuit,
  Code2,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";
import type { ServiceCard } from "./interface";

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Build scalable and production-ready web apps engineered for performance and reliability.",
    features: [
      { text: "MERN / PERN stack" },
      { text: "Authentication & APIs" },
      { text: "Clean architecture" },
    ],
  },
  {
    id: 2,
    icon: MonitorSmartphone,
    title: "Modern UI Engineering",
    description:
      "Pixel-perfect, fast, and responsive interfaces that delight users on every device.",
    features: [
      { text: "React / Next.js UI" },
      { text: "Performance optimization" },
      { text: "Design-to-code conversion" },
    ],
  },
  {
    id: 3,
    icon: ServerCog,
    title: "Backend & API Systems",
    description:
      "Robust and secure backend systems designed for scale, correctness, and maintainability.",
    features: [
      { text: "REST / GraphQL APIs" },
      { text: "Database design" },
      { text: "Authentication & security" },
    ],
  },
  {
    id: 4,
    icon: BrainCircuit,
    badge: "🔥 Trending",
    isHighValue: true,
    title: "AI-Powered Features",
    description:
      "Add intelligence to your product with modern AI integrations that feel like magic.",
    features: [
      { text: "Chatbot integration" },
      { text: "AI APIs (GPT / Gemini)" },
      { text: "Smart automation" },
    ],
  },
];
