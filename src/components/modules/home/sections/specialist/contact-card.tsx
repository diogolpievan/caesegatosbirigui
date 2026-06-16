import { Button } from "@/components/ui/button";
import { ContactIcon, InstagramIcon, WhatsappIcon } from "@/assets/icons";
import { INSTAGRAM_HREF, WHATSAPP_HREF } from "@/constants/contact";

type ContactCardProps = {
  title: string;
};

export const ContactCard = ({ title }: ContactCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-foreground/15 bg-background p-6">
      <div className="flex items-center gap-2 text-secondary">
        <ContactIcon className="size-7" />
        <span className="font-paytone-one text-lg">{title}</span>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Button
          label="Whatsapp"
          icon={WhatsappIcon}
          iconPosition="left"
          iconClassName="size-9"
          href={WHATSAPP_HREF}
          className="w-full"
        />
        <Button
          label="Instagram"
          icon={InstagramIcon}
          iconPosition="left"
          iconClassName="size-9"
          href={INSTAGRAM_HREF}
          className="w-full"
        />
      </div>
    </div>
  );
};

