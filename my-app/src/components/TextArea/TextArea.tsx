import React, {useState} from "react";
import classes from './TextArea.module.css'
import {UserDataState} from "../Form/Form";

interface Props {
    usersData: UserDataState,
    setUsersData: (prevState: (prevState: UserDataState) =>  UserDataState ) => void;
}

export const TextArea: React.FC<Props> = (props) => {
    const {usersData, setUsersData} = props;
    const [amount, setAmount] = useState(0);
    const maxAmount = 375;

    const handleChange = (value: string) => {
        if (value.length > maxAmount) return false;
        setAmount(value.length);
        setUsersData(prevState => ({...prevState, text: value}));
    }

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>
                <span className="label-title">Напишите пожелание</span>
                <span className={amount === maxAmount ? `${classes.counter} ${classes.error}`: classes.counter}>{amount}/{maxAmount}</span>
            </p>
            <textarea className={classes.textarea}
                      placeholder="Введите текст поздравления"
                      value={usersData.text || ''}
                      onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
};