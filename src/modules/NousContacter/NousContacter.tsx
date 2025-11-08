import React, { FC } from "react"
import qualification from "../../assets/img/qualification.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
import HeaderGenerique from "../../components/HeaderGenerique";
import Contact from "../../components/Contact";




const NousContacter: FC = () => {


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Contactez notre société TEMCI"} sousTitre={"Spécialiste en climatisation et pompes à chaleur à Morigny-Champigny"} image={fond}/>
            <Contact/>
            <Footer/>
        </>

    )
}

export default NousContacter