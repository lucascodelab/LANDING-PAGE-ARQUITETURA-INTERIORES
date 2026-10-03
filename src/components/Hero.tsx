"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { blurDataURL } from "@/lib/placeholder";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-bone"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Residência contemporânea com concreto, madeira, vidro e mobiliário minimalista sob luz natural"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="object-cover"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/30"
        />
      </div>

      <div className="container-editorial relative pb-24 pt-40 sm:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-bone/70"
        >
          Arquitetura · Interiores · Experiências
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="mt-5 max-w-4xl font-serif text-[13vw] font-light leading-[0.95] sm:text-7xl lg:text-8xl"
        >
          Espaços que
          <br />
          contam histórias.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg"
        >
          Arquitetura, interiores e experiências pensadas para transformar
          espaços.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 bg-bone px-7 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-white"
          >
            Ver projetos
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center justify-center gap-2 border border-bone/40 px-7 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone/10"
          >
            Falar sobre um projeto
          </Link>
        </motion.div>
      </div>

      <div className="container-editorial relative pb-8">
        <a
          href="#estudio"
          className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-bone/70 transition-colors hover:text-bone"
          aria-label="Rolar para explorar a página"
        >
          <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-bone/30 p-1.5">
            <motion.span
              aria-hidden="true"
              className="h-2 w-1 rounded-full bg-bone/80"
              animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
            />
          </span>
          Scroll para explorar
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
