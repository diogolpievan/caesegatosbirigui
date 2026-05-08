import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-item";
import { Button } from "@/components/ui/button";

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
        <div className="container flex items-center justify-between py-6">
          <Link href="/">
            <Image 
              width={115}
              height={115}
              src="/images/logo-caes-e-gatos-birigui.png"
              alt="Logo Cães e Gatos Birigui"
            />
          </Link>

          <nav className="flex items-center gap-7 font-paytone-one text-secondary text-xl">
            {NAVIGATION_LINKS.map(({ label, href }) => (
                <NavItem key={href} label={label} href={href} />
            ))
            }
            <Button
            label="Fale Conosco"
            href="https://wa.me/5518997611028?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            />
          </nav>
        </div>
    </header>
  )
}

export default Header;
