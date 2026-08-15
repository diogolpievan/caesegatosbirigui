import type { Metadata } from "next";
import { Paytone_One, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { MotionProvider } from "@/motion";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  VETERINARY_CARE_SCHEMA,
  WEBPAGE_SCHEMA,
  WEBSITE_SCHEMA,
} from "@/constants/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Dermatologia e Odontologia Veterinária`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Dermatologia e Odontologia Veterinária`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/logo-caes-e-gatos-birigui.png",
        alt: `Logo ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Dermatologia e Odontologia Veterinária`,
    description: SITE_DESCRIPTION,
    images: ["/images/logo-caes-e-gatos-birigui.png"],
  },
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
        <JsonLd data={VETERINARY_CARE_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
        <JsonLd data={WEBPAGE_SCHEMA} />
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <WhatsappButton />
      </body>
    </html>
  );
}
