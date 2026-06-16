import Link from "next/link";
import { IconComponent } from "@/assets/icons";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  iconPosition?: "left" | "right";
  iconClassName?: string;
} & (
  | { label: string; icon?: IconComponent }
  | { label?: string; icon: IconComponent }
);

export const Button = ({
  label,
  icon: Icon,
  iconPosition = "right",
  iconClassName,
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const isIconOnly = !label && Icon;
  const spacing = isIconOnly ? "size-11 justify-center" : "px-4 py-2";

  const baseStyles = `
    rounded-xl flex items-center gap-2 bg-accent text-white font-paytone-one text-xl hover:bg-white hover:text-accent transition duration-300 ease-out
    ${spacing} shadow-md hover:shadow-none
    hover:border-b-2 hover:border-accent
    hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-colors
    ${className}
  `;

  const iconNode = Icon && (
    <Icon className={iconClassName ?? (isIconOnly ? "size-9" : "size-5")} />
  );

  const content = (
    <>
      {iconPosition === "left" && iconNode}
      {label && <span>{label}</span>}
      {iconPosition === "right" && iconNode}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {content}
    </button>
  );
};
