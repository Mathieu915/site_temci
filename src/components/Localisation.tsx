import React, { FC, useEffect } from "react"
import { MapContainer, Polygon, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Localisation: FC = () => {
    const essonneCoords = [
        [48.37, 2.05],  // un peu plus bas et à l'ouest
        [48.40, 2.28],
        [48.48, 2.45],
        [48.58, 2.45],  // plus haut à l'est
        [48.62, 2.35],  // plus haut au centre-nord
        [48.60, 2.05],  // plus haut à l'ouest
        [48.52, 1.95],  // un peu plus bas et à l'ouest
        [48.45, 2.00],
        [48.37, 2.05],  // fermer le polygone
    ];


    function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, zoom);
        }, [map, coords, zoom]);
        return null;
    }

    return (
        <>
            <div id="localisation" className="container flex flex-col py-12 gap-6 md:gap-12">
                <h2 className="font-serif text-3xl lg:text-5xl leading-none ">
                    Où me trouver ?
                </h2>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-4 gap-x-8"  dir="ltr">
                    <div className="flex flex-col justify-center gap-y-6 lg:gap-y-12 text-left lg:w-3/4" dir="ltr">
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                            Je me déplace dans le secteur du sud/milieu de l’Essonne, dans les villes indiquées sur la carte ci-dessous.
                        </p>
                        <h3 className="font-serif font-light text-2xl lg:text-4xl leading-none ">
                            Et au-delà ?
                        </h3>
                        <p className="font-serif font-normal leading-normal text-lg lg:text-xl ">
                            Si vous êtes en dehors de ma zone indiquée sur la carte, contactez-moi pour voir si je peux me déplacer. Des frais kilométriques peuvent s’appliquer.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto relative z-0">
                            <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <MapContainer
                                    style={{ height: '400px', width: '100%' }}
                                >
                                    <SetView coords={[48.6, 2.25]} zoom={9} />
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Polygon positions={essonneCoords} pathOptions={{ color: 'blue', fillOpacity: 0.2 }}>
                                        <Popup>Zone d’intervention : Essonne (91)</Popup>
                                    </Polygon>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Localisation