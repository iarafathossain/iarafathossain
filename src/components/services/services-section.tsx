"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from "../section-heading";
import DotBGEffect from "../shared/dot-bg-effect";
import { containerVariants } from "./animations";
import { SERVICES } from "./data";
import ServiceCardItem from "./service-card-item";

export const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // Trigger animation once when 20% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <DotBGEffect />
      {/* Optional decorative ambient blur orbs — purely presentational */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative z-10 px-3 w-full max-w-6xl mx-auto">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            label="What I Offer"
            title="SERVICES & EXPERTISE"
            description="Delivering end-to-end solutions, from scalable backend architectures to pixel-perfect user interfaces."
          />
        </motion.div>

        {/* ── Staggered Card Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Services offered"
        >
          {SERVICES.map((card) => (
            <div key={card.id} role="listitem">
              <ServiceCardItem card={card} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
