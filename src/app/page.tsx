"use client";

import { HeroSection } from "@/components/hero/hero-section";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Background orb animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".orb-1", {
        x: 60,
        y: -40,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".orb-2", {
        x: -50,
        y: 50,
        duration: 11,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".orb-3", {
        x: 40,
        y: -60,
        duration: 14,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
    </main>
  );
};
export default HomePage;
