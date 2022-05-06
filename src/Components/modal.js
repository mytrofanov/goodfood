import React from 'react';
import styles from './modal.module.css'

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? styles.modal.active : styles.modal} onClick={()=>{setActive(false)}}>
            <div className={active ? styles.modal_content.active : styles.modal_content} onClick={(event)=>{event.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
