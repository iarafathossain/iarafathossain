export interface Project {
  id: string;
  title: string;
  type: "Full Stack";
  highlights: string[];
  videoUrl: string;
  frontendStack: { id: number; name: string }[];
  backendStack: { id: number; name: string }[];
  liveUrl: string;
  githubUrlFrontend: string;
  githubUrlBackend: string;
  deepDiveUrl: string;
  accentColor: string;
}
