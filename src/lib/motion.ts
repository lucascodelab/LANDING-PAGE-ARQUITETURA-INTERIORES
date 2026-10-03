import { useReducedMotion, type Variants } from "framer-motion";

/** Fade-up reutilizável, com distância curta para manter elegância editorial. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Viewport padrão: anima uma vez, com margem para revelar antes do centro. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
