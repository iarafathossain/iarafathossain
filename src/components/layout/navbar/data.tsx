import { GithubIcon, LinkedinIcon } from "@/assets/svgs";
import type { NavItem, SocialLink } from "./interface";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects & Cases", href: "#projects", highlight: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <GithubIcon className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedinIcon className="w-5 h-5" />,
  },
];

export const RESUME_HREF = "/resume.pdf";
