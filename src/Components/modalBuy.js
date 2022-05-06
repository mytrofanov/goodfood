import {Modal} from "react-bootstrap";
import closeButton from './../img/close.svg'
import styles from './modalBuy.module.css'
import React from "react";
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";
import Form from "./form";


export function MyVerticallyCenteredModal(props) {
    const category = props.item === undefined ? 'Loading...' : props.item.category
    const name = props.item === undefined ? 'Loading...' : props.item.name
    const price = props.item === undefined ? 'Loading...' : props.item.price

    return (
        <Modal
            {...props}
            size="sm"
            className='Modal'
            centered
            // style={{borderRadius: '25px'}}
        >

                <img src={closeButton} alt="CloseButton" className={styles.closeButton}
                     onClick={props.onHide}/>
                <div className={styles.goodsTitleBlock}>
                    <GoodsTypeName goodsTypeName={category}/>
                    <GoodsName goodsName={name}/>
                    <div className={styles.centeredPrice}>
                        <PriceBlock price={price}/>
                    </div>
                    <Form
                        category={category}
                        foodName={name}
                        price={price}
                    />
                </div>

        </Modal>
    );
}



