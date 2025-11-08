import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface AutoSwiperProps {
    titre?: string;
    sousTitre?: string;
    images: string[];

}
const AutoSwiper: React.FC<AutoSwiperProps> = ({titre, sousTitre, images}) => {
    return (
        <>
            <div className="container text-center py-6 md:py-12">
                <h2 className="text-center text-[#017F7F] text-3xl font-semibold mb-4 md:mb-8">{titre}</h2>
                <span className="text-center font-semibold text-2xl italic">{sousTitre}</span>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                loop={true}
                allowTouchMove={false}
                speed={3000}
                breakpoints={{
                    0: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 15 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                style={{ width: "100%", height: "160px" }}
                className="continuous-swiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`slide-${index}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default AutoSwiper;