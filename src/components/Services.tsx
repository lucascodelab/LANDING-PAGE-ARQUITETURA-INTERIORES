"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";
import { blurDataURL } from "@/lib/placeholder";

export default function Services() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-bone py-24 sm:py-32"
    >
      <div className="container-editorial grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Serviços"
            title="O que fazemos."
            description="Quatro frentes complementares, um mesmo rigor: proporção, matéria e luz."
          />
          <span id="servicos-title" className="sr-only">
            Lista de serviços
          </span>

          <ul className="mt-12" role="list">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <li key={service.id} className="border-t border-graphite/15 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(service.id)}
                    onFocus={() => setActiveId(service.id)}
                    onClick={() => setActiveId(service.id)}
                    aria-expanded={isActive}
                    className="group flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-sans text-xs tracking-[0.2em] transition-colors ${
                        isActive ? "text-ink" : "text-stone"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-serif text-3xl font-light transition-all duration-300 sm:text-4xl ${
                          isActive
                            ? "translate-x-1 text-ink"
                            : "text-graphite/70 group-hover:text-ink"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`mt-2 block max-w-md text-sm leading-relaxed transition-all duration-300 ${
                          isActive
                            ? "text-graphite/85"
                            : "text-stone"
                        }`}
                      >
                        {service.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-ink opacity-100"
                          : "-translate-x-1 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[4/3] lg:sticky lg:top-28 lg:aspect-[3/3.4]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <p
              aria-live="polite"
              className="absolute bottom-4 left-4 bg-bone/90 px-3 py-1.5 font-sans text-[11px] uppercase tracking-[0.2em] text-ink backdrop-blur"
            >
              {active.number} — {active.title}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
