import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { WHATSAPP_HREF } from "@/constants/contact";

const getButton = () => screen.getByRole("link", { name: "Falar no WhatsApp" });

describe("WhatsappButton", () => {
  it("aponta para a conversa do WhatsApp da clínica", () => {
    render(<WhatsappButton />);

    expect(getButton()).toHaveAttribute("href", WHATSAPP_HREF);
  });

  it("abre em nova aba com rel seguro", () => {
    render(<WhatsappButton />);

    expect(getButton()).toHaveAttribute("target", "_blank");
    expect(getButton()).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("descreve o botão para leitores de tela mesmo sem texto visível", () => {
    render(<WhatsappButton />);

    expect(screen.getByLabelText("Falar no WhatsApp")).toBeInTheDocument();
  });

  it("esconde os anéis de pulso da árvore de acessibilidade", () => {
    const { container } = render(<WhatsappButton />);

    expect(container.querySelectorAll("span[aria-hidden]")).toHaveLength(2);
  });

  it("fica fixo acima do restante do conteúdo", () => {
    render(<WhatsappButton />);

    expect(getButton().className).toContain("fixed");
    expect(getButton().className).toContain("z-50");
  });
});
