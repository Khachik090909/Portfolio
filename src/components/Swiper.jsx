import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import geocod1 from "../assets/captureGeoCode/1.png";
import geocod2 from "../assets/captureGeoCode/2.png";
import geocod3 from "../assets/captureGeoCode/3.png";
import geocod4 from "../assets/captureGeoCode/4.png";
import geocod5 from "../assets/captureGeoCode/5.png";
import geocod6 from "../assets/captureGeoCode/6.png";
import geocod6 from "../assets/captureGeoCode/6.png";
function Carrousel() {
  const images = [geocod1, geocod2, geocod3, geocod4, geocod5, geocod6];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
export default Carrousel;
