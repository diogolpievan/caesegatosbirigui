import { PawIcon } from "@/assets/icons";

type ServiceBenefitListProps = {
  benefits: string[];
};

export const ServiceBenefitList = ({ benefits }: ServiceBenefitListProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-2 text-foreground/90">
          <PawIcon className="size-4 shrink-0 text-secondary" />
          {benefit}
        </li>
      ))}
    </ul>
  );
};

