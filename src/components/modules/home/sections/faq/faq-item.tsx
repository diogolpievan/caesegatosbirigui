import { PawIcon } from "@/assets/icons";

export type FaqBlock =
  | { type: "text"; text: string }
  | { type: "list"; items: string[] };

export type FaqEntry = {
  id: string;
  question: string;
  answer: FaqBlock[];
};

type FaqItemProps = {
  question: string;
  answer: FaqBlock[];
  isOpen: boolean;
  onToggle: () => void;
};

export const FaqItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
        isOpen ? "bg-accent text-white" : "bg-primary/20 text-secondary"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-paytone-one"
      >
        <span>{question}</span>
        <PawIcon
          className={`size-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white" : "text-accent"
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-white/90">
            {answer.map((block, index) =>
              block.type === "text" ? (
                <p key={index}>{block.text}</p>
              ) : (
                <ul key={index} className="list-disc space-y-1 pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
