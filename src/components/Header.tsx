import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fond1 from "../assets/img/fond_1.jpg";
import fond2 from "../assets/img/fond-2.jpg";
import fond3 from "../assets/img/fond-3.jpg";
import fond4 from "../assets/img/fond-4.jpg";
import videoFond from "../assets/videos/fond.mp4";

const images = [fond2, fond4, fond3, fond1];

const Header: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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

            {/* 🔥 Badge 25 ans d'expérience */}
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
            <div
                className="relative h-full flex items-end pb-24 lg:pb-0 justify-center lg:justify-start"
                style={{ marginTop: "-24px" }}
            >
                <div className="text-white container flex-col gap-8 flex">

                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl lg:text-6xl font-semibold"
                    >
                        Expert en climatisation et pompe à chaleur
                    </motion.h1>

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
