import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroTerminal from "@/components/sections/HeroTerminal";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Certifications from "@/components/sections/Certifications";
import References from "@/components/sections/References";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroTerminal />
        <About />
        <Skills />
        <Work />
        <Certifications />
        <References />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
