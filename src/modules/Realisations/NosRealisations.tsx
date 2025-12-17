import React, { FC } from "react"
import qualification from "../../assets/img/qualification.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
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




const NosRealisations: FC = () => {

    const images = [
        { src: deshumificateur, caption: "Déshumidificateur industriel" },
        { src: centraleDoubleFlux, caption: "Centrale double flux" },
        { src: climPrecision, caption: "Climatisation de précision" },
        { src: plancherChauffant, caption: "Système de plancher chauffant" },
        { src: pacEauEau, caption: "Pompe à chaleur eau/eau" },
        { src: pacAirEau, caption: "Pompe à chaleur air/eau" },
    ];


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Nos réalisations"} sousTitre={"Le reflet de notre savoir faire"} image={deshumificateur}/>
            <div className="container">
                <GalerieSwiper title={'Titre de la catégorie 1'} images={images}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Titre de la catégorie 2'} images={images}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Titre de la catégorie 3'} images={images}/>
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #ddd",
                        margin: "auto",
                        width: "100%",
                    }}
                />
                <GalerieSwiper title={'Titre de la catégorie 4'} images={images}/>
            </div>

            <ContactBanner titre={'Contactez nous'} texte={'Une question ? Une demande de devis ? N\'hésitez pas à nous contacter ! '} imageUrl={deshumificateur}/>

            <Footer/>
        </>

    )
}

export default NosRealisations