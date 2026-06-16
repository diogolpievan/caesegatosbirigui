import Link from "next/link";
import { PawIcon } from "@/assets/icons";

type FooterNavListProps = {
  title: string;
  items: { label: string; href: string }[];
};

export const FooterNavList = ({ title, items }: FooterNavListProps) => {
  return (
    <div>
      <h3 className="text-lg">{title}</h3>

      <ul className="mt-5 flex flex-col gap-3">
        {items.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-2 text-secondary transition-colors hover:text-accent"
            >
              <PawIcon className="size-4 shrink-0 text-accent" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

