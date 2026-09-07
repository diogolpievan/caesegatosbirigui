import { describe, expect, it } from "vitest";
import { VIEWPORT, VIEWPORT_SOFT } from "@/motion/viewport";

describe("viewport", () => {
  it("reanima a cada entrada na viewport", () => {
    expect(VIEWPORT.once).toBe(false);
    expect(VIEWPORT_SOFT.once).toBe(false);
  });

  it("exige menos visibilidade na variante soft (blocos altos)", () => {
    expect(VIEWPORT_SOFT.amount).toBeLessThan(Number(VIEWPORT.amount));
  });

  it("mantém os limiares dentro do intervalo válido", () => {
    for (const amount of [VIEWPORT.amount, VIEWPORT_SOFT.amount]) {
      expect(Number(amount)).toBeGreaterThan(0);
      expect(Number(amount)).toBeLessThanOrEqual(1);
    }
  });
});
