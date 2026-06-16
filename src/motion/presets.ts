import type { Variants } from "motion/react";
import { DISTANCE, baseTransition, fastTransition } from "./transitions";

/**
 * Variants reutilizáveis. Todas usam apenas opacity/transform (performático).
 * Padrão de estados: "hidden" → "visible".
 */

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.md },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

/** Entra da esquerda para a direita — ideal para títulos e imagens principais. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -DISTANCE.lg },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

/** Entra da direita para a esquerda. */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: DISTANCE.lg },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

/** Destaque sutil — imagens de destaque e cards informativos. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

/** Pop-in elegante para badges/chips/pills — sem bounce. */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: fastTransition },
};

export const presets = {
  fade,
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  popIn,
} as const;

export type PresetName = keyof typeof presets;
