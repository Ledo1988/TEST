import React from "react";
import classes from'./Card.module.css';


interface Props {
    item: {
        id: number
        title: string,
        img: string
    },
    chosen: string,
    setChosen: (title: string) => void;
}

export const Card: React.FC<Props> = (props) => {
    const {item, chosen, setChosen} = props;

    return (
       <label className={chosen === item.title ? `${classes.card} ${classes.cardChecked}`: classes.card}>
           <input type="radio"
                  className={classes.cardInput}
                  checked={chosen === item.title}
                  onChange={() => setChosen(item.title)}
                  name="radio"/>
           <span className={classes.cardCheckmark}>
               <svg width="26" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.05l8 8.847L24 2.967" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                </svg>
           </span>
           <div className={classes.imgWrapper}>
                <img src={item.img} alt="Открытка"/>
           </div>
       </label>
    );
};