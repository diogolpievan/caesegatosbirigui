import { Button } from "@/components/ui/button";
import { InstagramIcon, PawCircleIcon } from "@/assets/icons";
import { INSTAGRAM_HREF, WHATSAPP_HREF } from "@/constants/contact";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-position-[center_25%] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/caes-e-gatos-birigui-hero.png')",
      }}
    >
      <div className="container flex min-h-[93vh] flex-col justify-center pt-40 pb-32">
        <div className="max-w-150">
          <h1 className="text-5xl leading-[1.1] md:text-6xl">
            Cuidando do Seu Pet Como se Fosse Nosso
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <Button
              label="Agende Agora"
              icon={PawCircleIcon}
              href={WHATSAPP_HREF}
            />
            <Button icon={InstagramIcon} href={INSTAGRAM_HREF} />
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 52"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-13 w-full"
      >
        <path
          d="M385.668 27.5427C455.268 32.2183 522.66 40.599 592.068 45.682C690.936 52.9273 793.896 53.365 892.608 45.851C988.536 38.5667 1088 20.8 1182.79 11.7737C1266.85 3.76567 1358.63 0.467999 1440 10.4737V52H0V40.1483C122.959 23.3115 256.336 18.9521 385.668 27.5427Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default Hero;
