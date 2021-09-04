import React from "react";
import classes from './TextField.module.css'

interface Props {
    userName: string
}

export const TextField: React.FC<Props> = (props) => {
    const {userName} = props;

    return (
        <div className={classes.wrapper}>
            <span className="label-title">Кого</span>
            <span className={classes.userName}>{userName}</span>
        </div>
    );
};