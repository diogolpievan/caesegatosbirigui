"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { presets, type PresetName } from "./presets";
import { staggerContainer, STAGGER } from "./stagger";
import { VIEWPORT } from "./viewport";

type Trigger = "view" | "mount";

const triggerProps = (trigger: Trigger) =>
  trigger === "mount"
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: VIEWPORT };

type RevealProps = {
  children: ReactNode;
  /** Variant de entrada (default: fadeUp). */
  variant?: PresetName;
  /** "view" reanima a cada entrada na viewport; "mount" só no carregamento. */
  trigger?: Trigger;
  className?: string;
  id?: string;
};

/** Revela um bloco isolado ao entrar na viewport (ou no mount). */
export const Reveal = ({
  children,
  variant = "fadeUp",
  trigger = "view",
  className,
  id,
}: RevealProps) => (
  <motion.div
    id={id}
    className={className}
    variants={presets[variant]}
    initial="hidden"
    {...triggerProps(trigger)}
  >
    {children}
  </motion.div>
);

type StaggerGroupTag = "div" | "ul";

const groupTag = {
  div: motion.div,
  ul: motion.ul,
} as const;

type StaggerGroupProps = {
  children: ReactNode;
  trigger?: Trigger;
  staggerChildren?: number;
  delayChildren?: number;
  as?: StaggerGroupTag;
  className?: string;
  id?: string;
};

/** Container que orquestra a entrada sequencial (stagger) dos filhos. */
export const StaggerGroup = ({
  children,
  trigger = "view",
  staggerChildren = STAGGER.base,
  delayChildren = 0,
  as = "div",
  className,
  id,
}: StaggerGroupProps) => {
  const Tag = groupTag[as];
  return (
    <Tag
      id={id}
      className={className}
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      {...triggerProps(trigger)}
    >
      {children}
    </Tag>
  );
};

type StaggerItemTag = "div" | "li" | "span";

type StaggerItemProps = {
  children: ReactNode;
  variant?: PresetName;
  as?: StaggerItemTag;
  className?: string;
};

const itemTag = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
} as const;

/** Filho de um StaggerGroup — herda o disparo do container via propagação de variants. */
export const StaggerItem = ({
  children,
  variant = "fadeUp",
  as = "div",
  className,
}: StaggerItemProps) => {
  const Tag = itemTag[as];
  return (
    <Tag className={className} variants={presets[variant]}>
      {children}
    </Tag>
  );
};
