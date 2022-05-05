import React from 'react';
import styles from "./form.module.css";

const Form = () => {
    return (
        <div className={styles.formBlock}>
            <input type="text" placeholder={'Name'} className={styles.input}/>
            <input type="text" placeholder={'Number'}className={styles.input}/>
            <input type="submit" className={styles.orderButton} value={'ORDER'}/>
        </div>
    );
};

export default Form;
