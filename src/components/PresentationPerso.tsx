import React, { FC } from "react"
import centre from "../assets/img/centre-du-bien-etre.png"

const PresentationPerso: FC = () => {
    return (
        <>
            <section id="presentationPerso">
                <div className="container">
                    <div className="content flex flex-col py-12 lg:py-24 gap-6 md:gap-12 md:w-2/3 justify-center">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <h2 className="text-white font-serif font-light  text-3xl lg:text-5xl leading-none">
                                À propos de moi
                            </h2>
                            <p className="text-white font-serif font-light text-lg lg:text-xl leading-normal">
                                Je m’appelle Ludovic. Passionné par les chiens et leur comportement depuis mon plus jeune âge, j’ai décidé d’en faire mon métier. Je suis certifié par le Centre du Bien-Être Animal, où j’ai appris à utiliser des méthodes positives, basées sur le respect et la coopération.
                                <br/>
                                J’accompagne chaque propriétaire en adaptant mon approche aux besoins spécifiques de son chien, afin de favoriser une relation équilibrée et sereine au quotidien.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8">
                            <h3 className="text-white font-serif font-light text-2xl lg:text-4xl leading-none">
                                Mes Certifications et Formations
                            </h3>
                            <div className="flex flex-col gap-3">
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                    2024 : "Éducateur Comportementaliste Canin" - <a href="https://centredubienetreanimal.fr/"><i className="font-bold">Centre du bien être animal</i></a>
                                </span>
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                    2024 : ACACED
                                </span>
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                    2024 : "La réactivité chez le chien" - <a href="https://centredubienetreanimal.fr/"><i className="font-bold">Centre du bien être animal</i></a>
                                </span>
                                <span className="text-white font-serif font-light text-lg lg:text-xl leading-none">
                                    2025 : "Animer des séances collectives en millieu réel" - <i className="font-bold">Nina Mosny</i>
                                </span>
                            </div>
                        </div>


                        <a href="https://centredubienetreanimal.fr/" target="_blank">
                            <img
                                className="rounded-lg max-w-[250px]"
                                src={centre}
                                alt=""/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PresentationPerso