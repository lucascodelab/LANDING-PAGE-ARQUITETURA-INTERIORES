"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Fecha com Escape (acessibilidade do menu mobile)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-graphite/10 bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-editorial flex h-16 items-center justify-between sm:h-20"
      >
        <Link
          href="#topo"
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.28em] text-ink"
          aria-label="Arquitetura e Interiores — voltar ao topo"
        >
          Arquitetura <span className="font-light text-stone">&amp;</span>{" "}
          Interiores
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-sans text-[13px] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-ink"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-sans text-[12px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
          >
            Falar sobre um projeto
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-t border-graphite/10 bg-bone px-5 pb-8 pt-4 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-graphite/10 py-4 font-serif text-3xl font-light text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-4 font-sans text-[12px] uppercase tracking-[0.18em] text-bone"
            >
              Falar sobre um projeto
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
