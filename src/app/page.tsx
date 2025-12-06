import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SystemSection from "./components/SystemSection";
import ResultsSection from "./components/ResultsSection";
import ProcessusSection from "./components/ProcessusSection";
import Form from "./components/Form";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div>
      <main className="max-w-[1200px] m-auto">
        <Header />

        <HeroSection />
        <SystemSection />
        <ResultsSection />
        <ProcessusSection />
        <section id="contact" className="text-center mb-[100px]">
          <h3 className="font-bold text-3xl mb-8">Votre projet commence ici...</h3>
          <Form />
          <p>Vous préférez parler directement ? Appelez moi au 0616771919.</p>
          <p>Vous souhaitez un audit rapide ? <Link href={'/'}>Prenez rendez-vous directement ici.</Link></p>
        </section>

        <Footer />
      </main>
    </div>
  );
}
