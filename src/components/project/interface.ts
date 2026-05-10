export interface Project {
  id: string;
  title: string;
  type: "Full Stack";
  highlights: string[];
  videoUrl: string;
  frontendStack: { id: string; name: string }[];
  backendStack: { id: string; name: string }[];
  sourceCode?: string;
  liveUrl: string;
  githubUrlFrontend?: string;
  githubUrlBackend?: string;
  deepDiveUrl?: string;
  accentColor: string;
}
