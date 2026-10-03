"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/content";
import type { ProjectFilter } from "@/types";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";

const filters: ProjectFilter[] = ["Todos", "Residencial", "Comercial", "Interiores"];

export default function Projects() {
  const [active, setActive] = useState<ProjectFilter>("Todos");
  const visible =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="bg-warm py-24 sm:py-32"
    >
      <div className="container-editorial">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projetos selecionados"
            title="Uma coleção de espaços vividos."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            role="group"
            aria-label="Filtrar projetos por categoria"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const selected = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={selected}
                  className={`border px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    selected
                      ? "border-ink bg-ink text-bone"
                      : "border-graphite/20 bg-transparent text-graphite hover:border-ink hover:text-ink"
                  }`}
                >
                  {f === "Todos" ? "Todos" : f}
                </button>
              );
            })}
          </motion.div>
        </div>

        <span id="projetos-title" className="sr-only">
          Galeria de projetos
        </span>

        <motion.div layout className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p aria-live="polite" className="sr-only">
          {visible.length} projetos exibidos na categoria {active}.
        </p>
      </div>
    </section>
  );
}
