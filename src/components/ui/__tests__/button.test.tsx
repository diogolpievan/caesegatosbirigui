import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { SVGProps } from "react";
import { Button } from "@/components/ui/button";

const TestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg data-testid="icon" {...props} />
);

describe("Button", () => {
  it("renderiza um <button> com type padrão quando não há href", () => {
    render(<Button label="Agendar" />);

    const button = screen.getByRole("button", { name: "Agendar" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("respeita o type informado", () => {
    render(<Button label="Enviar" type="submit" />);

    expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("dispara onClick ao ser acionado", async () => {
    const onClick = vi.fn();
    render(<Button label="Agendar" onClick={onClick} />);

    await userEvent.click(screen.getByRole("button", { name: "Agendar" }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("não dispara onClick quando desabilitado", async () => {
    const onClick = vi.fn();
    render(<Button label="Agendar" onClick={onClick} disabled />);

    const button = screen.getByRole("button", { name: "Agendar" });
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renderiza um link externo seguro quando recebe href", () => {
    render(<Button label="Fale Conosco" href="https://wa.me/5518997611028" />);

    const link = screen.getByRole("link", { name: "Fale Conosco" });
    expect(link).toHaveAttribute("href", "https://wa.me/5518997611028");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("não renderiza um <button> quando é link", () => {
    render(<Button label="Fale Conosco" href="/contato" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("posiciona o ícone à direita do rótulo por padrão", () => {
    render(<Button label="Agendar" icon={TestIcon} />);

    const button = screen.getByRole("button");
    const [first, second] = Array.from(button.children);

    expect(first.tagName).toBe("SPAN");
    expect(second).toHaveAttribute("data-testid", "icon");
  });

  it("posiciona o ícone à esquerda quando iconPosition é left", () => {
    render(<Button label="Agendar" icon={TestIcon} iconPosition="left" />);

    const button = screen.getByRole("button");
    const [first, second] = Array.from(button.children);

    expect(first).toHaveAttribute("data-testid", "icon");
    expect(second.tagName).toBe("SPAN");
  });

  it("usa o layout quadrado e o ícone maior quando não há rótulo", () => {
    render(<Button icon={TestIcon} />);

    expect(screen.getByRole("button").className).toContain("size-11");
    expect(screen.getByTestId("icon")).toHaveClass("size-9");
  });

  it("usa o espaçamento com padding e o ícone menor quando há rótulo", () => {
    render(<Button label="Agendar" icon={TestIcon} />);

    expect(screen.getByRole("button").className).toContain("px-4");
    expect(screen.getByTestId("icon")).toHaveClass("size-5");
  });

  it("permite sobrescrever a classe do ícone", () => {
    render(<Button label="Agendar" icon={TestIcon} iconClassName="size-3" />);

    expect(screen.getByTestId("icon")).toHaveClass("size-3");
  });

  it("acrescenta a className recebida às classes base", () => {
    render(<Button label="Agendar" className="mt-10" />);

    const button = screen.getByRole("button");
    expect(button.className).toContain("mt-10");
    expect(button.className).toContain("bg-accent");
  });
});
