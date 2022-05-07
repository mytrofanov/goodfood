import React from 'react';
import styles from "../../features/food/Cards.module.css";

const BuyCheapestButton = ({children, actionOnClick}) => {
    return (
        <button className={styles.buyCheapestButton} onClick={() => {
            actionOnClick()
        }}>
            {children}
        </button>
    );
};

export default BuyCheapestButton;
