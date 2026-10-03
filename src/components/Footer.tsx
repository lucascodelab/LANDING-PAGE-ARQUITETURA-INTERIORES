import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone" aria-label="Rodapé">
      <div className="container-editorial py-16 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em]">
              Arquitetura <span className="font-light text-bone/50">&amp;</span> Interiores
            </p>
            <p className="mt-4 font-serif text-2xl font-light text-bone/85">
              Espaços pensados para serem vividos.
            </p>
          </div>
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[12px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#topo"
            aria-label="Voltar ao topo"
            className="inline-flex h-11 w-11 items-center justify-center border border-bone/25 transition-colors hover:bg-bone hover:text-ink"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-bone/15 pt-7 font-sans text-[12px] tracking-wide text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 — Projeto conceitual</p>
          <p>Direção de arte editorial · dados fictícios para portfólio</p>
        </div>
      </div>
    </footer>
  );
}
