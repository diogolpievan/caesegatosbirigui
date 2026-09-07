import { describe, expect, it } from "vitest";
import type { Variants } from "motion/react";
import { presets, type PresetName } from "@/motion/presets";
import { DISTANCE, baseTransition, fastTransition } from "@/motion/transitions";

const presetNames = Object.keys(presets) as PresetName[];

/** Lê um estado do variant como objeto simples (os variants aqui são estáticos). */
const state = (variants: Variants, key: "hidden" | "visible") =>
  variants[key] as Record<string, unknown>;

describe("presets", () => {
  it.each(presetNames)("%s expõe os estados hidden e visible", (name) => {
    expect(presets[name]).toHaveProperty("hidden");
    expect(presets[name]).toHaveProperty("visible");
  });

  it.each(presetNames)("%s parte de opacity 0 e chega em opacity 1", (name) => {
    expect(state(presets[name], "hidden").opacity).toBe(0);
    expect(state(presets[name], "visible").opacity).toBe(1);
  });

  it.each(presetNames)(
    "%s anima apenas opacity/transform (sem propriedades que causam layout)",
    (name) => {
      const allowed = new Set(["opacity", "x", "y", "scale", "transition"]);

      for (const key of Object.keys(state(presets[name], "hidden"))) {
        expect(allowed).toContain(key);
      }
      for (const key of Object.keys(state(presets[name], "visible"))) {
        expect(allowed).toContain(key);
      }
    }
  );

  it("desloca fadeUp verticalmente e o zera no estado final", () => {
    expect(state(presets.fadeUp, "hidden").y).toBe(DISTANCE.md);
    expect(state(presets.fadeUp, "visible").y).toBe(0);
  });

  it("usa direções opostas em fadeLeft e fadeRight", () => {
    expect(state(presets.fadeLeft, "hidden").x).toBe(-DISTANCE.lg);
    expect(state(presets.fadeRight, "hidden").x).toBe(DISTANCE.lg);
    expect(state(presets.fadeLeft, "visible").x).toBe(0);
    expect(state(presets.fadeRight, "visible").x).toBe(0);
  });

  it("escala scaleIn e popIn até 1 sem bounce", () => {
    expect(state(presets.scaleIn, "hidden").scale).toBeLessThan(1);
    expect(state(presets.scaleIn, "visible").scale).toBe(1);
    expect(state(presets.popIn, "hidden").scale).toBeLessThan(1);
    expect(state(presets.popIn, "visible").scale).toBe(1);
  });

  it("aplica a transição rápida no popIn e a padrão nos demais", () => {
    expect(state(presets.popIn, "visible").transition).toEqual(fastTransition);

    for (const name of presetNames.filter((preset) => preset !== "popIn")) {
      expect(state(presets[name], "visible").transition).toEqual(
        baseTransition
      );
    }
  });
});
