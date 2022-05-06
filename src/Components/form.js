import React, {useState} from 'react';
import styles from "./form.module.css";

const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')
    const [errorDescription, setErrorDescription] = useState("This field in required")

    const inputNameHandle = (text)=>{
        if (/^[A-z ]+$/.test(text)){
            // setName(text)
            setError('')
            setErrorDescription('')
       } else {
            setError('inputName')
            setErrorDescription('Only letters allowed')
        }
    }


    return (
        <div className={styles.formBlock}>
            <form action="">
                <label htmlFor="Name"></label>
                {error === 'inputName' && <div  className={styles.error}>
                    Error</div> }
            <input
                required
                // pattern="/^[a-zA-Z]+$/"
                type="text" id={'name'}
                placeholder={'Name'}
                className={error==='inputName' ? styles.badInputName : styles.inputName}
                value={name}
                onChange={e => {
                    setName(e.target.value)
                    inputNameHandle(e.target.value)
                }
                    }
            />
                {error === 'inputName' && <div  className={styles.errorMessage}>
                    {errorDescription}</div> }

                <label htmlFor="Phone"></label>
            <input
                required
                type="text"
                id={'phone'}
                placeholder={'Phone'}
                className={styles.inputPhone}
                value={number}
                onChange={e =>
                    setNumber(e.target.value)}
            />
            <input type="submit" className={styles.orderButton} value={'ORDER'}/>
            </form>
        </div>
    );
};

export default Form;
