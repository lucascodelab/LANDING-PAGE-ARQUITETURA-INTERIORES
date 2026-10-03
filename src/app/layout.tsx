import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arquitetura & Interiores — Espaços que contam histórias",
  description:
    "Landing page conceitual para arquitetura e interiores, com projetos, serviços e experiências espaciais.",
  metadataBase: new URL("https://exemplo.com"),
  openGraph: {
    title: "Arquitetura & Interiores — Espaços que contam histórias",
    description:
      "Arquitetura, interiores e experiências pensadas para transformar espaços.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-bone font-sans text-ink antialiased">
        {/* Acelera a conexão com o CDN das fotos */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bone"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
