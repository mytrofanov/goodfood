import React, {useState} from 'react';
import styles from "./form.module.css";

const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    return (
        <div className={styles.formBlock}>
            <input
                type="text" id={'name'}
                placeholder={'Name'}
                className={styles.input}/>
            value={name}
            onChange={e =>
            setName(e.target.value)}
            <input
                type="text"
                id={'number'}
                placeholder={'Number'}
                className={styles.input}
                value={number}
                onChange={e =>
                    setNumber(e.target.value)}
            />
            <input type="submit" className={styles.orderButton} value={'ORDER'}/>
        </div>
    );
};

export default Form;
