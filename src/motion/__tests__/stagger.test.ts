import { describe, expect, it } from "vitest";
import { STAGGER, staggerContainer } from "@/motion/stagger";

describe("staggerContainer", () => {
  it("usa STAGGER.base e nenhum atraso inicial por padrão", () => {
    expect(staggerContainer()).toEqual({
      hidden: {},
      visible: {
        transition: { staggerChildren: STAGGER.base, delayChildren: 0 },
      },
    });
  });

  it("repassa os intervalos customizados", () => {
    expect(staggerContainer(0.5, 1.2)).toEqual({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.5, delayChildren: 1.2 },
      },
    });
  });

  it("não define propriedades no estado hidden (quem anima são os filhos)", () => {
    expect(staggerContainer().hidden).toEqual({});
  });

  it("mantém o intervalo tight menor que o base", () => {
    expect(STAGGER.tight).toBeLessThan(STAGGER.base);
    expect(STAGGER.tight).toBeGreaterThan(0);
  });
});
