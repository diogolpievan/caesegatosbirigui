import { IconComponent } from "@/assets/icons";

type SectionBadgeProps = {
  icon: IconComponent;
  text: string;
};

export const SectionBadge = ({ icon: Icon, text }: SectionBadgeProps) => {
  return (
    <span className="flex items-center gap-2">
      <Icon className="size-7 text-accent" />
      <span className="font-paytone-one text-xl text-secondary">{text}</span>
    </span>
  );
};

