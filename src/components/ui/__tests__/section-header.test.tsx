import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { SVGProps } from "react";
import { SectionHeader } from "@/components/ui/section-header";

const TestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg data-testid="custom-icon" {...props} />
);

describe("SectionHeader", () => {
  it("renderiza eyebrow, título e descrição", () => {
    render(
      <SectionHeader
        eyebrow="Sobre a clínica"
        title="Cuidado especializado"
        description="Atendimento humanizado para cães e gatos."
      />
    );

    expect(screen.getByText("Sobre a clínica")).toBeInTheDocument();
    expect(
      screen.getByText("Atendimento humanizado para cães e gatos.")
    ).toBeInTheDocument();
  });

  it("expõe o título como heading de nível 2", () => {
    render(<SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Perguntas frequentes" })
    ).toBeInTheDocument();
  });

  it("omite o parágrafo de descrição quando ela não é informada", () => {
    const { container } = render(
      <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
    );

    expect(container.querySelector("p")).toBeNull();
  });

  it("usa o ícone de patinha por padrão", () => {
    const { container } = render(
      <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
    );

    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.queryByTestId("custom-icon")).not.toBeInTheDocument();
  });

  it("aceita um ícone customizado no eyebrow", () => {
    render(
      <SectionHeader
        eyebrow="Serviços"
        title="O que fazemos"
        eyebrowIcon={TestIcon}
      />
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("centraliza o conteúdo quando align é center", () => {
    const { container } = render(
      <SectionHeader eyebrow="FAQ" title="Perguntas" align="center" />
    );

    expect(container.firstElementChild?.className).toContain("text-center");
  });

  it("alinha à esquerda por padrão", () => {
    const { container } = render(
      <SectionHeader eyebrow="FAQ" title="Perguntas" />
    );

    expect(container.firstElementChild?.className).not.toContain("text-center");
  });

  it("acrescenta a className recebida", () => {
    const { container } = render(
      <SectionHeader eyebrow="FAQ" title="Perguntas" className="max-w-xl" />
    );

    expect(container.firstElementChild?.className).toContain("max-w-xl");
  });
});
