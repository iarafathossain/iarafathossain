import { ISkill } from "../skill/interface";

export interface Project {
  id: string;
  title: string;
  type: "Full Stack";
  description: string;
  videoUrl: string;
  fullPageImageUrlArray: string[];
  frontendStack: ISkill[];
  backendStack: ISkill[];
  liveUrl: string;
  githubUrlFrontend: string;
  githubUrlBackend: string;
  deepDiveUrl: string;
  accentColor: string;
}
