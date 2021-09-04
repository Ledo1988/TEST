import React, {useContext} from "react";
import classes from './TextField.module.css'
import Context from "../../Context";

export const TextField: React.FC = () => {
    const {data} = useContext(Context);

    return (
        <div className={classes.wrapper}>
            <span className="label-title">Кого</span>
            <span className={classes.userName}>{data.user.name}</span>
        </div>
    );
};