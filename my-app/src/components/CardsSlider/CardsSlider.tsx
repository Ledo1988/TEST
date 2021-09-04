import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import postcardsArr from "../../images/img_postcards";
import {Card} from "../Card/Card";
import classes from'./CardsSlider.module.css';

interface Props {
    postcards: string[]
}

export const CardsSlider: React.FC<Props> = (props) => {
    const {postcards} = props;
    const [chosen, setChosen] = useState('');

    const cardsArr = () => {
        return postcardsArr.filter(elem => postcards.find(el => el === elem.title));
    }

    return (
        <div className={classes.cardsSlider}>
            <span className="label-title">Выберите открытку</span>
            <Swiper slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 4
                        }
                    }}>
                {cardsArr().map((item, i) => {
                    return <SwiperSlide key={i}>
                        <Card item={item}
                              setChosen={setChosen}
                              chosen={chosen}/>
                    </SwiperSlide>
                })
                }
            </Swiper>
        </div>
    );
};