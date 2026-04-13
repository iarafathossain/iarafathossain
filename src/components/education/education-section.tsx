"use client";

import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionLabel from "../section-label";
import SquareBGEffect from "../shared/square-bg-effect";
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
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(academicRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: academicRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SquareBGEffect />
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          ref={headingRef}
          label="Continuous Learning"
          title="Education & Certifications"
          description="Bridging the gap between academic theory and modern web technologies."
        />

        <div ref={academicRef} className="mb-10">
          <AcademicCard />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <SectionLabel>{CERTIFICATIONS_TITLE}</SectionLabel>
          </div>

          <motion.div
            ref={certGridRef}
            variants={{
              hidden: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
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
    </section>
  );
}
