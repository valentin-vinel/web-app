'use client'

import Image from "next/image";
import zombielandImg from "../../../public/zombieland.png"
import dawaImg from "../../../public/dawa.png"
import bpImg from "../../../public/bp.png"
import { useState } from "react";

export default function ProjetsSection() {
    const projets = [
        {
            name: "Zombiland",
            description: "Projet fictif réalisé en formation. Parc d'attraction post-apocalyptique.",
            img: zombielandImg,
            tags: ["Projet formation", "Full Stack", "API", "Intégration", "Design"]
        },
        {
            name: "Dawa Création",
            description: "Projet client réalisé avec CMS. Boutique en ligne, bijoux et accessoires en nacre.",
            img: dawaImg,
            tags: ["Projet client", "CMS", "Design"]
        },
        {
            name: "Bernard Pradier - Millesimes 1988 à 2010",
            description: "Projet client réalisé avec API Shopify. Boutique en ligne, histoire et millésimes de B.Pradier.",
            img: bpImg,
            tags: ["Projet client", "Full Stack", "API Shopify", "Intégration"]
        }
    ]

    const [index, setIndex] = useState(0);
    const next = () => setIndex((prev) => (prev + 1) % projets.length);
    const prev = () => setIndex((prev) => (prev - 1 + projets.length) % projets.length);
    
    return (
        <section id="projets" className="flex flex-col justify-center lg:h-[800px]">
            <h2 className="text-2xl md:text-3xl mb-3">
            Un apperçu de <span className="font-semibold gradient-text">mes réalisations.</span>
            </h2>

            {/* Conteneur du carrousel */}
            <div className="relative w-full max-w-[1200px] overflow-hidden">

                {/* Slides */}
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {projets.map((projet) => (
                        <div key={projet.name} className="min-w-full flex flex-col md:flex-row justify-center items-center relative h-fit">
                            <Image
                                src={projet.img}
                                alt="Image du projet"
                                className="rounded-tr-xl rounded-tl-xl md:rounded-xl md:w-[90%]"
                            />

                            <div className="md:absolute md:bottom-5 w-full md:w-[90%] px-6 py-2 text-white flex flex-col gap-4 bg-black/50  md:bg-black/20 rounded-br-xl rounded-bl-xl md:rounded-none">
                                <div>
                                    <h4 className="text-xl lg:text-2xl font-semibold">{projet.name}</h4>
                                    <p className="text-sm">{projet.description}</p>
                                </div>

                                <div className="flex flex-wrap justify-end gap-2 lg:gap-4">
                                    {projet.tags.map((tag) => (
                                        <p key={tag} className="text-sm px-2 border border-white rounded">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    {/* Bouton gauche */}
                    <button
                        type="button"
                        onClick={prev}
                        className="md:absolute top-1/2 left-0 -translate-y-1/2 bg-black/20 text-white w-1/2 md:w-10 h-10 rounded-full hover:bg-black/60 transition pr-1 hover:cursor-pointer"
                    >
                        ◀
                    </button>

                    {/* Bouton droit */}
                    <button
                        type="button"
                        onClick={next}
                        className="md:absolute top-1/2 right-0 -translate-y-1/2 bg-black/20 text-white w-1/2 md:w-10 h-10 rounded-full hover:bg-black/60 transition pl-1 hover:cursor-pointer"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </section>
    )
}