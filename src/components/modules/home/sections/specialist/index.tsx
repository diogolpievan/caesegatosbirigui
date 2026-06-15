import Image from "next/image";
import {
  ClinicIcon,
  IdCardIcon,
  PawIcon,
  StethoscopeIcon,
} from "@/assets/icons";
import { SectionBadge } from "@/components/ui/section-badge";
import { CredentialBadge } from "./credential-badge";
import { ScheduleCard } from "./schedule-card";
import { ContactCard } from "./contact-card";

const CREDENTIALS = [
  { icon: StethoscopeIcon, label: "Veterinária Especialista" },
  { icon: IdCardIcon, label: "CRMV-SP 39275" },
  { icon: ClinicIcon, label: "Fundadora da Cães e Gatos" },
];

const SCHEDULE = [
  { day: "Seg - Sex", hours: "8:00 - 21:00" },
  { day: "Sábado", hours: "8:00 - 16:00" },
];

const HIGHLIGHTS = [
  "Sua prática é pautada na atualização constante, precisão diagnóstica, garantindo tratamentos seguros e eficazes para cada paciente.",
  "Na Cães e Gatos, cada atendimento é realizado diretamente pela especialista responsável, proporcionando acompanhamento contínuo e atenção personalizada.",
];

export const Specialist = () => {
  return (
    <section id="specialist" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-100 overflow-hidden rounded-[40px]">
            <Image
              fill
              src="/images/letusa-denise.png"
              alt="Dra. Letusa Denise Silva Carobelli"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionBadge icon={PawIcon} text="Especialista" />

            <h2 className="mt-5 text-3xl leading-tight">
              Letusa Denise Silva Carobelli
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {CREDENTIALS.map(({ icon, label }) => (
                <CredentialBadge key={label} icon={icon} label={label} />
              ))}
            </div>

            <p className="mt-6 text-justify leading-relaxed text-foreground/80">
              Com mais de 5 anos de experiência na área veterinária, a Dra.
              Letusa dedica sua atuação exclusivamente à{" "}
              <strong className="text-secondary">dermatologia</strong> e{" "}
              <strong className="text-secondary">odontologia</strong> de cães e
              gatos, oferecendo atendimento individualizado e baseado em
              evidências científicas.
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <PawIcon className="mt-1 size-4 shrink-0 text-accent" />
                  <span className="text-justify leading-relaxed text-foreground/80">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ScheduleCard title="Atendimento" items={SCHEDULE} />
              <ContactCard title="Contatos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
