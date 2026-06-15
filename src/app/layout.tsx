import type { Metadata } from "next";
import { Paytone_One, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const paytoneOne = Paytone_One({
  variable: "--font-paytone-one",
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Cães e Gatos Birigui",
  description: "Clínica especializada em dermatologia e odontologia veterinária para cães e gatos em Birigui. Cuidados odontológicos, tratamento de pele e cirurgias especializadas com equipe experiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${paytoneOne.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="relative min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
