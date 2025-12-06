export default function ProcessusSection() {
    return (
        <section id="process" className="text-center flex flex-col justify-center items-center mb-[100px]">
          <h3 className="font-bold text-3xl mb-2">Process complet : de l'audit à l'optimisation continue.</h3>
          <p className="mb-8">Chaque projet suit un processus clair et structuré, pour vous garantir un site optimisé, mesurable et orienté conversion.</p>
          <ol className="text-start custom-counter my-4 flex flex-col gap-10">
            <li className="border-b pb-1 border-gray-300">
                <h4 className="text-5xl font-bold mb-2">Audit et analyse</h4>
                <p>Comprendre vos besoins, analyser votre site actuel et vos objectifs.</p>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-5xl font-bold mb-2">Stratégie et conception</h4>
              <p>Définir la structure, l'UX, le parcours utilisateur et les optimisations SEO nécessaires.</p>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-5xl font-bold mb-2">Développement et optimisation</h4>
              <p>Création ou refonte du site, mise en place du tracking et des performances techniques.</p>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-5xl font-bold mb-2">Test et validation</h4>
              <p>Vérification de la vitesse, du responsive, de la conversion et de la fiabilité du site.</p>
            </li>
            <li className="border-b pb-1 border-gray-300">
              <h4 className="text-5xl font-bold mb-2">Suivi et amélioration</h4>
              <p>Ajustements basés sur les données et suivi de vos indicateurs clés.</p>
            </li>
          </ol>
        </section>
    )
}