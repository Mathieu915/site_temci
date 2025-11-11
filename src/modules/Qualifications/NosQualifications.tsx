import React, { FC } from "react";
import { motion } from "framer-motion";
import qualification from "../../assets/img/qualification.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderGenerique from "../../components/HeaderGenerique";
import ContactBanner from "../../components/ContactBanner";
import deshumificateur from "../../assets/img/deshumidificateur.jpg";

const NosQualifications: FC = () => {
    return (
        <>
            <Navbar />
            <HeaderGenerique
                titre={"Nos qualifications"}
                sousTitre={"« La reconnaissance d'un vrai savoir faire »"}
                image={deshumificateur}
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
                </div>
            </div>
            <ContactBanner
                titre={"Contactez nous"}
                texte={"Une question ? Une demande de devis ? N'hésitez pas à nous contacter ! "}
                imageUrl={deshumificateur}
            />
            <Footer />
        </>
    );
};

export default NosQualifications;
