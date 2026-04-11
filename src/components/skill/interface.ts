export interface ISkill {
  name: string;
  icon: React.ReactNode;
}

export interface IBentoCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: ISkill[];
  colSpan?: "single" | "double";
}

export interface ICoreSkill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface IExploringGroup {
  groupTitle: string;
  icon: React.ReactNode;
  skills: { name: string; icon: React.ReactNode }[];
}
