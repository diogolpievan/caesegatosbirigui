import { IconComponent } from "@/assets/icons";

type FeatureCardProps = {
  icon: IconComponent;
  title: string;
};

export const FeatureCard = ({ icon: Icon, title }: FeatureCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-primary/10 p-5">
      <Icon className="size-9 shrink-0 text-secondary" />
      <span className="font-paytone-one leading-tight text-secondary">
        {title}
      </span>
    </div>
  );
};

