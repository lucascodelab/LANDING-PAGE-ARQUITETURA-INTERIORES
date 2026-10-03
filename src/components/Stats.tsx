"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Números fictícios — apenas demonstração de interface.
 * (ver README e nota abaixo da grade)
 */
const stats = [
  { value: 30, prefix: "+", suffix: "", label: "Projetos" },
  { value: 8, prefix: "", suffix: "", label: "Anos de experiência" },
  { value: 12, prefix: "", suffix: "", label: "Cidades" },
  { value: 100, prefix: "", suffix: "%", label: "Personalizado" },
];

function Counter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? value : 0);
  const spring = useSpring(mv, { stiffness: 45, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    if (reduce) return;
    const unsub = spring.on("change", (v) => {
      if (ref.current)
        ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [spring, prefix, suffix, reduce]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      aria-labelledby="numeros-title"
      className="border-y border-graphite/10 bg-bone py-16 sm:py-20"
    >
      <div className="container-editorial">
        <h2 id="numeros-title" className="sr-only">
          Números do estúdio (dados conceituais)
        </h2>
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <dd className="font-serif text-5xl font-light text-ink sm:text-6xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 font-sans text-[11px] uppercase tracking-[0.24em] text-stone">
                {s.label}
              </dt>
            </motion.div>
          ))}
        </dl>
        <p className="mt-10 text-center font-sans text-[11px] tracking-wide text-stone lg:text-left">
          * Indicadores fictícios para demonstração da interface.
        </p>
      </div>
    </section>
  );
}
