"use client";

import SectionHeading from "@/components/section-heading";
import { type TargetAndTransition, type Variants } from "framer-motion";
import DotBGEffect from "../shared/dot-bg-effect";
import { ExpressRouteCode, NextActionCode } from "./architecture-code";
import ArchitecturePatternCard from "./architecture-pattern-card";

// ─── Animation Variants ───────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};

export default function ArchitecturePatterns() {
  return (
    <section className="relative w-full bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DotBGEffect />

      <div className="relative z-10 px-3 w-full max-w-6xl mx-auto">
        <SectionHeading
          label="System Design in Practice"
          title="ARCHITECTURE & PATTERNS"
          description="How I structure scalable, maintainable, and secure applications."
        />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <ArchitecturePatternCard
            custom={0.15}
            variants={cardVariants}
            filePath="src/modules/product/product-routes.ts"
            contextTitle="Robust Middleware Pipeline"
            contextDescription="Enforces strict request payload validation via Zod and Role-Based Access Control (RBAC) at the route level before engaging business logic."
          >
            <ExpressRouteCode />
          </ArchitecturePatternCard>

          <ArchitecturePatternCard
            custom={0}
            variants={cardVariants}
            filePath="src/actions/product-action.ts"
            contextTitle="End-to-End Type Safety"
            contextDescription="Ensures type safety from the server action to the client, abstracts complex logic into reusable services, and guarantees standardized API responses."
          >
            <NextActionCode />
          </ArchitecturePatternCard>
        </div>
      </div>
    </section>
  );
}
