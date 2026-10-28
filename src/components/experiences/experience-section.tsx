"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../section-heading";
import { containerVariants } from "../services/animations";
import DotBGEffect from "../shared/dot-bg-effect";
import { SECTION_HEADING_MOTION } from "../shared/section-animations";
import SectionShell from "../shared/section-shell";
import { experiences } from "./data";
import { ExperienceCard } from "./experience-card";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);

  // Trigger animation once when 20% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionShell
      ref={ref}
      id="experiences"
      aria-labelledby="experiences-heading"
      background={
        <>
          <DotBGEffect />
          {/* Optional decorative ambient blur orbs - purely presentational */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          />
        </>
      }
    >
      <div className="space-y-12">
        {/* ── Section Heading ── */}
        <motion.div
          variants={SECTION_HEADING_MOTION}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            label="Professional Journey"
            title="EXPERIENCES"
            description="A curated selection of my professional experiences, showcasing my contributions and growth in the tech industry."
          />
        </motion.div>

        {/* ── Staggered Card Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          role="list"
          aria-label="Experiences"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
