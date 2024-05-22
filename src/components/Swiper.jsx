import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.scss";
// Importez les modules spécifiques
import { EffectCoverflow, Pagination } from "swiper/modules";

function Carrousel({ images }) {
  const initialSlide = Math.floor(images.length / 2);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={initialSlide}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} onClick={() => window.open(image)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carrousel;
