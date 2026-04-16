"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from "../section-heading";
import { SECTION_HEADING_MOTION } from "../shared/section-animations";
import SectionShell from "../shared/section-shell";
import SquareBGEffect from "../shared/square-bg-effect";
import ContactForm from "./contact-form";

export const ContactSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // Trigger animation once when 20% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionShell
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24"
      background={
        <>
          <SquareBGEffect />
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
            label="Get In Touch"
            title="CONTACT"
            description="Let's connect! Feel free to reach out with any questions or opportunities."
          />
        </motion.div>

        {/* ── Contact Form ── */}
        {isInView && <ContactForm />}
      </div>
    </SectionShell>
  );
};

export default ContactSection;
