import { describe, expect, it } from "vitest";
import {
  DISTANCE,
  DURATION,
  EASE_SOFT,
  baseTransition,
  fastTransition,
} from "@/motion/transitions";

describe("transitions", () => {
  it("mantém as durações em ordem crescente", () => {
    expect(DURATION.fast).toBeLessThan(DURATION.base);
    expect(DURATION.base).toBeLessThan(DURATION.slow);
  });

  it("mantém os deslocamentos em ordem crescente", () => {
    expect(DISTANCE.sm).toBeLessThan(DISTANCE.md);
    expect(DISTANCE.md).toBeLessThan(DISTANCE.lg);
  });

  it("define um cubic-bezier válido para o easing", () => {
    expect(EASE_SOFT).toHaveLength(4);

    const [x1, , x2] = EASE_SOFT;
    // Só as coordenadas X precisam ficar em [0, 1] num cubic-bezier CSS.
    expect(x1).toBeGreaterThanOrEqual(0);
    expect(x1).toBeLessThanOrEqual(1);
    expect(x2).toBeGreaterThanOrEqual(0);
    expect(x2).toBeLessThanOrEqual(1);
  });

  it("não produz overshoot (easing termina em 1 sem ultrapassar)", () => {
    const [, y1, , y2] = EASE_SOFT;
    expect(y1).toBeLessThanOrEqual(1);
    expect(y2).toBeLessThanOrEqual(1);
  });

  it("deriva baseTransition e fastTransition das constantes centrais", () => {
    expect(baseTransition).toEqual({
      duration: DURATION.base,
      ease: EASE_SOFT,
    });
    expect(fastTransition).toEqual({
      duration: DURATION.fast,
      ease: EASE_SOFT,
    });
  });
});
