import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IBentoCategory } from "./interface";
import SkillBadge from "./skill-badge";

const BentoCard = ({ category }: { category: IBentoCategory }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bento-card h-full`}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--glow-color", category.accent + "30");
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--glow-color", "transparent");
    }}
  >
    <Card
      className="h-full bg-zinc-900/50 border-zinc-800/50 backdrop-blur-md
          hover:border-zinc-700/70 transition-all duration-300 overflow-hidden
          relative group"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 0 30px 0 ${category.accent}18
          `;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "inset 0 1px 0 rgba(255,255,255,0.04)";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.accent}80, transparent)`,
        }}
      />

      <CardHeader className="pb-3 pt-5 px-5">
        <CardTitle className="flex items-center gap-2.5 text-sm font-semibold text-zinc-300">
          <span
            className="p-1.5 rounded-md"
            style={{
              color: category.accent,
              background: category.accent + "18",
            }}
          >
            {category.icon}
          </span>
          {category.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 pb-5">
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              accent={category.accent}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default BentoCard;
