import React, { FC } from "react";
import { motion } from "framer-motion";
import qualification from "../../assets/img/qualification.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderGenerique from "../../components/HeaderGenerique";
import ContactBanner from "../../components/ContactBanner";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";
import vehicules from "../../assets/img/vehicules.png";
import adc from "../../assets/img/adc.png";
import qualipac from "../../assets/img/qualipac.png";
import certif from "../../assets/img/certif.png";
import attestation from "../../assets/pdf/attestation.pdf";
import attestation_qualipac from "../../assets/pdf/qualipac.pdf";
import header from "../../assets/img/entretien.jpg";

const NosQualifications: FC = () => {
    return (
        <>
            <Navbar />
            <HeaderGenerique
                titre={"Nos qualifications"}
                sousTitre={"La reconnaissance d'un vrai savoir faire"}
                image={header}
                position={'bottom'}
            />
            <div className="container flex flex-col md:flex-row py-6 md:py-12 overflow-x-hidden">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24">
                    {/* Texte animé depuis la gauche */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex flex-col justify-center gap-y-6 lg:gap-y-12"
                    >
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
                            Notre société TEMCI possède l'attestation de capacité de catégorie l. Nous
                            sommes donc compétents pour manipuler les fluides frigorigènes et délivrer les
                            certificats d'étanchéités des circuits frigorifiques.
                            <br />
                            <br />
                            Toute notre equipe professionnelle possede quant à elle leur habilitation
                            électrique, l'habilitation pour la manipulation des fluides.
                            <br />
                            <br />
                            Pour vous particulier, afin de vous permettre de bénéficier des aides de l'état,
                            notre société TEMCI possède la qualification QUALIPAC artisan RGE.
                        </p>
                    </motion.div>

                    {/* Image animée depuis la droite */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="mx-auto relative">
                            <img src={qualification} alt="Qualification TEMCI" className="" />
                        </div>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-center ">
                        <a
                            href={attestation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center px-6 py-3 font-semibold border border-[#b00000] bg-[#b00000] rounded-xl text-white hover:bg-white hover:text-[#b00000] transition-colors duration-300 cursor-pointer"
                        >
                            Voir notre attestation ADC Fluides
                        </a>
                        <a
                            href={attestation_qualipac}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center px-6 py-3 font-semibold border border-[#b00000] hover:bg-[#b00000] rounded-xl hover:text-white bg-white text-[#b00000] transition-colors duration-300 cursor-pointer"
                        >
                            Voir notre attestation Qualipac
                        </a>
                    </div>
                </div>
            </div>
            <ContactBanner
                titre={"Contactez nous"}
                texte={"Une question ? Une demande de devis ? N'hésitez pas à nous contacter ! "}
                imageUrl={vehicules}
            />
            <Footer />
        </>
    );
};

export default NosQualifications;
