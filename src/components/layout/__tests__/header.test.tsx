import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/header";
import { WHATSAPP_HREF } from "@/constants/contact";

describe("Header", () => {
  it("renderiza o logo com texto alternativo e link para a home", () => {
    render(<Header />);

    const logo = screen.getByAltText("Logo Cães e Gatos Birigui");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("renderiza os links de navegação apontando para as âncoras das seções", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");

    expect(within(nav).getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "#home"
    );
    expect(within(nav).getByRole("link", { name: "Sobre" })).toHaveAttribute(
      "href",
      "#about"
    );
    expect(within(nav).getByRole("link", { name: "Serviços" })).toHaveAttribute(
      "href",
      "#services"
    );
  });

  it("expõe o CTA de WhatsApp como link externo seguro", () => {
    render(<Header />);

    const cta = screen.getByRole("link", { name: "Fale Conosco" });
    expect(cta).toHaveAttribute("href", WHATSAPP_HREF);
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("usa a landmark de banner", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
