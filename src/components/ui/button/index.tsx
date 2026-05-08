import Link from "next/link";
import { ReactNode, SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
} & (
  | { label: string; icon?: IconComponent }
  | { label?: string; icon: IconComponent }
);

export const Button = ({
  label,
  icon: Icon,
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles = `
    rounded-xl flex items-center gap-2 bg-accent text-white text-bold hover:bg-white hover:text-accent transition-colors duration-300
    px-4 py-2 shadow-md hover:shadow-none 
    hover:border-b-2 hover:border-accent ;
    ${className}
  `;

  const content = (
    <>
      {label && <span>{label}</span>}
      {Icon && <Icon className="size-5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles} target="_blank">
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
