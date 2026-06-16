"use client";

import { useState } from "react";
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
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <FaqItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  );
};

