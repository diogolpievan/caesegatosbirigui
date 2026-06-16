import type { UseInViewOptions } from "motion/react";

/**
 * Config padrão de viewport.
 * `once: false` → reanima toda vez que o elemento reentra na viewport
 * (e reseta ao sair completamente).
 */
export const VIEWPORT: UseInViewOptions & { once: boolean } = {
  once: false,
  amount: 0.25,
};

/** Para blocos altos (imagens/colunas), exige menos visibilidade para disparar. */
export const VIEWPORT_SOFT: UseInViewOptions & { once: boolean } = {
  once: false,
  amount: 0.15,
};
