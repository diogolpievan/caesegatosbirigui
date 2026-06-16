import { StarIcon } from "@/assets/icons";
import { StaggerGroup, StaggerItem, STAGGER } from "@/motion";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
  /** Revela as estrelas progressivamente (uso em destaques). */
  animated?: boolean;
};

export const StarRating = ({
  rating,
  max = 5,
  className = "text-accent",
  starClassName = "size-4",
  animated = false,
}: StarRatingProps) => {
  const starClass = (index: number) =>
    `${starClassName} ${index < rating ? "" : "opacity-30"}`;

  if (!animated) {
    return (
      <div className={`flex items-center gap-0.5 ${className}`}>
        {Array.from({ length: max }, (_, index) => (
          <StarIcon key={index} className={starClass(index)} />
        ))}
      </div>
    );
  }

  return (
    <StaggerGroup
      staggerChildren={STAGGER.tight}
      className={`flex items-center gap-0.5 ${className}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <StaggerItem key={index} as="span" variant="popIn">
          <StarIcon className={starClass(index)} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
};
