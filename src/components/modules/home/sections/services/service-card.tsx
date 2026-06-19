import Image from "next/image";
import { IconComponent } from "@/assets/icons";
import { Reveal } from "@/motion";
import { ServiceBenefitList } from "./service-benefit-list";

type ServiceCardProps = {
  icon: IconComponent;
  iconClassName?: string;
  title: string;
  description: string;
  benefits: string[];
  image: {
    src: string;
    alt: string;
    className?: string;
  };
};

export const ServiceCard = ({
  icon: Icon,
  iconClassName = "size-12",
  title,
  description,
  benefits,
  image,
}: ServiceCardProps) => {
  return (
    <article className="group relative flex h-full min-h-180 flex-col overflow-hidden rounded-[40px] bg-background p-8 before:absolute before:inset-0 before:z-0 before:origin-bottom before:scale-y-0 before:bg-foreground before:transition-transform before:duration-500 before:ease-out before:content-[''] group-hover:before:scale-y-100">
      <div className="relative z-10">
        <Icon
          className={`shrink-0 text-secondary transition-colors duration-500 group-hover:text-white ${iconClassName}`}
        />

        <h3 className="mt-6 text-2xl transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>

        <p className="mt-3 leading-relaxed text-foreground/80 transition-colors duration-500 group-hover:text-white">
          {description}
        </p>

        <hr className="my-6 border-foreground/15 transition-colors duration-500 group-hover:border-white/30" />

        <ServiceBenefitList benefits={benefits} />
      </div>

      <div
        className={`pointer-events-none absolute ${
          image.className ?? "bottom-0 right-0 aspect-square w-[48%] max-w-72"
        }`}
      >
        <Reveal variant="scaleIn" className="h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 420px"
            className="object-contain object-bottom"
          />
        </Reveal>
      </div>
    </article>
  );
};

