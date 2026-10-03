"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      className={`max-w-2xl ${alignCls}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <p className={`eyebrow ${dark ? "text-bone/60" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-4xl font-light leading-[1.05] sm:text-5xl ${
          dark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-bone/70" : "text-graphite/80"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
