import Image from "next/image";
import { CertificateIcon, MicroscopeIcon, PawIcon } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { Reveal, StaggerGroup, StaggerItem } from "@/motion";
import { FeatureCard } from "./feature-card";
import { ExperienceCard } from "./experience-card";

const SPECIALTIES = [
  "Consultório Veterinário",
  "Dermatologia",
  "Odontologia",
  "Vacinação",
];

export const AboutClinic = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-28">
          <div className="relative">
            <Reveal variant="fadeLeft" delay={0.1}>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl">
                <Image
                  fill
                  src="/images/caes-e-gatos-birigui-nosso-consultorio-veterinario.jpg"
                  alt="Veterinária Letusa da Cães e Gatos utilizando microscópio em consultório"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              variant="scaleIn"
              delay={0.35}
              className="absolute -bottom-10 -right-14"
            >
              <ExperienceCard
                number="5+"
                label={
                  <>
                    Anos de
                    <br />
                    Experiência
                  </>
                }
              />
            </Reveal>
          </div>

          <div className="max-w-150">
            <SectionHeader
              eyebrow="Nosso Consultório"
              title="Centro Especializado em Dermatologia e Odontologia"
              titleMotion="right"
            />

            <Reveal variant="fade" delay={0.2}>
              <p className="mt-6 text-justify leading-relaxed text-foreground/80">
                Nosso consultório conta com estrutura preparada para
                procedimentos dermatológicos e odontológicos, garantindo precisão
                diagnóstica e excelência nos tratamentos.
              </p>
            </Reveal>

            <StaggerGroup
              delayChildren={0.3}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <StaggerItem variant="scaleIn" className="h-full">
                <FeatureCard
                  icon={CertificateIcon}
                  title="Profissional Experiente & Certificado"
                />
              </StaggerItem>
              <StaggerItem variant="scaleIn" className="h-full">
                <FeatureCard
                  icon={MicroscopeIcon}
                  title="Tecnologia Médica Avançada"
                />
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>

        <StaggerGroup className="mt-24 flex flex-wrap justify-center gap-4 lg:mt-32">
          {SPECIALTIES.map((label) => (
            <StaggerItem key={label} variant="popIn">
              <Tag icon={PawIcon} label={label} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

