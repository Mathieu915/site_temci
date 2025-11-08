import React, { FC } from "react"

interface AutoSwiperProps {
    titre: string;
    sousTitre: string;
    image: string;

}
const HeaderGenerique: React.FC<AutoSwiperProps> = ({titre, sousTitre, image}) => {
    return (
        <div id="header" className="w-full bg-cover bg-center h-screen relative" style={{backgroundImage: `url(${image})`}}>
            <div className="h-full flex items-end"
                 style={{background: "linear-gradient(0deg, rgba(18, 41, 65, 0.85) 0%, rgba(18, 41, 65, 0.1) 85%, rgba(18, 41, 65, 0.7) 100%)"}}>
                <div className="text-white max-w-5xl flex-col gap-8 flex px-4 md:px-8 py-4 md:py-12">
                    <h1 className="text-6xl font-semibold">
                        {titre}
                    </h1>
                    <span className="text-4xl italic">
                        {sousTitre}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderGenerique