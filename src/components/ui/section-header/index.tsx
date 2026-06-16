import { IconComponent, PawIcon } from "@/assets/icons";
import { SectionBadge } from "@/components/ui/section-badge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowIcon?: IconComponent;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  eyebrowIcon = PawIcon,
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : ""} ${className}`}
    >
      <SectionBadge icon={eyebrowIcon} text={eyebrow} />

      <h2
        className={`mt-5 text-4xl leading-tight ${isCenter ? "max-w-2xl" : ""}`}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-relaxed text-foreground/80">{description}</p>
      )}
    </div>
  );
};
