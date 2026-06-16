"use client";

import { useState } from "react";
import { StaggerGroup, StaggerItem } from "@/motion";
import { FaqItem, type FaqEntry } from "./faq-item";

type FaqAccordionProps = {
  items: FaqEntry[];
  defaultOpenIndex?: number;
};

export const FaqAccordion = ({
  items,
  defaultOpenIndex = 0,
}: FaqAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(
    items[defaultOpenIndex]?.id ?? null
  );

  return (
    <StaggerGroup delayChildren={0.2} className="flex flex-col gap-4">
      {items.map((item) => (
        <StaggerItem key={item.id} variant="fadeUp">
          <FaqItem
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
          />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
};

