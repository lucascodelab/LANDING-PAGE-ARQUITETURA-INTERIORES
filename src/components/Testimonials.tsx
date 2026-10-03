"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section aria-labelledby="depo-title" className="bg-warm py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Palavras de quem habita."
          align="center"
        />
        <span id="depo-title" className="sr-only">
          Depoimentos conceituais de clientes
        </span>

        <div className="mt-14 grid gap-px overflow-hidden border border-graphite/10 bg-graphite/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="flex flex-col justify-between bg-bone p-8 sm:p-10"
            >
              <div>
                <Quote
                  aria-hidden="true"
                  className="h-6 w-6 text-clay"
                />
                <blockquote className="mt-5 font-serif text-[22px] font-light leading-snug text-ink">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-graphite/10 pt-5">
                <p className="font-sans text-sm font-medium text-ink">{t.name}</p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-stone">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-6 text-center font-sans text-[11px] tracking-wide text-stone">
          * Depoimentos conceituais para demonstração editorial.
        </p>
      </div>
    </section>
  );
}
