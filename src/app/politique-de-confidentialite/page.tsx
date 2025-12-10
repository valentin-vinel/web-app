import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PolitiqueDeConfidentialite() {
    return (
        <main className="max-w-[1210px] m-auto border-dashed border-l border-r p-2 lg:p-4 border-x-slate-300">
            <Header></Header>
            <h2 className="text-2xl text-center mb-4">Politique de confidentialité</h2>
            <p className="max-w-[700px] m-auto">Dernière mise à jour : 10/12/2025</p>
            <p className="max-w-[700px] m-auto mb-8">Cette politique de confidentialité explique comment le site collecte, utilise et protège vos données personnelles lorsque vous l'utilisez.</p>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Responsable du traitement</h3>
                <ul>
                    <li>Nom / Prénom : Valentin Vinel</li>
                    <li>Statut : Auto-entrepreneur</li>
                    <li>Email : contact@valentin-vinel.fr</li>
                </ul>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Données collectées</h3>
                <ul className="list-disc pl-8">
                    <li>Données fournies par l'utilisateur : nom, prénom, email via formulaire de contact.</li>
                    <li>Données de navigation : adresse IP, pages visitées, temps de consultation.</li>
                    <li>Cookies et outils analytiques : Google Analytics.</li>
                </ul>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Finalités de la collecte</h3>
                <p>Les données collectées sont utilisées uniquement pour :</p>
                <ul className="list-disc pl-8">
                    <li>Répondre à vos demandes via le formulaire de contact ou email</li>
                    <li>Fournir nos services</li>
                    <li>Établir des devis et factures</li>
                    <li>Améliorer la navigation et analyser l'audience</li>
                </ul>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Base légale du traitement</h3>
                <p>Le traitement des données personnelles repose sur :</p>
                <ul className="list-disc pl-8">
                    <li>Votre consentement (newsletter, cookies non essentiels)</li>
                    <li>L'exécution d'un contrat ou de mesures précontractuelles (devis, prestation)</li>
                    <li>Le respect d'obligations légales (comptabilité, facturation)</li>
                </ul>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Partage des données</h3>
                <p>Vos données ne sont jamais vendues à des tiers.</p>
                <p>Elles peuvent être partagées uniquement avec Squarespace et Google.</p>
                <p>Respect du RGPD pour tout transfert hors UE</p>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Durée de conservation</h3>
                <ul className="list-disc pl-8">
                    <li>Données clients/prospects : jusqu'à 3 ans après le dernier contact</li>
                    <li>Documents comptables et fiscaux : 10 ans (obligations légales)</li>
                    <li>Cookies et données de navigation : jusqu'à 13 mois maximum</li>
                </ul>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Vos droits</h3>
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), l'utilisateur du site dispose d'un droit d'accès, de rectification et de suppression des données le concernant. Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : contact@valentin-vinel.fr</p>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Sécurité des données</h3>
                <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données contre la perte, l'accès non autorisé ou la modification.</p>
            </section>
            <section className="max-w-[700px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Cookies et suivi</h3>
                <p>Le site utilise des cookies pour :</p>
                <ul className="list-disc pl-8">
                    <li>Fonctionnement du site (cookies nécessaires)</li>
                    <li>Analyse d'audience via Google Analytics</li>
                    <li>Préférences utilisateur (cookies fonctionnels)</li>
                </ul>
                <p>Vous pouvez accepter ou refuser ces cookies via notre bandeau de consentement et gérer vos préférences dans votre navigateur.</p>
            </section>

            <Footer />
        </main>
    )
}