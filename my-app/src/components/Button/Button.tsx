import React from "react";
import classes from './Button.module.css';

interface Props {
   text: string
}

export const Button: React.FC<Props> = (props) => {
    const {text} = props;

    return (
        <button type="button" className={classes.button}>
            {text}
        </button>
    );
};