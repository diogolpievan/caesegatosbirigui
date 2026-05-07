import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        </div>
    </header>
  )
}

export default Header;
