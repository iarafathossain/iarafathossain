import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}
