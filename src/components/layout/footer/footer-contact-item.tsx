import { IconComponent } from "@/assets/icons";

type FooterContactItemProps = {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
};

export const FooterContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: FooterContactItemProps) => {
  const content = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
        <Icon className="size-6" />
      </span>
      <span className="flex flex-col">
        <span className="text-secondary">{label}</span>
        <span className="text-secondary/80">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
};

