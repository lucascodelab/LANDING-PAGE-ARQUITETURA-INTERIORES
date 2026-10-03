"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";
import { blurDataURL } from "@/lib/placeholder";

export default function FeaturedProject() {
  return (
    <section aria-labelledby="destaque-title" className="bg-ink py-24 text-bone sm:py-32">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="eyebrow !text-bone/50">Projeto em destaque</p>
            <h2
              id="destaque-title"
              className="mt-4 font-serif text-5xl font-light leading-none sm:text-6xl"
            >
              Casa Horizonte
            </h2>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-3 font-sans text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <div>
              <dt className="sr-only">Categoria</dt>
              <dd>Residencial</dd>
            </div>
            <div>
              <dt className="sr-only">Ano</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt className="sr-only">Escopo</dt>
              <dd>Arquitetura + Interiores</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 aspect-[16/9] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
            alt="Casa Horizonte: fachada em concreto e vidro com piscina e jardim ao entardecer"
            fill
            sizes="100vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="object-cover"
          />
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <p className="max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg lg:col-span-7">
            Uma residência contemporânea onde concreto, madeira e luz natural
            criam uma relação equilibrada entre arquitetura e paisagem.
          </p>
          <div className="flex gap-10 lg:col-span-5 lg:justify-end">
            <div>
              <p className="font-serif text-3xl font-light">320 m²</p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-bone/50">
                Área construída*
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light">14 m</p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-bone/50">
                Vão livre*
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 font-sans text-[11px] tracking-wide text-bone/40">
          *Dados conceituais para demonstração da interface.
        </p>
      </div>
    </section>
  );
}
