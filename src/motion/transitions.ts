import type { Transition } from "motion/react";

/** Durações (em segundos) — centralizadas, sem números mágicos espalhados. */
export const DURATION = {
  fast: 4,
  base: 4,
  slow: 4,
} as const;

/** Easing suave (easeOutQuint), sem overshoot/bounce — transmite refinamento. */
export const EASE_SOFT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Deslocamentos (px) para translate. */
export const DISTANCE = {
  sm: 12,
  md: 24,
  lg: 40,
} as const;

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE_SOFT,
};

export const fastTransition: Transition = {
  duration: DURATION.fast,
  ease: EASE_SOFT,
};
