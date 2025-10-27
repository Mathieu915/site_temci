import React, { FC } from "react";
import vehicules from "../assets/img/vehicules.png";


interface PrestationsProps {
    titre: string;
    sousTitre: string;
    texte: string;
    imageUrl: string;
    position: string;
}

const Prestation: React.FC<PrestationsProps> = ({ titre, sousTitre, texte, imageUrl, position }) => {

    return (
        <div className="container flex flex-col md:flex-row">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24" dir={position}>
                <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12">
                    <h2 className="text-center text-[#017F7F] text-3xl font-semibold">{titre}</h2>
                    <span className="text-center font-semibold text-2xl italic">{sousTitre}</span>
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                        {texte}
                    </p>
                </div>
                <div>
                    <div className="mx-auto relative">
                        <img
                            className=""
                            src={imageUrl}
                            alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Prestation;
