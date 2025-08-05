"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import "./style.css";

import { Pagination, FreeMode } from "swiper/modules";
import { ICardSlider } from "./types";

function CardSliderContainer({ children, customClassName, disableLargeScreen }: ICardSlider) {
  return (
   <>
    <div className={`${disableLargeScreen ? "xl:hidden" : ""}`}>
      <Swiper
        modules={[Pagination, FreeMode]}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={22}
        freeMode={true}
        pagination={{ clickable: true }}
        className={`relative w-full h-full z-10 flex transition-transform box-content right-paginate big-bullets ${customClassName ? customClassName : ""}`}
      >
        {children}
      </Swiper>
    </div>
    <div className={`hidden ${disableLargeScreen ? "xl:flex" : ""} flex-row justify-between gap-4`}>
      {children}
    </div>
    </>
  );
}

export default CardSliderContainer;

