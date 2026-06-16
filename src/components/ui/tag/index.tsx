import { IconComponent } from "@/assets/icons";

type TagProps = {
  icon: IconComponent;
  label: string;
};

export const Tag = ({ icon: Icon, label }: TagProps) => {
  return (
    <span className="flex items-center gap-2 rounded-full border border-foreground/25 bg-background px-5 py-3 font-paytone-one text-secondary">
      <Icon className="size-5 text-accent" />
      {label}
    </span>
  );
};

