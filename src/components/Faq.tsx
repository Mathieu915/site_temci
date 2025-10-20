import React, { FC } from "react";
import fond from "../assets/img/9.jpg";


interface FAQCardProps {
    question: string;
    answer: string;
    imageUrl: string;
    backgroundPosition: string; // Position fixe pour l'image
}

const Faq: FC = () => {
    const faqs = [
        {
            question: "Est-ce que vous vous déplacez à domicile ?",
            answer: "Oui, je me déplace à domicile. Selon le travail à réaliser, il est aussi possible de se retrouver dans un lieu extérieur adapté pour la séance.",
            imageUrl: fond,
            backgroundPosition: "center 10%"
        },
        {
            question: "Peut-on éduquer un chien à n’importe quel âge ?",
            answer: "Il est possible d’éduquer un chien à tout âge. Même les chiens adultes ou seniors peuvent progresser avec un accompagnement adapté.",
            imageUrl: fond,
            backgroundPosition: "center 30%"
        },
        {
            question: "Combien de temps faut-il pour voir des résultats ?",
            answer: "Le délai pour voir des résultats dépend de la problématique du chien et de la régularité avec laquelle le propriétaire réalise les exercices entre les séances.",
            imageUrl: fond,
            backgroundPosition: "center 50%"
        },
        {
            question: "Que faire en cas de difficulté entre les séances ?",
            answer: "En cas de difficulté entre les séances, vous pouvez me contacter directement pour un conseil rapide. Selon la situation, nous pourrons ajuster les exercices ou prévoir une séance supplémentaire si nécessaire.",
            imageUrl: fond,
            backgroundPosition: "center 70%"
        },
    ];

    const FAQCard: React.FC<FAQCardProps> = ({ question, answer, imageUrl, backgroundPosition }) => {
        return (
            <div className="card h-40 lg:h-20">
                <div className="card-inner">
                    <div
                        className="card-front"
                        style={{
                            backfaceVisibility: "hidden",
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: backgroundPosition,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                        <h3 className="relative z-10 text-lg md:text-xl font-semibold text-center">{question}</h3>
                    </div>
                    <div className="card-back text-center px-2 lg:px-8">{answer}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="container flex flex-col py-12 gap-6 md:gap-8">
            <h2 className="font-serif text-3xl lg:text-5xl text-center leading-none">
                FAQ
            </h2>
            <div className="flex flex-col gap-4 md:gap-10">
                {faqs.map((faq, index) => (
                    <FAQCard
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        imageUrl={faq.imageUrl}
                        backgroundPosition={faq.backgroundPosition} // Passer la position à la carte
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
