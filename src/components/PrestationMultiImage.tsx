import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageData {
    url: string;
    titre: string;
    texte: string;
}

interface PrestationsProps {
    titre: string;
    sousTitre: string;
    texte: string;
    images: ImageData[];
    position: string;
    titreModale?: string;
    soustitreModale?: string;
    texteModale?: string;
}

const PrestationMultiImage: React.FC<PrestationsProps> = ({
                                                              titre,
                                                              sousTitre,
                                                              texte,
                                                              images,
                                                              position,
                                                              titreModale,
                                                              soustitreModale,
                                                              texteModale,
                                                          }) => {
    const [open, setOpen] = useState(false);
    const isRTL = position === "rtl";

    return (
        <>
            <div className="container flex flex-col md:flex-row py-6 md:py-12 overflow-x-hidden">
                <div
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-y-8 gap-x-24"
                    dir={position}
                >
                    {/* Bloc texte */}
                    <motion.div
                        initial={{ opacity: 0, x: !isRTL ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col justify-center gap-y-6 lg:gap-y-12"
                    >
                        <h2 className="text-center text-[#017F7F] text-3xl font-semibold">
                            {titre}
                        </h2>
                        <span className="text-center font-semibold text-2xl italic">
              {sousTitre}
            </span>
                        <p className="font-serif leading-normal text-lg lg:text-xl text-left">
                            {texte}
                        </p>

                        {!!titreModale && (
                            <div className="mx-auto">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-[#017F7F] text-white text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-[#026b6b] transition"
                                >
                                    En savoir plus
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Bloc images */}
                    <motion.div
                        initial={{ opacity: 0, x: !isRTL ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center"
                    >
                        {images.slice(0, 4).map((image, index) => (
                            <div
                                key={index}
                                className="group relative w-full aspect-square md:max-w-[280px] [perspective:1000px] cursor-pointer"
                            >
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-lg shadow-md">
                                    {/* Face avant */}
                                    <div
                                        className="absolute inset-0 rounded-lg overflow-hidden"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.titre}
                                            className="object-cover w-full h-full"
                                        />

                                        {/* Icône info */}
                                        <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-1 rounded-full shadow-md flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[#017F7F]"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="16" x2="12" y2="12" />
                                                <line x1="12" y1="8" x2="12" y2="8" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Face arrière */}
                                    <div
                                        className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white p-4 rounded-lg"
                                        style={{
                                            transform: "rotateY(180deg)",
                                            backfaceVisibility: "hidden",
                                        }}
                                    >
                                        <h3 className="font-semibold text-lg mb-2 text-[#017F7F]">
                                            {image.titre}
                                        </h3>
                                        <p className="text-sm text-black/90">{image.texte}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modale */}
            {open && (
                <div className="fixed inset-0 z-50 flex justify-center bg-black/50 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full mx-4 my-10 relative">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-2xl"
                        >
                            &times;
                        </button>

                        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                                {images.slice(0, 4).map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full aspect-square md:max-w-[280px]"
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.titre}
                                            className="w-full h-full object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#017F7F] text-2xl text-center font-semibold">
                                    {titreModale}
                                </h2>
                                <span className="text-center italic text-lg">
                  {soustitreModale}
                </span>
                                <p className="font-serif">{texteModale}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrestationMultiImage;
