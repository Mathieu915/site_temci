import React, { FC } from "react"
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
import Prestation from "../../components/Prestation";




const Materiel: FC = () => {

    const presta1 = [
        {
            titre: "Pompe à chaleur air/eau",
            sousTitre: "Une solution écologique, performante et adaptée à votre habitation",
            texte: "La pompe à chaleur air/eau capte les calories présentes dans l’air extérieur pour chauffer efficacement votre logement et produire votre eau chaude sanitaire, si besoin. Notre Société TEMCI, installe des pompes à chaleur air/eau fiables, économiques et respectueuses de l’environnement. Profitez d’un confort optimal en hiver tout en réduisant significativement vos factures d’énergie.",
            imageUrl: fond
        },
        {
            titre: "Climatisation réversible",
            sousTitre: "Une solution écologique, performante et adaptée à votre habitation",
            texte: "La climatisation réversible, c’est la solution idéale pour un confort 4 saisons. Grâce à un rendement élevé et une technologie moderne, vous profitez d’une fraîcheur agréable en été et d’une chaleur douce en hiver, tout en réalisant des économies d’énergie.",
            imageUrl: fond
        },
        {
            titre: "Pompe à chaleur eau-eau sur nappe phréatique",
            sousTitre: "La puissance de l’énergie souterraine au service de votre confort",
            texte: "La pompe à chaleur eau/eau exploite la chaleur contenue dans la nappe phréatique pour alimenter votre chauffage et votre eau chaude sanitaire. Ce système géothermique haut rendement offre une performance exceptionnelle, une consommation réduite et un confort constant, été comme hiver.",
            imageUrl: fond
        },
        {
            titre: "Plancher chauffant",
            sousTitre: "Le confort absolu, sans radiateurs visibles",
            texte: "Offrez à votre intérieur une chaleur douce et uniforme grâce au plancher chauffant. Economique, discret et performant, ce système s’intègre parfaitement à toutes les pièces et améliore votre confort thermique tout en réduisant vos factures d’énergie.",
            imageUrl: fond
        },
    ];

    const presta2 = [
        {
            titre: "Climatisation de précision",
            sousTitre: "Stabilité et fiabilité 24h/24",
            texte: "La climatisation de précision est conçue pour garantir une régulation fine de la température, de l’hygrométrie et du débit d’air. Idéale pour le salles informatiques, laboratoires, centres de données et environnements techniques, elle offre une fiabilité continue et une consommation énergétique optimisée.",
            imageUrl: fond
        },
        {
            titre: "Ballon thermodynamique",
            sousTitre: "Eau chaude économique et écologique",
            texte: "Le ballon thermodynamique capte les calories présentes dans l’air pour chauffer votre eau sanitaire de façon économique et durable. Cette solution écologique réduit votre facture d’énergie tout en garantissant un confort quotidien.",
            imageUrl: fond
        },
        {
            titre: "Déshumidificateur de piscine",
            sousTitre: "Protégez votre local et respirer un air sain",
            texte: "Déshumidificateur de piscine : protégez votre local et respirez un air sain. Evitez la condensation, la corrosion et les moisissures grâce à une solution performante et silencieuse. Idéal pour les piscines intérieures, spas et espaces bien-être.",
            imageUrl: fond
        },
        {
            titre: "Centrale double-flux",
            sousTitre: "Ventilation performante et économies d’énergie",
            texte: "Améliorez le confort de votre maison ou de vos locaux avec une centrale de ventilation double flux. Ce système récupère la chaleur de l’air extrait, filtre l’air entrant et réduit condisérablement les déperditions thermiques. Un air sain, une température maîtrisée et des économies sur votre facture énergétique.",
            imageUrl: fond
        }
    ];

    const presta3 = [
        {
            titre: "Installation",
            sousTitre: "Votre confort, notre priorité toute l'année",
            texte: "Installation professionnelle de climatisation réversible et de pompe à chaleur. Nos experts interviennent pour concevoir, installer et régler votre climatisation et pompe à chaleur afin de garantir les performances énergétiques, un confort durable et des économies sur vos factures.",
            imageUrl: fond
        },
        {
            titre: "Entretien",
            sousTitre: "Préservez votre confort et évitez les pannes coûteuses",
            texte: "Un entretien régulier est essentiel pour maintenir votre climatisation ou pompe à chaleur en parfait état de fonctionnement. Nous, Société TEMCI, à Morigny-Champigny, proposons un service d’entretien complet qui garantit une performance optimale, prolonge la durée de vie de votre équipement et vous fait réaliser des économies d’énergie.",
            imageUrl: fond
        },
        {
            titre: "Dépannage",
            sousTitre: "Retrouvez votre confort en un temps record",
            texte: "Une panne de climatisation ou de pompe à chaleur ? Pas de panique ! Nous sommes là, la société TEMCI, intervient rapidement pour diagnostiquer et réparer votre installation. Grâce à notre expertise multi-marques, nous rétablissons votre confort et vous conseillons pour éviter toute récidive.",
            imageUrl: fond
        }

    ];

    return (
        <>
            <Navbar/>
            <Services/>
            {presta1.map((presta, index) => (
                <Prestation
                    key={index}
                    titre={presta.titre}
                    sousTitre={presta.sousTitre}
                    texte={presta.texte}
                    imageUrl={presta.imageUrl}
                    position={index % 2 === 0 ? 'ltr' : 'rtl'}
                />
            ))}
            <Footer/>
        </>

    )
}

export default Materiel