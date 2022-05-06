import React, {useEffect, useState} from 'react';
import styles from "./form.module.css";

const Form = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [nameInputError, setNameInputError] = useState(false)
    const [phoneInputError, setPhoneInputError] = useState(false)
    const [errorDescription, setErrorDescription] = useState('')

    const inputNameHandle = (text) => {
        if (text === '') {
            setNameInputError(true)
            setErrorDescription('This field in required')
        } else if (/^[A-z ]+$/.test(text)) {
            setNameInputError(false)
            setErrorDescription('')
        } else {
            setNameInputError(true)
            setErrorDescription('Only letters allowed')
        }
    }
    const inputPhoneHandle = (phone) => {
        if (phone === '') {
            setPhoneInputError(true)
            setErrorDescription('This field in required')
        } else if (/^\d+$/.test(phone)) {
            if (phone.length !== 12) {
                setPhoneInputError(true)
                setErrorDescription('Should contain 12 characters')
            } else {
                setPhoneInputError(false)
                setErrorDescription('')
            }
        }  else {
            setPhoneInputError(true)
            setErrorDescription('Only numbers allowed')
        }
    }


    return (
        <div className={styles.formBlock}>
            <form action="">
                <label htmlFor="Name"></label>
                {nameInputError && <div className={styles.error}>
                    Error</div>}
                <input
                    required
                    key={'Name'}
                    type="text" id={'name'}
                    placeholder={'Name'}
                    className={nameInputError ? styles.badInputName : styles.inputName}
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    onBlur={e => {
                        inputNameHandle(e.target.value)
                    }}
                    onFocus={
                        () => {
                            if (nameInputError) {
                                setName('')
                                setNameInputError(false)
                                setErrorDescription('')
                            }
                        }}
                />
                {nameInputError && <div className={styles.errorMessage}>
                    {errorDescription}</div>}

                <label htmlFor="Phone"></label>
                {phoneInputError && <div className={styles.error}>
                    Error</div>}
                <input
                    required
                    key={'Phone'}
                    type="text"
                    id={'phone'}
                    placeholder={'Phone'}
                    className={phoneInputError ? styles.badInputName : styles.inputName}
                    value={phone}
                    onChange={e =>
                        setPhone(e.target.value)}
                    onBlur={e => {
                        inputPhoneHandle(e.target.value)
                    }}
                    onFocus={
                        () => {
                            if (phoneInputError) {
                                setPhone('')
                                setPhoneInputError(false)
                                setErrorDescription('')
                            }
                        }}
                />
                {phoneInputError && <div className={styles.errorMessage}>
                    {errorDescription}</div>}
                <input type="submit" className={styles.orderButton} value={'ORDER'}/>
            </form>
        </div>
    );
};

export default Form;
