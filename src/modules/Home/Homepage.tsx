import React, { FC } from "react"
import Header from "../../components/Header"
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactBanner from "../../components/ContactBanner";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import manutention from "../../assets/img/manutention.jpg";
import Prestation from "../../components/Prestation";
import akzonobel from '../../assets/img/clients/akzonobel.png';
import axa from '../../assets/img/clients/axa.png';
import bleu_libellule from '../../assets/img/clients/bleu_libellule.png';
import camille_albane from '../../assets/img/clients/camille_albane.png';
import cerballiance from '../../assets/img/clients/cerballiance.png';
import cerfrance from '../../assets/img/clients/cerfrance.png';
import delpharm from '../../assets/img/clients/delpharm.png';
import dessange from '../../assets/img/clients/dessange.png';
import entreJR from '../../assets/img/clients/entreJR.png';
import fprovost from '../../assets/img/clients/fprovost.png';
import itc from '../../assets/img/clients/itc.png';
import jld from '../../assets/img/clients/jld.png';
import label_canin from '../../assets/img/clients/label_canin.png';
import lempereur from '../../assets/img/clients/lempereur.png';
import leonidas from '../../assets/img/clients/leonidas.png';
import saint_algue from '../../assets/img/clients/saint_algue.png';
import sicae from '../../assets/img/clients/sicae.png';
import smurfit from '../../assets/img/clients/smurfit.png';
import sycogest from '../../assets/img/clients/sycogest.png';
import transportsDM from '../../assets/img/clients/transportsDM.png';
import AutoSwiper from "../../components/Autoswiper";
import LocalisationPin from "../../components/LocalisationPin";



const Homepage: FC = () => {

    const images = [
        akzonobel,
        axa,
        bleu_libellule,
        camille_albane,
        cerballiance,
        cerfrance,
        delpharm,
        dessange,
        entreJR,
        fprovost,
        itc,
        jld,
        label_canin,
        lempereur,
        leonidas,
        saint_algue,
        sicae,
        smurfit,
        sycogest,
        transportsDM
    ];

    return (
        <>
            <Navbar/>
            <Header/>
            <Services/>
            <Prestation
                titre={"Vous avez un projet ? Nous le réalisons."}
                sousTitre={"Des solutions sur mesure pour votre confort thermique."}
                texte={"Que ce soit pour votre maison, vos bureaux ou vos espaces industriels, notre équipe experte vous accompagne à chaque étape de votre projet, de l’étude personnalisée à l’installation complète. Nous concevons des solutions de climatisation sur mesure, alliant performance, efficacité énergétique et durabilité. Grâce à notre savoir-faire, vous bénéficiez d’un confort optimal toute l’année, d’un air pur et sain, et d’une tranquillité d’esprit totale. Respirez mieux, vivez mieux, et laissez-nous transformer vos besoins en solutions concrètes et fiables"}
                imageUrl={manutention}
                position={'ltr'}
                lien={'/prestations'}
                label={'Voir nos prestations'}
            />
            <AutoSwiper images={images} titre={'Ils nous ont fait confiance'}/>
            <ContactBanner titre={'Vous cherchez un spécialiste pour votre climatisation ou pompe à chaleur ?'} texte={'N\'hésitez pas à nous contacter TEMCI, pour tous vos besoins d\'installation, dépannage et entretien de climatisation et pompe à chaleur'} imageUrl={deshumificateur}/>
            <LocalisationPin/>
            <Footer/>
        </>
        
    )
}

export default Homepage