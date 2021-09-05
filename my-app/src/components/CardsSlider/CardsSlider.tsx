import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import postcardsArr from "../../images/img_postcards";
import {Card} from "../Card/Card";
import classes from'./CardsSlider.module.css';
import Context from "../../Context";
import {UserDataState} from "../Form/Form";

interface Props {
    usersData: UserDataState,
    setUsersData: (prevState: (prevState: UserDataState) =>  UserDataState ) => void;
}

export const CardsSlider: React.FC<Props> = (props) => {
    const {usersData, setUsersData} = props;
    const {data} = useContext(Context);
    const cardsArr = () => {
        return postcardsArr.filter(elem => data.postcards.find(el => el === elem.title));
    }
    const handleChange = (value: string) => {
        setUsersData(prevState => ({...prevState, card: value}));
    }

    return (
        <div className={classes.cardsSlider}>
            <span className="label-title">Выберите открытку</span>
            <Swiper slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 4
                        }
                    }}>
                {cardsArr().map((item, i) => {
                    return <SwiperSlide key={i}>
                        <Card item={item}
                              currentCard={usersData.card}
                              handleChange={handleChange}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};