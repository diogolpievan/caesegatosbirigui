import Hero from "@/components/modules/home/sections/hero";
import AboutClinic from "@/components/modules/home/sections/about-clinic";
import Services from "@/components/modules/home/sections/services";
import Specialist from "@/components/modules/home/sections/specialist";
import Testimonials from "@/components/modules/home/sections/testimonials";
import Faq from "@/components/modules/home/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutClinic />
      <Services />
      <Specialist />
      <Testimonials />
      <Faq />
    </>
  );
}
