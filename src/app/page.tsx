import { ContactSection } from "@/components/contact/contact-section";
import EducationSection from "@/components/education/education-section";
import ExperienceSection from "@/components/experiences/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import ProfessionalMilestones from "@/components/professional-milestone/professional-milestone-section";
import ProjectsSection from "@/components/project/project-section";
import ServicesSection from "@/components/services/services-section";
import SkillsSection from "@/components/skill/skill-section";
import TestimonialSection from "@/components/testimonials/testimonial-section";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      {/* Experience Section */}
      <ExperienceSection />
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Skills Section */}
      <SkillsSection />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Professional Milestones Section */}
      <ProfessionalMilestones />
      {/* Education Section */}
      <EducationSection />
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};
export default HomePage;
