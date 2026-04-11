import { motion } from "framer-motion";
import { Calendar, ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";
import { ICertification } from "./interface";

const CertificationCard = ({ cert }: { cert: ICertification }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      },
    }}
    className="cert-card group flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-emerald-500/25 bg-[#171311] hover:border-emerald-400/35 transition-colors duration-300"
    style={{
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow:
        "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
    }}
  >
    <div className="relative w-full lg:w-[42%] min-h-72 lg:min-h-88 overflow-hidden bg-[#1f1a17]">
      <Image
        src={cert.imageUrl}
        alt={cert.title}
        fill
        priority={false}
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent lg:bg-linear-to-r lg:from-black/35 lg:via-black/5 lg:to-transparent" />
    </div>

    <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-9 h-9 text-orange-400/80" />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {cert.title}
            </h3>
            <span
              className="inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-semibold font-mono uppercase tracking-wide"
              style={{
                backgroundColor: `${cert.platformColor}1f`,
                color: cert.platformColor,
                borderColor: `${cert.platformColor}55`,
              }}
            >
              {cert.platform}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/45 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {cert.completionDate}
          </span>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/35 hover:text-white/70 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Credential
            </a>
          )}
        </div>

        <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
          {cert.summary}
        </p>
      </div>

      <div>
        <h4 className="text-white/90 text-sm font-semibold mb-3">
          Key Topics Covered:
        </h4>
        <ul className="grid gap-2 text-sm text-white/60">
          {cert.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: cert.platformColor }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default CertificationCard;
