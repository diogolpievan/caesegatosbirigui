import { WhatsappIcon } from "@/assets/icons";
import { WHATSAPP_HREF } from "@/constants/contact";

const WHATSAPP_GREEN = "#21C063";

export const WhatsappButton = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{ backgroundColor: WHATSAPP_GREEN }}
      className="fixed bottom-6 right-6 z-50 flex size-24 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <span
        aria-hidden
        style={{ backgroundColor: WHATSAPP_GREEN }}
        className="absolute inset-0 animate-ping rounded-full opacity-60 [animation-duration:2.8s]"
      />
      <span
        aria-hidden
        style={{ backgroundColor: WHATSAPP_GREEN }}
        className="absolute inset-0 animate-ping rounded-full opacity-40 [animation-delay:1.4s] [animation-duration:2.8s]"
      />

      <WhatsappIcon className="relative size-12" />
    </a>
  );
};
