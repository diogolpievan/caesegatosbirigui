import type { Variants } from "motion/react";

/** Intervalos de stagger (segundos entre filhos). */
export const STAGGER = {
  tight: 0.1,
  base: 0.15,
} as const;

/**
 * Container que orquestra a entrada sequencial dos filhos.
 * Os filhos devem usar `variants` (ex.: presets) com as chaves hidden/visible.
 */
export const staggerContainer = (
  staggerChildren: number = STAGGER.base,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
