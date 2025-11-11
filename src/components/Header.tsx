import React, { FC } from "react"
import videoFond from "../assets/videos/video.mp4"

const Header: FC = () => {
    return (
        <div id="header" className="w-full h-screen relative overflow-hidden">

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

            {/* Contenu */}
            <div className="relative h-full flex items-end pb-24 lg:pb-0 lg:items-center justify-center">
                <div className="text-white text-center container max-w-5xl flex-col gap-8 flex">
                    <h1 className="text-3xl lg:text-6xl font-semibold">
                        Expert en climatisation et pompe à chaleur
                    </h1>
                    <span className="text-xl lg:text-4xl italic">
                        Installation, entretien et dépannage sur mesure
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Header
