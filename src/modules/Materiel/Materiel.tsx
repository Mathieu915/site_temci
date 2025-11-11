import React, { FC } from "react"
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/manutention.jpg";
import pacAirEau from "../../assets/img/pac-air-eau.jpg";
import pacEauEau from "../../assets/img/pac-eau-eau.jpg";
import plancherChauffant from "../../assets/img/plancher-chauffant.jpg";
import climPrecision from "../../assets/img/clim-precision.jpg";
import centraleDoubleFlux from "../../assets/img/centrale-double-flux.jpg";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import vrv from "../../assets/img/vrv.jpg";
import Prestation from "../../components/Prestation";
import HeaderGenerique from "../../components/HeaderGenerique";
import PrestationMultiImage from "../../components/PrestationMultiImage";
import ContactBanner from "../../components/ContactBanner";




const Materiel: FC = () => {

    const presta1 = [
        {
            titre: "Pompe à chaleur air/eau",
            sousTitre: "Une solution écologique, performante et adaptée à votre habitation",
            texte: "La pompe à chaleur air/eau capte les calories présentes dans l’air extérieur pour chauffer efficacement votre logement et produire votre eau chaude sanitaire, si besoin. Notre société TEMCI installe des pompes à chaleur air/eau fiables, économiques et respectueuses de l’environnement. Profitez d’un confort optimal en hiver tout en réduisant significativement vos factures d’énergie.",
            imageUrl: pacAirEau,
            titreModale: "Pompe à chaleur air-eau",
            titre2Modale: "Chauffage économique et performant pour votre maison",
            soustitreModale: "Une solution fiable, durable et respectueuse de l’environnement.",
            texteModale: "La pompe à chaleur (PAC) air-eau transforme l’air extérieur en énergie pour chauffer votre logement et produire votre eau chaude sanitaire. Notre société TEMCI, spécialiste dans ce domaine, sélectionne des modèles haut rendement et assure une installation professionnelle conforme aux normes RGE, vous garantissant confort et économies sur le long terme.",
            titreListeModale: "Les avantages d’installer une pompe à chaleur air/eau :",
            listeModale: [
                "Économisez sur vos factures d’énergie",
                "Chauffage écologique avec une réduction significative des émissions de CO₂",
                "Production d’eau chaude sanitaire possible",
                "Compatible avec plancher chauffant ou radiateurs basse température",
                "Équipement de grandes marques",
                "Installation certifiée RGE",
                "Éligible aux aides financières (MaPrimeRénov, CEE, TVA réduite sous conditions)"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite et l’installation de votre pompe à chaleur air/eau sur mesure."
        },
        {
            titre: "Climatisation réversible",
            sousTitre: "Une solution moderne et performante pour un confort toute l’année",
            texte: "La climatisation réversible est la solution idéale pour un confort 4 saisons. Grâce à son rendement élevé et à sa technologie moderne, vous profitez d’une fraîcheur agréable en été et d’une chaleur douce en hiver, tout en réalisant des économies d’énergie.",
            imageUrl: vrv,
            titreModale: "Climatisation réversible",
            titre2Modale: "Fraîcheur en été, chaleur douce en hiver",
            soustitreModale: "Une solution moderne, économique et adaptée à votre espace.",
            texteModale: "Vous souhaitez réguler la température de votre logement ou de vos locaux professionnels en toute saison ? Notre société TEMCI installe des climatisations réversibles fiables, silencieuses et à haut rendement énergétique. Profitez d’un confort optimal tout en réduisant votre consommation d’énergie et vos factures.",
            titreListeModale: "Les avantages d’installer une climatisation air/air :",
            listeModale: [
                "Climatisation réversible : une seule installation pour chauffer et rafraîchir",
                "Équipements silencieux et discrets : confort garanti au quotidien",
                "Performance énergétique élevée : consommation réduite et facture allégée",
                "Large choix d’unités intérieures : murales, gainables, consoles, cassettes",
                "Installation certifiée RGE : qualité et conformité assurées",
                "Entretien et dépannage assurés par nos soins : un service complet et durable"
            ],
            footerModale: "Contactez-nous dès maintenant pour un devis gratuit pour l’installation d’une climatisation réversible sur mesure et profitez d’un confort thermique toute l’année."
        },
        {
            titre: "Pompe à chaleur eau/eau sur nappe phréatique",
            sousTitre: "La puissance de l’énergie souterraine au service de votre confort",
            texte: "La pompe à chaleur eau/eau exploite la chaleur contenue dans la nappe phréatique pour alimenter votre chauffage et votre eau chaude sanitaire. Ce système géothermique haut rendement offre une performance exceptionnelle, une consommation réduite et un confort constant, été comme hiver.",
            imageUrl: pacEauEau,
            titreModale: "Pompe à chaleur eau/eau",
            titre2Modale: "L’énergie souterraine au service de votre confort",
            soustitreModale: "Chauffage performant grâce à la nappe phréatique.",
            texteModale: "La pompe à chaleur eau/eau capte les calories présentes dans la nappe phréatique pour chauffer efficacement votre habitation et produire votre eau chaude sanitaire. Notre société TEMCI installe des PAC eau/eau haut rendement, vous offrant confort thermique, consommation réduite et respect de l’environnement.",
            titreListeModale: "Les avantages d’installer une pompe à chaleur eau/eau :",
            listeModale: [
                "Performance énergétique exceptionnelle : rendement stable toute l’année",
                "Économies d’énergie importantes",
                "Chauffage et eau chaude sanitaire avec une seule installation",
                "Solution durable et écologique : énergie renouvelable issue du sous-sol",
                "Matériel de grandes marques et installation certifiée RGE",
                "Éligible aux aides financières (MaPrimeRénov, CEE, TVA réduite sous conditions)",
                "Confort constant même en hiver rigoureux",
                "Entretien et dépannage assurés par nos soins : un service complet et durable"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite et de faisabilité pour l’installation de votre pompe à chaleur eau/eau sur mesure."
        },
        {
            titre: "Ballon thermodynamique",
            sousTitre: "Eau chaude économique et écologique",
            texte: "Le ballon thermodynamique capte les calories présentes dans l’air pour chauffer votre eau sanitaire de façon économique et durable. Cette solution écologique réduit votre facture d’énergie tout en garantissant un confort quotidien.",
            imageUrl: fond,
            titreModale: "Ballon thermodynamique",
            titre2Modale: "Produisez votre eau chaude en économisant l’énergie",
            soustitreModale: "Une solution écologique, économique et fiable pour l’eau chaude sanitaire.",
            texteModale: "Le ballon thermodynamique utilise les calories présentes dans l’air pour chauffer l’eau sanitaire. Notre société TEMCI installe des ballons thermodynamiques performants et durables, parfaitement adaptés aux maisons individuelles comme aux locaux professionnels. Grâce à cette technologie, vous bénéficiez d’une eau chaude en continu tout en réduisant votre consommation d’énergie.",
            titreListeModale: "Les avantages d’installer un ballon thermodynamique :",
            listeModale: [
                "Économie sur la production d’eau chaude sanitaire",
                "Solution écologique : réduction des émissions de CO₂",
                "Confort optimal : eau chaude disponible toute l’année",
                "Installation simple et adaptable à la plupart des habitations",
                "Éligible aux aides financières (selon conditions)",
                "Entretien facile et longue durée de vie"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite et découvrez comment un ballon thermodynamique peut réduire vos factures d’énergie."
        },
        {
            titre: "Plancher chauffant",
            sousTitre: "Le confort absolu, sans radiateurs visibles",
            texte: "Offrez à votre intérieur une chaleur douce et uniforme grâce au plancher chauffant. Économique, discret et performant, ce système s’intègre parfaitement à toutes les pièces et améliore votre confort thermique tout en réduisant vos factures d’énergie.",
            imageUrl: plancherChauffant,
            titreModale: "Plancher chauffant",
            titre2Modale: "Confort invisible et chaleur douce dans toute la maison",
            soustitreModale: "Une solution de chauffage moderne, économique et parfaitement intégrée.",
            texteModale: "Le plancher chauffant diffuse une chaleur homogène par rayonnement, du sol jusqu’au plafond. Fini les radiateurs encombrants : ce système invisible apporte un confort optimal tout en réduisant votre consommation énergétique. Notre société TEMCI vous accompagne dans la mise en place d’un plancher chauffant hydraulique adapté à votre logement neuf ou en rénovation.",
            titreListeModale: "Les avantages d’installer un plancher chauffant :",
            listeModale: [
                "Chaleur douce et homogène dans toutes les pièces",
                "Gain d’espace et esthétique : plus besoin de radiateurs visibles",
                "Économie d’énergie par rapport aux systèmes classiques",
                "Compatible avec les pompes à chaleur et chaudières à basse température",
                "Confort sanitaire optimal : pas de déplacement de poussière, idéal pour les allergies",
                "Régulation précise pièce par pièce pour une température sur mesure"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite de votre projet de plancher chauffant et profitez d’un confort exceptionnel tout l’hiver."
        }
    ];


    const presta2 = [
        {
            titre: "Climatisation de précision",
            sousTitre: "Stabilité et fiabilité 24h/24",
            texte: "La climatisation de précision est conçue pour garantir une régulation fine de la température, de l’hygrométrie et du débit d’air. Idéale pour les salles informatiques, laboratoires, centres de données et environnements techniques, elle offre une fiabilité continue et une consommation énergétique optimisée.",
            imageUrl: climPrecision,
            titreModale: "Climatisation de précision",
            titre2Modale: "Contrôle optimal de la température et de l’humidité",
            soustitreModale: "Une solution idéale pour les environnements techniques et sensibles.",
            texteModale: "La climatisation de précision est conçue pour assurer un contrôle rigoureux de la température, de l’humidité et du débit d’air, 24h/24 et 7j/7. Notre société TEMCI installe des systèmes hautes performances spécialement adaptés aux salles informatiques, laboratoires, centres de données et tout environnement nécessitant une régulation fine et continue.",
            titreListeModale: "Les avantages d’installer une climatisation de précision :",
            listeModale: [
                "Régulation au degré près : température et hygrométrie stables",
                "Fiabilité 24h/24 et 7j/7 : fonctionnement en continu sans interruption",
                "Préservation des équipements sensibles : serveurs, instruments de mesure, systèmes électroniques",
                "Performance énergétique optimisée : réduction de la consommation électrique",
                "Matériel de grandes marques et installation certifiée RGE",
                "Entretien et dépannage assurés par nos soins : un service complet et durable"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite et l’installation de votre climatisation de précision parfaitement adaptée à vos besoins."
        },
        {
            titre: "Déshumidificateur de piscine",
            sousTitre: "Protégez votre local et respirez un air sain",
            texte: "Évitez la condensation, la corrosion et les moisissures grâce à un déshumidificateur de piscine performant et silencieux. Idéal pour les piscines intérieures, spas et espaces bien-être, il assure un confort durable et un air sain en toutes circonstances.",
            imageUrl: deshumificateur,
            titreModale: "Déshumidificateur de piscine",
            titre2Modale: "Confort et protection durables",
            soustitreModale: "Éliminez l’excès d’humidité, évitez la condensation et préservez votre confort.",
            texteModale: "L’air chaud et humide d’un local piscine entraîne de la condensation, de la corrosion et de mauvaises odeurs. Un déshumidificateur de piscine performant régule efficacement le taux d’humidité, protège vos installations et garantit un air sain. Notre société TEMCI vous accompagne dans la mise en place d’un déshumidificateur pour piscines intérieures résidentielles ou espaces bien-être.",
            titreListeModale: "Les avantages d’installer un déshumidificateur de piscine :",
            listeModale: [
                "Air sain et confortable pour les baigneurs",
                "Aucune condensation sur les baies vitrées et les plafonds",
                "Protection durable des structures et équipements",
                "Économies d’énergie grâce à des systèmes performants",
                "Valorisation de votre bien immobilier"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite de votre projet et l’installation d’un déshumidificateur de piscine."
        },
        {
            titre: "Centrale double-flux",
            sousTitre: "Ventilation performante et économies d’énergie",
            texte: "Améliorez le confort de votre maison ou de vos locaux avec une centrale de ventilation double flux. Ce système récupère la chaleur de l’air extrait, filtre l’air entrant et réduit considérablement les déperditions thermiques. Un air sain, une température maîtrisée et des économies d’énergie garanties.",
            imageUrl: centraleDoubleFlux,
            titreModale: "Centrale double-flux",
            titre2Modale: "Respirez un air pur tout en réduisant vos factures",
            soustitreModale: "Une ventilation efficace et économique pour tous vos espaces.",
            texteModale: "Vous cherchez une solution efficace pour ventiler votre logement ou vos locaux professionnels sans gaspiller de chaleur ? La centrale de ventilation double-flux est la réponse idéale : elle renouvelle l’air intérieur tout en récupérant la chaleur de l’air extrait, vous offrant confort, économies et qualité de l’air irréprochable. Notre société TEMCI vous accompagne dans la mise en place d’une centrale double-flux fiable et durable.",
            titreListeModale: "Les avantages d’installer une centrale double-flux :",
            listeModale: [
                "Qualité d’air optimale : filtres performants éliminant poussières, pollens et particules fines",
                "Économies d’énergie importantes : récupération de chaleur intégrée",
                "Confort thermique toute l’année : température homogène et agréable dans toutes les pièces"
            ],
            footerModale: "Contactez-nous dès aujourd’hui pour une étude gratuite et l’installation d’une centrale double-flux."
        }
    ];


    const images = [
        { url: deshumificateur, titre: "Cassette", texte: "Diffuse l’air de manière homogène, particulièrement adaptée aux grands volumes ou espaces professionnels" },
        { url: deshumificateur, titre: "Murale", texte: "Compacte et facile à installer, idéale pour les pièces de vie et chambres" },
        { url: deshumificateur, titre: "Gainable", texte: "Totalement invisible, intégrée dans les plafonds ou cloisons pour un rendu discret" },
        { url: deshumificateur, titre: "Console", texte: "S’installe en bas de mur, parfaite en remplacement d’un radiateur" },
    ];


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Matériel"} sousTitre={"Phrase d'accroche pour la page matériel"} image={fond}/>
            <div className="md:pt-24">
                {presta1.map((presta, index) => (
                    <Prestation
                        key={index}
                        titre={presta.titre}
                        sousTitre={presta.sousTitre}
                        texte={presta.texte}
                        imageUrl={presta.imageUrl}
                        position={index % 2 === 0 ? "ltr" : "rtl"}
                        titreModale={presta.titreModale}
                        titre2Modale={presta.titre2Modale}
                        soustitreModale={presta.soustitreModale}
                        texteModale={presta.texteModale}
                        titreListeModale={presta.titreListeModale}
                        listeModale={presta.listeModale}
                        footerModale={presta.footerModale}
                    />

                ))}
                <PrestationMultiImage
                    titre={'Unités intérieures pour climatisation et pompes à chaleur'}
                    sousTitre={'Des solutions adaptées à chaque espace'}
                    texte={'Chaque logement ou local professionnel a ses spécificités. Notre société TEMCI vous propose une gamme complète d’unités intérieures pour climatisations et pompes à chaleur. Discrètes, performantes et silencieuses, elle s’intègrent parfaitement à votre intérieur tout en garantissant une diffusion homogène de chaleur ou de la fraîcheur.'}
                    images={images}
                    position={'rtl'}
                    titreModale={'Unités intérieures pour climatisation pompes à chaleur'}
                    soustitreModale={'Confort, performance et design'}
                    texteModale={'Les unités intérieures assurent la diffusion efficace de l’air chaud ou froid produit par votre climatisation ou votre pompe à chaleur. Notre société TEMCI, vous propose un large choix d’unités adaptées à tous les espaces : murales, consoles, gainables ou cassettes. Silencieuses, performantes, et esthétiques, elles garantissent un confort optimal tout en s’intégrant harmonieusement dans votre intérieur.'}
                />
                {presta2.map((presta, index) => (
                    <Prestation
                        key={index}
                        titre={presta.titre}
                        sousTitre={presta.sousTitre}
                        texte={presta.texte}
                        imageUrl={presta.imageUrl}
                        position={index % 2 === 0 ? "ltr" : "rtl"}
                        titreModale={presta.titreModale}
                        titre2Modale={presta.titre2Modale}
                        soustitreModale={presta.soustitreModale}
                        texteModale={presta.texteModale}
                        titreListeModale={presta.titreListeModale}
                        listeModale={presta.listeModale}
                        footerModale={presta.footerModale}
                    />

                ))}
                <ContactBanner titre={'Contactez nous'} texte={'Une question ? Une demande de devis ? N\'hésitez pas à nous contacter ! '} imageUrl={deshumificateur}/>
            </div>
            <Footer/>
        </>

    )
}

export default Materiel