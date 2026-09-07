import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StarRating } from "@/components/ui/star-rating";

const starsOf = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("svg"));

describe("StarRating", () => {
  it("renderiza 5 estrelas por padrão", () => {
    const { container } = render(<StarRating rating={3} />);

    expect(starsOf(container)).toHaveLength(5);
  });

  it("respeita um total customizado de estrelas", () => {
    const { container } = render(<StarRating rating={4} max={10} />);

    expect(starsOf(container)).toHaveLength(10);
  });

  it("destaca as estrelas preenchidas e esmaece as restantes", () => {
    const { container } = render(<StarRating rating={3} />);
    const stars = starsOf(container);

    expect(stars.slice(0, 3).every((star) => !star.getAttribute("class")?.includes("opacity-30"))).toBe(true);
    expect(stars.slice(3).every((star) => star.getAttribute("class")?.includes("opacity-30"))).toBe(true);
  });

  it("esmaece todas as estrelas quando a nota é zero", () => {
    const { container } = render(<StarRating rating={0} />);

    for (const star of starsOf(container)) {
      expect(star.getAttribute("class")).toContain("opacity-30");
    }
  });

  it("preenche todas as estrelas quando a nota é máxima", () => {
    const { container } = render(<StarRating rating={5} />);

    for (const star of starsOf(container)) {
      expect(star.getAttribute("class")).not.toContain("opacity-30");
    }
  });

  it("não estoura o total quando a nota é maior que o máximo", () => {
    const { container } = render(<StarRating rating={9} max={5} />);

    expect(starsOf(container)).toHaveLength(5);
  });

  it("aplica as classes do contêiner e das estrelas", () => {
    const { container } = render(
      <StarRating rating={2} className="text-white" starClassName="size-6" />
    );

    expect(container.firstElementChild?.className).toContain("text-white");
    for (const star of starsOf(container)) {
      expect(star.getAttribute("class")).toContain("size-6");
    }
  });

  it("mantém a mesma quantidade e o mesmo preenchimento na versão animada", () => {
    const { container } = render(<StarRating rating={4} animated />);
    const stars = starsOf(container);

    expect(stars).toHaveLength(5);
    expect(stars[3].getAttribute("class")).not.toContain("opacity-30");
    expect(stars[4].getAttribute("class")).toContain("opacity-30");
  });
});

describe("StarRating - acessibilidade", () => {
  it("é decorativo: não expõe texto redundante ao leitor de tela", () => {
    render(<StarRating rating={5} />);

    expect(screen.queryByText(/5/)).not.toBeInTheDocument();
  });
});
