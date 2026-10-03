"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { materials } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";
import { blurDataURL } from "@/lib/placeholder";

export default function Materiality() {
  return (
    <section aria-labelledby="materia-title" className="bg-bone py-24 sm:py-32">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Materialidade"
            title="Matéria, luz e textura."
            description="Pedra, madeira, concreto, tecidos, metal e vidro — o vocabulário tátil de cada projeto."
          />
        </div>
        <span id="materia-title" className="sr-only">
          Galeria de materiais
        </span>

        <ul
          role="list"
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          {materials.map((mat, i) => (
            <motion.li
              key={mat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden bg-mist ${
                i === 0 ? "aspect-[3/4] row-span-1" : "aspect-square"
              }`}
            >
              <Image
                src={mat.image}
                alt={mat.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 font-serif text-xl font-light text-bone sm:text-2xl">
                {mat.name}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
