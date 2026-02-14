import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GalerieImage {
    src: string;
    caption?: string;
}

interface GalerieSwiperProps {
    title: string;
    images: GalerieImage[];
}

const GalerieSwiper: React.FC<GalerieSwiperProps> = ({ title, images }) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    const [navReady, setNavReady] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        setNavReady(true);
    }, []);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    };

    const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <section
            className="overflow-x-hidden"
            style={{
                padding: "4rem 2rem",
                "--swiper-pagination-color": "#017F7F",
                "--swiper-theme-color": "#017F7F",
            } as React.CSSProperties}
        >
            {/* Titre animé depuis la gauche */}
            <motion.h2
                className="font-semibold text-center text-[#017F7F] text-2xl lg:text-4xl mb-4 lg:mb-8"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                {title}
            </motion.h2>

            {/* Slider + lightbox animé depuis la droite */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                {navReady && (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{
                            clickable: true,
                            el: paginationRef.current,
                        }}
                        autoplay={false}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{ padding: "1rem 0" }}
                        centeredSlides={images.length === 1}
                        watchOverflow={true}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "350px",
                                        overflow: "hidden",
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption || `Projet ${index + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.3s",
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Flèches + Pagination centrées */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                    }}
                >
                    <div
                        ref={prevRef}
                        style={{
                            cursor: "pointer",
                            fontSize: "2rem",
                            userSelect: "none",
                        }}
                    >
                        &#8592;
                    </div>

                    <div
                        ref={paginationRef}
                        className="custom-pagination"
                        style={{ flexGrow: 1, textAlign: "center" }}
                    ></div>

                    <div
                        ref={nextRef}
                        style={{
                            cursor: "pointer",
                            fontSize: "2rem",
                            userSelect: "none",
                        }}
                    >
                        &#8594;
                    </div>
                </div>

                {/* POPIN (lightbox) */}
                {selectedImage && (
                    <div
                        onClick={() => setSelectedIndex(null)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            zIndex: 1000,
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.caption}
                            style={{
                                maxWidth: "90%",
                                maxHeight: "80%",
                                borderRadius: "10px",
                                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                            }}
                        />
                        {selectedImage.caption && (
                            <p
                                style={{
                                    marginTop: "1rem",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    textAlign: "center",
                                    maxWidth: "80%",
                                }}
                            >
                                {selectedImage.caption}
                            </p>
                        )}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "2rem",
                                transform: "translateY(-50%)",
                                color: "#fff",
                                fontSize: "2rem",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                            onClick={handlePrev}
                        >
                            &#8592;
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "2rem",
                                transform: "translateY(-50%)",
                                color: "#fff",
                                fontSize: "2rem",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                            onClick={handleNext}
                        >
                            &#8594;
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default GalerieSwiper;
