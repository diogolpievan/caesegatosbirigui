import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { AGGREGATE_RATING, BUSINESS_SCHEMA_ID } from "@/constants/seo";
import { RatingOverviewCard } from "./rating-overview-card";
import { TestimonialsCarousel } from "./testimonials-carousel";

const SUMMARY = {
  rating: AGGREGATE_RATING.ratingValue,
  max: AGGREGATE_RATING.bestRating,
  reviewsCount: AGGREGATE_RATING.reviewCount,
};

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    rating: 5,
    author: "Lais Sinatra",
    content:
      "Excelente profissional! Levei meu animal com um problema sério nos dentes e na boca, já tinha tentado outros lugares e só ela resolveu. Explica tudo de forma simples, trata com muito cuidado e passa muita confiança. Atendimento humano e atencioso. Recomendo demais!",
  },
  {
    id: "testimonial-2",
    rating: 5,
    author: "rita tecco",
    content:
      "Excelente profissional! Meu cachorrinho estava com um problema de pele que não melhorava, e foi com ela que finalmente tivemos resultado. Muito dedicada, cuidadosa e clara nas explicações. Um atendimento feito com atenção, respeito e muito compromisso com o bem-estar do animal.",
  },
];

const REVIEWS_SCHEMA = TESTIMONIALS.map(({ author, rating, content }) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": BUSINESS_SCHEMA_ID },
  author: { "@type": "Person", name: author },
  reviewRating: {
    "@type": "Rating",
    ratingValue: rating,
    bestRating: 5,
  },
  reviewBody: content,
  publisher: { "@type": "Organization", name: "Google" },
}));

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary/20 py-20 lg:py-28">
      {REVIEWS_SCHEMA.map((schema, index) => (
        <JsonLd key={TESTIMONIALS[index].id} data={schema} />
      ))}
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Avaliações"
          title="A Opinião de Quem Confia na Cães e Gatos"
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.3fr_1fr]">
          <Reveal variant="scaleIn" delay={0.15} className="h-full">
            <RatingOverviewCard
              rating={SUMMARY.rating}
              max={SUMMARY.max}
              reviewsCount={SUMMARY.reviewsCount}
            />
          </Reveal>

          <Reveal variant="fadeUp" delay={0.25} className="h-full">
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

