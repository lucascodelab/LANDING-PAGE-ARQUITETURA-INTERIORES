# Landing Page para Arquitetura e Interiores

Projeto conceitual de uma landing page para um estúdio de arquitetura e interiores.

A ideia foi criar uma interface sofisticada, responsiva e com foco na experiência do usuário, indo além de uma página apenas visual. O projeto conta com galeria de projetos com filtros, projeto em destaque, serviços, processo, formulário validado e diferentes estados de interação.

![Capa da landing page](SLIDES/SLIDE%201.png)

## Sobre o projeto

Neste projeto trabalhei principalmente a parte visual e a interação da página.

A interface foi pensada para apresentar os projetos de forma clara, valorizar as imagens dos ambientes e deixar a navegação simples tanto no computador quanto no celular.

Também quis explorar o Next.js com TypeScript criando galeria com filtros por categoria, contadores animados, reveal de seções, menu mobile acessível e validação dos dados do formulário antes do envio.

![Hero da landing page](SLIDES/SLIDE%202.png)

# Funcionalidades

* Hero section fullscreen
* Navbar fixa com transição no scroll
* Navegação suave
* Menu mobile animado
* Seção institucional
* Galeria de projetos interativa
* Filtros por categoria
* Projeto em destaque
* Serviços em lista editorial
* Processo em etapas
* Contadores animados
* Depoimentos
* CTA fullscreen
* Formulário de contato
* Validação dos campos
* Indicação visual de erros
* Feedback visual das ações
* Estado de sucesso simulado
* Skip-link para o conteúdo
* Layout responsivo
* Animações e transições
* Suporte a `prefers-reduced-motion`
* Navegação por teclado
* Fechamento com `ESC`
* Restauração do foco
* Recursos de acessibilidade

# Projetos interativos

Galeria com 6 projetos tipados e filtros por categoria, com transição animada e contagem anunciada por `aria-live`.

![Galeria com filtros por categoria](SLIDES/SLIDE%204.png)

### Projeto em destaque

Seção cinematográfica para a Casa Horizonte, com reveal de imagem e texto.

![Projeto em destaque Casa Horizonte](SLIDES/SLIDE%205.png)

### Seção narrativa

Storytelling editorial com imagem + texto em layout assimétrico.

![Seção narrativa editorial](SLIDES/SLIDE%203.png)

## Tecnologias

* Next.js 14
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* ESLint
* Git
* GitHub

O projeto foi desenvolvido utilizando Next.js com TypeScript, sem backend.

![Tecnologias do projeto](SLIDES/SLIDE%207.png)

## Design e responsividade

A interface utiliza uma estética editorial clara, com off-white, grafite e preto, e bastante contraste para destacar as fotos dos projetos e as principais ações.

A página foi adaptada para diferentes tamanhos de tela, mantendo uma experiência consistente em desktop, tablet e dispositivos móveis.

Também foram considerados aspectos como espaçamento, hierarquia de informações, contraste, estados de interação, foco dos elementos e acessibilidade.

![Versão responsiva em desktop, tablet e mobile](SLIDES/SLIDE%206.png)

## Testes

Depois do desenvolvimento, foi realizada uma etapa de testes para verificar o funcionamento das principais partes da aplicação.

Foram testados:

* Filtros da galeria
* Contagem anunciada por `aria-live`
* Contadores animados
* Reveal das seções
* Menu mobile
* Validação do formulário
* `aria-invalid`
* `role="alert"` nos erros
* Foco automático no primeiro erro
* Navegação por teclado
* Fechamento com `ESC`
* Restauração do foco
* Build de produção sem erros
* Verificação TypeScript sem `any`
* Lint sem avisos
* Responsividade em diferentes resoluções
* Ausência de rolagem horizontal
* Carregamento das imagens com `next/image`
* Links internos
* IDs duplicados
* Preferência por movimento reduzido

A versão final foi revisada após os testes e os problemas encontrados durante esse processo foram corrigidos.

Indicação visual dos campos com erro no formulário de contato:

![CTA e formulário de contato](SLIDES/SLIDE%208.png)

## Estrutura

```text
├── SLIDES/
│   ├── SLIDE 1.png
│   ├── SLIDE 2.png
│   ├── SLIDE 3.png
│   ├── SLIDE 4.png
│   ├── SLIDE 5.png
│   ├── SLIDE 6.png
│   ├── SLIDE 7.png
│   └── SLIDE 8.png
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── types/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Como executar

Clone o repositório:

```bash
git clone SEU_LINK_DO_GITHUB
```

Entre na pasta:

```bash
cd NOME_DO_PROJETO
```

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

Outros comandos:

```bash
npm run lint
npm run build
npm start
```

Requer Node 18+.

## O que pratiquei neste projeto

Este projeto reuniu diferentes partes do desenvolvimento Front-end em uma única aplicação.

Principalmente:

* Estruturação de páginas com HTML semântico
* Componentização com React
* Tipagem com TypeScript
* Organização de CSS com Tailwind
* Responsividade
* Manipulação de estado com filtros
* Animações com Framer Motion
* Otimização de imagens com `next/image`
* Validação de formulários
* Acessibilidade
* SEO com metadata e Open Graph
* Experiência do usuário
* Organização e revisão de código

Uma das partes mais trabalhadas foi a galeria com filtros, justamente para transformar a página em algo mais próximo de uma aplicação real e não somente uma interface estática.

![Slide final do projeto](SLIDES/SLIDE%208.png)

## Próximos passos

Algumas funcionalidades poderiam ser adicionadas em uma versão futura:

* Integração com backend
* Envio real do formulário
* Banco de dados
* CMS para projetos
* Sistema de agendamento de visita
* Painel administrativo
* Integração com API
* Área do cliente
* Autenticação de usuários

Essas funcionalidades não fazem parte da versão atual do projeto.

## Observação

Este é um projeto conceitual.

Os projetos, números, depoimentos, informações comerciais, endereço e demais dados apresentados na interface são fictícios.
