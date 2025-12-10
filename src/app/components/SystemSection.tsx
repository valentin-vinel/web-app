"use client"

import Image from "next/image";

import mesureImg from "../../../public/recherche.png";
import seoImg from "../../../public/seo.png";
import conversionImg from "../../../public/conversion.png";
import { DotLottieReact  } from "@lottiefiles/dotlottie-react";

export default function SystemSection() {
  const articles = [
    {
      title: "Visibilité",
      subtitle : "SEO & Performance Technique",
      promise : "Attirer un trafic qualifié et durable.",
      description : "Je conçois des sites avec une structure optimisée, un balisage propre et une architecture technique solide.",
      image : seoImg,
      anim: "visibility.json",
      className: "max-w-50 max-h-50"
    },
    {
      title: "Conversion",
      subtitle : "UX & Copywriting stratégique",
      promise : "Transformer vos visiteurs en opportunités.",
      description : "Chaque page est structurée pour clarifier votre valeur, lever les objections et guider l'utilisateur vers l'action.",
      image : conversionImg,
      anim: "opportunity.json",
      className: "max-w-50 max-h-50"
    },
    {
      title: "Mesure",
      subtitle : "Tracking & analyse",
      promise : "Prendre de meilleures décisions.",
      description : "Un suivi complet des conversions, des comportements et du trafic pour comprendre ce qui fonctionne vraiment.",
      image : mesureImg,
      anim: "tracking.json",
      className: "max-w-60 max-h-50"
    }
  ] 

    return (
        <section id="systeme" className="systeme_section lg:h-[800px] flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl mb-3">3 piliers pour créer une <span className="font-semibold gradient-text">machine à acquisition</span> durable.</h2>
                        <p className="text-sm">Un site n'est utile que s'il génère de la visibilité, des opportunités et des décisions basées sur la donnée.</p>
                        <p className="text-sm">C'est exactement ce que ce système apporte.</p>
                    </div>
        
                    <div className="flex flex-col md:flex-row justify-around mb-10 gap-4 md:gap-2 lg:gap-6 items-center">
                        {articles.map((article) => (
                          <article key={article.title} id="article" className="max-w-[400px] h-[350px] p-2 text-center flex flex-col justify-between items-center rounded-2xl border-t border-blue-300">
                              <div>
                                  <p className="italic text-sm text-blue-300 pb-1 mb-2 border-b border-blue-300">{article.subtitle}</p>
                                  <h3 className="font-semibold text-2xl">{article.title}</h3>
                                  <p>{article.promise}</p>
                              </div>
                              <div>
                                <DotLottieReact
                                  autoplay
                                  loop
                                  src={`/animations/${article.anim}`}
                                  className={`${article.className}`}
                                />
                              </div>
                              <div>
                                  <p className="text-sm lg:px-5">{article.description}</p>
                              </div>
                            
                          </article>
                        ))}
                    </div>
                    <div className="text-start lg:text-center">
                      <p>
                        <span className="font-semibold">Pourquoi ça marche ? </span>Parce qu'un site performant repose toujours sur les mêmes fondations : visibilité, conversion et analyse.
                      </p> 
                      <p>On ne peut améliorer ce qu'on ne peut tracker, et c'est en combinant ces trois piliers, que vous obtenez une infrastructure de croissance.</p>
                    </div>
        </section>
    )
}