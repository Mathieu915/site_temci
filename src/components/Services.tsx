import React, { FC } from "react";
import { motion } from "framer-motion";
import vehicules from "../assets/img/vehicules.png";
import { Link } from "react-router-dom";
import avisGoogle from "../assets/img/google-avis.png";


const Services: FC = () => {
    return (
        <div
            id="services"
            className="container flex flex-col py-12 gap-6 md:gap-12"
        >
            {/* Titre : slide depuis la gauche */}
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                className="font-serif text-3xl lg:text-5xl leading-none"
            >
                Bienvenue chez TEMCI
            </motion.h2>

            <div className="flex flex-col md:flex-row">
                <div
                    className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-y-4 gap-x-24 overflow-x-hidden"
                    dir="rtl"
                >
                    {/* Texte : slide depuis la droite */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col justify-center gap-y-6 lg:gap-y-12"
                        dir="ltr"
                    >
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl">
                            Expert en <strong>Climatisation et Pompes à chaleur</strong> à
                            Morigny-Champigny.
                            <br />
                            <strong>Depuis 2001</strong>, nous sommes des spécialistes de
                            l'installation, de l'entretien et du dépannage de climatisations et
                            pompes à chaleur, nous mettons notre expertise au service de votre
                            confort toute l'année. Que vous soyez{" "}
                            <strong>particulier ou professionnel</strong>, nos solutions
                            performantes et économiques s'adaptent à vos besoins pour garantir
                            chaleur en hiver et fraicheur en été.
                        </p>
                        <Link
                            to="https://www.google.com/search?sca_esv=4a6faef836c9314f&sxsrf=ANbL-n4EwCjHeiHljdWuiqWa5eGsrC1NRw:1768077184369&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSmFJaD0nPDy4gFwa6C0Vium2qpS8gF8Jz4N6jxM5HfgjS9IxYpsrpAoZLqRF6xFyb2cZZxJBEABRMn9P0RANFUHHGxV&q=TEMCI+Avis&sa=X&ved=2ahUKEwjp6Ynk6IGSAxW4TqQEHZ28EOQQ0bkNegQIKhAE&biw=1536&bih=730&dpr=1.25&aic=0"
                            target="_blank"
                        >
                            <img className="mx-auto" src={avisGoogle} alt="avis google"/>
                        </Link>
                    </motion.div>

                    {/* Image : slide depuis la gauche */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="mx-auto relative">
                            <img
                                className="rounded-md"
                                src={vehicules}
                                alt="Véhicules TEMCI"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;
