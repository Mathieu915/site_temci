import React, { FC } from "react"
import qualification from "../../assets/img/qualification.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import HeaderGenerique from "../../components/HeaderGenerique";
import Contact from "../../components/Contact";
import LocalisationPin from "../../components/LocalisationPin";
import vehicules from "../../assets/img/vehicules.png";




const NousContacter: FC = () => {


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Contactez notre société TEMCI"} sousTitre={"Spécialiste en climatisation et pompes à chaleur à Morigny-Champigny"} image={vehicules}/>
            <Contact/>
            <Footer/>
        </>

    )
}

export default NousContacter