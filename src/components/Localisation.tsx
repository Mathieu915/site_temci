// Localisation.tsx
import React, { forwardRef, useEffect } from "react";
import { MapContainer, Polygon, Popup, TileLayer, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const Localisation = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const essonneCoords: [number, number][] = [
        [48.37, 2.05],
        [48.40, 2.28],
        [48.48, 2.45],
        [48.58, 2.45],
        [48.62, 2.35],
        [48.60, 2.05],
        [48.52, 1.95],
        [48.45, 2.0],
        [48.37, 2.05],
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
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mauris, erat
                        nisl nunc ac nibh fusce ullamcorper facilisis felis, sodales donec
                        semper eget magnis arcu conubia. Facilisi mi enim viverra dapibus
                        justo vivamus urna, ornare tristique rhoncus cubilia in sapien cum,
                        posuere porta imperdiet facilisis nullam senectus. Habitasse aenean
                        dapibus rutrum platea fames accumsan litora mollis, diam tellus quam
                        vivamus class parturient magnis congue, suspendisse integer consequat
                        vulputate pharetra porttitor dignissim.
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
                            <SetView coords={[48.6, 2.25]} zoom={9} />
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

Localisation.displayName = "Localisation";

export default Localisation;
