import React, {useState} from 'react';
import  "./form.css";

const Form = ({category, foodName, price, setActive}) => {
    const [nameInputError, setNameInputError] = useState(false)
    const [phoneInputError, setPhoneInputError] = useState(false)
    const [errorNameDescription, setErrorNameDescription] = useState('')
    const [errorPhoneDescription, setErrorPhoneDescription] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    let [inputNameCssClass, setInputNameCssClass] = useState('inputName')
    let [inputPhoneCssClass, setInputPhoneCssClass] = useState('inputName')

    const onFormSubmit = (event) => {
        inputNameHandle(name)
        inputPhoneHandle(phone)
        if (!nameInputError && !phoneInputError && name !== '' && phone !== '') {
            let tempArray = {
                'Food category': category,
                'Food name': foodName,
                'Food price': price,
                'Person name': name,
                'Person phone': phone
            }

            console.log(tempArray)
            setActive(false)
        }

        event.preventDefault();
    }

    const inputNameHandle = (text) => {
        if (text === '') {
            setNameInputError(true)
            setInputNameCssClass('inputName inputError')
            setErrorNameDescription('This field in required')
        } else if (/^[A-z ]+$/.test(text)) {
            setNameInputError(false)
            setInputNameCssClass('inputName active')
        } else {
            setNameInputError(true)
            setInputNameCssClass('inputName inputError')
            setErrorNameDescription('Only letters allowed')
        }
    }
    const inputPhoneHandle = (phone) => {
        if (phone === '') {
            setPhoneInputError(true)
            setInputPhoneCssClass('inputName inputError')
            setErrorPhoneDescription('This field in required')
        } else if (/^\d+$/.test(phone)) {
            if (phone.length !== 12) {
                setPhoneInputError(true)
                setInputPhoneCssClass('inputName inputError')
                setErrorPhoneDescription('Should contain 12 characters')
            } else {
                setPhoneInputError(false)
                setInputPhoneCssClass('inputName active')
                setErrorPhoneDescription('')
            }
        } else {
            setPhoneInputError(true)
            setInputPhoneCssClass('inputName inputError')
            setErrorPhoneDescription('Only numbers allowed')
        }
    }

    return (
        <div className={'formBlock'}>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="Name"></label>
                {nameInputError && <div className={'error'}>Error</div>}
                <input
                    key={'Name'}
                    type="text" id={'name'}
                    placeholder={'Name'}
                    className={inputNameCssClass}
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
                                setInputNameCssClass('inputName')
                            }
                        }}
                />
                {nameInputError && <div className={'errorMessage'}>
                    {errorNameDescription}</div>}

                <label htmlFor="Phone"></label>
                {phoneInputError && <div className={'error'}>Error</div>}
                <input
                    key={'Phone'}
                    type="text"
                    id={'phone'}
                    placeholder={'Phone'}
                    className={inputPhoneCssClass}
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
                            }
                        }}
                />
                {phoneInputError && <div className={'errorMessage'}>
                    {errorPhoneDescription}</div>}
                <input type="submit" className={'orderButton'} value={'ORDER'}/>
            </form>
        </div>
    );
};

export default Form;
