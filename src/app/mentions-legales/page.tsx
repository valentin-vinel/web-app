import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MentionsLegales() {
    return (
        <main className="w-full m-auto border-dashed border-l border-r p-2 lg:p-4 border-x-slate-300">
            <Header></Header>
            <h2 className="text-2xl text-center mb-8">Mentions légales</h2>
            <section className="max-w-[600px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Éditeur du site</h3>
                <ul className="list-disc pl-8">
                    <li>Valentin Vinel (micro-entrepreneur, SIRET 99171313200017)</li>
                    <li>Adresse : 111 rue des blanchisseurs, 84100 Orange.</li>
                    <li>Email : contact@valentin-vinel.fr</li>
                    <li>Tél : 0616771919</li>
                </ul>
                <p>La direction de la publication est également assurée par Valentin Vinel.</p>
            </section>
            <section className="max-w-[600px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Hébergement</h3>
                <ul className="list-disc pl-8">
                    <li>Le site est hébergé par Squarespace, Inc.</li>
                    <li>Adresse : 225 Varick Street, 12th Floor, New York, NY 10014, USA</li>
                    <li>Site : <Link href="https://www.squarespace.com">https://www.squarespace.com</Link></li>
                </ul>
                <p>Le domaine est enregistré via Google Domains (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA).</p>
            </section>
            <section className="max-w-[600px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Propriété intellectuelle</h3>
                <p>Tout le contenu du site (textes, images, logos, vidéos, etc.) est protégé. Toute reproduction est interdite sans autorisation écrite.</p>
            </section>
            <section className="max-w-[600px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Responsabilité</h3>
                <p>L'éditeur ne peut être tenu responsable des interruptions, erreurs ou liens vers d'autres sites.</p>
            </section>
            <section className="max-w-[600px] flex flex-col justify-center  mb-8 mx-auto">
                <h3 className="text-xl font-normal mb-2">Données personnelles et cookies</h3>
                <p>Conformément à la loi n°78-17 du 6 janvier 1978 et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
                <p className="mb-2">Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : contact@valentin-vinel.fr</p>
                <p>Le site utilise des cookies et Google Analytics pour mesurer l'audience et améliorer l'expérience utilisateur. Vous pouvez accepter ou refuser les cookies via notre gestionnaire de consentement. Les cookies sont conservés au maximum 13 mois.</p>
            </section>

            <Footer />
        </main>
    )
}