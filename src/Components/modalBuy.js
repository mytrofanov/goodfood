import {Button, Modal} from "react-bootstrap";
import closeButton from './../img/close.svg'
import styles from './modalBuy.module.css'
import React from "react";
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";

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
                    <GoodsTypeName goodsTypeName={'DRINKS'}/>
                    <GoodsName goodsName={"Orange Juice"}/>
                    <div className={styles.centeredPrice}>
                        <PriceBlock price={4.99}/>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    );
}



