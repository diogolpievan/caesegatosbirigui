import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { SVGProps } from "react";
import { Tag } from "@/components/ui/tag";

const TestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg data-testid="icon" {...props} />
);

describe("Tag", () => {
  it("renderiza o rótulo", () => {
    render(<Tag icon={TestIcon} label="Odontologia" />);

    expect(screen.getByText("Odontologia")).toBeInTheDocument();
  });

  it("renderiza o ícone com a classe de destaque", () => {
    render(<Tag icon={TestIcon} label="Dermatologia" />);

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("size-5");
    expect(icon).toHaveClass("text-accent");
  });

  it("usa um <span> para poder ficar inline no fluxo do texto", () => {
    const { container } = render(<Tag icon={TestIcon} label="Cirurgia" />);

    expect(container.firstElementChild?.tagName).toBe("SPAN");
  });
});
