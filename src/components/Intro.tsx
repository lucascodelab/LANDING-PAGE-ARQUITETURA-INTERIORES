"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { blurDataURL } from "@/lib/placeholder";
import SectionHeading from "./SectionHeading";

export default function Intro() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="bg-bone py-24 sm:py-32 lg:py-40">
      <div className="container-editorial grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="O estúdio"
            title="Arquitetura além da estética."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0.1}
          >
            <p className="mt-6 max-w-md leading-relaxed text-graphite/85">
              Projetamos espaços que equilibram funcionalidade, materialidade e
              identidade. Cada projeto nasce da relação entre arquitetura,
              pessoas e a maneira como cada ambiente será vivido.
            </p>
            <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.28em] text-stone">
              Arquitetura · Interiores · Experiências
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-graphite/10 pt-8">
              <div>
                <dt className="eyebrow">Abordagem</dt>
                <dd className="mt-2 font-serif text-xl font-light">
                  Essencial e atemporal
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Escala</dt>
                <dd className="mt-2 font-serif text-xl font-light">
                  Do objeto à paisagem
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 lg:pl-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
              alt="Interior contemporâneo com concreto, madeira clara e luz natural suave"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 flex justify-between font-sans text-[11px] uppercase tracking-[0.2em] text-stone">
            <span>Casa Horizonte — estar</span>
            <span>2026</span>
          </p>
        </motion.div>
      </div>
      <span id="estudio-title" className="sr-only">
        Sobre o estúdio
      </span>
    </section>
  );
}
