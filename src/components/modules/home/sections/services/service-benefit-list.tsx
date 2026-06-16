import { PawIcon } from "@/assets/icons";
import { StaggerGroup, StaggerItem, STAGGER } from "@/motion";

type ServiceBenefitListProps = {
  benefits: string[];
};

export const ServiceBenefitList = ({ benefits }: ServiceBenefitListProps) => {
  return (
    <StaggerGroup
      as="ul"
      staggerChildren={STAGGER.tight}
      className="flex flex-col gap-3"
    >
      {benefits.map((benefit) => (
        <StaggerItem
          key={benefit}
          as="li"
          variant="fadeLeft"
          className="flex items-center gap-2 text-foreground/90"
        >
          <PawIcon className="size-4 shrink-0 text-secondary" />
          {benefit}
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
};
