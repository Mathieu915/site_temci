import React, { FC } from "react"
import videoFond from "../assets/video/video.mp4"

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

            <div
                className="relative h-full flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(18, 41, 65, 0.85) 0%, rgba(18, 41, 65, 0.1) 85%, rgba(18, 41, 65, 0.7) 100%)",
                }}
            >
                <div className="text-white text-center container max-w-5xl flex-col gap-8 flex">
                    <h1 className="text-6xl font-semibold">
                        Expert en climatisation et pompe à chaleur
                    </h1>
                    <span className="text-4xl italic">
                        Installation, entretien et dépannage sur mesure
                    </span>
                </div>
            </div>

            <div className="container-chevron absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </div>
    )
}

export default Header