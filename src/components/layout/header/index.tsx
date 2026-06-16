import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { Button } from "@/components/ui/button";
import { WHATSAPP_HREF } from "@/constants/contact";

const NAVIGATION_LINKS = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Sobre',
    href: '#about'
  },
  {
    label: 'Serviços',
    href: '#services'
  }
]


export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
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
            href={WHATSAPP_HREF}
            />
          </nav>
        </div>
    </header>
  )
}

