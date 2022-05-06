import React, {useState} from 'react';
import styles from "./form.module.css";

const Form = ({category, foodName, price}) => {
    const [nameInputError, setNameInputError] = useState(false)
    const [phoneInputError, setPhoneInputError] = useState(false)
    const [errorNameDescription, setErrorNameDescription] = useState('')
    const [errorPhoneDescription, setErrorPhoneDescription] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [dataFromForm, setDataFromForm] = useState([])


    const onFormSubmit = (event) => {
        inputNameHandle(name)
        inputPhoneHandle(phone)
        if (!nameInputError && !phoneInputError && name !=='' && phone !== '' ) {
            setDataFromForm(prevState => prevState.push(
                {
                    'Food category': category,
                    'Food name': foodName,
                    'Food price': price,
                    'Person name': name,
                    'Person phone': phone
                })
            )
            console.log(dataFromForm)
        }
        event.preventDefault();
    }

    const inputNameHandle = (text) => {
        if (text === '') {
            setNameInputError(true)
            setErrorNameDescription('This field in required')
        } else if (/^[A-z ]+$/.test(text)) {
            setNameInputError(false)
            setErrorNameDescription('')
        } else {
            setNameInputError(true)
            setErrorNameDescription('Only letters allowed')
        }
    }
    const inputPhoneHandle = (phone) => {
        if (phone === '') {
            setPhoneInputError(true)
            setErrorPhoneDescription('This field in required')
        } else if (/^\d+$/.test(phone)) {
            if (phone.length !== 12) {
                setPhoneInputError(true)
                setErrorPhoneDescription('Should contain 12 characters')
            } else {
                setPhoneInputError(false)
                setErrorPhoneDescription('')
            }
        } else {
            setPhoneInputError(true)
            setErrorPhoneDescription('Only numbers allowed')
        }
    }


    return (
        <div className={styles.formBlock}>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="Name"></label>
                {nameInputError && <div className={styles.error}>
                    Error</div>}
                <input
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
                                setErrorNameDescription('')
                            }
                        }}
                />
                {nameInputError && <div className={styles.errorMessage}>
                    {errorNameDescription}</div>}

                <label htmlFor="Phone"></label>
                {phoneInputError && <div className={styles.error}>
                    Error</div>}
                <input
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
                                setErrorNameDescription('')
                            }
                        }}
                />
                {phoneInputError && <div className={styles.errorMessage}>
                    {errorPhoneDescription}</div>}
                <input type="submit" className={styles.orderButton} value={'ORDER'}/>
            </form>
        </div>
    );
};

export default Form;
