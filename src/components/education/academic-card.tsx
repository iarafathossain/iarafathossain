import { Calendar, GraduationCap } from "lucide-react";
import { ACADEMIC_EDUCATION } from "./data";

const AcademicCard = () => (
  <div
    className="rounded-2xl border border-white/10 overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      boxShadow:
        "0 0 0 1px rgba(249,115,22,0.05), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
  >
    <div
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), rgba(168,85,247,0.5), transparent)",
      }}
    />

    <div className="flex-1 min-w-0 rounded-2xl border border-white/5 bg-black/20 p-5 sm:p-6 md:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-9 h-9 text-orange-400/80" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {ACADEMIC_EDUCATION.school}
              </h3>
              <p className="text-emerald-400/80 text-sm font-mono mt-0.5">
                {ACADEMIC_EDUCATION.program}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/40 text-sm font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            {ACADEMIC_EDUCATION.period}
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
          {ACADEMIC_EDUCATION.description}
        </p>

        <div className="pt-1">
          <h4 className="text-white/90 text-sm font-semibold mb-3">
            Key Focus
          </h4>
          <ul className="grid gap-2 text-sm text-white/60">
            {ACADEMIC_EDUCATION.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
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
