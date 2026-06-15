import { PawIcon } from "@/assets/icons";
import { SectionBadge } from "@/components/ui/section-badge";
import { RatingOverviewCard } from "./rating-overview-card";
import { TestimonialsCarousel } from "./testimonials-carousel";

const SUMMARY = {
  rating: 5.0,
  max: 5,
  reviewsCount: 15,
};

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    rating: 5,
    author: "Fulano Ciclano",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t.",
  },
  {
    id: "testimonial-2",
    rating: 5,
    author: "Fulano Ciclano",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary/20 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <SectionBadge icon={PawIcon} text="Avaliações" />

          <h2 className="mt-5 max-w-xl text-4xl leading-tight">
            A Opinião de Quem Confia na Cães e Gatos
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.3fr_1fr]">
          <RatingOverviewCard
            rating={SUMMARY.rating}
            max={SUMMARY.max}
            reviewsCount={SUMMARY.reviewsCount}
          />

          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
