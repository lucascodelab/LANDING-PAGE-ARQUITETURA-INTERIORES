"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="bg-warm py-24 sm:py-32"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Processo"
          title="Do conceito ao espaço."
          description="Um percurso claro e colaborativo, do primeiro diálogo à entrega."
        />
        <span id="processo-title" className="sr-only">
          Etapas do processo
        </span>

        <div ref={ref} className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-0 h-full w-px bg-graphite/15 sm:left-0 sm:top-0 sm:h-px sm:w-full"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-[7px] top-0 h-full w-px origin-top bg-ink sm:left-0 sm:top-0 sm:h-px sm:w-full sm:origin-left"
          />

          <ol className="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-10 sm:pl-0 sm:pt-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border border-ink bg-bone sm:left-0 sm:top-[-7px]"
                >
                  <span className="absolute inset-[3px] rounded-full bg-ink" />
                </span>
                <p className="font-sans text-xs tracking-[0.24em] text-stone">
                  {step.number}
                </p>
                <h3 className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-graphite/85">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
