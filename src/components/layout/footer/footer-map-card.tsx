import { MAP_EMBED_SRC } from "@/constants/contact";

export const FooterMapCard = () => {
  return (
    <div className="h-full w-64 overflow-hidden rounded-2xl border-[3px] border-secondary/25">
      <iframe
        title="Mapa - Cães e Gatos Birigui"
        src={MAP_EMBED_SRC}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

