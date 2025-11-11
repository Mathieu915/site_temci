import React, { FC } from "react";
import { motion } from "framer-motion";
import videoFond from "../assets/videos/video.mp4";

const Header: FC = () => {
    return (
        <div id="header" className="w-full h-screen relative overflow-hidden">
            {/* Vidéo de fond */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoFond} type="video/mp4" />
            </video>

            {/* Overlay noir semi-transparent */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contenu principal */}
            <div className="relative h-full flex items-end pb-24 lg:pb-0 lg:items-center justify-center">
                <div className="text-white text-center container max-w-5xl flex-col gap-8 flex">

                    {/* Titre : slide depuis la gauche */}
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl lg:text-6xl font-semibold"
                    >
                        Expert en climatisation et pompe à chaleur
                    </motion.h1>

                    {/* Sous-titre : slide depuis la droite */}
                    <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="text-xl lg:text-4xl italic"
                    >
                        Installation, entretien et dépannage sur mesure
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export default Header;
