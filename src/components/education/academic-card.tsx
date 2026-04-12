import { Calendar, GraduationCap } from "lucide-react";
import { ACADEMIC_EDUCATION } from "./data";

const AcademicCard = () => (
  <div className="rounded-2xl border border-border/40 overflow-hidden bg-card/40 backdrop-blur-xl shadow-lg">
    <div className="h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent" />

    <div className="flex-1 min-w-0 rounded-2xl border border-border/30 bg-secondary/20 p-5 sm:p-6 md:p-7 m-1">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-9 h-9 text-primary" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                {ACADEMIC_EDUCATION.school}
              </h3>
              <p className="text-primary/90 text-sm font-mono mt-0.5">
                {ACADEMIC_EDUCATION.program}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            {ACADEMIC_EDUCATION.period}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {ACADEMIC_EDUCATION.description}
        </p>

        <div className="pt-1">
          <h4 className="text-foreground text-sm font-semibold mb-3">
            Key Focus
          </h4>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {ACADEMIC_EDUCATION.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AcademicCard;
