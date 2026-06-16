"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "./testimonial-card";

type Testimonial = {
  id: string;
  rating: number;
  author: string;
  content: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  intervalMs?: number;
};

const GAP = 24;

export const TestimonialsCarousel = ({
  testimonials,
  intervalMs = 4000,
}: TestimonialsCarouselProps) => {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused || testimonials.length <= perView) return;
    const id = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, maxIndex, perView, testimonials.length, intervalMs]);

  const slide = 100 / perView;
  const basis = `calc(${slide}% - ${(GAP * (perView - 1)) / perView}px)`;

  return (
    <div
      className="h-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full gap-6 transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(${safeIndex} * (-${slide}% - ${GAP / perView}px)))`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="shrink-0 grow-0"
            style={{ flexBasis: basis }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

