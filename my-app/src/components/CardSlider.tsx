import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export const CardSlider: React.FC = () => {

    return (
        <div className="swiper-cards">
            <Swiper slidesPerView={3}
                    spaceBetween={30}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};