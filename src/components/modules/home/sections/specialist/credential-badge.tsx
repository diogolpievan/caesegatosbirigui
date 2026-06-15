import { IconComponent } from "@/assets/icons";

type CredentialBadgeProps = {
  icon: IconComponent;
  label: string;
};

export const CredentialBadge = ({ icon: Icon, label }: CredentialBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-primary/15 px-4 py-3 font-paytone-one text-sm text-secondary">
      <Icon className="size-6 shrink-0 text-secondary" />
      {label}
    </span>
  );
};

export default CredentialBadge;
