import { describe, expect, it } from "vitest";
import {
  ADDRESS,
  EMAIL_HREF,
  EMAIL_LABEL,
  INSTAGRAM_HREF,
  MAP_EMBED_SRC,
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_HREF,
} from "@/constants/contact";

const PHONE_DIGITS = "5518997611028";

const digitsOf = (value: string) => value.replace(/\D/g, "");

describe("constantes de contato", () => {
  it("aponta o WhatsApp para o número da clínica", () => {
    const url = new URL(WHATSAPP_HREF);

    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe(`/${PHONE_DIGITS}`);
  });

  it("envia uma mensagem pré-preenchida corretamente codificada", () => {
    const text = new URL(WHATSAPP_HREF).searchParams.get("text");

    expect(text).toBe(
      "Olá! Vim pelo site e gostaria de mais informações."
    );
    // Acentos precisam ir percent-encoded para não quebrar no app.
    expect(WHATSAPP_HREF).not.toContain("á");
    expect(WHATSAPP_HREF).not.toContain(" ");
  });

  it("usa o mesmo número no link de telefone e no rótulo exibido", () => {
    expect(PHONE_HREF).toBe(`tel:+${PHONE_DIGITS}`);
    // O rótulo é local (sem DDI), então comparamos pelo sufixo.
    expect(PHONE_DIGITS.endsWith(digitsOf(PHONE_LABEL))).toBe(true);
  });

  it("usa o mesmo endereço no link de e-mail e no rótulo exibido", () => {
    expect(EMAIL_HREF).toBe(`mailto:${EMAIL_LABEL}`);
    expect(EMAIL_LABEL).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
  });

  it("aponta o Instagram para o perfil oficial", () => {
    const url = new URL(INSTAGRAM_HREF);

    expect(url.protocol).toBe("https:");
    expect(url.hostname).toBe("www.instagram.com");
    expect(url.pathname).toBe("/caesegatosbirigui/");
  });

  it("usa uma URL de embed do Google Maps", () => {
    const url = new URL(MAP_EMBED_SRC);

    expect(url.protocol).toBe("https:");
    expect(url.hostname).toBe("www.google.com");
    expect(url.pathname).toBe("/maps/embed");
  });

  it("expõe o endereço com cidade", () => {
    expect(ADDRESS).toContain("Birigui");
    expect(ADDRESS.trim()).toBe(ADDRESS.trim());
    expect(ADDRESS.length).toBeGreaterThan(0);
  });
});
