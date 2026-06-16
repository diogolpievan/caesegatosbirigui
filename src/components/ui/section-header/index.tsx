import { IconComponent, PawIcon } from "@/assets/icons";
import { SectionBadge } from "@/components/ui/section-badge";
import { StaggerGroup, StaggerItem } from "@/motion";

type TitleMotion = "left" | "right" | "up";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowIcon?: IconComponent;
  align?: "left" | "center";
  /** Direção de entrada do título. Default: "up" se centralizado, senão "left". */
  titleMotion?: TitleMotion;
  className?: string;
};

const titleVariant = {
  left: "fadeLeft",
  right: "fadeRight",
  up: "fadeUp",
} as const;

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  eyebrowIcon = PawIcon,
  align = "left",
  titleMotion,
  className = "",
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  const resolvedTitleMotion = titleMotion ?? (isCenter ? "up" : "left");

  return (
    <StaggerGroup
      staggerChildren={0.18}
      className={`flex flex-col ${isCenter ? "items-center text-center" : ""} ${className}`}
    >
      <StaggerItem variant="popIn">
        <SectionBadge icon={eyebrowIcon} text={eyebrow} />
      </StaggerItem>

      <StaggerItem variant={titleVariant[resolvedTitleMotion]}>
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
