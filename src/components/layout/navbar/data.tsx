import { GithubIcon, LinkedinIcon } from "@/assets/svgs";
import { socialLinks } from "@/constants";
import type { NavItem, SocialLink } from "./interface";

export const NAV_ITEMS: NavItem[] = [
  { label: "Experience", href: "/#experiences" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
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

export const RESUME_HREF =
  "https://drive.google.com/file/d/1UQZWfMMoJ7xxN2rTHMJy2Yffx2J_i2uU/view";
