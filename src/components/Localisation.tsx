// Localisation.tsx
import React, { forwardRef, useEffect } from "react";
import { MapContainer, Polygon, Popup, TileLayer, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const Localisation = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const essonneCoords: [number, number][] = [
        [48.65, 1.80],
        [48.75, 1.95],
        [48.80, 2.25],
        [48.75, 2.70],
        [48.55, 2.75],
        [48.35, 2.55],
        [48.17, 2.25],
        [48.30, 1.90],
        [48.65, 1.80],
    ];

    function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, zoom);
        }, [map, coords, zoom]);
        return null;
    }

    return (
        <div
            ref={ref}
            id="localisation"
            className="container flex flex-col py-12 gap-6 md:gap-12 overflow-x-hidden"
        >
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="text-center text-[#017F7F] text-2xl lg:text-4xl font-semibold mb-4 md:mb-8"
            >
                Notre secteur d'intervention
            </motion.h2>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8" dir="ltr">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4"
                >
                    <p className="font-serif font-normal leading-normal text-lg lg:text-xl">
                        Nous intervenons sur une large zone couvrant notamment Rambouillet, Les Ulis, Saint-Fargeau-
                        Ponthierry et Pithiviers, qui représentent les secteurs les plus éloignés de notre zone d’intervention.
                        Entre ces communes et leurs environs, nous accompagnons particuliers et professionnels pour
                        l’installation, l’entretien et l’optimisation de solutions de chauffage performantes, telles que le
                        plancher chauffant et les pompes à chaleur.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex justify-center z-0"
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
                            center={[48.6, 2.25]}
                            zoom={9}
                            scrollWheelZoom={false}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Polygon
                                positions={essonneCoords}
                                pathOptions={{ color: "blue", fillOpacity: 0.2 }}
                            >
                                <Popup>Zone d’intervention : Essonne (91)</Popup>
                            </Polygon>
                            <SetView coords={[48.6, 2.25]} zoom={8} />
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

Localisation.displayName = "Localisation";

export default Localisation;
