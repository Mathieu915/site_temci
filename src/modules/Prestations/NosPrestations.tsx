import React, { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Localisation from "../../components/Localisation";
import Autoswiper from "../../components/Autoswiper";
import HeaderGenerique from "../../components/HeaderGenerique";
import ContactBanner from "../../components/ContactBanner";
import Prestation from "../../components/Prestation";
import PrestationVideo from "../../components/PrestationVideo";

import atlantic from "../../assets/img/atlantic.png";
import daikin from "../../assets/img/daikin.png";
import dantherm from "../../assets/img/dantherm.png";
import hitachi from "../../assets/img/hitachi.png";
import mitsu from "../../assets/img/mitsu.png";
import stiebel from "../../assets/img/Stiebel.png";
import vim from "../../assets/img/VIM.png";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import video from "../../assets/videos/video.mp4";

const NosPrestations: FC = () => {
    const location = useLocation();
    const localisationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.state?.scrollTo === "localisation" && localisationRef.current) {
            const y =
                localisationRef.current.getBoundingClientRect().top +
                window.pageYOffset -
                100;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
    }, [location]);

    const presta3 = [
        {
            titre: "Installation",
            sousTitre: "Votre confort, notre priorité toute l'année",
            texte: "Installation professionnelle de climatisation réversible et de pompe à chaleur. Nos experts interviennent pour concevoir, installer et régler votre climatisation et pompe à chaleur afin de garantir les performances énergétiques, un confort durable et des économies sur vos factures.",
            imageUrl: deshumificateur,
            titreModale:"Installation",
            soustitreModale:"« Une installation sur mesure pour un confort optimal »",
            texteModale:"Les installations TEMCI sont réalisées par le personnel de l’entreprise. Nos techniciens possèdent les diplômes et l'expérience nécessaire à la pose dans les règles de l’art du matériel de climatisation et de pompe à chaleur. Notre personnel intervenant possède les habilitations de manipulation des fluides frigorigènes et les habilitations électriques requises pour mener à bien tout projet de A à Z de sorte que les réglages, les essais, la mise en service et la réception des travaux sont réalisés par nos soins.",
        },
        {
            titre: "Entretien",
            sousTitre: "Préservez votre confort et évitez les pannes coûteuses",
            texte: "Un entretien régulier est essentiel pour maintenir votre climatisation ou pompe à chaleur en parfait état de fonctionnement. Nous, Société TEMCI, à Morigny-Champigny, proposons un service d’entretien complet qui garantit une performance optimale, prolonge la durée de vie de votre équipement et vous fait réaliser des économies d’énergie.",
            imageUrl: deshumificateur,
            titreModale:"Entretien",
            soustitreModale:"« Un entretien régulier pour des performances durables »",
            texteModale:"La maintenance des installations est essentielle pour assurer la longévité et garantir le maintien des performances du matériel installé. La maintenance concourt aussi à la qualité de votre environnement intérieur. Les climatisations et pompes à chaleur sont des matériels complexes, où l’électronique, l’électricité, la thermodynamique sont à l’œuvre ; seul un personnel bien formé et expérimenté peut mener à bien les opérations de maintenance et détecter lors des visites préventives des dysfonctionnements potentiellement préjudiciables à terme. Dans la lutte contre le réchauffement climatique, le contrôle d’étanchéité des circuits frigorifiques est obligatoire à partir d’une certaine quantité, selon le fluide utilisé. Nos techniciens de maintenance sont parfaitement équipés et formés pour ces contrôles, et sont à même de délivrer un document CERFA attestant de l’étanchéité des installations.",
        },
        {
            titre: "Dépannage",
            sousTitre: "Retrouvez votre confort en un temps record",
            texte: "Une panne de climatisation ou de pompe à chaleur ? Pas de panique ! Nous sommes là, la société TEMCI, intervient rapidement pour diagnostiquer et réparer votre installation. Grâce à notre expertise multi-marques, nous rétablissons votre confort et vous conseillons pour éviter toute récidive.",
            imageUrl: deshumificateur,
            titreModale:"Dépannage",
            soustitreModale:"« Un dépannage rapide pour retrouver votre confort sans attendre »",
            texteModale:"Notre service après-vente concerne le dépannage des installations réalisées par la société TEMCI, qu’il y ait un contrat de maintenance en place ou pas. Les techniciens de la société TEMCI peuvent également intervenir sur des climatisations ou pompes à chaleur installées par un confrère, sous réserve que la période de garantie soit échue et qu’il n’y ait pas de conflit en cours avec l’installateur initial.",

        }

    ];

    return (
        <>
            <Navbar />
            <HeaderGenerique
                titre="Nos prestations"
                sousTitre="Explorez nos presations et trouvez la solution qui vous correspond"
                image={deshumificateur}
            />

            <div className="md:pt-24">
                {presta3.map((presta, index) => (
                    <Prestation
                        key={index}
                        titre={presta.titre}
                        sousTitre={presta.sousTitre}
                        texte={presta.texte}
                        imageUrl={presta.imageUrl}
                        position={index % 2 === 0 ? "ltr" : "rtl"}
                        titreModale={presta.titreModale}
                        soustitreModale={presta.soustitreModale}
                        texteModale={presta.texteModale}
                    />
                ))}
            </div>

            <Localisation ref={localisationRef} />

            <Autoswiper
                titre="Nous distribuons les marques suivantes : "
                sousTitre="« Matériel performant : pompes à chaleur air/eau, climatisation réversible air/air, ballon thermodynamique, VMC double-flux, déshumidificateur de piscine »"
                images={[
                    atlantic,
                    daikin,
                    dantherm,
                    hitachi,
                    mitsu,
                    stiebel,
                    vim,
                ]}
            />

            <ContactBanner
                titre="Contactez nous"
                texte="Une question ? Une demande de devis ? N'hésitez pas à nous contacter !"
                imageUrl={deshumificateur}
            />

            <PrestationVideo
                titre="Le titre associé à la démonstration vidéo"
                sousTitre="Le sous-titre associé à la démonstration vidéo"
                texte="Lorem ipsum dolor sit amet consectetur adipiscing elit mauris..."
                videoUrl={video}
                position="ltr"
            />

            <Footer />
        </>
    );
};

export default NosPrestations;
