import { experiences } from "./data";
import { ExperienceCard } from "./experience-card";

export function ExperienceList() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
