import { StarRating } from "@/components/ui/star-rating";
import { StaggerGroup, StaggerItem, STAGGER } from "@/motion";

type RatingOverviewCardProps = {
  rating: number;
  max?: number;
  reviewsCount: number;
  avatarsCount?: number;
};

export const RatingOverviewCard = ({
  rating,
  max = 5,
  reviewsCount,
  avatarsCount = 4,
}: RatingOverviewCardProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-accent p-10 text-center text-white">
      <StaggerGroup
        staggerChildren={STAGGER.tight}
        className="flex -space-x-3"
      >
        {Array.from({ length: avatarsCount }, (_, index) => (
          <StaggerItem key={index} variant="popIn">
            <span className="block size-10 rounded-full bg-white/40 ring-2 ring-accent" />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="mt-5 font-paytone-one">
        <span className="text-5xl">{rating.toFixed(1)}</span>
        <span className="text-lg">/{max.toFixed(1)}</span>
      </p>

      <StarRating
        rating={Math.round(rating)}
        max={max}
        animated
        className="mt-2 text-white"
        starClassName="size-5"
      />

      <p className="mt-3 font-paytone-one">( {reviewsCount} Reviews )</p>
    </div>
  );
};
