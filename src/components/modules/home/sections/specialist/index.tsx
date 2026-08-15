import Image from "next/image";
import { IdCardIcon, PawIcon, StethoscopeIcon } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { BUSINESS_SCHEMA_ID, SITE_URL } from "@/constants/seo";
import { CredentialBadge } from "./credential-badge";
import { ScheduleCard } from "./schedule-card";
import { ContactCard } from "./contact-card";

const CREDENTIALS = [
  {
    id: "vet",
    icon: StethoscopeIcon,
    label: (
      <>
        Veterinária
        <br />
        Especializada
      </>
    ),
  },
  {
    id: "crmv",
    icon: IdCardIcon,
    label: "CRMV-SP 39275",
  },
  {
    id: "founder",
    image: {
      src: "/images/logo-secundaria-caes-e-gatos-birigui.png",
      alt: "Logo Cães e Gatos Birigui",
    },
    label: (
      <>
        Fundadora da
        <br />
        Cães e Gatos
      </>
    ),
  },
];

const SCHEDULE = [
  { day: "Seg - Sex", hours: "8:00 - 21:00" },
  { day: "Sábado", hours: "8:00 - 16:00" },
];

const HIGHLIGHTS = [
  "Sua prática é pautada na atualização constante, precisão diagnóstica, garantindo tratamentos seguros e eficazes para cada paciente.",
  "Na Cães e Gatos, cada atendimento é realizado diretamente pela especialista responsável, proporcionando acompanhamento contínuo e atenção personalizada.",
];

const SPECIALIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Letusa Denise Silva Carobelli",
  jobTitle: "Médica Veterinária",
  image: `${SITE_URL}/images/letusa-denise.png`,
  identifier: "CRMV-SP 39275",
  worksFor: { "@id": BUSINESS_SCHEMA_ID },
};

export const Specialist = () => {
  return (
    <section id="specialist" className="py-20 lg:py-28">
      <JsonLd data={SPECIALIST_SCHEMA} />
      <div className="container">
        <div className="grid items-stretch gap-12 lg:grid-cols-[4fr_6fr] lg:gap-16">
          <Reveal variant="scaleIn" delay={0.1} className="self-end">
            <Image
              src="/images/letusa-denise.png"
              alt="Dra. Letusa Denise Silva Carobelli"
              width={614}
              height={861}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full rounded-[40px]"
            />
          </Reveal>

          <div>
            <SectionHeader
              eyebrow="Especialista"
              title="Letusa Denise Silva Carobelli"
              titleMotion="right"
            />

            <StaggerGroup
              delayChildren={0.2}
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {CREDENTIALS.map(({ id, ...credential }) => (
                <StaggerItem key={id} variant="popIn">
                  <CredentialBadge {...credential} />
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal variant="fade" delay={0.3}>
              <p className="mt-6 text-justify leading-relaxed text-foreground/80">
                Com mais de 5 anos de experiência na área veterinária, a Dra.
                Letusa dedica sua atuação exclusivamente à{" "}
                <strong className="text-secondary">dermatologia</strong> e{" "}
                <strong className="text-secondary">odontologia</strong> de cães e
                gatos, oferecendo atendimento individualizado e baseado em
                evidências científicas.
              </p>
            </Reveal>

            <StaggerGroup
              as="ul"
              delayChildren={0.35}
              className="mt-5 flex flex-col gap-3"
            >
              {HIGHLIGHTS.map((highlight) => (
                <StaggerItem
                  key={highlight}
                  as="li"
                  variant="fadeUp"
                  className="flex gap-2"
                >
                  <PawIcon className="mt-1 size-4 shrink-0 text-accent" />
                  <span className="text-justify leading-relaxed text-foreground/80">
                    {highlight}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-x-24">
              <Reveal variant="fadeUp" delay={0.4} className="h-full">
                <ScheduleCard title="Atendimento" items={SCHEDULE} />
              </Reveal>
              <Reveal variant="fadeUp" delay={0.45} className="h-full">
                <ContactCard title="Contatos" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

