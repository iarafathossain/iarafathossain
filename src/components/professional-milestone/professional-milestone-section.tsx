"use client";

import SectionHeading from "@/components/section-heading";
import { type TargetAndTransition, type Variants } from "framer-motion";
import SquareBGEffect from "../shared/square-bg-effect";
import CustomerCareCard from "./customer-care-card";
import HultPrizeCard from "./hult-prize-card";
import MilestoneMotionCard from "./milestone-motion-card";

// ─── Animation Variants ───────────────────────────────────────────────────────

const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProfessionalMilestones() {
  return (
    <section className="relative w-full overflow-hidden bg-muted px-4 py-24 sm:px-6 lg:px-8">
      <SquareBGEffect />

      <div className="relative z-10 px-3 w-full max-w-6xl mx-auto">
        <SectionHeading
          label="Beyond Coding"
          title="PROFESSIONAL MILESTONES"
          description="Key moments that sharpened my leadership, communication, and decision-making alongside technical growth."
        />

        <div className="flex w-full flex-col gap-6">
          <MilestoneMotionCard custom={0} variants={slideUp}>
            <HultPrizeCard />
          </MilestoneMotionCard>

          <MilestoneMotionCard custom={0.18} variants={slideUp}>
            <CustomerCareCard />
          </MilestoneMotionCard>
        </div>
      </div>
    </section>
  );
}
