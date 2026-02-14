import React from "react";
import { useNavigate } from "react-router-dom";

interface BannerProps {
    titre: string;
    texte: string;
    imageUrl: string;
}

const ContactBanner: React.FC<BannerProps> = ({ titre, texte, imageUrl }) => {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Overlay rouge semi-transparent */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenu */}
            <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between py-12 lg:py-32 px-6 md:px-12 text-white">
                {/* Texte */}
                <div className="mb-6 md:mb-0 md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{titre}</h2>
                    <p className="text-lg md:text-xl">{texte}</p>
                </div>

                {/* Bouton transparent avec flèche */}
                <div>
                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-transparent border border-white text-white font-semibold rounded-md overflow-hidden group transition inline-flex items-center px-6 py-3 whitespace-nowrap hover:px-8"
                    >
                        <a href="/contact" className="flex items-center gap-2">
                            Contactez-nous
                            <span className="text-2xl transform -translate-x-2 opacity-0 w-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 group-hover:pr-2">
                                →
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
