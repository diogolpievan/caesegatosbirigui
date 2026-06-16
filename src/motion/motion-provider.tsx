"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Aplica `reducedMotion="user"`: quando o usuário pede menos movimento,
 * o Motion desativa automaticamente animações de transform/layout,
 * mantendo apenas fades simples (acessibilidade).
 */
export const MotionProvider = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
