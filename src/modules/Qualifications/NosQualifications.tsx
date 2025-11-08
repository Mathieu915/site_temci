import React, { FC } from "react"
import qualification from "../../assets/img/qualification.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
import HeaderGenerique from "../../components/HeaderGenerique";




const NosQualifications: FC = () => {


    return (
        <>
            <Navbar/>
            <HeaderGenerique titre={"Nos qualifications"} sousTitre={"« La reconnaissance d'un vrai savoir faire »"} image={fond}/>
            <div className="container flex flex-col md:flex-row py-6 md:py-12">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24">
                    <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12">
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
                            Notre société TEMCI possède l'attestation de capacité de catégorie l. Nous
                            sommes donc compétents pour manipuler les fluides frigorigènes et délivrer les
                            certificats d'étanchéités des circuits frigorifiques.
                            <br/>
                            <br/>
                            Toute notre equipe professionnelle possede quant à elle leur habilitation
                            électrique, l'habilitation pour la manipulation des fluides.
                            <br/>
                            <br/>
                            Pour vous particulier, afin de vous permettre de bénéficier des aides de l'état,
                            notre société TEMCI possède la qualification QUALIPAC artisan RGE.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto relative">
                            <img
                                className=""
                                src={qualification}
                                alt=""/>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>

    )
}

export default NosQualifications