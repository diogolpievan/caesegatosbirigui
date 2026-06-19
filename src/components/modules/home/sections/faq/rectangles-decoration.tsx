"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { DURATION, EASE_SOFT, VIEWPORT } from "@/motion";

type DecorationColor = "blue" | "pink";

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
};

/** Retângulos já ordenados do MAIOR para o MENOR (define a ordem do stagger). */
const RECTS: Record<DecorationColor, Rect[]> = {
  blue: [
    { x: 0, y: 73, width: 138, height: 142, rx: 18 },
    { x: 62, y: 0, width: 62, height: 64, rx: 12 },
    { x: 152, y: 64, width: 62, height: 64, rx: 15 },
    { x: 146, y: 9, width: 31, height: 32, rx: 6 },
  ],
  pink: [
    { x: 76, y: 73, width: 138, height: 142, rx: 18 },
    { x: 90, y: 0, width: 62, height: 64, rx: 12 },
    { x: 0, y: 64, width: 62, height: 64, rx: 15 },
    { x: 37, y: 9, width: 31, height: 32, rx: 6 },
  ],
};

const FILL: Record<DecorationColor, string> = {
  blue: "#51D1E0",
  pink: "#FF6589",
};

type RectanglesDecorationProps = {
  color: DecorationColor;
  className?: string;
  /** Atraso base para começar depois da imagem aparecer. */
  delay?: number;
};

export const RectanglesDecoration = ({
  color,
  className,
  delay = 0,
}: RectanglesDecorationProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, VIEWPORT);

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 214 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {RECTS[color].map((rect, index) => (
        <motion.rect
          key={index}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          rx={rect.rx}
          fill={FILL[color]}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={
            inView
              ? { scale: 1, opacity: 0.21 }
              : { scale: 0.4, opacity: 0 }
          }
          transition={{
            duration: DURATION.fast,
            ease: EASE_SOFT,
            delay: delay + index * 0.12,
          }}
        />
      ))}
    </svg>
  );
};
