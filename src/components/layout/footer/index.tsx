import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ClockIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/assets/icons";
import {
  ADDRESS,
  EMAIL_HREF,
  EMAIL_LABEL,
  INSTAGRAM_HREF,
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_HREF,
} from "@/constants/contact";
import { Reveal } from "@/motion";
import { FooterContactItem } from "./footer-contact-item";
import { FooterNavList } from "./footer-nav-list";
import { FooterMapCard } from "./footer-map-card";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Avaliações", href: "#testimonials" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

const SERVICES_LINKS = [
  { label: "Dermatologia", href: "#services" },
  { label: "Odontologia", href: "#services" },
  { label: "Vacinação", href: "#services" },
  { label: "Consultas de Rotina", href: "#services" },
  { label: "Cuidado ao Pet", href: "#services" },
];

const SOCIAL_LINKS = [
  { label: "Whatsapp", icon: WhatsappIcon, href: WHATSAPP_HREF },
  { label: "Instagram", icon: InstagramIcon, href: INSTAGRAM_HREF },
];

const WORKING_HOURS = [
  { days: "Seg-Sex", hours: "8:00 - 21:00" },
  { days: "Sábado", hours: "8:00 - 16:00" },
];

export const Footer = () => {
  return (
    <footer className="mt-auto bg-primary/20 font-paytone-one text-lg text-secondary">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[35fr_65fr]">
          <Reveal variant="fadeUp">
            <div className="flex flex-col gap-20">
              <Image
                width={140}
                height={140}
                src="/images/logo-caes-e-gatos-birigui.png"
                alt="Cães e Gatos Birigui"
              />

              <div className="flex flex-col gap-6">
                <FooterContactItem
                  icon={PhoneIcon}
                  label="Entre em Contato"
                  value={PHONE_LABEL}
                  href={PHONE_HREF}
                />
                <FooterContactItem
                  icon={MailIcon}
                  label="E-mail"
                  value={EMAIL_LABEL}
                  href={EMAIL_HREF}
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" className="flex flex-col">
            <div className="grid gap-10 sm:grid-cols-3">
              <FooterNavList title="Acesso Rápido" items={QUICK_LINKS} />

              <FooterNavList title="Nossos Serviços" items={SERVICES_LINKS} />

              <div>
                <h3 className="text-lg">Siga-Nos</h3>
                <div className="mt-5 flex flex-col gap-3">
                  {SOCIAL_LINKS.map(({ label, icon, href }) => (
                    <Button
                      key={label}
                      label={label}
                      icon={icon}
                      iconPosition="left"
                      iconClassName="size-7"
                      href={href}
                      className="w-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-stretch justify-between gap-8 border-t border-secondary/25 pt-12">
              <Image
                width={160}
                height={160}
                src="/images/caes-e-gatos-birigui-qr-code.png"
                alt="QR Code para a localização da clínica no Google Maps"
                className="size-40 object-contain"
              />

              <FooterMapCard />

              <div className="flex max-w-sm flex-col">
                <div className="flex items-start gap-3 pb-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                    <LocationIcon className="size-6" />
                  </span>
                  <p>{ADDRESS}</p>
                </div>

                <div className="flex items-start gap-3 border-t border-secondary/25 pt-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                    <ClockIcon className="size-6" />
                  </span>
                  <div>
                    {WORKING_HOURS.map(({ days, hours }) => (
                      <p key={days}>
                        {days}: {hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="fade"
          className="mt-12 border-t border-secondary/25 pt-6 text-center"
        >
          Copyright © 2026 Todos os Direitos Reservados
        </Reveal>
      </div>
    </footer>
  );
};

