import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
}

export const NavItem = ({label, href}: NavItemProps) => {
  return (
    <Link href={href}>
      {label}
    </Link>
  )
  }
