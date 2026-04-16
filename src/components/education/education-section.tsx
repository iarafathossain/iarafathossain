"use client";

import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionLabel from "../section-label";
import DotBGEffect from "../shared/dot-bg-effect";
import {
  SECTION_GSAP_BLOCK,
  SECTION_GSAP_HEADING,
} from "../shared/section-animations";
import SectionShell from "../shared/section-shell";
import AcademicCard from "./academic-card";
import CertificationCard from "./certification-card";
import { CERTIFICATIONS, CERTIFICATIONS_TITLE } from "./data";

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const certGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: SECTION_GSAP_HEADING.opacity,
        y: SECTION_GSAP_HEADING.y,
        duration: SECTION_GSAP_HEADING.duration,
        ease: SECTION_GSAP_HEADING.ease,
        scrollTrigger: {
          trigger: headingRef.current,
          start: SECTION_GSAP_HEADING.start,
          once: SECTION_GSAP_HEADING.once,
        },
      });

      gsap.from(academicRef.current, {
        opacity: SECTION_GSAP_BLOCK.opacity,
        y: SECTION_GSAP_BLOCK.y,
        duration: SECTION_GSAP_BLOCK.duration,
        ease: SECTION_GSAP_BLOCK.ease,
        scrollTrigger: {
          trigger: academicRef.current,
          start: SECTION_GSAP_BLOCK.start,
          once: SECTION_GSAP_BLOCK.once,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell
      ref={sectionRef}
      id="education"
      background={
        <>
          <DotBGEffect />
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                width: 600,
                height: 600,
                top: "10%",
                left: "-10%",
                background:
                  "radial-gradient(circle, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 500,
                height: 500,
                bottom: "5%",
                right: "-8%",
                background:
                  "radial-gradient(circle, color-mix(in oklch, var(--secondary-foreground) 12%, transparent) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>
        </>
      }
    >
      <div className="space-y-12">
        <SectionHeading
          ref={headingRef}
          label="Continuous Learning"
          title="Education"
          description="Bridging the gap between academic theory and modern web technologies."
        />

        <div ref={academicRef}>
          <AcademicCard />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <SectionLabel>{CERTIFICATIONS_TITLE}</SectionLabel>
          </div>

          <motion.div
            ref={certGridRef}
            variants={{
              hidden: {
                transition: { staggerChildren: 0.12 },
              },
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5"
          >
            {CERTIFICATIONS.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
