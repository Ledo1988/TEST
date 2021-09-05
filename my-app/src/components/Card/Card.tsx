import React from "react";
import classes from'./Card.module.css';

interface Props {
    item: {
        id: number
        title: string,
        img: string
    },
    currentCard?: string,
    handleChange: (title: string) => void;
}

export const Card: React.FC<Props> = (props) => {
    const {item, currentCard, handleChange} = props;

    return (
       <label className={currentCard === item.title ? `${classes.card} ${classes.cardChecked}`: classes.card}>
           <input type="radio"
                  className={classes.input}
                  checked={currentCard === item.title}
                  onChange={() => handleChange(item.title)}
                  name="radio"/>
           <span className={classes.checkmark}>
               <svg width="26" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.05l8 8.847L24 2.967" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                </svg>
           </span>
           <div className={classes.imgWrapper}>
                <img src={item.img} className={classes.img} alt="Открытка"/>
           </div>
       </label>
    );
};