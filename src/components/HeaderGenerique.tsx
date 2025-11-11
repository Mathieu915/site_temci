import React, { FC } from "react"

interface AutoSwiperProps {
    titre: string;
    sousTitre: string;
    image: string;

}
const HeaderGenerique: React.FC<AutoSwiperProps> = ({titre, sousTitre, image}) => {
    return (
        <div id="header" className="w-full bg-cover bg-center h-screen relative" style={{backgroundImage: `url(${image})`}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="h-full flex items-end container relative">
                <div className="text-white max-w-5xl flex-col gap-8 flex py-4 md:py-12">
                    <h1 className="text-3xl lg:text-6xl font-semibold">
                        {titre}
                    </h1>
                    <span className="text-xl lg:text-4xl italic">
                        {sousTitre}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderGenerique