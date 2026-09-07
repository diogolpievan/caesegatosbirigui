import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FooterNavList } from "@/components/layout/footer/footer-nav-list";

const ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
];

describe("FooterNavList", () => {
  it("renderiza o título da lista", () => {
    render(<FooterNavList title="Acesso Rápido" items={ITEMS} />);

    expect(
      screen.getByRole("heading", { name: "Acesso Rápido" })
    ).toBeInTheDocument();
  });

  it("renderiza um item de lista por link", () => {
    render(<FooterNavList title="Acesso Rápido" items={ITEMS} />);

    const list = screen.getByRole("list");
    expect(within(list).getAllByRole("listitem")).toHaveLength(ITEMS.length);
  });

  it("aponta cada link para o href informado", () => {
    render(<FooterNavList title="Acesso Rápido" items={ITEMS} />);

    for (const { label, href } of ITEMS) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href
      );
    }
  });

  it("renderiza uma lista vazia sem quebrar", () => {
    render(<FooterNavList title="Sem itens" items={[]} />);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    expect(
      screen.getByRole("heading", { name: "Sem itens" })
    ).toBeInTheDocument();
  });
});
