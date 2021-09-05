import React, {useContext} from "react";
import classes from "./Preview.module.css";
import Context from "../../Context";
import postcardsArr from "../../images/img_postcards";

export const Preview: React.FC = () => {
    const {data, state} = useContext(Context);
    const currentImageItem = postcardsArr.find(el => el.title === state.postcard);

    return (
        <div className={classes.preview}>
            {currentImageItem && <img className={classes.img} src={currentImageItem.img} alt="Открытка"/>}
            <div className={classes.content}>
                <div className={classes.item}>
                    <p className={`title-uppercase ${classes.title}`}>Кому</p>
                    <p className={classes.desc}>{data.user.name}</p>
                </div>
                <div className={classes.item}>
                    <p className={`title-uppercase ${classes.title}`}>Пожелание</p>
                    <p className={classes.desc}>{state.greetings}</p>
                </div>
            </div>
        </div>
    );
};