import React, { FC } from "react"
import qualification from "../../assets/img/qualification.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderGenerique from "../../components/HeaderGenerique";
import ContactBanner from "../../components/ContactBanner";
import pacAirEau from "../../assets/img/pac-air-eau.jpg";
import pacEauEau from "../../assets/img/pac-eau-eau.jpg";
import plancherChauffant from "../../assets/img/plancher-chauffant.jpg";
import climPrecision from "../../assets/img/clim-precision.jpg";
import centraleDoubleFlux from "../../assets/img/centrale-double-flux.jpg";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import vrv from "../../assets/img/vrv.jpg";
import GalerieSwiper from "../../components/GalerieSwiper";
import fond from "../../assets/img/fond_eau_eau.jpg";
import vehicules from "../../assets/img/vehicules.png";


import air_air_1 from "../../assets/img/pac_air_air/PAC AIR AIR GE.jpg";
import air_air_2 from "../../assets/img/pac_air_air/PAC AIR AIR GE - .jpg";
import air_air_3 from "../../assets/img/pac_air_air/PAC AIR AIR GE - LONGJUMEAU (PHARMACIE DU THEATRE).jpg";
import air_air_4 from "../../assets/img/pac_air_air/PAC AIR AIR UI GE - ETAMPES (INTERCAVE).jpg";
import air_air_5 from "../../assets/img/pac_air_air/PAC AIR AIR UI TYPE CONSOLDE - CHALOU-MOULINEUX (LECUYER).jpeg";
import air_air_6 from "../../assets/img/pac_air_air/PAC AIR AIR UI TYPE MURAL - ETAMPES (INTERCAVE).jpg";
import air_air_7 from "../../assets/img/pac_air_air/air_air_rungis.jpg";
import air_air_8 from "../../assets/img/pac_air_air/UNITE GAINABLE ET VMC DOUBLE FLUX - BOURAY SUR JUINE (MARTIN).jpg";
import air_air_9 from "../../assets/img/pac_air_air/VRV GROUPES EXTERIEURS - LONGUJUMEAU (PHARMACIE DU THEATRE).jpg";
import air_air_10 from "../../assets/img/pac_air_air/IMG_1878.jpeg";
import air_air_11 from "../../assets/img/pac_air_air/air1.jpg";
import air_air_12 from "../../assets/img/pac_air_air/air2.jpg";

import air_eau_1 from "../../assets/img/pac_air_eau/PAC AIR EAU EN CASCADE 1 - ETAMPES (CHEVALIER).jpg";
import air_eau_2 from "../../assets/img/pac_air_eau/PAC AIR EAU EN CASCADE 2 - ETAMPES (CHEVALIER).jpg";
import air_eau_3 from "../../assets/img/pac_air_eau/PAC AIR EAU EN CASCADE 3 - ETAMPES (CHEVALIER).jpg";
import air_eau_4 from "../../assets/img/pac_air_eau/PAC AIR eau GE - MAROLLES EN BEAUCE (POCHON).jpg";
import air_eau_5 from "../../assets/img/pac_air_eau/PAC AIR EAU GROUPE EXTERIEUR - MORIGNY-CHAMPIGNY (COISNON 2025).jpg";
import air_eau_6 from "../../assets/img/pac_air_eau/PAC AIR EAU HT UI ET BALLON ECS - DOURDAN (GONNET).jpg";
import air_eau_7 from "../../assets/img/pac_air_eau/PAC AIR EAU MT AVEC PRODUCTION EAU CHAUDE - AUTRUY SUR JUINE (TARTIVOT).jpg";
import air_eau_8 from "../../assets/img/pac_air_eau/PAC AIR EAU REVERSIBLE - MORIGNY-CHAMPIGNY (KINE COISNON).jpg";
import air_eau_9 from "../../assets/img/pac_air_eau/PLANCHER CHAUFFANT - BOURAY SUR JUINE (MARTIN).jpg";
import air_eau_10 from "../../assets/img/pac_air_eau/PLANCHER CHAUFFANT NOURRICE- BOURAY SUR JUINE (MARTIN).jpg";

import eau_eau_1 from "../../assets/img/pac_eau_eau/PAC EAU EAU SUR NAPPE PHREATIQUE - MILLY-LA-FORET (PICHON).jpg";

import vmc_1 from "../../assets/img/VMC/CENTRALE DOUBLE FLUX - PARIS (JD).jpg";
import vmc_2 from "../../assets/img/VMC/CENTRALE VMC DOUBLE FLUX - ETRECHY (CCEJR).jpg";
import vmc_3 from "../../assets/img/VMC/MANUTENTION VMC DOUBLE FLUX 1 - LES GRANGES LE ROI (ECOLE).jpg";
import vmc_4 from "../../assets/img/VMC/MANUTENTION VMC DOUBLE FLUX 2 - LES GRANGES LE ROI (ECOLE).jpg";
import vmc_5 from "../../assets/img/VMC/MANUTENTION GE PAC AIR EAU REVERSIBLE - MORIGNY-CHAMPIGNY (KINE COISNON).jpg";
import vmc_6 from "../../assets/img/VMC/VMC DOUBLE FLUX 1 - MORIGNY-CHAMPIGNY (KINE COISNON).jpg";


import precision_1 from "../../assets/img/clim_precision/CLIMATISATION INFORMATIQUE - BRETIGNY-SUR-ORGE (DELPHARM).jpg";
import precision_2 from "../../assets/img/clim_precision/CLIMATISATION DE PRECISION - SALLE METROLOGIE - TOURY (ITC).jpg";



const NosRealisations: FC = () => {

    const images1 = [
        { src: air_air_1, caption: "Climatisation Air-Air" },
        { src: air_air_2, caption: "Climatisation Air-Air" },
        { src: air_air_10, caption: "Climatisation Air-Air" },
        { src: air_air_12, caption: "Climatisation Air-Air" },
        { src: air_air_11, caption: "Climatisation Air-Air" },
        { src: air_air_3, caption: "Climatisation Air-Air" },
        { src: air_air_4, caption: "Climatisation Air-Air" },
        { src: air_air_5, caption: "Climatisation Air-Air" },
        { src: air_air_6, caption: "Climatisation Air-Air" },
        { src: air_air_7, caption: "Climatisation Air-Air" },
        { src: air_air_8, caption: "Unité gainable et VMC double flux" },
        { src: air_air_9, caption: "Groupes extérieurs" }
    ];

    const images2 = [
        { src: air_eau_2, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_3, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_4, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_5, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_6, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_7, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_8, caption: "Pompe à chaleur Air-Eau" },
        { src: air_eau_9, caption: "Plancher Chauffant" },
        { src: air_eau_10, caption: "Plancher Chauffant" },
    ];

    const images3 = [
        { src: eau_eau_1, caption: "Pompe à chaleur Eau-Eau" },
    ];

    const images4 = [
        { src: vmc_1, caption: "Centrale Double flux" },
        { src: vmc_2, caption: "Centrale VMC Double flux" },
        { src: vmc_3, caption: "Centrale Double flux" },
        { src: vmc_5, caption: "VMC Double flux" },
        { src: vmc_6, caption: "VMC Double flux" },
    ];

    const images5 = [
        { src: deshumificateur, caption: "Déshumidificteur de piscine" },
    ];

    const images6 = [
        { src: precision_2, caption: "Climatisation de précision" },
        { src: precision_1, caption: "Climatisation de précision" },
    ];


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Nos réalisations"} sousTitre={"Le reflet de notre savoir faire"} image={fond} position={"top"}/>
            <div className="container">
                <GalerieSwiper title={'Climatisation réversible Air-Air'} images={images1}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Pompe à chaleur Air-Eau'} images={images2}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Pompe à chaleur Eau-Eau'} images={images3}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'VMC Double flux'} images={images4}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Déshumidificateur de piscine'} images={images5}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Climatisation de précision'} images={images6}/>
            </div>

            <ContactBanner titre={'Contactez nous'} texte={'Une question ? Une demande de devis ? N\'hésitez pas à nous contacter ! '} imageUrl={vehicules}/>

            <Footer/>
        </>

    )
}

export default NosRealisations