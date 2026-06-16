import { DermatologyIcon, ToothIcon } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerGroup, StaggerItem } from "@/motion";
import { ServiceCard } from "./service-card";

const SERVICES = [
  {
    id: "dermatologia",
    icon: DermatologyIcon,
    iconClassName: "size-16",
    title: "Dermatologia Veterinária",
    description:
      "Diagnóstico e tratamento de problemas de pele em cães e gatos, com foco no controle da coceira, inflamações e infecções.",
    benefits: [
      "Coceira e alergias de pele",
      "Feridas, vermelhidão e infecções",
      "Otites (problemas de ouvido)",
      "Diagnóstico das doenças de pele",
      "Diagnóstico e tratamento da Leishmaniose",
      "Queda excessiva de pelos",
    ],
    image: {
      src: "/images/services-dermatologia-dog.png",
      alt: "Cachorro representando o serviço de dermatologia veterinária",
      className: "bottom-0 right-0 aspect-square w-[50%] max-w-80",
    },
  },
  {
    id: "odontologia",
    icon: ToothIcon,
    iconClassName: "size-12",
    title: "Odontologia Veterinária",
    description:
      "Tratamento da doença periodontal, atuando na dor, infecção e mau hálito, com foco na saúde bucal e no bem-estar do seu pet.",
    benefits: [
      "Mau hálito persistente",
      "Acúmulo de tártaro",
      "Gengiva inflamada ou sangrando",
      "Tratamento da doença periodontal",
      "Dor ao mastigar",
    ],
    image: {
      src: "/images/services-odontologia-cat.png",
      alt: "Gato representando o serviço de odontologia veterinária",
      className: "bottom-0 right-0 aspect-square w-[50%] max-w-80",
    },
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-primary/20 py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Nossos Serviços"
          title="Cuidado Especializado Para a Saúde do Seu Pet"
        />

        <StaggerGroup className="mt-14 grid gap-8 lg:grid-cols-2">
          {SERVICES.map(({ id, ...service }) => (
            <StaggerItem key={id} variant="fadeUp" className="h-full">
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

