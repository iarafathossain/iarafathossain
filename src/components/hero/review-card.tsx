"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

interface ReviewCardProps {
  rating: number;
  platform: string;
  compact?: boolean;
}

export const ReviewCard = ({
  rating,
  platform,
  compact = false,
}: ReviewCardProps) => {
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-xl"
      >
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-current" />
          ))}
        </div>

        <span className="font-bold text-zinc-100">{rating.toFixed(1)}</span>
        <span className="text-zinc-500">- Verified on {platform}</span>

        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          View Reviews
          <ExternalLink className="h-4 w-4" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="backdrop-blur-xl bg-black/60 border border-green-500/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] group transition-all duration-300 ease-in-out hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] hover:-translate-y-1"
    >
      <div className="flex items-center gap-1.5 justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-500 text-yellow-500 group-hover:scale-110 transition-transform"
          />
        ))}
        <span className="ml-1.5 text-xl font-bold text-white group-hover:text-green-300 transition-colors">
          {rating.toFixed(1)}
        </span>
      </div>

      <p className="text-zinc-400 text-sm mb-5 font-mono text-center tracking-tight">
        Verified Client Reviews on {platform}
      </p>

      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-semibold group/link text-center justify-center"
      >
        View Reviews
        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
};
