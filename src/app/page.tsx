import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SystemSection from "./components/SystemSection";
// import ResultsSection from "./components/ResultsSection";
import ProcessusSection from "./components/ProcessusSection";
import Form from "./components/Form";
import Link from "next/link";
import Footer from "./components/Footer";
import ProjetsSection from "./components/Projets";
import ScrollButton from "./components/ScrollButton";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {

  return (
    <div>
      <main className="w-full m-auto border-dashed border-l border-r p-2 lg:p-4 border-x-slate-300">
        <div className="lg:h-screen flex flex-col relative mb-20 lg:mb-0">
          <Header />
          <HeroSection />
          <ScrollButton nextId="systeme" />
        </div>

        <div className="relative lg:h-screen flex flex-col mb-20 lg:mb-0 max-w-[1200px] m-auto">
          <SystemSection />
          <ScrollButton nextId="process" />
        </div>
        {/* <ResultsSection /> */}

        <div className="relative lg:h-screen flex flex-col mb-20 lg:mb-0 max-w-[1200px] m-auto">
          <ProcessusSection />
          <ScrollButton nextId="projets" />
        </div>

        <div className="relative lg:h-screen flex flex-col mb-20 lg:mb-0 max-w-[1200px] m-auto">
          <ProjetsSection />
          <ScrollButton nextId="contact" />
        </div>
        
        <section id="contact" className="text-center min-h-[650px] flex flex-col justify-center items-center mb-20 rounded-3xl relative z-0 overflow-hidden">
          <div className="absolute w-280 h-280 rounded-full border-b-3 -translate-y-70 border-b-blue-500 blur-sm -z-1"></div>
          <h2 className="text-3xl md:text-4xl mb-6">Votre projet <span className="md:hidden"><br /></span> <span className="font-semibold gradient-text">commence ici...</span></h2>
          <Form />
          <p className="mb-2">Vous préférez parler directement ? <span className="md:hidden"><br /></span>Appelez moi au 0616771919.</p>
          <p>Vous souhaitez un audit rapide ? <span className="md:hidden"><br /></span> <Link href="https://calendly.com/contact-valentin-vinel/30min" className="hover:underline">Prenez rendez-vous directement ici.</Link></p>
        </section>

        <Footer />

        <BackToTopButton />
      </main>
    </div>
  );
}
