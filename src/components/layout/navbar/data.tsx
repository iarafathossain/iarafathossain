import { GithubIcon, LinkedinIcon } from "@/assets/svgs";
import { socialLinks } from "@/constants";
import type { NavItem, SocialLink } from "./interface";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: socialLinks.github,
    icon: <GithubIcon className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: <LinkedinIcon className="w-5 h-5" />,
  },
];

export const RESUME_HREF = "/resume.pdf";
