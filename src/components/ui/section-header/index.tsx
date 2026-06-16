import { IconComponent, PawIcon } from "@/assets/icons";
import { SectionBadge } from "@/components/ui/section-badge";
import { StaggerGroup, StaggerItem } from "@/motion";

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
    <StaggerGroup
      staggerChildren={0.12}
      className={`flex flex-col ${isCenter ? "items-center text-center" : ""} ${className}`}
    >
      <StaggerItem variant="popIn">
        <SectionBadge icon={eyebrowIcon} text={eyebrow} />
      </StaggerItem>

      <StaggerItem variant="fadeLeft">
        <h2
          className={`mt-5 text-4xl leading-tight ${isCenter ? "max-w-2xl" : ""}`}
        >
          {title}
        </h2>
      </StaggerItem>

      {description && (
        <StaggerItem variant="fade">
          <p className="mt-5 leading-relaxed text-foreground/80">{description}</p>
        </StaggerItem>
      )}
    </StaggerGroup>
  );
};
