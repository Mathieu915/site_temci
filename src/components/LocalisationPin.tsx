import React, { FC, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    const essonnePoint: [number, number] = [48.422449, 2.224192];

    function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, zoom);
        }, [map, coords, zoom]);
        return null;
    }

    return (
        <div
            className="container flex flex-col py-12 gap-6 md:gap-12 overflow-x-hidden"
        >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8" dir="ltr">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4"
                >
                    <h2 className="text-center text-[#017F7F] text-3xl font-semibold lg:mb-3">
                        Où nous trouver ?
                    </h2>
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl">
                        Nous sommes situés dans le Sud-Essonne à proximité d'Étampes. Retrouvez nos
                        services et notre rayon d'intervention{" "}
                        <Link
                            to="/prestations"
                            state={{ scrollTo: "localisation" }}
                            className="text-[#017F7F] underline"
                        >
                            ici
                        </Link>
                        .
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex justify-center"
                >
                    <div
                        style={{
                            width: "100%",
                            height: "400px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <MapContainer
                            style={{ height: "400px", width: "100%" }}
                            center={essonnePoint}
                            zoom={12}
                            scrollWheelZoom={false}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={essonnePoint}>
                                <Popup>Société TEMCI</Popup>
                            </Marker>
                            <SetView coords={essonnePoint} zoom={12} />
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LocalisationPin;
