import { QuoteIcon } from "@/assets/icons";
import { StarRating } from "@/components/ui/star-rating";

type TestimonialCardProps = {
  rating: number;
  author: string;
  content: string;
  className?: string;
};

export const TestimonialCard = ({
  rating,
  author,
  content,
  className = "",
}: TestimonialCardProps) => {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl bg-background p-8 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <QuoteIcon className="size-8 text-secondary" />
        <StarRating rating={rating} starClassName="size-6" />
      </div>

      <p className="mt-6 leading-relaxed text-foreground/70">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-auto">
        <hr className="mt-12 mb-5 border-foreground/10" />
        <p className="font-paytone-one text-secondary">{author}</p>
      </div>
    </article>
  );
};

