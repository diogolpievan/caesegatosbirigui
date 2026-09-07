import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { SVGProps } from "react";
import { SectionBadge } from "@/components/ui/section-badge";

const TestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg data-testid="icon" {...props} />
);

describe("SectionBadge", () => {
  it("renderiza o texto do badge", () => {
    render(<SectionBadge icon={TestIcon} text="Nossos Serviços" />);

    expect(screen.getByText("Nossos Serviços")).toBeInTheDocument();
  });

  it("renderiza o ícone recebido", () => {
    render(<SectionBadge icon={TestIcon} text="Sobre" />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("não introduz um heading (o título da seção fica no SectionHeader)", () => {
    render(<SectionBadge icon={TestIcon} text="Sobre" />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
