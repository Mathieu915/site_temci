import React, { FC } from "react"
import fond from "../assets/img/1.jpg"

const Header: FC = () => {
    return (
        <div id="header" className="w-full bg-cover bg-center h-screen relative" style={{backgroundImage: `url(${fond})`}}>
            <div className="h-full flex items-center justify-center"
                 style={{background: "linear-gradient(0deg, rgba(18, 41, 65, 0.85) 0%, rgba(18, 41, 65, 0.1) 85%, rgba(18, 41, 65, 0.7) 100%)"}}>
                <div className="text-white text-center container max-w-5xl flex-col gap-8 flex">
                    <h1 className="text-6xl font-semibold">
                        Expert en climatisation et pompe à chaleur
                    </h1>
                    <span className="text-4xl italic">
                        Installation, entretien et dépannage sur mesure
                    </span>
                </div>
            </div>
            <div className="container-chevron">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </div>
    )
}

export default Header