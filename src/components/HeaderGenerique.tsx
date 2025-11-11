import React, { FC } from "react";
import { motion } from "framer-motion";

interface AutoSwiperProps {
    titre: string;
    sousTitre: string;
    image: string;
}

const HeaderGenerique: React.FC<AutoSwiperProps> = ({ titre, sousTitre, image }) => {
    return (
        <div
            id="header"
            className="w-full bg-cover bg-center h-screen relative"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="h-full flex items-end container relative">
                <div className="text-white max-w-5xl flex-col gap-8 flex py-4 md:py-12">
                    {/* Titre animé depuis la gauche */}
                    <motion.h1
                        className="text-3xl lg:text-6xl font-semibold"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {titre}
                    </motion.h1>

                    {/* Sous-titre animé depuis la droite */}
                    <motion.span
                        className="text-xl lg:text-4xl italic"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {sousTitre}
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export default HeaderGenerique;
