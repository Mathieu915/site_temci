import React, { FC } from "react"
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fond from "../../assets/img/9.jpg";
import Prestation from "../../components/Prestation";




const Materiel: FC = () => {

    const presta1 = [
        {
            titre: "Pompe à chaleur air/eau",
            sousTitre: "Une solution écologique, performante et adaptée à votre habitation",
            texte: "La pompe à chaleur air/eau capte les calories présentes dans l’air extérieur pour chauffer efficacement votre logement et produire votre eau chaude sanitaire, si besoin. Notre Société TEMCI, installe des pompes à chaleur air/eau fiables, économiques et respectueuses de l’environnement. Profitez d’un confort optimal en hiver tout en réduisant significativement vos factures d’énergie.",
            imageUrl: fond
        }
    ];

    return (
        <>
            <Navbar/>
            <Services/>
            {presta1.map((presta, index) => (
                <Prestation
                    key={index}
                    titre={presta.titre}
                    sousTitre={presta.sousTitre}
                    texte={presta.texte}
                    imageUrl={presta.imageUrl}
                    position={index % 2 === 0 ? 'ltr' : 'rtl'}
                />
            ))}
            <Footer/>
        </>

    )
}

export default Materiel