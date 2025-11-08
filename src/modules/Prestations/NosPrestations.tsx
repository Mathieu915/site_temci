import React, { FC } from "react"
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
import Prestation from "../../components/Prestation";
import Localisation from "../../components/Localisation";
import atlantic from "../../assets/img/atlantic.png"
import daikin from "../../assets/img/daikin.png"
import dantherm from "../../assets/img/dantherm.png"
import hitachi from "../../assets/img/hitachi.png"
import mitsu from "../../assets/img/mitsu.png"
import stiebel from "../../assets/img/Stiebel.png"
import vim from "../../assets/img/VIM.png"
import Autoswiper from "../../components/Autoswiper";
import HeaderGenerique from "../../components/HeaderGenerique";





const NosPrestations: FC = () => {

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
            <HeaderGenerique titre={"Nos prestations"} sousTitre={"Phrase d'accroche pour la page nos prestations"} image={fond}/>
            <div className="md:pt-24">
                {presta3.map((presta, index) => (
                    <Prestation
                        key={index}
                        titre={presta.titre}
                        sousTitre={presta.sousTitre}
                        texte={presta.texte}
                        imageUrl={presta.imageUrl}
                        position={index % 2 === 0 ? 'ltr' : 'rtl'}
                    />
                ))}
            </div>
            <Localisation/>
            <Autoswiper
                titre={"Nous distribuons les marques suivantes : "}
                sousTitre={"« Matériel performant : pompes à chaleur air/eau, climatisation réversible air/air, ballon thermodynamique, pompes à chaleur eau/eau, VMC double-flux, déshumidificateur de piscine »"}
                images={[
                    atlantic,
                    daikin,
                    dantherm,
                    hitachi,
                    mitsu,
                    stiebel,
                    vim,
                    atlantic,
                    daikin,
                    dantherm,
                    hitachi,
                    mitsu,
                    stiebel,
                    vim
                ]}/>
            <Footer/>
        </>

    )
}

export default NosPrestations