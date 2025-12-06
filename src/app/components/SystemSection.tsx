import Image from "next/image";

import mesureImg from "../../../public/recherche.png";
import seoImg from "../../../public/seo.png";
import conversionImg from "../../../public/conversion.png";

export default function SystemSection() {
  const articles = [
    {
      title: "Visibilité",
      subtitle : "SEO & Performance Technique",
      promise : "Attirer un trafic qualifié et durable.",
      description : "Je conçois des sites avec une structure optimisée, un balisage propre et une architecture technique solide.",
      image : seoImg,
      benefits : [
        "Plus de visibilité", 
        "Un trafic qui augmente naturellement", 
        "Une base saine pour toute votre acquisition"
      ]
    },
    {
      title: "Conversion",
      subtitle : "UX, Design & Copywriting stratégique",
      promise : "Transformer vos visiteurs en opportunités.",
      description : "Chaque page est structurée pour clarifier votre valeur, lever les objections et guider l'utilisateur vers l'action.",
      image : conversionImg,
      benefits : [
        "Plus de prises de contact", 
        "Une expérience professionnelle et rassurante", 
        "Un message clair et convaincant"
      ]
    },
    {
      title: "Mesure",
      subtitle : "Tracking & analyse",
      promise : "Prendre de meilleures décisions.",
      description : "Mise en place d'un suivi complet des conversions, des comportements et du trafic, pour comprendre ce qui fonctionne vraiment.",
      image : mesureImg,
      benefits : [
        "Une vision claire de vos performances", 
        "Des optimisations basées sur des données", 
        "Une acquisition qui s'améliore chaque mois"
      ]
    }
  ] 

    return (
        <section id="systeme" className="systeme_section mb-[100px]">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">3 piliers pour créer une machine à acquisition durable.</h2>
                        <p className="text-sm">Un site n'est utile que s'il génère de la visibilité, des opportunités et des décisions basées sur la donnée.</p>
                        <p className="text-sm">C'est exactement ce que ce système apporte.</p>
                    </div>
        
                    <div className="flex justify-around mb-10">
                        {articles.map((article) => (
                          <article key={article.title} className="w-[380px] h-[300px] bg-gray-200 p-2 text-center flex flex-col justify-between items-center gap-2 rounded-xl">
                              <div>
                                  <p className="italic text-sm">{article.subtitle}</p>
                                  <h3 className="font-bold text-2xl">{article.title}</h3>
                                  <p>{article.promise}</p>
                              </div>
                              <div>
                                <Image src={article.image} alt="Logo" className="m-auto"></Image>
                              </div>
                              <div>
                                  <p>{article.description}</p>
                              </div>
                            
                          </article>
                        ))}
                    </div>
                    <div className="text-center">
                      <p>
                        <span className="font-bold">Pourquoi ça marche ? </span>Parce qu'un site performant repose toujours sur les mêmes fondations : visibilité, conversion et analyse.
                      </p> 
                      <p>On ne peut améliorer ce qu'on ne peut tracker, et c'est en combinant ces trois piliers, que vous obtenez une infrastructure de croissance.</p>
                    </div>
        </section>
    )
}