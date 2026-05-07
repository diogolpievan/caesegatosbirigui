import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAVIGATION_LINKS = [
  {
    label: 'Home', 
    href: '/'
  },
  {
    label: 'Sobre',
    href: '/about'
  },
  {
    label: 'Serviços',
    href: '/services'
  }
]


export const Header = () => {
  return (
    <header>
        <div className="container">
          <Link href="/">
            <Image 
              width={115}
              src="/logo.png"
              alt="Logo Cães e Gatos Birigui"
            />
          </Link>

          <nav>
            {NAVIGATION_LINKS.map(({ label, href }) => (
                <NavItem key={href} label={label} href={href} />
            ))
            }
          </nav>
        </div>
    </header>
  )
}
