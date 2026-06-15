import { StarIcon } from "@/assets/icons";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
};

export const StarRating = ({
  rating,
  max = 5,
  className = "text-accent",
  starClassName = "size-4",
}: StarRatingProps) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: max }, (_, index) => (
        <StarIcon
          key={index}
          className={`${starClassName} ${index < rating ? "" : "opacity-30"}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
