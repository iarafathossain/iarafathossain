import type { StaticImageData } from "next/image";
import type React from "react";

export interface IAcademicEducation {
  school: string;
  program: string;
  status: string;
  period: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

export interface ICertification {
  id: string;
  title: string;
  platform: string;
  platformColor: string;
  completionDate: string;
  imageUrl: StaticImageData;
  summary: string;
  highlights: string[];
  credentialUrl?: string;
}
