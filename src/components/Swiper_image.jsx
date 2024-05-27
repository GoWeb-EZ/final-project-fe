import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper.css";
import "swiper/css";
import Image from "./Image";

export default function Swiper_image() {
  const params = {
    slidesPerView: 3,
    direction: "vertical",
    mousewheel: true,
  };

  return (
    <Swiper className="swiper" {...params}>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
      <SwiperSlide>
        <Image />
      </SwiperSlide>
    </Swiper>
  );
}
