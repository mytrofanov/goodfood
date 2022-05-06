import {Modal} from "react-bootstrap";
import closeButton from './../img/close.svg'
import styles from './modalBuy.module.css'
import React, {useState} from "react";
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";
import Form from "./form";


export function MyVerticallyCenteredModal(props) {


    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <img src={closeButton} alt="CloseButton" className={styles.closeButton}
                     onClick={props.onHide}/>
                <div className={styles.goodsTitleBlock}>
                    <GoodsTypeName goodsTypeName={props.item.category}/>
                    <GoodsName goodsName={props.item.name}/>
                    <div className={styles.centeredPrice}>
                        <PriceBlock price={props.item.price}/>
                    </div>
                    <Form
                        category={props.item.category}
                        foodName={props.item.name}
                        price={props.item.price}
                    />
                </div>
            </Modal.Body>
        </Modal>
    );
}



