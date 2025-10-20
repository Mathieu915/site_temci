import React, { FC, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


interface Photo {
    url: string;
  }


const Tools: FC = () => {

    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
      fetch('/json/tools.json')
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.error('Erreur de chargement des photos:', error));
    }, []);

    return (
        <div className="w-full py-10 md:py-20">
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}    
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next', 
                      }}
                    breakpoints={{
                        320: {
                          slidesPerView: 1, 
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                      className="swiper-tools"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index} className="md:w-full md:h-full">
                            <div className="md:w-full md:h-full flex justify-center items-center py-5">
                                <img
                                    src={photo.url}
                                    alt={`Photo ${index + 1}`}
                                    className="h-40"
                                />
                            </div>
                    
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Tools