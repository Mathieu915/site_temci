import React, { FC, useState } from "react";

interface PrestationsProps {
    titre: string;
    sousTitre: string;
    texte: string;
    imageUrl: string;
    position: string;
    lien?: string;
    label?: string;
    titreModale?: string;
    titre2Modale?: string;
    soustitreModale?: string;
    texteModale?: string;
    titreListeModale?: string;
    listeModale?: string[];
    footerModale?: string;
}

const Prestation: FC<PrestationsProps> = ({
                                              titre,
                                              sousTitre,
                                              texte,
                                              imageUrl,
                                              position,
                                              titreModale,
                                              titre2Modale,
                                              soustitreModale,
                                              texteModale,
                                              titreListeModale,
                                              listeModale,
                                              footerModale,
                                          }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Bloc principal */}
            <div className="container flex flex-col md:flex-row py-6 md:py-12">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24" dir={position}>
                    {/* Texte */}
                    <div className="flex flex-col justify-center gap-y-6">
                        <h2 className="text-center text-[#017F7F] text-3xl font-semibold lg:mb-3">{titre}</h2>
                        <span className="text-center font-semibold text-2xl italic lg:mb-3">{sousTitre}</span>
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
                            {texte}
                        </p>
                    </div>

                    {/* Image + bouton */}
                    <div className="relative w-fit mx-auto">
                        <img
                            className="max-h-[425px] rounded-md object-cover"
                            src={imageUrl}
                            alt={titre}
                        />
                        {
                            !!titreModale && <button
                                onClick={() => setOpen(true)}
                                className="absolute bottom-4 right-4 bg-[#017F7F] text-white text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-[#026b6b] transition"
                            >
                                En savoir plus
                            </button>
                        }

                    </div>
                </div>
            </div>

            {/* Modale scrollable */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto lg:overflow-y-hidden">
                    {/* Conteneur modale */}
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-7xl w-full mx-4 my-10 relative overflow-hidden h-auto md:h-[90vh] md:max-h-[650px] flex flex-col md:flex-row"
                        style={{ animation: "fadeIn 0.2s ease-in-out" }}
                    >
                        {/* Bouton fermer */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>

                        {/* Contenu modale */}
                        <div className="flex flex-col p-6 md:p-10 gap-6 justify-center w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                {/* Image */}
                                <img
                                    src={imageUrl}
                                    alt={titre}
                                    className="w-full h-auto md:max-h-[500px] object-cover rounded-md"
                                />

                                {/* Texte */}
                                <div className="flex flex-col justify-start gap-y-4 md:max-h-[450px] md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                    <h2 className="text-[#017F7F] text-2xl text-center font-semibold">
                                        {titreModale}
                                        <br />
                                        {titre2Modale}
                                    </h2>
                                    <span className="font-semibold text-xl text-center italic text-gray-700">{soustitreModale}</span>
                                    <p className="font-serif text-md text-gray-700 leading-relaxed">{texteModale}</p>
                                    <span className="font-serif font-semibold text-md text-gray-700 leading-relaxed">{titreListeModale}</span>
                                    <ul className="list-disc text-md list-inside">
                                        {!!listeModale &&
                                            listeModale.map((item, index) => (
                                                <li key={index} className="text-gray-700 font-serif text-md leading-relaxed">
                                                    {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                            <span className="text-[#017F7F] text-xl text-center font-semibold">
                    {footerModale}
                </span>
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

export default Prestation;
