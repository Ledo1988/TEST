import React from "react";
import {TextField} from "./TextField/TextField";
import {CardsSlider} from "./CardsSlider/CardsSlider";

interface Props {
    userName: string,
    postcards: string[]
}

export const Form: React.FC<Props> = (props) => {
    const {userName, postcards} = props;

    return (
        <div className="form">
            <TextField userName={userName}/>
            <CardsSlider postcards={postcards}/>
        </div>
    );
};