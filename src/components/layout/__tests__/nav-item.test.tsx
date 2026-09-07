import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavItem } from "@/components/layout/header/nav-item";

describe("NavItem", () => {
  it("renderiza um link com o rótulo e o destino informados", () => {
    render(<NavItem label="Serviços" href="#services" />);

    const link = screen.getByRole("link", { name: "Serviços" });
    expect(link).toHaveAttribute("href", "#services");
  });

  it("mantém a navegação interna na mesma aba", () => {
    render(<NavItem label="Home" href="#home" />);

    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute(
      "target"
    );
  });
});
