import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
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
    className="cert-card group flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-border/40 bg-card/60 backdrop-blur-md hover:border-border/80 transition-colors duration-300 shadow-md"
  >
    <div className="relative w-full lg:w-[42%] min-h-72 lg:min-h-88 overflow-hidden bg-secondary/30">
      <Image
        src={cert.imageUrl}
        alt={cert.title}
        fill
        priority={false}
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-9 h-9 text-primary" />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
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

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Credential
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed max-w-2xl">
          {cert.summary}
        </p>
      </div>

      <div>
        <h4 className="text-foreground text-sm font-semibold mb-3">
          Key Topics Covered:
        </h4>
        <ul className="grid gap-2 text-sm text-muted-foreground">
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
