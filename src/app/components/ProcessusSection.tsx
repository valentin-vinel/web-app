export default function ProcessusSection() {
    return (
        <section id="process" className="lg:h-[800px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl mb-3">Process complet : <span className="font-semibold gradient-text">de l'audit à l'optimisation continue.</span></h2>
          <p className="text-sm mb-8">Chaque projet suit un processus clair et structuré, pour vous garantir un site optimisé, mesurable et orienté conversion.</p>
          <ol className="text-start custom-counter my-4 flex flex-col gap-10 pl-20 lg:pl-30 process-list">
            <li className="border-b pb-1 border-gray-300 relative">
                <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Audit et analyse</h4>
                <p className="text-sm md:text-base">Comprendre vos besoins, analyser votre site actuel et vos objectifs.</p>
                <div className="absolute bottom-0 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
                  <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep"></span>
                </div>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Stratégie et conception</h4>
              <p className="text-sm md:text-base">Définir la structure, l'UX, le parcours utilisateur et les optimisations SEO nécessaires.</p>
              <div className="absolute bottom-0 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep "></span>
              </div>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Développement et optimisation</h4>
              <p className="text-sm md:text-base">Création ou refonte du site, mise en place du tracking et des performances techniques.</p>
              <div className="absolute bottom-0 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep"></span>
              </div>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Test et validation</h4>
              <p className="text-sm md:text-base">Vérification de la vitesse, du responsive, de la conversion et de la fiabilité du site.</p>
              <div className="absolute bottom-0 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep"></span>
              </div>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Suivi et amélioration</h4>
              <p className="text-sm md:text-base">Ajustements basés sur les données et suivi de vos indicateurs clés.</p>
              <div className="absolute bottom-0 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep"></span>
              </div>
            </li>
          </ol>
        </section>
    )
}