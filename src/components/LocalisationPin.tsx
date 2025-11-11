import React, { FC, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

// Optionnel : corrige l’icône par défaut (sinon le pin ne s’affiche pas dans certains environnements)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const LocalisationPin: FC = () => {
    // Coordonnées du point précis (par ex. Évry, Essonne)
    const essonnePoint: [number, number] = [48.422449, 2.224192];

    function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, zoom);
        }, [map, coords, zoom]);
        return null;
    }

    return (
        <div id="localisation" className="container flex flex-col py-12 gap-6 md:gap-12">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8" dir="ltr">
                <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                    <h2 className="text-center text-[#017F7F] text-3xl font-semibold lg:mb-3">
                        Où nous trouver ?
                    </h2>
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                        Nous sommes situés dans le Sud-Essonne a proximité d'Étampes. Retrouvez nos services et notre rayon d'intervention <a className="text-[#017F7F] underline" href="/site_temci/prestations">ici</a>.
                    </p>
                </div>
                <div>
                    <div className="mx-auto relative z-0">
                        <div
                            style={{
                                width: "100%",
                                height: "400px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <MapContainer style={{ height: "400px", width: "100%" }}>
                                <SetView coords={essonnePoint} zoom={12} />
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={essonnePoint}>
                                    <Popup>Société TEMCI</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalisationPin;
