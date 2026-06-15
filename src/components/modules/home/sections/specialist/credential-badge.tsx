import Image from "next/image";
import { ReactNode } from "react";
import { IconComponent } from "@/assets/icons";

type CredentialBadgeProps = {
  icon?: IconComponent;
  image?: {
    src: string;
    alt: string;
  };
  label: ReactNode;
};

export const CredentialBadge = ({
  icon: Icon,
  image,
  label,
}: CredentialBadgeProps) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4">
      {Icon && <Icon className="size-8 shrink-0 text-secondary" />}

      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={32}
          height={32}
          className="size-8 shrink-0 object-contain"
        />
      )}

      <span className="font-paytone-one text-sm leading-tight text-secondary">
        {label}
      </span>
    </div>
  );
};

export default CredentialBadge;
