import React, { FC } from "react"
import vehicules from "../assets/img/vehicules.png"

const Services: FC = () => {

    return (
        <>
            <div id="services" className="container flex flex-col py-12 gap-6 md:gap-12">
                <h2 className="font-serif text-3xl lg:text-5xl leading-none ">
                    Bienvenue chez TEMCI
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24"  dir="rtl">
                        <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12" dir="ltr">
                            <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                                Expert en <strong>Climatisation et Pompes à chaleur</strong> à Morigny-Champigny.
                                <br/>
                                <strong>Depuis 2001</strong>, nous sommes des spécialistes de l'installation, de l'entretien et du dépannage de climatisations et pompes à chaleur, nous mettons notre expertise au service de votre confort toute l'année. Que vous soyez <strong>particulier ou professionnel</strong>, nos solutions performantes et économiques s'adaptent à vos besoins pour garantir chaleur en hiver et fraicheur en été.
                            </p>
                        </div>
                        <div>
                            <div className="mx-auto relative">
                                <img
                                    className="rounded-tl-3xl"
                                    src={vehicules}
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services