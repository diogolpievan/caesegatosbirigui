import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/motion";
import { FaqAccordion } from "./faq-accordion";
import type { FaqEntry } from "./faq-item";

const FAQS: FaqEntry[] = [
  {
    id: "sinais-pele",
    question: "Quais sinais indicam que meu pet precisa de avaliação de pele?",
    answer: [
      {
        type: "text",
        text: "Coceira frequente, lambedura excessiva, queda de pelos, vermelhidão na pele, feridas, crostas, mau odor ou infecções recorrentes (ouvidos e pele) são sinais comuns de doenças dermatológicas.",
      },
      {
        type: "text",
        text: "Mesmo que os sinais pareçam leves, quadros de pele tendem a ser crônicos e progressivos, por isso a avaliação precoce é fundamental para controle adequado.",
      },
    ],
  },
  {
    id: "preparar-consulta",
    question: "Preciso preparar meu pet antes da consulta dermatológica?",
    answer: [
      {
        type: "text",
        text: "Sim. Alguns cuidados são importantes para não interferir no diagnóstico:",
      },
      {
        type: "list",
        items: [
          "Evite dar banho 3 a 5 dias antes da consulta",
          "Não utilize pomadas, sprays ou medicações sem orientação",
          "Leve exames anteriores e histórico de tratamentos",
        ],
      },
      {
        type: "text",
        text: "Isso permite uma avaliação mais precisa da pele e dos pelos.",
      },
    ],
  },
  {
    id: "dentes-gengiva",
    question: "Como saber se meu pet tem problema nos dentes ou na gengiva?",
    answer: [
      { type: "text", text: "Os sinais mais comuns são:" },
      {
        type: "list",
        items: [
          "Mau hálito (muito frequente e um dos primeiros sinais)",
          "Presença de tártaro",
          "Gengiva vermelha ou sangrando",
          "Dificuldade ou dor ao mastigar",
          "Salivação excessiva",
        ],
      },
      {
        type: "text",
        text: "Essas alterações geralmente estão relacionadas à doença periodontal, uma condição progressiva e muitas vezes silenciosa, que pode levar à perda dentária e, em casos mais avançados, estar associada a repercussões sistêmicas, como alterações em rins e coração.",
      },
    ],
  },
  {
    id: "limpeza-tartaro",
    question: "A limpeza de tártaro é apenas estética ou é um tratamento?",
    answer: [
      { type: "text", text: "É um tratamento essencial." },
      {
        type: "text",
        text: "A limpeza dentária (profilaxia) remove o tártaro visível e também o que está abaixo da gengiva, onde a doença realmente se instala.",
      },
      { type: "text", text: "Além disso, o procedimento permite:" },
      {
        type: "list",
        items: [
          "Avaliação completa da cavidade oral",
          "Tratamento de infecções",
          "Prevenção da progressão da doença periodontal",
        ],
      },
      {
        type: "text",
        text: "Não é um procedimento estético, e sim parte fundamental da saúde geral do paciente.",
      },
    ],
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Perguntas Frequentes"
              title="Esclarecendo Suas Principais Dúvidas"
              description="Selecionamos as perguntas mais frequentes para orientar você sobre consultas, procedimentos dermatológicos e cuidados odontológicos do seu pet."
            />

            <div className="mt-8">
              <FaqAccordion items={FAQS} defaultOpenIndex={0} />
            </div>
          </div>

          <Reveal variant="scaleIn" className="relative hidden lg:block">
            <span
              aria-hidden
              className="absolute -top-4 right-12 size-16 rounded-2xl bg-accent/20"
            />
            <span
              aria-hidden
              className="absolute top-20 -right-2 size-10 rounded-xl bg-accent/15"
            />
            <span
              aria-hidden
              className="absolute top-1/3 -left-6 size-8 rounded-lg bg-accent/15"
            />
            <span
              aria-hidden
              className="absolute bottom-10 -left-4 size-20 rounded-2xl bg-primary/30"
            />
            <span
              aria-hidden
              className="absolute bottom-0 left-20 size-12 rounded-xl bg-primary/25"
            />

            <div className="relative z-10 aspect-square w-full">
              <Image
                src="/images/caes-e-gatos-birigui-faq-image.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

