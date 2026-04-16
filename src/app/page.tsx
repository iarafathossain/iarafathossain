"use client";

import ArchitecturePatterns from "@/components/architecture/architecture-section";
import EducationSection from "@/components/education/education-section";
import { HeroSection } from "@/components/hero/hero-section";
import ProfessionalMilestones from "@/components/professional-milestone/professional-milestone-section";
import ProjectsSection from "@/components/project/project-section";
import ServicesSection from "@/components/services/services-section";
import SkillsSection from "@/components/skill/skill-section";
import TestimonialsRedesign from "@/components/testimonials/testimonial-section";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Skills Section */}
      <SkillsSection />
      {/* Architecture Section */}
      <ArchitecturePatterns />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Testimonials Section */}
      <TestimonialsRedesign />
      {/* Professional Milestones Section */}
      <ProfessionalMilestones />
      {/* Education Section */}
      <EducationSection />
    </main>
  );
};
export default HomePage;
