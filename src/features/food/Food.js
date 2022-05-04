import React, {useState} from 'react';
import styles from './Food.module.css';
import {fetchFoodFromServer, selectFood} from "./foodSlice";
import {useDispatch} from "react-redux";

export function Food() {
    const dispatch = useDispatch();


    return (
        <div>
            <div className={styles.row}>
                <span className={styles.value}>food</span>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(fetchFoodFromServer())}
                >
                    Add Async
                </button>
            </div>


        </div>
    );
}
