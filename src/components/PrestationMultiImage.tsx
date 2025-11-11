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
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24"
                    dir={position}
                >
                    {/* Bloc texte */}
                    <motion.div
                        initial={{ opacity: 0, x: !isRTL ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col justify-center gap-y-6 lg:gap-y-12"
                    >
                        <h2 className="text-center text-[#017F7F] text-3xl font-semibold">
                            {titre}
                        </h2>
                        <span className="text-center font-semibold text-2xl italic">
              {sousTitre}
            </span>
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
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

                    {/* Bloc images (2x2 avec flip 3D) */}
                    <motion.div
                        initial={{ opacity: 0, x: !isRTL ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {images.slice(0, 4).map((image, index) => (
                            <div
                                key={index}
                                className="group relative w-full aspect-square max-w-[280px] mx-auto [perspective:1000px] cursor-pointer"
                            >
                                {/* Carte */}
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-lg shadow-md">
                                    {/* Face avant */}
                                    <div
                                        className="absolute inset-0 rounded-lg overflow-hidden"
                                        style={{
                                            backfaceVisibility: "hidden",
                                            transform: "rotateY(0deg)",
                                        }}
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
                                        <p className="text-sm opacity-90 text-black">
                                            {image.texte}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modale scrollable */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto lg:overflow-y-hidden">
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-7xl w-full mx-4 my-10 relative overflow-hidden h-auto md:h-[90vh] md:max-h-[650px] flex flex-col md:flex-row"
                        style={{ animation: "fadeIn 0.2s ease-in-out" }}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col p-6 md:p-10 gap-6 justify-center w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                {/* Bloc images dans la modale */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {images.slice(0, 4).map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative w-full aspect-square max-w-[280px] mx-auto [perspective:1000px] cursor-pointer"
                                        >
                                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-lg shadow-md">
                                                {/* Face avant */}
                                                <div
                                                    className="absolute inset-0 rounded-lg overflow-hidden"
                                                    style={{
                                                        backfaceVisibility: "hidden",
                                                        transform: "rotateY(0deg)",
                                                    }}
                                                >
                                                    <img
                                                        src={image.url}
                                                        alt={image.titre}
                                                        className="object-cover w-full h-full"
                                                    />
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
                                                    <p className="text-sm opacity-90 text-black">
                                                        {image.texte}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Texte modale */}
                                <div className="flex flex-col justify-start gap-y-4 md:max-h-[450px] md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                    <h2 className="text-[#017F7F] text-2xl text-center font-semibold">
                                        {titreModale}
                                    </h2>
                                    <span className="font-semibold text-xl text-center italic text-gray-700">
                    {soustitreModale}
                  </span>
                                    <p className="font-serif text-md text-gray-700 leading-relaxed">
                                        {texteModale}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
            </style>
        </>
    );
};

export default PrestationMultiImage;
