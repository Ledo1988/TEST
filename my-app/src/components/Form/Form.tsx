import React from "react";
import {TextField} from "../TextField/TextField";
import {CardsSlider} from "../CardsSlider/CardsSlider";
import {TextArea} from "../TextArea/TextArea";
import classes from './Form.module.css'

export interface UserDataState {
    card?: string,
    text?: string
}

interface Props {
    usersData: UserDataState,
    setUsersData: (prevState: (prevState: UserDataState) =>  UserDataState ) => void;
}

export const Form: React.FC<Props> = (props) => {
    const {usersData, setUsersData} = props;

    return (
        <div className={classes.form}>
            <TextField/>
            <CardsSlider usersData={usersData}
                         setUsersData={setUsersData}/>
            <TextArea usersData={usersData}
                      setUsersData={setUsersData}/>
        </div>
    );
};