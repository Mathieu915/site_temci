import React, { FC } from "react";
import { motion } from "framer-motion";

interface PrestationVideoProps {
    titre: string;
    sousTitre?: string;
    texte: string;
    videoUrl: string;
    position?: string;
}

const PrestationVideo: FC<PrestationVideoProps> = ({
                                                       titre,
                                                       sousTitre,
                                                       texte,
                                                       videoUrl,
                                                       position = "ltr",
                                                   }) => {
    const isRTL = position === "rtl";

    return (
        <div className="container flex flex-col md:flex-row py-6 md:py-12 overflow-x-hidden">
            <div
                className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24"
                dir={position}
            >
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: !isRTL ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex flex-col justify-center gap-y-6"
                >
                    <h2 className="text-center text-[#017F7F] text-3xl font-semibold lg:mb-3">
                        {titre}
                    </h2>
                    {sousTitre && (
                        <span className="text-center font-semibold text-2xl italic lg:mb-3">
              {sousTitre}
            </span>
                    )}
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
                        {texte}
                    </p>
                </motion.div>

                {/* Vidéo */}
                <motion.div
                    initial={{ opacity: 0, x: !isRTL ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative w-full mx-auto flex justify-center"
                >
                    {videoUrl.endsWith(".mp4") ? (
                        <video
                            className="rounded-md shadow-md max-h-[425px] w-full object-cover"
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                    ) : (
                        <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                            <iframe
                                src={videoUrl}
                                title={titre}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default PrestationVideo;
