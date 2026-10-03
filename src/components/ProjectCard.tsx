"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { blurDataURL } from "@/lib/placeholder";

interface ProjectCardProps {
  project: Project;
}

const spanClasses: Record<NonNullable<Project["span"]>, string> = {
  large: "sm:col-span-2 aspect-[16/10]",
  tall: "aspect-[3/4]",
  standard: "aspect-[4/3]",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={project.span === "large" ? "sm:col-span-2" : ""}
    >
      <Link
        href="#projetos"
        aria-label={`${project.title} — ${project.category}, ${project.year}`}
        className="group block"
      >
        <div
          className={`relative overflow-hidden bg-mist ${
            spanClasses[project.span ?? "standard"]
          }`}
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25"
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
            <div className="flex items-end justify-between gap-4 text-bone">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-bone/80">
                  {project.category} — {project.year}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-light sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone text-ink">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-4">
          <div>
            <h3 className="font-serif text-xl font-normal text-ink">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-stone">
              {project.location} · {project.category}
            </p>
          </div>
          <span className="font-sans text-xs tracking-[0.18em] text-stone">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
