"use client";

import { motion, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { cardVariants } from "./animations";
import type { ServiceCard } from "./interface";

const FeatureItem: React.FC<{
  text: string;
  isHovered: boolean;
  index: number;
}> = ({ text, isHovered, index }) => (
  <motion.li
    className="flex items-center gap-2.5 text-sm text-muted-foreground"
    animate={{ x: isHovered ? 4 : 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: index * 0.04,
    }}
  >
    <span className="shrink-0 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
      <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
    </span>
    {text}
  </motion.li>
);

const CardBadge: React.FC<{ label: string; isHighValue: boolean }> = ({
  label,
  isHighValue,
}) => (
  <motion.span
    className={`
      text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide whitespace-nowrap
      ${
        isHighValue
          ? "bg-primary/20 text-primary border border-primary/40"
          : "bg-muted text-muted-foreground border border-border"
      }
    `}
    animate={
      isHighValue
        ? {
            boxShadow: [
              "0 0 0px 0px hsl(var(--primary) / 0)",
              "0 0 8px 2px hsl(var(--primary) / 0.35)",
              "0 0 0px 0px hsl(var(--primary) / 0)",
            ],
          }
        : {}
    }
    transition={
      isHighValue
        ? {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        : {}
    }
  >
    {label}
  </motion.span>
);

const ServiceCardItem: React.FC<{ card: ServiceCard }> = ({ card }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const Icon = card.icon;
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleHoverStart = () => {
    setIsHovered(true);
    y.set(-4);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    y.set(0);
  };

  return (
    <motion.article
      variants={cardVariants}
      style={{ y }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`
        relative group flex flex-col gap-5 rounded-2xl p-6
        border transition-colors duration-300 cursor-default
        backdrop-blur-sm
        ${
          card.isHighValue
            ? "bg-card/60 border-primary/40"
            : "bg-card/50 border-border hover:border-primary/30 shadow-sm hover:shadow-primary/10"
        }
      `}
      animate={
        card.isHighValue
          ? {
              boxShadow: [
                "0 0 0px 0px hsl(var(--primary) / 0.0), inset 0 0 0px 0px hsl(var(--primary) / 0.0)",
                "0 0 24px 4px hsl(var(--primary) / 0.18), inset 0 0 12px 0px hsl(var(--primary) / 0.06)",
                "0 0 0px 0px hsl(var(--primary) / 0.0), inset 0 0 0px 0px hsl(var(--primary) / 0.0)",
              ],
            }
          : {}
      }
      transition={
        card.isHighValue
          ? {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {}
      }
    >
      {card.isHighValue && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px rounded-full bg-linear-to-r from-transparent via-primary/70 to-transparent"
        />
      )}

      <div className="flex items-start justify-between gap-3">
        <motion.div
          className="p-2.5 rounded-xl bg-primary/10 border border-primary/20"
          animate={
            isHovered ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }
          }
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
        </motion.div>

        {card.badge && (
          <CardBadge
            label={card.badge}
            isHighValue={card.isHighValue ?? false}
          />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-bold text-foreground tracking-tight leading-snug">
          {card.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
      </div>

      <ul className="flex flex-col gap-2.5">
        {card.features.map((feat, i) => (
          <FeatureItem
            key={feat.text}
            text={feat.text}
            isHovered={isHovered}
            index={i}
          />
        ))}
      </ul>

      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-primary/3 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.article>
  );
};

export default ServiceCardItem;
