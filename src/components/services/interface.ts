import type { LucideIcon } from "lucide-react";

export interface ServiceFeature {
  text: string;
}

export interface ServiceCard {
  id: number;
  icon: LucideIcon;
  badge?: string;
  isHighValue?: boolean;
  title: string;
  description: string;
  features: ServiceFeature[];
}
