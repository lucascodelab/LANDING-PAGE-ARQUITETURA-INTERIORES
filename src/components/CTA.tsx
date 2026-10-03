"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { viewportOnce } from "@/lib/motion";
import { blurDataURL } from "@/lib/placeholder";

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink text-bone">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>
      <div className="container-editorial relative py-28 text-center sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-bone/60">
            Comece uma conversa
          </p>
          <h2
            id="cta-title"
            className="mt-5 font-serif text-4xl font-light leading-[1.02] sm:text-6xl"
          >
            Vamos criar seu próximo espaço?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-bone/75">
            Conte um pouco sobre o seu projeto e descubra como podemos
            transformar suas ideias em espaço.
          </p>
          <Link
            href="#contato"
            className="mt-9 inline-flex items-center gap-2 bg-bone px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
          >
            Falar sobre um projeto
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
