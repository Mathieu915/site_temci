import React from "react";
import { motion } from "framer-motion";

interface AutoSwiperProps {
    titre: string;
    sousTitre: string;
    image: string;
    additionalImage?: string;
    position?: string;
    size?: string;
}

const HeaderGenerique: React.FC<AutoSwiperProps> = ({
                                                        titre,
                                                        sousTitre,
                                                        image,
                                                        position,
                                                        size,
                                                        additionalImage,
                                                    }) => {
    return (
        <div
            id="header"
            className="w-full h-screen bg-center relative"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: position ?? "center",
                backgroundSize: size ?? "cover",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-36 right-6 lg:top-36 lg:right-12 z-20"
            >
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="
                        w-28 h-28 lg:w-32 lg:h-32
                        rounded-full
                        bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500
                        flex flex-col items-center justify-center
                        text-white font-bold text-center
                        shadow-[0_0_40px_rgba(255,165,0,0.7)]
                    "
                >
                    <span className="text-3xl lg:text-4xl leading-none">25</span>
                    <span className="text-xs lg:text-sm uppercase tracking-wide">
                        ans<br />d’expérience
                    </span>
                </motion.div>
            </motion.div>

            {/* Contenu */}
            <div className="h-full container mx-auto flex items-end relative">
                <div className="text-white max-w-5xl flex items-end gap-6 py-6 md:py-12">

                    {/* Texte */}
                    <div className="flex flex-col gap-6">
                        <motion.h1
                            className="text-3xl lg:text-6xl font-semibold"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            {titre}
                        </motion.h1>

                        <motion.span
                            className="text-xl lg:text-4xl italic"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            {sousTitre}
                        </motion.span>
                    </div>

                    {/* Image additionnelle */}
                    {additionalImage && (
                        <motion.img
                            src={additionalImage}
                            alt="Décoration"
                            className="w-[200px] ml-32 object-contain hidden sm:block"
                            initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -30 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderGenerique;
