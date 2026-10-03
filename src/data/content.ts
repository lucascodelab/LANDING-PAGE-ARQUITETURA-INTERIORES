import type { Material, ProcessStep, Project, Service, Testimonial } from "@/types";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const projects: Project[] = [
  {
    id: "casa-horizonte",
    title: "Casa Horizonte",
    category: "Residencial",
    year: "2026",
    location: "Interior de São Paulo",
    image: img("photo-1600596542815-ffad4c1539a9", 1600),
    alt: "Fachada de residência contemporânea em concreto e vidro com jardim ao entardecer",
    description:
      "Residência térrea organizada em torno de um pátio central, com estrutura aparente e grandes vãos de vidro.",
    span: "large",
  },
  {
    id: "casa-linear",
    title: "Casa Linear",
    category: "Residencial",
    year: "2025",
    location: "Bragança Paulista",
    image: img("photo-1600585154340-be6161a56a0c", 1400),
    alt: "Sala de estar minimalista com madeira, sofá neutro e luz natural abundante",
    description:
      "Volume longitudinal que enquadra a paisagem, com programa distribuído em sequência e luz controlada.",
    span: "standard",
  },
  {
    id: "apartamento-45",
    title: "Apartamento 45",
    category: "Interiores",
    year: "2025",
    location: "São Paulo",
    image: img("photo-1522708323590-d24dbb6b0267", 1200),
    alt: "Apartamento compacto com marcenaria clara, mesa de jantar e cozinha integrada",
    description:
      "Reforma integral de 45 m² com marcenaria sob medida e paleta neutra para ampliar a percepção de espaço.",
    span: "tall",
  },
  {
    id: "casa-terra",
    title: "Casa Terra",
    category: "Residencial",
    year: "2024",
    location: "Cotia",
    image: img("photo-1600047509807-ba8f99d2cdde", 1400),
    alt: "Casa contemporânea com revestimento em pedra e madeira cercada por vegetação",
    description:
      "Uso de materiais naturais e implantação suave no terreno para dissolver o limite entre casa e jardim.",
    span: "standard",
  },
  {
    id: "estudio-contemporaneo",
    title: "Estúdio Contemporâneo",
    category: "Comercial",
    year: "2024",
    location: "São Paulo",
    image: img("photo-1497366216548-37526070297c", 1400),
    alt: "Escritório com mesas compartilhadas, cadeiras minimalistas e iluminação natural",
    description:
      "Espaço de trabalho flexível com acústica tratada, iluminação técnica e mobiliário modular.",
    span: "large",
  },
  {
    id: "espaco-atelier",
    title: "Espaço Atelier",
    category: "Interiores",
    year: "2023",
    location: "Pinheiros, São Paulo",
    image: img("photo-1554995207-c18c203602cb", 1200),
    alt: "Atelier com estante de madeira, poltrona e luminária em ambiente acolhedor",
    description:
      "Atelier criativo que combina área expositiva e trabalho, com texturas táteis e luz quente indireta.",
    span: "standard",
  },
];

export const services: Service[] = [
  {
    id: "arquitetura",
    number: "01",
    title: "Arquitetura",
    description:
      "Projetos autorais do conceito à execução, com atenção à implantação, estrutura e luz.",
    image: img("photo-1600585154526-990dced4db0d", 1000),
    alt: "Detalhe de fachada contemporânea em concreto e madeira",
  },
  {
    id: "interiores",
    number: "02",
    title: "Interiores",
    description:
      "Ambientes precisos e atemporais, com marcenaria, materiais e curadoria de mobiliário.",
    image: img("photo-1616486338812-3dadae4b4ace", 1000),
    alt: "Sala com sofá claro, mesa de centro em pedra e parede texturizada",
  },
  {
    id: "reformas",
    number: "03",
    title: "Reformas",
    description:
      "Requalificação de espaços existentes com intervenção mínima e máximo efeito.",
    image: img("photo-1600607687939-ce8a6c25118c", 1000),
    alt: "Interior reformado com cozinha em tons neutros e ilha em pedra",
  },
  {
    id: "consultoria",
    number: "04",
    title: "Consultoria",
    description:
      "Direção estética e viabilidade para decisões rápidas, seguras e bem fundamentadas.",
    image: img("photo-1600566753086-00f18fb6b3ea", 1000),
    alt: "Detalhe de ambiente com poltrona, madeira e luz natural lateral",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "conversa",
    number: "01",
    title: "Conversa",
    description: "Entendimento das necessidades, rotina e expectativas.",
  },
  {
    id: "conceito",
    number: "02",
    title: "Conceito",
    description: "Definição da direção estética e funcional do projeto.",
  },
  {
    id: "desenvolvimento",
    number: "03",
    title: "Desenvolvimento",
    description: "Detalhamento da arquitetura, interiores e materiais.",
  },
  {
    id: "entrega",
    number: "04",
    title: "Entrega",
    description: "Concretização do projeto e acompanhamento das etapas finais.",
  },
];

export const materials: Material[] = [
  {
    id: "pedra",
    name: "Pedra",
    image: img("photo-1590069261209-f8e9b8642343", 640),
    alt: "Textura de pedra natural em parede",
  },
  {
    id: "madeira",
    name: "Madeira",
    image: img("photo-1523413651479-597eb2da0ad6", 640),
    alt: "Detalhe de painel em madeira natural",
  },
  {
    id: "concreto",
    name: "Concreto",
    image: img("photo-1518709268805-4e9042af9f23", 640),
    alt: "Superfície de concreto aparente com textura suave",
  },
  {
    id: "tecidos",
    name: "Tecidos",
    image: img("photo-1522771739844-6a9f6d5f14af", 640),
    alt: "Sofá em tecido bouclé claro com luz suave",
  },
  {
    id: "metal",
    name: "Metal",
    image: img("photo-1535813547-99c456a41d4a", 640),
    alt: "Detalhe em metal escovado em luminária contemporânea",
  },
  {
    id: "vidro",
    name: "Vidro",
    image: img("photo-1497366754035-f200968a6e72", 640),
    alt: "Divisória em vidro com estrutura metálica em escritório",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Desde o primeiro contato, o projeto conseguiu traduzir exatamente o que imaginávamos para o espaço.",
    name: "Marina e Rafael",
    role: "Casa Horizonte — Residencial",
  },
  {
    id: "t2",
    quote:
      "Cada escolha foi pensada nos mínimos detalhes, sem perder a funcionalidade do ambiente.",
    name: "Camila Duarte",
    role: "Apartamento 45 — Interiores",
  },
  {
    id: "t3",
    quote:
      "O resultado ficou elegante, confortável e totalmente conectado à nossa rotina.",
    name: "Paulo Henriques",
    role: "Estúdio Contemporâneo — Comercial",
  },
];

export const navLinks = [
  { href: "#projetos", label: "Projetos" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
] as const;
