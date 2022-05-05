import React from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";

export function Cards() {


    return (
        <div className={styles.cardsPage}>
            <div className={styles.cardsBlock}>
                <SingleCard/>
            </div>


        </div>
    );
}
