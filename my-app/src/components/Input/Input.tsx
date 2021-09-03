import React, {useState} from "react";
import classes from './Input.module.css'

export const Input: React.FC = () => {
    const [value, setValue] = useState('');

    const handleChange = (newValue: string) => {
        setValue(newValue);
    }

    return (
        <label className={classes.label}>
            <span className="label-title">Кого</span>
            <input className={value !== '' ? `${classes.input} ${classes.inputFilled}`: classes.input}
                   type="text"
                   name="name"
                   value={value}
                   onChange={(e) => handleChange(e.target.value)}
            />
        </label>
    );
};