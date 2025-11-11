import React, { FC } from "react";

interface PrestationVideoProps {
    titre: string;
    sousTitre?: string;
    texte: string;
    videoUrl: string;
    position?: string;
}

const PrestationVideo: FC<PrestationVideoProps> = ({
                                                       titre,
                                                       sousTitre,
                                                       texte,
                                                       videoUrl,
                                                       position = "ltr",
                                                   }) => {
    return (
        <div className="container flex flex-col md:flex-row py-6 md:py-12">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-24" dir={position}>
                {/* Texte */}
                <div className="flex flex-col justify-center gap-y-6">
                    <h2 className="text-center text-[#017F7F] text-3xl font-semibold lg:mb-3">{titre}</h2>
                    {sousTitre && (
                        <span className="text-center font-semibold text-2xl italic lg:mb-3">
              {sousTitre}
            </span>
                    )}
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl text-left">
                        {texte}
                    </p>
                </div>

                {/* Vidéo */}
                <div className="relative w-full mx-auto flex justify-center">
                    {videoUrl.endsWith(".mp4") ? (
                        <video
                            className="rounded-md shadow-md max-h-[425px] w-full object-cover"
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                    ) : (
                        <div className="w-full aspect-video rounded-md overflow-hidden shadow-md">
                            <iframe
                                src={videoUrl}
                                title={titre}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrestationVideo;
