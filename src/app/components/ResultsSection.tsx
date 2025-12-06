import Image from "next/image";
import graphImg from "../../../public/28564.jpg"

export default function ResultsSection() {
    return (
        <section id="results" className="text-center mb-[100px]">
          <h3 className="font-bold text-3xl mb-2">Des indicateurs concrets pour piloter votre croissance.</h3>
          <p className="mb-8 text-sm">Chaque site que je crée est conçu pour générer plus de trafic, capturer davantage de leads et fournir des données claires pour piloter votre croissance.</p>
          <div className="flex gap-16 justify-center items-center">
            <Image src={graphImg} alt="Image de graphique" className="max-w-[450px] rounded-xl" />
            <ul className="text-start list-disc w-[450px]">
              <li><span className="font-bold">Plus de visibilité :</span> votre site est optimisé pour que vos prospects vous trouvent facilement.</li>
              <li><span className="font-bold">Des leads mieux qualifiés :</span> parcours utilisateur et formulaires pensés pour convertir vos visiteurs.</li>
              <li><span className="font-bold">Des données exploitables :</span> suivi précis pour savoir ce qui fonctionne et où agir.</li>
              <li><span className="font-bold">Performance et fiabilité :</span> site rapide, stable et sécurisé.</li>
              <li><span className="font-bold">Optimisation continue :</span> ajustements réguliers pour améliorer vos résultats au fil du temps.</li>
            </ul>
          </div>
        </section>
    )
}