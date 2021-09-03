import React from "react";
import classes from'./Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Поздравить с Днём рождения</h1>
            <button className={classes.btnClose}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2l16 16M2 18L18 2" stroke="#626261" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                </svg>
            </button>
        </header>
    );
};